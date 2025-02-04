import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/home"
import Booklist from "./Pages/bookList"
import Bookdetail from "./Pages/bookdetail"
import Profile from "./Pages/profile"

function App() {
  return (
    <>
    <BrowserRouter>
    <Link to="/"></Link>
    <Link to ="/bookList"></Link>
    <Link to= "/bookdetail"></Link>

    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/bookList" element={<Booklist/>}/>
      <Route path="/bookdetail" element={<Bookdetail/>}
      />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>


    
    </BrowserRouter>
    </>
  )
}

export default App
