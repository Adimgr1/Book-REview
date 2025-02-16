import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import "./App.css";
import Home from "./Pages/home";
const Booklist= React.lazy(()=>import ( "./Pages/bookList"));
import Bookdetail from "./Pages/bookdetail";
import Profile from "./Pages/profile";
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";
import Privaterouting from "./Components/Privaterouting";
import { AuthContextProvider } from "./authcontext";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <>
      <Link to="/"></Link>
      <Link to="/bookList"></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookList" element={<Suspense fallback={<h1>Loading...</h1>}>
          
          <Booklist/>

        </Suspense>} />
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

        <Route
          path="/dashboard"
          element={
            <Privaterouting>
              <Dashboard />
            </Privaterouting>
          }
        />
      </Routes>
    </>
  );
}

export default App;
