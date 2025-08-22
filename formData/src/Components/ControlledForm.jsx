
import { useState } from "react";
import { useRef } from "react";

let ControlledForm = () => {
  let [firstName,setFirstName] = useState();
  let [lastName,setLastName] = useState();
  let [email,setEmail] =useState();
  //let submitRef =useRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <section>
        <form>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e) =>{setEmail(e.target.value)}}  />
          </div>
          <div className="form-group">
            <input type="submit" onClick={handleSubmit} text="submit" />
          </div>
        </form>
      </section>
    </>
  );
};
export default ControlledForm;
