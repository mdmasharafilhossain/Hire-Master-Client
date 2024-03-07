import useCourses from "../../Comonents/Hooks/Courses/UseCourses";
import AllCourseDashboard from "./AllCourseDashboard";


const AllPremiumCourses = () => {
    const [courses,refetch]=useCourses()
console.log(courses)
    return (
        <div>
           <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">All <span className='text-[#FF3811]'>Premium Courses</span></h2>
            </div>
            <div className="space-y-6">
    {
        courses.map(course=><AllCourseDashboard course={course} key={course._id} refetch={refetch} ></AllCourseDashboard>)
    }
    </div>
        </div>
    );
};

export default AllPremiumCourses;