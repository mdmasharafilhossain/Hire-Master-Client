import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import useFetchData from "../UseFetchData/useFetchData";


const useJobCategory = () => {
  const AxiosPublic = UseAxiosPublic();
  const { data: jobs, } = useFetchData("/staticjobpost");

  const { data: jobCategory = [], refetch } = useQuery({
    queryKey: ["data", ],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/staticjobpost?job_role="React Developer"`);
      return res.data;
    },
  });
  console.log(jobCategory, refetch);
  return [jobCategory, refetch];
};


export default useJobCategory;