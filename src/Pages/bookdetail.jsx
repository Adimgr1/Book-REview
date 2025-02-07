import Navigation from "../Components/nav";
import { useParams } from "react-router-dom";
import books from "../Pages/books.json";

function Bookdetail() {
  const { booklist, id } = useParams();
  let book = books.filter((books) => books.id == id);
  console.log(book);

  return (
    <>
      <Navigation></Navigation>
      <h1 style={{ marginLeft: "200px", marginTop: "50px" }}>Book Details</h1>
      <hr style={{ marginLeft: "200px", marginRight: "200px" }} />
      <div
        className=""
        style={{
          paddingLeft: "20px",
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "20px",
          border: "0.1px solid black",
          paddingTop: "30px",
          paddingBottom: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="bookname">
          <h1 style={{ fontWeight: "bolder" }}>{book[0].name}</h1>
        </div>
        <div className="bookauthor">{book[0].author}</div>
        <div className="bookdiscription">{book[0].description}</div>
        <div className="bookdiscription">{book[0].rating}</div>
        <div className="bookdiscription">{book[0].genre}</div>
      </div>

      <div
        className=""
        style={{
          paddingLeft: "20px",
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "20px",
          border: "0.1px solid black",
          paddingTop: "30px",
          paddingBottom: "20px",
          borderRadius: "10px",
          position: "relative",
          height: "200px",
        }}
      >
        <div
          className="bookname"
          style={{
            position: "absolute",
            left: "0",
            top: "0px",
            backgroundColor: "#D3D3D3",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            paddingLeft: "20px",
          }}
        >
          <h1 style={{ fontWeight: "400" }}>Reviews</h1>
        </div>
      </div>

      <div
        style={{
          paddingLeft: "20px",
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "20px",
          border: "0.1px solid black",
          paddingTop: "30px",
          paddingBottom: "20px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          className="bookname"
          style={{
            position: "absolute",
            left: "0",
            top: "0px",
            backgroundColor: "#D3D3D3",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            paddingLeft: "20px",
          }}
        >
          <h1 style={{ fontWeight: "400", fontSize: "30px" }}>Add a Review</h1>
        </div>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <label style={{ marginLeft: "52px", fontSize: "20px" }}>
            Your Review
          </label>
          <textarea
            placeholder="Right Your Review Here"
            name="rec-dis"
            id=""
            style={{
              padding: "10px",
              height: "150px",
              marginLeft: "50px",
              marginRight: "50px",
              borderRadius: "10px",
            }}
          ></textarea>

          <label style={{ marginLeft: "52px", fontSize: "20px" }}>
            Enter Rating (1-5)
          </label>
          <textarea
            placeholder="Right Your Review Here"
            name="rec-dis"
            id=""
            style={{
              padding: "10px",
              height: "50px",
              marginLeft: "50px",
              marginRight: "50px",
              borderRadius: "10px",
            }}
          ></textarea>
          <input type="Submit" value="Submit Review" style={{height: "50px",
              marginLeft: "50px",
              marginRight: "50px",
              marginTop:"10px",
              borderRadius: "10px",}} />
        </form>
      </div>
    </>
  );
}
export default Bookdetail;
