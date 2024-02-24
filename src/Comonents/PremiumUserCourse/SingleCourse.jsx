import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/UseFetchData/useFetchData";

const SingleCourse = () => {

    const { id } = useParams();
const { data: job, loading, refetch } = useFetchData(
    `/public/course.json/${id}`, 
    "job"
);
console.log(job);


    return (
        <div>
           <h1>hello this is me single course</h1> 
        </div>
    );
};

export default SingleCourse;