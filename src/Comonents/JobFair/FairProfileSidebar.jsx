import { Link } from "react-router-dom";

const FairProfileSidebar = () => {
  return (
    <div className='flex flex-col text-lg font-bold space-y-5'>
      <Link>Booking History</Link>
      <Link>Interested Events</Link>
      <Link to='/job-fair/profile/settings'>Settings</Link>
    </div>
  );
};

export default FairProfileSidebar;
