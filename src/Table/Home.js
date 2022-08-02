// import { useContext, useEffect, useState } from "react"; 
// // import "./table.css";
// import { data } from "./data";
// // import Table from "react-bootstrap/Table";
// // import { Button,Table } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import { dataContext } from "./AddRecord";
// // import Form from "react-bootstrap/Form";


// const Home = () => {

//   // const[initialRecords,setInitialRecords]=useContext(dataContext)
//   // const [initialRecords,setInitialRecords]=useState(data)
//   // const [input, setInput] = useState({
//   //   id: "",
//   //   name: "",
//   //   email: "",
//   //   course: "",
//   // });
//   // const inputChange = (e) => {
//   //   setInput(() => ({ ...input, [e.target.name]: e.target.value }));
//   // };
//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   setInitialRecords([...initialRecords,{...input}])
//   //   setInput({ id:"",
//   //   name:"",
//   //   email:"" ,
//   //   course:"" })
//   //   console.log("data",initialRecords)
//   // };
    
//   // const onSubmit = (e) => {
//   //   // e.preventDefault();
//   //   // alert(`${input.id}`)
//   //   // console.log("values are", input);
//   //   // setInitialRecords([...input,])
//   //   // const newdata={
//   //   //     id:input.id,
//   //   //     name:input.name,
//   //   //     email:input.email,
//   //   //     course:input.course
//   //   // }
//   //   // const addeddata=[...initialRecords,newdata]
//   //   // setInitialRecords(addeddata)
//   //   // const addeddata=[{...data,newdata}]
//   //   // setInput(newdata);

//   //   // const fulldata=[{...input,newdata}]
//   //   // console.log("new values ",fulldata)
//   //   // console.log("added data",addeddata)
//   //   // console.log("data",data)
    
//   // };
//   // useEffect(()=>{
//   //   console.log("data in addrecords",initialRecords)
//   // })
  
 


//   return (
    
//   <div>
//     <div className="tablecontainer">
//       <h4 style={{fontsize:"10px",textAlign:"center",marginTop:"20px",color:"brown",marginBottom:"20px"}}>List Of Records</h4>
     
//       <>
//         <Table className="table" striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th className="thead">id</th>
//               <th className="thead">Name</th>
//               <th className="thead">Email</th>
//               <th className="thead">Course</th>
//               <th>Action Read</th>
//               <th>Action Edit</th>
//               <th>Action Delete</th>
//             </tr>
//           </thead>
//           {data.map((item) => (
//             <tbody>
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.course}</td>
//                 <td><Button variant="light">Read</Button></td>
//                 <td><Button variant="success">Edit</Button></td>
//                 <td><Button variant="danger">Delete</Button></td>

//                 <td></td>
//               </tr>
//             </tbody>
//           ))}
//         </Table>
//       </>
//       <Link to="/addrecord">
      

//       <Button variant="primary">Create</Button>
//       </Link>
//     </div>
//     {/* <h4 style={{fontsize:"10px",textAlign:"center",marginTop:"10px",color:"brown"}}>Enter Details to Add New Record</h4>
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
//       </Form> */}
//     </div>
//   );
// };

// export default Home;
