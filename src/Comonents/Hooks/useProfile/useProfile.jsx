import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
  const { user } = useContext(AuthContext);
  const AxiosPublic = UseAxiosPublic();

  const { data: profileData = [], refetch } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/userProfile?email=${user.email}`);
      return res.data;
    },
  });
  console.log(profileData, refetch);
  return [profileData, refetch];
};

export default useProfile;
