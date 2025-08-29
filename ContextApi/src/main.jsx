import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalContext from './Context/GlobalContext';
import GlobalContext2 from './Context/GlobalContext2.jsx';
import Aa from './Components2/Aa.jsx';
import App2 from './App2.jsx';
import GlobalContext3 from './Context/GlobalContext3.jsx';
import App3 from './App3.jsx';
import GlobalContext4 from './Context/GlobalContext4.jsx';
import App4 from './App4.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <GlobalContext>
        <App/>
    </GlobalContext>
    <GlobalContext2>
        <App2 />
    </GlobalContext2>
    <GlobalContext3>
        <App3/>
    </GlobalContext3>
    <GlobalContext4>
        <App4/>
    </GlobalContext4>
 
  </>
    
)
