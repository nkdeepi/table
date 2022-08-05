import React,{useContext, useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { dataAddContext, dataContext } from '../App';
import "../Table/table.css"

const AddNewRecord = () => {
    const[addData,setAddData]=useContext(dataAddContext)
    const[initialData,setInitialData]=useContext(dataContext)
      const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
  });
    const inputChange = (e) => {
    setInput(() => ({ ...input, [e.target.name]: e.target.value }));
    
  };
  const onSubmit=(e)=>{
    e.preventDefault();
    const newdata=[...initialData,{...input}]
    setInitialData(newdata)


    console.log("values",addData)
    
  }
  return (
    <>
        <h4 style={{fontsize:"10px",textAlign:"center",marginTop:"30px",color:"brown"}}>Enter Details to Add New Record</h4>
    <div className='formContainer'>
      <Form>
       <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Id"
             name="id"
             onChange={inputChange}
             value={input.id}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={inputChange}
            value={input.name}
          />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
             name="email"
             onChange={inputChange}
             value={input.email}
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCourse">
          <Form.Label>Course</Form.Label>
          <Form.Control
             type="text"
            placeholder="Enter Course"
            name="course"
             onChange={inputChange}
             value={input.course}
           />
        </Form.Group> 

         <Button variant="primary" type="submit" onClick={onSubmit}>
           Submit
        </Button>
      
     </Form>
    </div> 
    </>
   
  )
}

export default AddNewRecord