import { createContext, useState } from "react";

let authContext= createContext();
function authContextProvider(children){
     let [isLoggedIn, setIsLoggedIn]= useState(false)

     function logIn(){
          setIsLoggedIn(true)

     }
     function logOut(){
          setIsLoggedIn(false)
     }

     return(
          <authContext.Provider value={{isLoggedIn, logIn, logOut}}>
               {children}

          </authContext.Provider>
     )
}
export {authContext, authContextProvider}