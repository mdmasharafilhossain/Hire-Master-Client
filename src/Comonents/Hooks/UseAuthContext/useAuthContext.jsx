import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuthContext;
