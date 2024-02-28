import { useContext } from "react";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const AllJobReport = () => {

    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data:reports=[]}=useQuery({
        queryKey:["reports"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/userreport")
            return res.data
    
        }
    })

console.log(reports)


    return (
        <div>
           <div>
            <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">All <span className='text-[#FF3811]'>Job Report</span></h2>
               
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl text-orange-600'>User Name</th>
                            <th className='text-xl text-orange-600'>User Email</th>
                            <th className='text-xl text-orange-600'>Hiring Manager Email</th>
                            <th className='text-xl text-orange-600'>Job Title</th>
                            <th className='text-xl text-orange-600'>View</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reports.map((report,index) =>  <tr key={report._id}  className={index % 2 === 0 ? 'bg-slate-200' : 'bg-orange-200'}>
                            
                                <td className='font-bold'> <h1>{report?.user_name}</h1></td>
                                <td className='font-bold'> <h1>{report?.user_email}</h1></td>
                                <td className='font-bold'> <h1>{report?.hiring_manager_email}</h1></td>
                                <td className='font-bold'> <h1>{report?.job_title}</h1></td>

                          {/* Open the modal using document.getElementById('ID').showModal() method */}


                                <td > <button className="btn btn-sm text-[#FF3811]" onClick={()=>document.getElementById('my_modal_1').showModal()}>View Details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Title: {report.job_title}</h3>
    <p className="py-4 font-medium">Hiring Manager Email: {report?.hiring_manager_email} </p>
    <p className="py-4"><span className="font-semibold text-red-500">Report:</span> {report?. user_comments} </p>
    <p className="py-4"><span className="font-medium"> User Name:</span> {report?.user_name} </p>
    <p className="py-4"><span className="font-medium">User Email:</span>  {report?.user_email} </p>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</td>
                                 </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                 
                </table>
            </div>
        </div>
        </div>
    );
};

export default AllJobReport;