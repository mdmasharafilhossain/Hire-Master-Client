import { FaChartLine, FaCommentsDollar, FaBook, FaAws } from 'react-icons/fa';
import { RiCustomerService2Line } from "react-icons/ri";
import { SiAffinitydesigner } from "react-icons/si";
import { BsReceipt } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";


const ExploreByCategory = () => {
    return (
        <div className="max-w-7xl mx-6 md:mx-auto  ">
            <h2 className='text-center text-5xl font-bold mt-8 mb-8'> Explore By Category</h2>
            <div className="grid grid-cols-2 mt-20  md:grid-cols-4 gap-8 ">

                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><FaHandshake></FaHandshake></p>
                    <h3 className='text-lg font-medium mb-2'>Sales And Communication</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><RiCustomerService2Line></RiCustomerService2Line> </p>
                    <h3 className='text-lg font-medium mb-2'>Customer Service</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><FaBook></FaBook></p>
                    <h3 className='text-lg font-medium mb-2'>Teaching And Education</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><BsReceipt></BsReceipt></p>
                    <h3 className='text-lg font-medium mb-2'>Project Management</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><SiAffinitydesigner></SiAffinitydesigner></p>
                    <h3 className='text-lg font-medium mb-2'>Design And Creative</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><FaChartLine></FaChartLine></p>
                    <h3 className='text-lg font-medium mb-2'>Business development</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><FaCommentsDollar></FaCommentsDollar></p>
                    <h3 className='text-lg font-medium mb-2'>Marketing</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>
                <div className="bg-slate-50  py-4 px-3  rounded-md hover:shadow-lg border-2 border-orange-200 hover:border-2 hover:border-orange-500">
                    <p className='text-5xl text-[#FF3811] mb-2'><FaAws></FaAws></p>
                    <h3 className='text-lg font-medium mb-2'>AWS Solutions</h3>
                    <p className='font-medium text-[#FF3811]'>123 Vacancy</p>
                </div>



            </div>
        </div>
    );
};

export default ExploreByCategory;