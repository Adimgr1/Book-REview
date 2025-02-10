import { useEffect, useState } from "react";
import books from "../Pages/books.json"
function Search(prop) {
  
  return (
    
    <input
      placeholder="Search Book"
      type="text"
      style={{ width: "100px", height: "40px" }}
      onChange={(e)=>{
        prop.obj(books.filter((books)=>(books.name.includes(e.target.value))))
        
        
        

      }}
    />
  );
}
export default Search;
