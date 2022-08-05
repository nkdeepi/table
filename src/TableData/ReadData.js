import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App'
import { useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../Table/table.css'

const ReadData = () => {
    const[initialData,setInitialData]=useContext(dataContext)
 
    const {id}=useParams()
  
    const readnewdata=initialData[id-1]
    useEffect(()=>{
        // console.log("initial",initialData[id])
        console.log("readdata",readnewdata)
        
    })
  return (
    <div>
       <h4 style={{fontsize:"10px",textAlign:"left",marginTop:"30px",color:"brown",marginLeft:"40px"}}> Details </h4>
      <div className='formContainer'>
{/* <h1>{readnewdata.id}</h1>
<h1>{readnewdata.name}</h1>
<h1>{readnewdata.email}</h1>
<h1>{readnewdata.course}</h1> */} 

<Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" value={readnewdata.id} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={readnewdata.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" value={readnewdata.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>course</Form.Label>
          <Form.Control type="text" value={readnewdata.course}/>
        </Form.Group>

       
      </Form>




</div>
    </div>
  )
}

export default ReadData