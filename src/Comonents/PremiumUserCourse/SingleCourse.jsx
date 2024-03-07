import { useParams } from "react-router-dom";
import useCourses from "../Hooks/Courses/UseCourses";
import CourseVideo from "./CourseVideo";
import Navbar2 from "../Navbar/Navbar2";

const SingleCourse = () => {

  const { id } = useParams();

  const [courses] = useCourses()

  const course = courses.find(courseData => courseData._id == id)

  return (
    <div>
      <Navbar2></Navbar2>
      <div>
        <div className="hero h-96" style={{ backgroundImage: `url(${course?.photoUrl})` }}>
          <div className="hero-overlay bg-opacity-90"></div>
          <div className=" text-center text-neutral-content">
            <div >
              <h1 className="mb-5 text-5xl font-bold">{course?.courseName}</h1>
              <p className="mb-5">{course?.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="border-[0.5px] m-6 border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
            <h1 className="text-start font-serif font-bold text-2xl"> Description</h1>
            <p>{course?.description}</p>
          </div>
          <div>
            <div className="border-[0.5px] m-6 border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
              <h1 className="text-start font-serif font-bold text-2xl"> What You Will Learn?</h1>
              <div className="mt-5">
                {course?.topics.map((topic, index) => <li className="mt-5" key={index}>{topic}</li>)}
              </div>
            </div>
          </div>
          <div>
            <div className="border-[0.5px] m-6 border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
              <h1 className="text-start font-serif font-bold text-2xl">Course Content</h1>
              {course?.dailyBreakdown.map((routine, index) => <li className="mt-5" key={index}> {routine}</li>)}
            </div>
          </div>
        </div>
        <div className="sticky top-20  pr-10">
          <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <CourseVideo></CourseVideo>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course?.courseName}</h4>
                <h6 className="text-base mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">Instructor: {course?.instructor}</h6>
                <h6 className="text-base mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">Level: {course?.level}</h6>
                <h6 className="text-base mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">Duration: {course?.duration}</h6>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleCourse;