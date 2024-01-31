import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function RegisterForm() {
  const [formValues, setformValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errorvalue,seterrorvalue] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  })
  const navigate =useNavigate()
  const HandleError=()=>
  {
    let isError = false
    if(formValues.name.trim().length===0){
        seterrorvalue((prev)=>{
            return{...prev,name:"Name is required"}
        })
        isError = true
    }
    else{
        seterrorvalue((prev)=>{
            return{...prev,name:null}
        })
    }
    if(formValues.username.trim().length===0){
        seterrorvalue((prev)=>{
            return{...prev,username:"UserName is required"}
        })
        isError = true
    }
    else{
        seterrorvalue((prev)=>{
            return{...prev,username:null}
        })
    }
    if(formValues.email.trim().length===0){
        seterrorvalue((prev)=>{
            return{...prev,email:"Email is required"}
        })
        isError = true
    }
    else{
        seterrorvalue((prev)=>{
            return{...prev,email:null}
        })
    }
    if(formValues.mobile.trim().length===0){
        seterrorvalue((prev)=>{
            return{...prev,mobile:"Mobile is required"}
        })
        isError = true
    }
    else{
        seterrorvalue((prev)=>{
            return{...prev,mobile:null}
        })
    }
    if(formValues.registerbox === false){
        seterrorvalue((prev)=>{
            return{...prev,registerbox:"Tick mark is required"}
        })
        isError = true
    }
    else{
        seterrorvalue((prev)=>{
            return{...prev,registerbox:null}
        })
    }
    if (isError){
        return
    }
    else{
        window.localStorage.setItem('userinfo',JSON.stringify(formValues))
        navigate('./info')
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <input
        value={formValues.name}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Name"
      /> 
      <p>{errorvalue.name}</p>
      <input
        value={formValues.username}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="UserName"
      />
      <p>{errorvalue.username}</p>
      <input
        value={formValues.email}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="Email"
      />
      <p>{errorvalue.email}</p>
      <input
        value={formValues.mobile}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
        type="text"
        placeholder="Mobile"
      />
      <p>{errorvalue.mobile}</p>
      <label htmlFor="registerbox">
        <input
          checked={formValues.registerbox}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, registerbox: e.target.checked};
            });
          }}
          id="registerbox"
          name="registerbox"
          type="checkbox"
        />
        Share my registration data with Superapp
      </label>
      <p>{errorvalue.registerbox}</p>
      <button onClick={HandleError} style={{background:"green"}}>SignUp</button>
    </div>
  );
}
