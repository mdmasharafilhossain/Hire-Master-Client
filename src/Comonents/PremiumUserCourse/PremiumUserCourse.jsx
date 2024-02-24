import { useEffect, useState } from "react";


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
                courses.map(course=>)
            }
        </div>
    );
};

export default PremiumUserCourse;