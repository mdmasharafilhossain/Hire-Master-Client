
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Comonents/AuthProvider/AuthProvider';
import UseAxiosSecure from '../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure';

const AllUsers = () => {
    const [page,setPage]= useState(0);
    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const { refetch, data: {result : users = [], UsersCount = 0} = {} } = useQuery({
        queryKey: ['users',page],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/pagination?page=${page}`);
            console.log(res.data)
            return res.data;

        }

    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
           console.log(res.data);
           if(res.data.modifiedCount > 0){
               refetch();
               Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: `${user.name} is Admin Now`,
                   showConfirmButton: false,
                   timer: 1500
                 });
           }
        })
       }
       const totalPages = Math.ceil(UsersCount / 5);
    const pages = [...new Array(totalPages).fill(0)]
    return (
        <div>
            <div className="flex justify-evenly my-6">
                <h2 className="text-4xl font-bold">All User</h2>
               
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    <h1>{user.name}</h1>
                                    <br />
                                    
                                </td>
                                <td>{user.email}</td>
                                <th>
                                   {
                                    user.role === 'admin' ? <button className='btn bg-orange-500 text-white'>Admin</button> : 
                                    <button 
                                    onClick={()=> handleMakeAdmin(user) }
                                    className="btn btn-ghost btn-xs">Make Admin</button>
                                   }
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                 
                </table>
            </div>
            <div className="text-center mt-10 mb-10 ">
           {
            pages.map((item,index)=><button onClick={()=> setPage(index)}
            className={`btn border  ${page === index ? "bg-orange-400 text-black":"bg-orange-600 text-white"} `}>{index+1}</button>)
           }
           
           </div>
        </div>
    );
};

export default AllUsers;