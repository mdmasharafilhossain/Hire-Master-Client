import { useContext, useState } from "react";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const PremiumUser = () => {
    const [page,setPage]= useState(0);
    const axiosSecure = UseAxiosSecure();
    const AxiosPublic = UseAxiosPublic();
    const {loading} = useContext(AuthContext);
    const { refetch, data: {result : PremiumUsers = [], UsersCount = 0} = {} } = useQuery({
        queryKey: ['PremiumUsers',page],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/pagination?page=${page}`);
            console.log(res.data)
            return res.data;

        }

    })
    const totalPages = Math.ceil(UsersCount / 4);
    const pagesToShow = 5; 
    const pages = Array.from({ length: totalPages }, (_, i) => i);

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/, '$2 $1 $3 $4:$5');
    };
    const handleDelete = (user) =>{
        
        Swal.fire({
            title: `Are you sure to delete ${user?.name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete ${user?.name}`
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await AxiosPublic.delete(`/payments/PremiumUser/${user._id}`);
                console.log(res.data);
            if(res.data.deletedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Delete SuccessFully User ${user?.name}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            }
          });
    }
    
    return (
        <div>
          <div>
            <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">All <span className='text-[#FF3811]'>Premium User List</span></h2>
               
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className='text-xl text-orange-600'>Name</th>
                            <th className='text-xl text-orange-600'>Email</th>
                            <th className='text-xl text-orange-600'>Payed</th>
                            <th className='text-xl text-orange-600'>Transaction ID</th>
                            <th className='text-xl text-orange-600'>Date</th>
                            <th className='text-xl text-orange-600'>Role</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            PremiumUsers.map((user,index) => <tr key={user._id}  className={index % 2 === 0 ? 'bg-gray-300' : 'bg-orange-200'}>
                                
                                <td>
                                   <button> <h1 className='font-bold'>{user.name}</h1></button>
                                    <br />
                                    
                                </td>
                                <td className='font-bold'>{user.email}</td>
                                {/* <th>
                                   {
                                    user.role === 'admin' ? <button onClick={() => handleRemoveAdmin(user)} className='btn bg-orange-600 btn-xs text-white font-bold'> Remove Admin</button> : 
                                    <button 
                                    onClick={()=> handleMakeAdmin(user) }
                                    className="btn btn-ghost btn-xs font-bold">Make Admin</button>
                                   }
                                </th> */}
                                <td>
                                   <button> <h1 className='font-bold'>${user.price}</h1></button>
                                    <br />
                                    
                                </td>
                                <td>
                                   <button> <h1 className='font-bold'>{user.transaction_ID}</h1></button>
                                    <br />
                                    
                                </td>
                                <td>
                                   <button> <h1 className='font-bold'>{formatDate(user.date)}</h1></button>
                                    <br />
                                    
                                </td>
                                <td>
                              
                                    <button onClick={()=>handleDelete(user)} className='btn btn-sm bg-red-600 text-xs text-white font-bold'>Remove User</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                 
                </table>
            </div>
            <div className="text-center  mt-10 mb-10">
                <button onClick={handlePreviousPage} disabled={page === 0} className="btn mr-3 btn-sm bg-orange-600 text-white">{`< Previous`}</button>
                {pages.map((pageNumber, index) => {
                    if (index === 0 || index === totalPages - 1 || (index >= page - Math.floor(pagesToShow / 2) && index <= page + Math.floor(pagesToShow / 2))) {
                        return (
                            <button key={index} onClick={() => setPage(pageNumber)} className={`btn btn-sm border ${page === pageNumber ? "bg-slate-300 text-black" : "bg-orange-600 text-white"}`}>{pageNumber + 1}</button>
                        );
                    } else if (index === 1 && page > Math.floor(pagesToShow / 2) + 1) {
                        return <span key={index}>.......</span>;
                    } else if (index === totalPages - 2 && page < totalPages - Math.floor(pagesToShow / 2) - 2) {
                        return <span key={index}>......</span>;
                    }
                    return null;
                })}
                <button  onClick={handleNextPage} disabled={page === totalPages - 1} className="btn ml-3 btn-sm bg-orange-600 text-white">{`Next >`}</button>
            </div>
        </div> 
        </div>
    );
};

export default PremiumUser;
