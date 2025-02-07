import { createContext, useState } from "react";
import user from "./Pages/user.json";
import { useNavigate } from "react-router-dom";

let AuthContext = createContext({});
function AuthContextProvider({ children }) {
  let navigate= useNavigate()
  let status = localStorage.getItem('status')==='true'

  let [isLoggedIn, setIsLoggedIn] = useState(status);


  function logIn(email, password) {
    let user_present = user.filter(
      (user) => user.email == email && user.pass == password
    );
    if (user_present.length != 0) {
      setIsLoggedIn(true);
      navigate('/')
      localStorage.setItem("status",true)
      
    }else{
     setIsLoggedIn(false)
     
    }
  }
  function logOut() {
    console.log("logged out")
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthContextProvider };
