import {  useParams } from "react-router-dom";
import useCourses from "../Hooks/Courses/UseCourses";
import CourseVideo from "./CourseVideo";

const SingleCourse = () => {

    const { id } = useParams();
 const [courses]=useCourses()
 console.log(courses)
const course=courses.find(courseData=>courseData.courseId==id)
console.log(course)
// const {courseId,courseName,instructor,duration,topics,level,price,photoUrl,description,shortDescription,dailyBreakdown}=course
console.log(course?.photoUrl)
    return (
        <div>
<div>
<div className="hero h-96" style={{backgroundImage: `url(${course?.photoUrl})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className=" text-center text-neutral-content">
    <div >
      <h1 className="mb-5 text-5xl font-bold">{course?.courseName}</h1>
      <p className="mb-5">{course?.shortDescription}</p>
    </div>
  </div>
</div>
</div>
<div className="h-40 w-40">
    <CourseVideo></CourseVideo>
</div>
        </div>
    );
};

export default SingleCourse;