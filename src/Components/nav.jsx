import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import logout from "../assets/logout.png";
import { AuthContext } from "../authcontext";

function Navigation() {
  let {logOut}= useContext(AuthContext);
  let [searchid, setsearchid] = useState();
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#4A90E2",
          width: "100vw",
          height: "100px",
          color: "white",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            alignSelf: "center",
            padding: "10px",
          }}
        >
          BOOK REVIEW
        </div>
        <div
          style={{
            display: "flex",
            gap: "100px",
            fontSize: "20px",
            fontWeight: "bold",
            alignSelf: "center",
            margin: "0 auto",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ color: "white" }}>Home</div>
          </Link>

          <div>
            <Link
              to="/booklist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Book-List
            </Link>
          </div>
          <div>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Profile
            </Link>
          </div>
          <div>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Dashboard
            </Link>
          </div>
        </div>
        <input
          onChange={(e) => {
            setsearchid(e.target.value);
          }}
          placeholder="Input book id"
          type="text"
          style={{
            height: "50px",
            width: "200px",
            position: "absolute",
            top: "20px",
            right: "50px",
            borderRadius: "20px",
            padding: "10px",
          }}
        />
        <button
          onClick={() => {
            navigate(`/bookdetail/${searchid}`);
          }}
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: "25px",
            right: "50px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "black",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/528/225/non_2x/search-icon-search-icon-design-illustration-search-icon-simple-sign-free-vector.jpg"
            alt="hello"
            style={{ width: "20px" }}
          />
        </button>
        <button
        onClick={
          logOut
        }
          style={{
            width: "33px",
            height: "33px",
            borderRadius: "50%",
            marginRight: "15px",
            marginTop: "27px",
          }}
        >
          <img style={{ width: "20px" }} src={logout} alt="" />
        </button>
      </div>
    </>
  );
}
export default Navigation;
