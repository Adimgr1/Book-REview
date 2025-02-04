import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
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
        </div>
      </div>
    </>
  );
}
export default Navigation;
