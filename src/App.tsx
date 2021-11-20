import { lazy, Suspense } from "react";
import { 
  Routes,
  Route
} from "react-router-dom";
import { Book, Button, NavBar } from "./components";

const Catalogo = lazy(()=>import('@pages/Catalogo'))
export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><NavBar/></Suspense>}>
        <Route path="books" element={<Button/>}></Route>  
        <Route path="movies" element={<Button children={"hola"}/>}></Route>  
        </Route>   
    </Routes>  
   )
}