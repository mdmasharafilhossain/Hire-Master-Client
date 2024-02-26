import { useState, useEffect } from "react";
import useFetchData from "../UseFetchData/useFetchData";

const useNotifications = (api, key) => {
  const [notifications, setNotifications] = useState([]);
  const [temp, setTemp] = useState(0);
  const [display, setDisplay] = useState(0);
  localStorage.setItem("temp", temp);
  localStorage.setItem("display", display);
  const localTemp = localStorage.getItem("temp");
  const localDisplay = localStorage.getItem("display");
  const {
    data: applications,
    loading: applicationLoading,
    refetch: applicationRefetch,
  } = useFetchData(api, key);

  useEffect(() => {
    if (!applicationLoading && applications.length > 0) {
      setNotifications(applications);
      setDisplay(notifications.length - temp);
      localStorage.setItem("display", display);
    }
  }, [
    applications,
    notifications.length,
    display,
    applicationLoading,
    temp,
    applicationRefetch,
  ]);

  return [
    notifications,
    temp,
    display,
    localTemp,
    localDisplay,
    setNotifications,
    setTemp,
    setDisplay,
    applicationRefetch,
  ];
};

export default useNotifications;
