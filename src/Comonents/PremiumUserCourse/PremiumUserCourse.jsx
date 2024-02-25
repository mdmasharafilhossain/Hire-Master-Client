
import AllCourse from "./AllCourse";
import useCourses from "../Hooks/Courses/UseCourses";
import { Link } from "react-router-dom";


const PremiumUserCourse = () => {
const [courses,loading]=useCourses([])
console.log(courses)

    return (
        <div>
<div className="grid grid-cols-3 gap-5 ">
            {
                courses.slice(1,4).map(course=><AllCourse key={course.courseId} course={course}></AllCourse>)
            }
         
        </div>
        <Link to="/premiumallcourse">
        <button className="btn btn-outline  items-center space-x-1 font-semibold text-lg bg-[#FF3811] text-white rounded-lg w-40  mx-auto flex"> See All Courses </button>
        
        </Link>
        </div>
        
    );
};

export default PremiumUserCourse;