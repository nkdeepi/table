import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App'
import { useParams } from 'react-router-dom'

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
<h1>{readnewdata.id}</h1>
<h1>{readnewdata.name}</h1>
<h1>{readnewdata.email}</h1>
<h1>{readnewdata.course}</h1>
    </div>
  )
}

export default ReadData