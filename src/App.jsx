import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Booklist from "./Pages/bookList";
import Bookdetail from "./Pages/bookdetail";
import Profile from "./Pages/profile";
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";
import Privaterouting from "./Components/Privaterouting";
import { AuthContextProvider } from "./authcontext";

function App() {
  return (
    <>
        
          <Link to="/"></Link>
          <Link to="/bookList"></Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bookList" element={<Booklist />} />
            <Route
              path=":booklist/bookdetail/:id"
              element={
                <Privaterouting>
                  <Bookdetail />
                </Privaterouting>
              }
            />
            <Route
              path="/bookdetail/:id"
              element={
                <Privaterouting>
                  <Bookdetail />
                </Privaterouting>
              }
            />
            <Route
              path="/profile"
              element={
                <Privaterouting>
                  <Profile />
                </Privaterouting>
              }
            />
          </Routes>
    </>
  );
}

export default App;
