import { useRef } from "react";

let UncontrolledForm = () => {
  let firstName = useRef();
  let lastName = useRef();
  let emai = useRef();
  //let submitRef =useRef();
  let submitRef = (e) => {
    e.preventDefault();
    let firstref = firstName.current.value;
    let secondref = lastName.current.value;
    let emailref = emai.current.value;
    console.log(firstref);
    console.log(secondref);
    console.log(emailref);
    firstName.current.value = "";
    lastName.current.value = "";
    emai.current.value = "";
  };

  return (
    <>
      <section>
        <form>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" ref={firstName} />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" ref={lastName} />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" ref={emai} />
          </div>
          <div className="form-group">
            <input type="submit" onClick={submitRef} text="submit" />
          </div>
        </form>
      </section>
    </>
  );
};
export default UncontrolledForm;
