import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../authcontext";
function Signin() {
  let navigate= useNavigate()
  let {logIn,setIsLoggedIn,isLoggedIn}= useContext(AuthContext)
  let check1={email:"",
    password:""
  }
  let changeHandler=(e)=>{
    if(e.target.name=="email"){
      check1.email= e.target.value
      console.log(check1.email)
    }else{
      check1.password= e.target.value
      console.log(check1.password)
    }

  }
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ width: "100vw", height: "100vh", alignItems: "center" }}
      >
        <div
          className="card d-flex"
          style={{
            flexDirection: "column",
            width: "500px",
            height: "500px",
            alignItems: "center",
          }}
        >
          <h1 className="mt-5" style={{ fontFamily: "monospace" }}>
            Login
          </h1>
          <form
          onSubmit={(e)=>{
            e.preventDefault()
            logIn(check1.email,check1.password)

          }}
            style={{
              flexDirection: "column",
              display: "flex",
              marginTop: "10px",
            }}
          >
            <label for="email" style={{fontWeight:"bold"}}>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              style={{ width: "400px", height: "50px", marginBottom: "20px" }}
              onChange={changeHandler}
            />
            <label for="password" style={{fontWeight:"bold"}}>Password:</label>
            <input
              type="text"
              name="password"
              style={{ width: "400px", height: "50px", marginBottom: "20px" }}
              onChange={changeHandler}
            />
            <input
              style={{
                width: "400px",
                height: "50px",
                backgroundColor: "#007498",
                color: "white",
                fontWeight:"bold"
              }}
              type="submit"
              value="Sign In"
            />
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}
export default Signin;
