
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
       const totalPages = Math.ceil(UsersCount / 4);
    const pages = [...new Array(totalPages).fill(0)]
    return (
        <div>
            <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">All Job Seeker List</h2>
               
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl text-orange-600'>Image</th>
                            <th className='text-xl text-orange-600'>Name</th>
                            <th className='text-xl text-orange-600'>Email</th>
                            <th className='text-xl text-orange-600'>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,index) => <tr key={user._id}  className={index % 2 === 0 ? 'bg-slate-200' : 'bg-orange-200'}>
                                
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
                                    <h1 className='font-bold'>{user.name}</h1>
                                    <br />
                                    
                                </td>
                                <td className='font-bold'>{user.email}</td>
                                <th>
                                   {
                                    user.role === 'admin' ? <button className='btn bg-orange-600 text-white font-bold'>Admin</button> : 
                                    <button 
                                    onClick={()=> handleMakeAdmin(user) }
                                    className="btn btn-ghost btn-xs font-bold">Make Admin</button>
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
            className={`btn border  ${page === index ? "bg-slate-300 text-black":"bg-orange-600 text-white"} `}>{index+1}</button>)
           }
           
           </div>
        </div>
    );
};

export default AllUsers;