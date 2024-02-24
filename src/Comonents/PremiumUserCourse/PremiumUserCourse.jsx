import { useEffect, useState } from "react";
import AllCourse from "./AllCourse";


const PremiumUserCourse = () => {

const [courses,setCourses]=useState([])
useEffect(()=>{
    fetch("../../../public/course.json")
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])

console.log(courses)
    return (
        <div>
<div className="grid grid-cols-3 gap-5 ">
            {
                courses.slice(1).map(course=><AllCourse key={course.id} course={course}></AllCourse>)
            }
         
        </div>
         <button className="btn btn-outline  items-center space-x-1 font-semibold text-lg bg-[#FF3811] text-white rounded-lg w-40  mx-auto flex"> See All Courses </button>
        </div>
        
    );
};

export default PremiumUserCourse;