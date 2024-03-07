import { Link } from "react-router-dom";


const ExploreByCategoryCard = ({ job }) => {

    const { id, job_title, image } = job || {}

    return (
        <Link to={`/jobByCategory/${id}`}>
            <div className="border-[1px]   hover:border-[1px] hover:shadow-lg hover:border-slate-200 card card-compact  ">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-medium">{job_title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ExploreByCategoryCard;