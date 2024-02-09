import { useState } from "react";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;
const ProfileImage = () => {

    const axiosPublic = UseAxiosPublic();
  const [upload, setUpload] = useState(false)
  const [profileData] = useProfile()
  const myProfileData = profileData[0]


  const {
    register,
    handleSubmit,
} = useForm()

const onSubmit = async (data) => {
    console.log(data)

    const ImageFile = { image: data.image[0] };
    const res = await axiosPublic.post(Profile_Hosting, ImageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    
    console.log(res.data);
    if (res.data.success) {
      const UserProfileInfo = {
        image: res.data.data.display_url,
        
      };
      // console.log(articleInfo);
      const userRes = await axiosPublic.patch(`/userProfile/${myProfileData._id}`,UserProfileInfo);
      if(userRes.data.modifiedCount > 0){
        Swal.fire("Successfully Edited");
    }
    }

}

    return (
        <div>
            {
                profileData.map(data =><form onSubmit={handleSubmit(onSubmit)} key={data._id}>
                    <div className=' avatar'>
                            <div className='w-48 rounded-md border-2 border-white '>
                              <img onClick={()=> setUpload(!upload)} src={data.image} />
                              {
                                upload && <div className="absolute -bottom-10">
                                  <p className="bg-[#FF3811] text-lg font-medium text-white p-2 text-center">Choose Profile</p> 
                                  <input  {...register("image")} className="relative bottom-10 w-full h-10 opacity-0 " type="file" />
                               

                                 <button className="bg-[#FF3811] text-lg font-medium text-white p-2 text-center w-full relative bottom-8">Upload</button>
                                  </div> 
                              }
                            </div>
                          </div>
                    </form>)
            }
        </div>
    );
};

export default ProfileImage;