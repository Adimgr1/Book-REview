import Navigation from "../Components/nav";
import Bookcard from "../Components/card-component";
import books from "./books.json";
import Search from "../Components/search";
import { useEffect, useState } from "react";
function Booklist() {
  let [filter_state, setFilter_state] = useState([]);

  return (
    <>
      
      <Navigation></Navigation>
      <Search obj={setFilter_state} item={filter_state}></Search>

      <div
        className="d-flex flex-wrap gap-5"
        style={{ marginLeft: "100px", marginTop: "30px" }}
      >
          {filter_state.length==0? books.map((books) => (
          <Bookcard key={books.id} child={books}></Bookcard>
        )): filter_state.map((books)=>(
          <Bookcard key={books.id} child={books}></Bookcard>

        ))}
        

      </div>
    </>
  );
}
export default Booklist;
