import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";


const Image_Hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting=`https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;


const UserProfileForm = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    return (
        <div>
           <h2>User Profile</h2> 
           
        </div>
    );
};

export default UserProfileForm;