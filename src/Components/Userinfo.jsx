// import profilepic from "../assets/profilepic.png";
export default function UserInfo() {
  const userdata = JSON.parse(window.localStorage.getItem("userinfo"));
  const genreslected = JSON.parse(
    window.localStorage.getItem("selectedGenres")
  );
  return (
    <>
      <div>
        <p>{userdata.name}</p>
        <p>{userdata.email}</p>
        <p>{userdata.username}</p>
        {genreslected.map((movies) => {
          return (
            <div
              key={movies}
              style={{
                background: "red",
                height: "20px",
                width: "fit-content",
              }}
            >
              {movies}
            </div>
          );
        })}
      </div>
    </>
  );
}
