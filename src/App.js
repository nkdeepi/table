import {data} from './Table/data'
import logo from './logo.svg';
import './App.css';
import Home from './Table/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddRecord from './Table/AddRecord';
import { createContext, useState } from "react";
import Homepage from './TableData/Homepage';
import AddNewRecord from './TableData/AddNewRecord';
import ReadData from './TableData/ReadData';
import EditData from './TableData/EditData';
import DeleteData from './TableData/DeleteData';
import DeleteConfirm from './TableData/DeleteConfirm';
const dataAddContext=createContext();
const dataContext=createContext();


function App() {
  const[addData,setAddData]=useState([""])
  const[initialData,setInitialData]=useState(data)

  return (
    
    <div className="App">
      <dataAddContext.Provider value={[addData,setAddData]}>
        <dataContext.Provider value={[initialData,setInitialData]}>


    <BrowserRouter>
<Homepage/>
<Routes>
  <Route path='/addrecord' element={<AddNewRecord/>}></Route>
  <Route path='/readdata/:id' element={<ReadData/>}></Route>
  <Route path='/editdata/:id' element={<EditData/>}></Route>
  <Route path='/deletedata/:id' element={<DeleteData/>}></Route>
  <Route path='/deleteconfirm/:id' element={<DeleteConfirm/>}></Route>

</Routes>
</BrowserRouter>
</dataContext.Provider>
      </dataAddContext.Provider>

  

    
   
     </div>
  );
}

export default App;
export {dataAddContext,dataContext}
