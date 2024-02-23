import { useState, useEffect } from "react";
import useFetchData from "../UseFetchData/useFetchData";

const useNotifications = (api, key) => {
  const [notifications, setNotifications] = useState([]);
  const [temp, setTemp] = useState([]);
  const [display, setDisplay] = useState([]);
  const {
    data: applications,
    loading: applicationLoading,
    refetch: applicationRefetch,
  } = useFetchData(api, key);

  useEffect(() => {
    if (!applicationLoading && applications.length > 0) {
      // applicationRefetch();
      setNotifications(applications);
      setDisplay(applications.filter((item) => !temp.includes(item)));
    }
  }, [applications, applicationLoading, temp, applicationRefetch]);

  return [notifications, temp, display, setNotifications, setTemp, setDisplay, applicationRefetch];

  
};

export default useNotifications;
