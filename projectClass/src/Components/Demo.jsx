import { Component } from "react";

class Demo extends Component {
    constructor(){
        super();
        this.state={
            password : "Raj@123",
            otp :546789,
        };
    }
    render(){
        console.log(this.state);

        return (
            <div>
                <h1>
                    state in CBC
                </h1>
                <h1>{this.state.password}</h1>
                <h1>{this.state.otp}</h1>
                <button onClick={()=>{
                    this.setState({password : "raj@1111"})
                }}>Update Pasword</button>
                <h1>{this.state.otp}</h1>
                <button onClick={()=>{
                    this.setState({otp:231456})
                }}>Resend OTP</button>
            </div>
        )
        
    }
}

export default Demo; 