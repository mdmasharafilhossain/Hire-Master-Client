import { useContext } from "react";
import useNotifications from "../../Hooks/Notifications/getNotifications";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ApplicantsRow from "./ApplicantsRow";
import Navbar2 from "../../Navbar/Navbar2";

const ApplicantsList = () => {
  const { user } = useContext(AuthContext);
  const api = `/notifications/${user?.email}`;
  const key = "applications";

  const [notifications] = useNotifications(api, key);

  return (
    <>
    <Navbar2/>
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>View Profile</th>
            </tr>
          </thead>
          <tbody>
            {/* ----------row-----------------  */}
            {notifications.map((item, index) => (
              <ApplicantsRow key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApplicantsList;
