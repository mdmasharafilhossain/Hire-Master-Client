import { useLoaderData, useParams } from "react-router-dom";
import useCourses from "../Hooks/Courses/UseCourses";

const SingleCourse = () => {

    const { id } = useParams();
 const [courses]=useCourses()
 console.log(courses)
const course=courses.find(courseData=>courseData.courseId==id)
console.log(course)

    return (
        <div>
      
        </div>
    );
};

export default SingleCourse;