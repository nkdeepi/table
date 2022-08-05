// import React, { useContext } from 'react'
// import { dataContext } from '../App'
// import { useParams } from 'react-router-dom'
// import { Button } from 'react-bootstrap'

// const DeleteData = () => {
//     const[initialData,setInitialData]=useContext(dataContext)
//     const {id}=useParams()
//     const deleteData=initialData[id-1];
//     const deletedData=(del)=>{
//         alert("R u sure to delete ",`${deleteData.id}`)
//         const deldata=initialData.filter((data,index)=>index!==id-1)
//         setInitialData(deldata)




//     }
//   return (
//     <div>
// <h1>Data to be Deleted</h1>
// <h3>data with name {deleteData.name}</h3>
// <Button onClick={()=>deletedData(deleteData.id)}>Delete</Button>
//     </div>
//   )
// }

// export default DeleteData

import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext,tableHideContext } from '../App'
import Form from "react-bootstrap/Form";
import '../Table/table.css'





const DeleteData = () => {
  const[tableHide,setTableHide]=useContext(tableHideContext)

  const [initialData, setInitialData] = useContext(dataContext)
  const { id } = useParams()
  const readnewdata=initialData[id-1]
  // console.log(id)
  // const deleteData = initialData.filter((item, index) => index != id - 1)
  // console.log(deleteData)
  // const filterId=deleteData.map((ids)=>ids.id

  // )
  // console.log(filterId)




  // console.log(deleteData)
  useEffect(()=>{
    setTableHide(false)
  })
  const  confirmDelete=(del)=>{
    console.log(del)
    
  
    const confirmdeletedata=initialData.filter((data,index)=>index != del-1)
    setInitialData(confirmdeletedata)
    setTableHide(true)
    navigate('-1')
    alert("data deleted successfully")
   }
  const navigate = useNavigate()
  return (
    <div>
      <h4 style={{fontsize:"10px",textAlign:"left",marginTop:"30px",color:"brown",marginLeft:"60px"}}>Delete Record </h4>
      <div className='modalContainer'>
      <Modal.Dialog>
       

        <Modal.Body>
          <p style={{fontsize:"10px",textAlign:"center",marginTop:"30px",color:"brown",fontWeight:"bolder"}}>Do You Want to Delete This Record </p>
          <Form className='formContainer'>
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

        </Modal.Body>

        <Modal.Footer>


          <Button variant="secondary" onClick={() =>{

            navigate('-1')
            setTableHide(true)

          }
          } 
           style={{padding:"8px",textAlign:"center",color:"black",fontSize:"13px",borderRadius:"15px",color:"black",border:"1px solid black",marginRight:"5px",marginLeft:"10px"}}>Cancel</Button>

         
            <Button variant="primary" onClick={()=>confirmDelete(id)} style={{padding:"8px",textAlign:"center",color:"black",fontSize:"13px",borderRadius:"15px",color:"black",border:"1px solid black",marginRight:"5px",marginLeft:"10px"}}>Delete</Button>
          

        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default DeleteData