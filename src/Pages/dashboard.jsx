import Paging from "../Components/paging";
import Navigation from "../Components/nav";
import Table1 from "../Components/Table";
import { useState } from "react";
function Dashboard() {
  return (

    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
        }}
      >
        <Navigation />
        <Table1 />

        
      </div>
    </>
  );
}
export default Dashboard;
