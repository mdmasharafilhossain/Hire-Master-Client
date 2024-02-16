import UseAxiosPublic from "../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const axiosPublic = UseAxiosPublic();

export const saveHiringTalentInDb = async hirer => {
  return await axiosPublic.post("/hiring-talents", hirer);
};

export const saveUsersInDb = async users => {
  return await axiosPublic.post("/users", users);
};

export const getUserInfo = async email => {
  return await axiosPublic.get(`/userProfile/${email}`);
};
export const getManagerInfo = async email => {
  return await axiosPublic.get(`/managerProfile/${email}`);
};

export const saveSubscriberInDb = async subscriber => {
  return await axiosPublic.post("/subscribers", subscriber);
};
