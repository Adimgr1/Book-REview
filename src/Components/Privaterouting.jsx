import { useContext, useEffect } from "react";
import { AuthContext } from "../authcontext";
import Signin from "../Pages/signin";
import { useNavigate } from "react-router-dom";

function Privaterouting({ children }) {
  let { isLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();
  
  
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("status",false)
      navigate("/signin");
    }
    
  }, [isLoggedIn]);
  return <>{isLoggedIn ? children : null}</>;
}
export default Privaterouting;
