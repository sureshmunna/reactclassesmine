import { useState } from "react";

let SingleControlledForm = () => {
  let [Formdata, Setformdata] = useState({
    course: "java full stack",
    gender: "",
    adress: "",
    age:undefined,
    file:null
  });
  let { course, adress,age,file } = Formdata;
  let handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    Setformdata({ ...Formdata, [name]: type === "checkbox" ? checked : value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(Formdata);
    Setformdata({ ...Formdata, course: "Java fullstack", gender: "", adress:"" });
  };
  let hangleFile=(e)=>{
      let { name, file } = e.target;
    Setformdata({ ...Formdata, [name]:file[0 ] });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select name="course" value={course} onChange={handleChange}>
          <option value="Java Full Stack">Java Full Stack</option>
          <option value="Phython full stack">Phython full stack</option>
          <option value="Devops">Devops</option>
        </select>
        <br />
        <br />
        <label htmlFor="">select Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={Formdata.gender === "Male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={Formdata.gender === "Female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Others"
          checked={Formdata.gender === "Others"}
          onChange={handleChange}
        />
        Others
        <textarea
          name="adress"
          value={adress}
          onChange={handleChange}
          rows={4}
          cols={40}
          id=""
        ></textarea>
        <label htmlFor="">select age</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
        <label htmlFor="">Chose Filr</label>
        <input type="file" name="file" id="" onChange={hangleFile}/>
        <br />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </>
  );
};
export default SingleControlledForm;
