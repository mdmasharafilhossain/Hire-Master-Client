import { NavLink } from "react-router-dom";


const ProfileNav = () => {
    return (
        <div className="container mx-auto">
            
            <nav className="flex justify-between items-center py-5 px-8">
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/profile" style={{ fontSize: 20, fontWeight: 600 }}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF3811] underline" : ""
                            }
                        >
                            Profile
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/profileForm" style={{ fontSize: 20, fontWeight: 600 }}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF3811] underline " : ""
                            }
                        >
                            Set Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* <p className="border-slate-400 border-[0.5px] mt-1 mb-4"></p> */}
        </div>
    );
};

export default ProfileNav;
