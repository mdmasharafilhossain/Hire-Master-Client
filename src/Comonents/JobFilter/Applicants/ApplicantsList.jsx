import { useContext } from "react";
import useNotifications from "../../Hooks/Notifications/getNotifications";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ApplicantsRow from "./ApplicantsRow";

const ApplicantsList = () => {
  const { user } = useContext(AuthContext);
  const api = `/notifications/${user?.email}`;
  const key = "applications";

  const [notifications] = useNotifications(api, key);

  return (
    <div className="overflow-x-auto">
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
  );
};

export default ApplicantsList;
