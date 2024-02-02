import UserInfo from "../../Components/Userinfo";
import Weather from "../../Components/Weather";
import Notes from "../../Components/Notes";
function Showcase() {
  return (
    <div>
      <h1>Showcase</h1>
      <div>
        <UserInfo/>
        <Weather/>
        <Notes/>

      </div>
    </div>
  );
}

export default Showcase;
