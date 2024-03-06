import { Link } from "react-router-dom";

const ApplicantsRow = ({ item, index }) => {
  return (
    <tr key={item.id}>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td><Link to={`/applicants/${item.email}`} className="text-[#FF3811] font-medium hover:underline">view profile</Link></td>
    </tr>
  );
};

export default ApplicantsRow;
