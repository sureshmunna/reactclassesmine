import { Component } from "react";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

class App extends Component {
  render (){
    return <div>
      <Navbar/>
      <Layout/>
    </div>
  }
}
export default App