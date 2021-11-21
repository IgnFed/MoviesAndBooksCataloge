import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@styles/Global.css';
import App from './App';


render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
