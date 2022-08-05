import React, { useContext, useEffect } from 'react'
 import {data} from '../Table/data'
 import { Button,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataAddContext, dataContext,tableHideContext } from '../App';
import '../Table/table.css'


const Homepage = () => {
  const[initialData,setInitialData]=useContext(dataContext)
    const[addData,setAddData]=useContext(dataAddContext)
  const[tableHide,setTableHide]=useContext(tableHideContext)

    useEffect(()=>{
      setTableHide(true)
     
        console.log("data in homepage",addData)

    })
  return (
    <div>
         
      <h4 style={{fontsize:"10px",textAlign:"center",marginTop:"20px",color:"brown",marginBottom:"20px"}}>List Of Records</h4>
      <Link to="/addrecord">
      

      <Button style={{padding:"8px",marginLeft:"60px",marginTop:"20px",marginBottom:"20px",borderRadius:"15px",backgroundColor:"grey",color:"black",border:"1px solid black"}} variant="primary">Add New Record</Button>
      </Link>
           <>
        <Table className="table" striped bordered hover variant="dark">
          <thead>            <tr>
              <th className="thead">id</th>
              <th className="thead">Name</th>
              <th className="thead">Email</th>
               <th className="thead">Course</th>
             
            
               
            </tr>
          </thead>
          {initialData.map((item,index) => (
            <tbody key={index}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
                <Link to={`/readdata/${item.id}`}>
                <Button style={{padding:"6px",textAlign:"center",color:"black",fontSize:"13px",borderRadius:"15px",color:"black",border:"1px solid black"}}  variant="light" >Read</Button>
                
                </Link>
                <Link to={`/editdata/${item.id}`}>
                {/* <Link to={`/moviedetails/${index}`}> */}
                
                <Button style={{padding:"6px",textAlign:"center",color:"black",fontSize:"13px",borderRadius:"15px",color:"black",border:"1px solid black"}}   variant="success">Edit</Button>
                </Link >

                <Link to={`/deletedata/${item.id}`}>
                
                <Button style={{padding:"6px",textAlign:"center",color:"black",fontSize:"13px",borderRadius:"15px",backgroundColor:"grey",color:"black",border:"1px solid black"}}   variant="danger">Delete</Button>
                </Link>

                <td></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>
   
    </div>
  
  )
}

export default Homepage