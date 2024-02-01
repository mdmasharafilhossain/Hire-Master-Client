
import { FaFacebook, FaGithub, FaPenToSquare, } from "react-icons/fa6";
import { FaExternalLinkAlt, FaBriefcase, FaLinkedin } from "react-icons/fa";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import Navbar2 from "../../Comonents/Navbar/Navbar2";


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <>
        <Navbar2></Navbar2>
            <div className="md:flex gap-10  max-w-xl mx-6   md:max-w-5xl md:mx-auto ">
                <div className="flex md:flex-col ml-10 mt-10 mb-6  gap-2">
                    <Link to="/">
                        <div className="p-2 hover:bg-slate-200 rounded-xl ">
                            <p className=" text-2xl ml-1 "> <IoHome></IoHome></p>
                            <p>Home</p>
                        </div>
                    </Link>

                    <Link to="/appliedjobs">
                        <div className="p-2 hover:bg-slate-200 rounded-xl ">
                            <p className=" text-2xl ml-1 "> <FaBriefcase></FaBriefcase></p>
                            <p>Applied Jobs</p>
                        </div>
                    </Link>
                    <Link to="/jobpost">
                        <div className="p-2 hover:bg-slate-200 rounded-xl ">
                            <p className=" text-2xl ml-1 "> <MdPostAdd></MdPostAdd></p>
                            <p className="">Post job</p>
                        </div>
                    </Link>


                </div>
                {/* Profile section */}

                <div className="bg-white  border-[0.5px] border-slate-300 p-6">
                    <div className="  bg-white p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50">
                        <Link to="/profileForm">
                            <h3 className="flex justify-end text-xl mb-2"><FaPenToSquare></FaPenToSquare></h3>
                        </Link>

                        <div className="md:flex  gap-8">
                            <div className=" avatar">
                                <div className="w-48 rounded-md border-8 border-white ">
                                    <img src={user?.photoURL} />

                                </div>

                            </div>
                            <div className="">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold">MD Mashrafil Hossain Mahi</h2>
                                    <h3 className="text-slate-600 font-semibold">Green Univeristy</h3>
                                </div>
                                <div className="md:flex justify-between mb-2">
                                    <h3 className="text-slate-600 font-semibold">Frontend developer</h3>
                                    <h3 className="text-slate-600 font-semibold">Dhaka, Bangladesh</h3>
                                </div>
                                <h3 className=" text-slate-600 text-lg font-normal">I am Mshrafil Hossain Mahi.I am a MERN-Stack developer but my main focus is on Frontend.</h3>
                                <div className="flex gap-4 mt-4">
                                    <Link to="https://www.linkedin.com/in/mdmashrafilhossain22">
                                        <h3 className=" text-xl "><FaLinkedin></FaLinkedin></h3>
                                    </Link>
                                    <Link to="https://www.facebook.com/mdmashrafil.hossain.hima.2212">
                                        <h3 className=" text-xl "><FaFacebook></FaFacebook></h3>
                                    </Link>
                                    <Link to="https://github.com/mdmasharafilhossain">
                                        <h3 className=" text-xl "><FaGithub></FaGithub></h3>
                                    </Link>


                                </div>
                            </div>
                            <h3 className="w-full text-slate-600 text-lg font-normal">I am Mshrafil Hossain Mahi.I am a MERN-Stack developer but my main focus is on Frontend. I can implement jwt for secure backend </h3>
                              <div className="flex gap-4 mt-4">
                              <Link to="https://www.linkedin.com/in/mdmashrafilhossain22">
                                <h3 className=" text-xl "><FaLinkedin></FaLinkedin></h3>
                              </Link>
                              <Link to="https://www.facebook.com/mdmashrafil.hossain.hima.2212">
                                 <h3 className=" text-xl "><FaFacebook></FaFacebook></h3>
                              </Link>
                              <Link to="https://github.com/mdmasharafilhossain">
                                 <h3 className=" text-xl "><FaGithub></FaGithub></h3>
                              </Link>
                             
                              
                              </div>
                        </div>
                    </div>
                    {/*Skills section  */}
                    <div className="mt-4 max-w-xl mx-6 border-[0.5px] border-slate-300 hover:bg-blue-50  md:max-w-5xl md:mx-auto  bg-white p-8 rounded-lg">
                        <div className="flex justify-end gap-4">
                            <p className="text-2xl mb-2"><RiAddBoxFill></RiAddBoxFill></p>
                            <p className="text-xl mb-2"><FaPenToSquare></FaPenToSquare></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">Skills </h3>
                            <p className="text-2xl"><BsTools></BsTools></p>
                        </div>
                        <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Tailwind</h3>
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Javascript</h3>
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">React</h3>
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Mongodb</h3>
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Node Js</h3>
                            <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Express Js</h3>

                </div>
                {/* Education section */}
                <div className="mt-4  border-[0.5px] border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
                    <div className="flex justify-end gap-4">
                        <p className="text-2xl mb-2"><RiAddBoxFill></RiAddBoxFill></p>
                        <p className="text-xl mb-2"><FaPenToSquare></FaPenToSquare></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Education</h3>
                        <p className="text-2xl"><PiBookBookmarkFill></PiBookBookmarkFill></p>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-slate-600 font-semibold">Green Univeristy</h3>
                        <h3 className="text-slate-600 font-semibold">Bachelor, CSE</h3>
                        <h3 className="text-slate-600 font-semibold">Jan 2020 - Jan 2024 </h3>
                    </div>


                </div>
                {/*Project section */}
                <div className="mt-4 container  border-[0.5px] border-slate-300 hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
                    <div className="flex justify-end gap-4">
                        <p className="text-2xl mb-2"><RiAddBoxFill></RiAddBoxFill></p>
                        <p className="text-xl mb-2"><FaPenToSquare></FaPenToSquare></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Projects</h3>
                        <p className="text-2xl"><AiFillProject></AiFillProject></p>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-slate-600 font-semibold">Digital Library</h3>
                        <h3 className="text-slate-600 font-semibold mb-2">Nov 2023 - Dec 2023</h3>
                        <h3 className="text-slate-600 font-semibold mb-2">This is a online based library.</h3>
                        <h3 className="text-slate-600 font-semibold mb-2">
                            <span className="text-xl font-semibold text-black">Technologies</span>:
                            HTML, Css, Javascript, React, Node js, Express js, Mongodb
                        </h3>


                        <p className="text-xl "><FaExternalLinkAlt></FaExternalLinkAlt></p>
                    </div>
                </div>
                {/*Skills section  */}
                <div className="mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg  bg-white p-8 rounded-lg">
                    <div className="flex justify-end gap-4">
                        <p className="text-2xl mb-2"><RiAddBoxFill></RiAddBoxFill></p>
                        <p className="text-xl mb-2"><FaPenToSquare></FaPenToSquare></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Skills </h3>
                        <p className="text-2xl"><BsTools></BsTools></p>
                    </div>
                    <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Tailwind</h3>
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Javascript</h3>
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">React</h3>
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Mongodb</h3>
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Node Js</h3>
                        <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">Express Js</h3>

                    </div>


                </div>
                
                {/*work experience section  */}
                <div className="mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 bg-white p-8 rounded-lg">
                    <div className="flex justify-end gap-4">
                        <p className="text-2xl mb-2"><RiAddBoxFill></RiAddBoxFill></p>
                        <p className="text-xl mb-2"><FaPenToSquare></FaPenToSquare></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Experience</h3>
                        <p className="text-2xl"><FaBriefcase></FaBriefcase></p>
                    </div>
                    <div className="ml-4 mb-10">
                        <h3 className="text-slate-600 font-semibold">Junior Web Developer</h3>
                        <h3 className="text-slate-600 font-semibold">Full-Time</h3>
                        <h3 className="text-slate-600 font-semibold">Next venture capital Ltd.</h3>
                        <h3 className="text-slate-600 font-semibold">Dhaka, Bangladesh</h3>
                        <h3 className="text-slate-600 font-semibold">Jan 2020 - Jan 2022</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
};

export default Profile;