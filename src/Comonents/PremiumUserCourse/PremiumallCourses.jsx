import useCourses from "../Hooks/Courses/UseCourses";
import Navbar2 from "../Navbar/Navbar2";
import CourseCard from "./CourseCard";

const PremiumallCourses = () => {
    const [courses,loading]=useCourses([])
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='mx-auto my-6  max-w-7xl '>
        <div className='text-center space-y-1'>
          <p className='font-bold tracking-tighter text-[#FF3811]'>
          Explore, Educate, Evolve
          </p>
          <h2 className='text-3xl md:text-5xl font-bold '>
          Journey of Knowledge: Explore, Learn, Grow
          </h2>
        </div>
        </div>


        <div className="grid grid-cols-4 gap-5 p-2 ">
            {
                courses.map(course=><CourseCard key={course.courseId} course={course}></CourseCard>)
            }
         
        </div>


        </div>
    );
};

export default PremiumallCourses;