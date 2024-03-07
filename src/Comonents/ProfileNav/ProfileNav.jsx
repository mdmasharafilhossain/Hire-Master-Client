import { NavLink } from "react-router-dom";
import useProfile from "../Hooks/useProfile/useProfile";





const ProfileNav = ({ profile, setProfile }) => {

  const [profileData ] = useProfile()
  console.log()


  return (
    <div>
      {
        profileData.map(data =><div key={data._id}  className="container mx-auto">
        <nav className="flex justify-between items-center py-5 px-8">
          <ul className="flex gap-5">
            <li>
              <NavLink
                to={`/profile`}
                style={{ fontSize: 20, fontWeight: 600 }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${setProfile}`}
                style={{ fontSize: 20, fontWeight: 600 }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline "
                    : ""
                }
              >
                Set Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div> )
      }
    </div>
  );
};

export default ProfileNav;


