import { 
  Routes,
  Route
} from "react-router-dom";

import {Login} from '@pages/index'; 

export default function App(){
  return(
  <>
    <Routes >
      <Route path="/login"  element={<Login/>}/>
    </Routes>
  </>
  )
}