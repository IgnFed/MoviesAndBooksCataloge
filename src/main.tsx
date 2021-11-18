import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
