import { lazy, Suspense } from "react";
import { 
  Routes,
  Route,
} from "react-router-dom";

/**Components */
const Dashboard = lazy(()=> import('@components/dashboard/Dashboard'));
const Searcher = lazy(()=> import('@components/searcher/Searcher'));

/**Pages */
const Books = lazy(()=> import('@pages/Books'));
const Movies = lazy(()=> import('@pages/Movies'));
const Layout = lazy(()=> import('@pages/Layout'));


export default function App(){
  return(
    <div id="appGrid">  
      <Suspense fallback={<div>Cargando...</div>}>
        <nav id="dashboard">
          <Dashboard/>
        </nav>
        <header id="searcher">
          <Searcher/>
        </header>
        <main id="gallery">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="books" element={<Books/>}/>
              <Route path="movies" element={<Movies/>}/>
            </Route>
          </Routes>
        </main>
      </Suspense>
    </div>
  )
}