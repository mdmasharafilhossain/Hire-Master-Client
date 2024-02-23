import UseAxiosPublic from "../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const axiosPublic = UseAxiosPublic();

export const saveHiringTalentInDb = async hirer => {
  return await axiosPublic.post("/hiring-talents", hirer);
};

export const saveUsersInDb = async users => {
  return await axiosPublic.post("/users", users);
};
export const saveHiringManagerInfoDB = async HiringManager => {
  return await axiosPublic.post("/hiring-talents", HiringManager);
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

export const saveNewsInDb = async news => {
  return await axiosPublic.post("/tech-news", news);
};

export const getTechNewsFromDb = async () => {
  return await axiosPublic.get("/tech-news");
};

export const getUserTechNewsFromDb = async (page, limit) => {
  return await axiosPublic.get(`/tech-news?page=${page}&limit=${limit}`);
};
export const getAdminTechNewsFromDb = async (page, limit) => {
  return await axiosPublic.get(`/tech-news?page=${page}&limit=${limit}`);
};

export const getSingleTechNewsFromDb = async slug => {
  return await axiosPublic.get(`/tech-news/${slug}`);
};

export const deleteNewsFromDb = async slug => {
  return await axiosPublic.delete(`/tech-news/${slug}`);
};

export const updateNewsInDb = async (slug, news) => {
  return await axiosPublic.patch(`/tech-news/${slug}`, news);
};

export const saveFairRegistrationInDb = async user => {
  return await axiosPublic.post(`/fair-registration`, user);
};

export const getFairRegisteredUser = async email => {
  return await axiosPublic.get(`/fair-registration/${email}`);
};

export const updateFairRegisteredUserInDb = async (id, userInfo) => {
  return await axiosPublic.patch(`/fair-registration/update/${id}`, userInfo);
};

export const saveFairEventDataInDb = async event => {
  return await axiosPublic.post(`/job-fair/events`, event);
};

export const getFairSponsorEventsFromDb = async email => {
  return await axiosPublic.get(`job-fair/profile/sponsor-event/${email}`);
};
