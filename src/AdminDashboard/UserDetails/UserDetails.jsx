import { useLoaderData, useParams } from "react-router-dom";


const UserDetails = () => {
    const UsersInfo = useLoaderData();
    console.log(UsersInfo);
    const { email } = useParams();
    console.log("Database email",email)
    // const UserCard = UsersInfo.find(info =>info?.email == email);
    const UserCard = UsersInfo.find(card => card.email == email)
    console.log(UserCard);
    return (
        <div>
            {/* <h2>{UserCard.length}</h2> */}
        </div>
    );
};

export default UserDetails;