import { useContext } from "react";
import { AuthContext } from "../components/Authlayout/Providers/AuthProvider";



const useAuth = () => {
   const auth = useContext(AuthContext);
   return auth
};

export default useAuth;