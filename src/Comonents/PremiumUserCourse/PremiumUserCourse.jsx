import { useEffect, useState } from "react";


const PremiumUserCourse = () => {

const [course,setCourse]=useState([])
useEffect(()=>{
    fetch("../../../public/course.json")
    .then(res=>res.json())
    .then(data=>setCourse(data))
},[])

console.log(course)
    return (
        <div>
            
        </div>
    );
};

export default PremiumUserCourse;