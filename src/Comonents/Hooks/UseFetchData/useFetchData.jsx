import { useEffect, useState } from "react";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";

const useFetchData = url => {
  const axiosPublic = UseAxiosPublic();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic, url]);

  return { data, loading, error };
};

export default useFetchData;
