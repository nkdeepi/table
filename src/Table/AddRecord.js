// import { data } from "./data";
// import React, { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { createContext } from "react";
// import Home from "./Home";




// const AddRecord = () => {
//   const[addData,SetaddData]=useContext(dataAddContext)
//   const [initialRecords,setInitialRecords]=useState(data)
  
//   const [input, setInput] = useState({
//     id: "",
//     name: "",
//     email: "",
//     course: "",
//   });
//   const inputChange = (e) => {
//     setInput(() => ({ ...input, [e.target.name]: e.target.value }));
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setInitialRecords([...initialRecords,{...input}])
//     setInput({ id:"",
//     name:"",
//     email:"" ,
//     course:"" })
//     console.log("data",initialRecords)
    

//     // alert(`${input.id}`)
//     // console.log("values are", input);
//     // const newdata={
//     //     id:input.id,
//     //     name:input.name,
//     //     email:input.email,
//     //     course:input.course
//     // }
//     // const addeddata=[...initialRecords,newdata]
//     // setInitialRecords(addeddata)
//     // console.log("new values",initialRecords)
//     // const addeddata=[{...data,newdata}]
//     // setInput(newdata);
//     // console.log("input",input)

//     // const fulldata=[{...input,newdata}]
//     // console.log("new values ",fulldata)
//     // console.log("added data",addeddata)
//     // console.log("data",data)
    
//   };

//   return (
//     <div>
//         <h4 style={{fontsize:"10px",textAlign:"center",marginTop:"10px",color:"brown"}}>Enter Details to Add New Record</h4>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicId">
//           <Form.Label>ID</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Id"
//             name="id"
//             onChange={inputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Name"
//             name="name"
//             onChange={inputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter email"
//             name="email"
//             onChange={inputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCourse">
//           <Form.Label>Course</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Course"
//             name="course"
//             onChange={inputChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" onClick={onSubmit}>
//           Submit
//         </Button>
//         {/* <Home value={initialRecords}/> */}
//         <dataContext.Provider value={[initialRecords,setInitialRecords]}>
//     <Home/>
//   </dataContext.Provider>
//       </Form>
//     </div>
//   );
// };

// export default AddRecord;
// export {dataContext}
