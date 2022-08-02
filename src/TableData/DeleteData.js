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

import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../App'





const DeleteData = () => {

  const [initialData, setInitialData] = useContext(dataContext)
  const { id } = useParams()
  // console.log(id)
  // const deleteData = initialData.filter((item, index) => index != id - 1)
  // console.log(deleteData)
  // const filterId=deleteData.map((ids)=>ids.id

  // )
  // console.log(filterId)




  // console.log(deleteData)
  const navigate = useNavigate()
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do You Want to Delete Data</p>
        </Modal.Body>

        <Modal.Footer>


          <Button variant="secondary" onClick={() => navigate('-1')}>Cancel</Button>

          <Link to={`/deleteconfirm/${id}`}>
            <Button variant="primary">Delete</Button>
          </Link>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default DeleteData