import Navigation from "../Components/nav"
import Bookcard from "../Components/card-component"
import bookdata from "./bookdata.json"
function Booklist(){
     return(
          <>
          <Navigation></Navigation>
          {console.log(bookdata)}
          <div className="d-flex p-5 gap-3">
          {bookdata.map((books)=>(
               <Bookcard child={books}></Bookcard>

          ))}
          </div>
          
          

          
          </>
     )

}
export default Booklist