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
            {
                courses.map(course=><AllCourse key={course.id} course={course}></AllCourse>)
            }
        </div>
    );
};

export default PremiumUserCourse;