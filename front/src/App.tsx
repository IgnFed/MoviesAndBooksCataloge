import { lazy, Suspense } from "react";
import ParamsProvider from '@utils/context/ParamsContext';
import { 
  Routes,
  Route,
} from "react-router-dom";

/**Components */
const Dashboard = lazy(()=> import('@components/dashboard/Dashboard'));
const Searcher = lazy(()=> import('@components/searcher/Searcher'));

/**Pages */
const Cards = lazy(()=> import('@pages/Cards'));
const Layout = lazy(()=> import('@pages/Layout'));


export default function App(){
  return(
      <div id="appGrid">  
        <ParamsProvider>
          <Suspense fallback={<div>Cargando...</div>}>
            <Dashboard/>
            <Searcher/>
            <main id="gallery">
              <Routes>
                <Route path="/" >
                  <Route index element={<Layout/>} />
                  <Route path="books" element={<Cards/>}/>
                  <Route path="movies" element={<Cards/>}/>
                </Route>
              </Routes>
            </main>
          </Suspense>
        </ParamsProvider>
      </div>

  )
}