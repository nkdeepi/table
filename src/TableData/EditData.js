import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App'
import { useParams, useSearchParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditData = () => {
  const [initialData,setInitialData]=useContext(dataContext)
  const {id}=useParams()
  
  const [no,setNo]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[course,setCourse]=useState("")
  const editdata=initialData[id-1]
  const idChange=(e)=>{
    setNo({...no,[e.target.name]:e.target.value})

  }


  
 

  // const [edit,setEdit]=useState({id:`${initialData[id-1].id}`, name:`${initialData[id-1].name}`, email:`${initialData[id-1].email}`,course:`${initialData[id-1].course}`})

  useEffect(()=>{
    
    // console.log(`${editdata[id].id}`)
    console.log(`${initialData[id-1].id}`)
  })
  // const Edit=(e)=>{
  //   console.log("edit button worked")
  //   setEdit({...edit,[e.target.name]:e.target.value})
    
  // }
  // const [edit,setEdit]=useState(initialData)

  // const Edit = (data) => {
  //   // for opening the editable row
  //   setToggle(data);
  //   setEditData(data);
  // };
  const EditData=(data)=>{}
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" onChange={idChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>course</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>

      {/* <h1>Edit Data with Name:{editdata.name}</h1>
        <Button onClick={()=>Edit(editdata.id)}
        >Edit </Button> */}
    </div>
  )
}

export default EditData