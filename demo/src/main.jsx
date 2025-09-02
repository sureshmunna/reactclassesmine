import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    <div>
      <ol type='1' start={15} reversed>
        <li>list</li>
        <li>list item</li>
        <li> item</li>
        <li>listitem</li>
        <li>item list</li>
      </ol>
    </div>
    <div>
      <form action="">
        <label htmlFor="">F : Name</label>
        <input type="text" name='firstname' required placeholder='fname'  /><br></br>
        <label htmlFor="">L : Name</label>
        <input type="text" name='lastname' required placeholder='lname' /><br></br>
        <label htmlFor="">Email :</label>
        <input type="email" name='email' placeholder='email' required  /><br></br>
        <label htmlFor="">DOB :</label>
        <input type="date" name='dateofbirth' /><br></br>
      </form>
    </div>
    <div>
      <table border={1} cellPadding={15} cellSpacing={2}>
        <thead>
          <tr>
              <th>h1</th>
              <th>h2</th>
              <th>h3</th>
              <th>h4</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>d1</td>
            <td>d2</td>
            <td>d3</td>
            <td>d4</td>
          </tr>
          <tr>
            <td>data</td>
            <td>d2</td>
            <td>data</td>
            <td>d3</td>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
)
