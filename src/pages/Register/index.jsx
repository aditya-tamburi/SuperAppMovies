import RegisterForm from "../../Components/RegisterForm";
import formimage from "../../assets/formimage.png";

function Register() {
  return (
    <div>
      <div style={{ display: "flex", height: "100vh", width: "100wh" }}>
        <div style={{ width: "50%", position: "relative" }}>
          <div style={{  height: "100%",  width: "100%" , position: "absolute" }}>
            <img src={formimage} height= "100%" width="100%" ></img>
          </div>
          <div
            style={{
              bottom: "20%",
              position: "absolute",
              fontFamily : "cursive",
              color:"rgba(255, 255, 255, 1)",
              fontSize : "55px",
              marginLeft : "10px",
              fontWeight : "bold"
            
            }}
          >
            Discover new things on Superapp
          </div>
        </div>
        <div
          style={{ background: "black", width: "50%", alignContent: "center" }}
        >
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
