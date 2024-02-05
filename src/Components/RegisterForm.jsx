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
  const [errorvalue, seterrorvalue] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  const navigate = useNavigate();
  const HandleError = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      seterrorvalue((prev) => {
        return {
          ...prev,
          name: (
            <p style={{ color: "rgba(255, 0, 0, 1)" }}>"Name is required"</p>
          ),
        };
      });
      isError = true;
    } else {
      seterrorvalue((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formValues.username.trim().length === 0) {
      seterrorvalue((prev) => {
        return {
          ...prev,
          username: (
            <p style={{ color: "rgba(255, 0, 0, 1)" }}>
              "UserName is required"
            </p>
          ),
        };
      });
      isError = true;
    } else {
      seterrorvalue((prev) => {
        return { ...prev, username: null };
      });
    }
    if (formValues.email.trim().length === 0) {
      seterrorvalue((prev) => {
        return {
          ...prev,
          email: (
            <p style={{ color: "rgba(255, 0, 0, 1)" }}>"Email is required"</p>
          ),
        };
      });
      isError = true;
    } else {
      seterrorvalue((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formValues.mobile.trim().length === 0) {
      seterrorvalue((prev) => {
        return {
          ...prev,
          mobile: (
            <p style={{ color: "rgba(255, 0, 0, 1)" }}>"Mobile is required" </p>
          ),
        };
      });
      isError = true;
    } else {
      seterrorvalue((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formValues.registerbox === false) {
      seterrorvalue((prev) => {
        return {
          ...prev,
          registerbox: (
            <p style={{ color: "rgba(255, 0, 0, 1)" }}>
              "Check this box if you want to proceed"
            </p>
          ),
        };
      });
      isError = true;
    } else {
      seterrorvalue((prev) => {
        return { ...prev, registerbox: null };
      });
    }
    if (isError) {
      return;
    } else {
      window.localStorage.setItem("userinfo", JSON.stringify(formValues));
      navigate("./info");
    }
  };

  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "rgba(114, 219, 115, 1)",
          fontFamily: "cursive",
          fontStyle: "italic",
          fontSize: "40px",
        }}
      >
        Super app
      </h1>
      <h6
        style={{
          color: "rgba(255, 255, 255, 1)",
          fontFamily: "serif",
          height: "25px",
          fontSize: "13px",
          fontWeight: 400,
        }}
      >
        Create your new account
      </h6>
      <input
        style={{
          height: 40,
          width: "35%",
          background: "rgba(41, 41, 41, 1)",
          borderRadius: 3.82,
          borderBlockColor: `${errorvalue.name ? "red" : "black"}`,
          color: "white",
        }}
        value={formValues.name}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="   Name"
      />
      <p>{errorvalue.name}</p>
      <input
        style={{
          height: 40,
          width: "35%",
          background: "rgba(41, 41, 41, 1)",
          borderRadius: 3.82,
          borderBlockColor: `${errorvalue.username ? "red" : "black"}`,
          color: "white",
        }}
        value={formValues.username}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="   UserName"
      />
      <p>{errorvalue.username}</p>
      <input
        style={{
          height: 40,
          width: "35%",
          background: "rgba(41, 41, 41, 1)",
          borderRadius: 3.82,
          borderBlockColor: `${errorvalue.email ? "red" : "black"}`,
          color: "white",
        }}
        value={formValues.email}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="   Email"
      />
      <p>{errorvalue.email}</p>
      <input
        style={{
          height: 40,
          width: "35%",
          background: "rgba(41, 41, 41, 1)",
          borderRadius: 3.82,
          borderBlockColor: `${errorvalue.mobile ? "red" : "black"}`,
          color: "white",
        }}
        value={formValues.mobile}
        onChange={(e) => {
          setformValues((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
        type="text"
        placeholder="   Mobile"
      />
      <p>{errorvalue.mobile}</p>
      <label htmlFor="registerbox" style={{ color: "rgba(124, 124, 124, 1)" }}>
        <input
          checked={formValues.registerbox}
          onChange={(e) => {
            setformValues((prev) => {
              return { ...prev, registerbox: e.target.checked };
            });
          }}
          id="registerbox"
          name="registerbox"
          type="checkbox"
          style={{
            borderBlockColor: `${errorvalue.registerbox ? "red" : "black"}`,
          }}
        />
        Share my registration data with Superapp
      </label>
      <p>{errorvalue.registerbox}</p>
      <button
        onClick={HandleError}
        style={{
          background: "rgba(114, 219, 115, 1)",
          height: 40,
          width: "35%",
          borderRadius: 28,
        }}
      >
        SIGN UP
      </button>
      <p
        style={{
          marginLeft: "5px",
          wordWrap: "break-word",
          width: "35%",
          fontSize: 12,
          color: "rgba(124, 124, 124, 1)",
        }}
      >
        By clicking on Sign up. you agree to Superapp
        <span style={{ fontFamily: "Roboto", color: "rgba(114, 219, 115, 1)" }}>
          &nbsp;Terms and Conditions of Use
        </span>
      </p>
      <p
        style={{
          marginLeft: "5px",
          wordWrap: "break-word",
          width: "35%",
          fontSize: 12,
          color: "rgba(124, 124, 124, 1)",
        }}
      >
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp
        <span style={{ fontFamily: "Roboto", color: "rgba(114, 219, 115, 1)" }}>
          Privacy Policy
        </span>
      </p>
    </div>
  );
}
