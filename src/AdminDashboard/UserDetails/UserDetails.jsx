import { useParams } from "react-router-dom";
import UseUserDEtails from "./UseUserDetails/UseUserDEtails";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";



const UserDetails = () => {
    const {email} = useParams();
    console.log(email)
    const { data: profile, loading, refetch } = useFetchData(
        `/userProfile/all`,
        "profile"
      );
      if (loading) return <Loader />;
    
      refetch();
    console.log(profile);
    // const [Details] = UseUserDEtails();
    // console.log(Details);
    const UserDetail = profile?.find(Info =>Info?.email === email );
    console.log(UserDetail)
    return (
        <div>
            <h2>{UserDetail.email}</h2>
        </div>
    );
};

export default UserDetails;