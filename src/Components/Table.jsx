import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Paging from "./paging";
function Table1() {
  let [response, setResponse] = useState();
  let [active, setActive]= useState(1)
  async function apiFetching() {
    let users = await fetch(`http://localhost:5000/api/users?limit=5&page=${active}`);
    console.log(active)
    
    users = await users.json();
    console.log(users)
    setResponse(users.data)
    
  }
  
  useEffect(()=>{
    
    apiFetching()
    
  },[active])
  
  return (
    <>
    
    <Table striped bordered hover style={{ width: "500px", marginTop: "50px" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {(response?.map((users)=>(
          <tr>
          <td>{users.id}</td>
          <td>{users.firstName}</td>
          <td>{users.lastName}</td>
          <td>{users.username}</td>
        </tr>
        )))}
      </tbody>
      
    </Table>
    <Paging var={active} fun= {setActive} />
    </>
  );
}

export default Table1;
