import UseAxiosPublic from "../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const axiosPublic = UseAxiosPublic();

export const saveHiringTalentInDb = async hirer => {
  return await axiosPublic.post("/hiring-talents", hirer);
};

export const saveUsersInDb = async users => {
  return await axiosPublic.post("/users", users);
};
