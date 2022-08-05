import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";
import { useParams, useSearchParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditData = () => {
  const [initialData, setInitialData] = useContext(dataContext);
  const { id } = useParams();
  const editdata=initialData[id-1]
  // const [edit, setEdit] = useState({
  //   id: "",
  //   name: "",
  //   email: "",
  //   course: "",
  // });
  
  // console.log(editdata.id)


  // const [no, setNo] = useState(editdata.id)
  // // console.log(no)

  // const [name, setName] = useState(editdata.name)
  // // console.log(name)
  // const [email, setEmail] = useState(editdata.email)
  // const [course, setCourse] = useState(editdata.course)
const[edit,setEdit]=useState({id:editdata.id,
  name:editdata.name,
  email:editdata.email,
  course:editdata.course
})
// console.log(edit.id)
const onChange=(e)=>{
  // console.log("onchange")
  setEdit(()=>({...edit,[e.target.name]:e.target.value}))
  // console.log("new values",edit)
 

  // setEdit([e.target.name]:e.target.value)
  // setEdit(()=> ({...edit,[e.target.name]:e.target.value}))


}
// console.log(edit.id)
// console.log(edit.name)
// console.log(edit.email)
// console.log(edit.course)


  // const idChange = (e) => {
  //   console.log("changeworked")
  //   setNo(editdata[id].id)

  // }

  // const [edit, setEdit] = useState({
  //   id: `${initialData[id-1].id}`,
  //   name: `${initialData[id-1].name}`,
  //   email: `${initialData[id-1].email}`,
  //   course: `${initialData[id-1].course}`,
  // });
  // console.log("data in edit",edit)
  // useEffect(() => {
  //   // console.log(edit.name);

  //   // console.log(`${editdata[id].id}`)
  //   // console.log(`${initialData[id-1].id}`)
  // });
  // const onChangeId=(e)=>{
    
  //   console.log("onchange worked")
  //   setNo(e.target.value)
    
  // }
  // const onChangeName=(e)=>{
  //   setName(e.target.value)

  // }
  // const onChangeEmail=(e)=>{
  //   setEmail(e.target.value)

  // }
  // const onChangeCourse=(e)=>{
  //   setCourse(e.target.value)

  // }
  // const Edit=(e)=>{
  //   console.log("edit button worked"
  //   setEdit({...edit,[e.target.name]:e.target.value})

  // }
  // const [edit,setEdit]=useState(initialData)

  // const Edit = (data) => {
  //   // for opening the editable row
  //   setToggle(data);
  //   setEditData(data);
  // };
  
  // const editData = (data) => {
  //   console.log("buttonclicked",data)

  // };
  // const completeTodo=(id)=>{
  //   const updatedTodos=todos.map(todo=>{
  //     if(todo.id===id){
  //       todo.isComplete=!todo.isComplete;


  //     }
  //     return todo;
  //   })
  const save = (item) => {
    console.log(item)
    // e.preventDefault();
    // console.log("editted")
    // const filterdata=initialData.map((value)=>{
    //   if(value.id === item){
    //     value.isComplete=!value.isComplete;
    //   }
    //   return value
    // })

    const filterdata=initialData.filter((data,index)=>item === index)


 const updateddata=[{...initialData},filterdata]
 setInitialData(updateddata)
// setInitialData(filterdata)



 
 console.log(edit)
 console.log(initialData)
//  const newdata=[...initialData,{...input}]
//  se
//  setInitialData(newdata)
  

    

  }
  return (
    <div>
       <h4 style={{fontsize:"10px",textAlign:"left",marginTop:"30px",color:"brown",marginLeft:"40px"}}>Enter D`etails to Update </h4>
    <div className="formContainer">
      <Form onSubmit={(e)=>e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" onChange={onChange} name="id" defaultValue={editdata.id} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={onChange} defaultValue={editdata.name}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" name="email" onChange={onChange} defaultValue={editdata.email}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>course</Form.Label>
          <Form.Control type="text" name="course"onChange={onChange} defaultValue={editdata.course} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>{save(editdata.id)}}>
          Edit
        </Button >
      </Form>

    
     
    </div>
    </div>
  );
};

export default EditData;
