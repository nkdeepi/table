import React, { useContext } from 'react'
import { dataContext } from '../App'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DeleteConfirm = () => {
    const[initialData,setInitialData]=useContext(dataContext)
    const {id}=useParams()
    console.log("id in deletepage",id)

   const  confirmDelete=(del)=>{
    console.log(del)
    
  
    const confirmdeletedata=initialData.filter((data,index)=>index != del-1)
    setInitialData(confirmdeletedata)
   }


   
  return (
    <div>

<div>
 <h1>Data to be Deleted</h1>
 {/* <h3>data with name {confirmdelete.name}</h3> */}
 <Button onClick={()=>confirmDelete(id)}>Delete</Button>
    </div>
    </div>
  )
}

export default DeleteConfirm