import Navigation from "../Components/nav";
import books from "../Pages/books.json";
import Bookcard from "../Components/card-component"
function Home() {
  let featured = books.filter((books) => books.featured == true);
  let trending = books.filter((books) => books.trending == true);
  return (
    <>
      <Navigation></Navigation>
      <div
        className="d-flex"
        style={{
          width: "100vw",
          height: "86vh",
          boxSizing: "border-box",
          justifyContent: "center",
        }}
      >
        <div
          className="section1 m-4"
          style={{
            width: "50%",
            height:"fit-content",
            borderRight: "2px solid black",
            textAlign: "center",
          }}
        >
          <u>
            <h1>Featured Books</h1>
          </u>
          <div className="d-flex flex-wrap">
               {featured.map((books)=>(
                    <Bookcard child={books}></Bookcard>
               ))}
          </div>
        </div>
        <div
          className="section2 m-4"
          style={{ height: "100%", width: "50%", textAlign: "center" }}
        >
          <u>
            <h1>Trending Books</h1>
          </u>
          <div className="d-flex flex-wrap">
               {featured.map((books)=>(
                    <Bookcard child={books}></Bookcard>
               ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
