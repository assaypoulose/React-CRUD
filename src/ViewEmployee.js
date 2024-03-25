import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Table, Button} from "reactstrap";


export default function ViewEmployee() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const getEmployee = ()=>{
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/api/v2/profile")
    .then((data) => data.json())
    .then((response) => setData(response));
  }
  useEffect(()=>{
    getEmployee()
  },[]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       Employee List <br /><hr />
    <Container>
      <Button color='primary' onClick={()=>navigate('/')}>Go Back</Button>
    <Table striped>
      <thead>
        <tr>
          <th>Id no</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td>{value.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </div>
  )
}
