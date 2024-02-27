import { Link } from "react-router-dom";

const AllCourse = ({course}) => {
    const {courseId,courseName,instructor,duration,topics,level,price,photoUrl,description,shortDescription,dailyBreakdown}=course
    console.log(course)
    return (
        <div>
           <div className="max-w-sm h-[460px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-40 w-96" src={photoUrl} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{courseName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{shortDescription}</p>
     <Link to={`/courseDetails/${courseId}`}>
     <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Explore
</span> 
            {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
        </button>
     </Link>
    </div>
</div>
<button >

</button>
        </div>
    );
};

export default AllCourse;