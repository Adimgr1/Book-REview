import Navigation from "../Components/nav"
import Bookcard from "../Components/card-component"
import books from "./books.json"
import Search from "../Components/search"
function Booklist(){
     return(
          <>
          
          <Navigation></Navigation>

          <div className="d-flex flex-wrap gap-5" style={{marginLeft:"100px", marginTop:"30px"}}>
          {books.map((books)=>(
               <Bookcard key={books.id} child={books}></Bookcard>

          ))}
          </div>
          
          

          
          </>
     )

}
export default Booklist