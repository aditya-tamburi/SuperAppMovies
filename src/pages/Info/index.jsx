import Action from "../../assets/Action.png";
import Drama from "../../assets/Drama.png";
import Fantasy from "../../assets/Fantasy.png";
import Fiction from "../../assets/Fiction.png";
import Horror from "../../assets/Horror.png";
import Music from "../../assets/Music.png";
import Romance from "../../assets/Romance.png";
import Thriller from "../../assets/Thriller.png";
import Western from "../../assets/Western.png";
import Box from "../../Components/MovieBox";
import Chips from "../../Components/Chips";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={Action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={Drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={Fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={Fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={Horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={Music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={Romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={Thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={Western} />,
  },
];

function Info() {
  const [selectedGenres, setselectedGenres] = useState([]);
  console.log(selectedGenres);
  const navigate =useNavigate()
  return (
    <div>
      <h1>Info</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
        }}
      >
        {genres.map((genre) => (
          <Box
            key={genre.id}
            data={genre}
            selectedGenres={selectedGenres}
            setselectedGenres={setselectedGenres}
          />
        ))}
      </div>
      <div>
        {selectedGenres.map((movies) => (
          <Chips
            key={movies}
            data={movies}
            selectedGenres={selectedGenres}
            setselectedGenres={setselectedGenres}
          />
        ))}
      </div>
      {selectedGenres.length < 3 ? (
        <p style={{ color: "red" }}>Minimum 3 Genres to be selected</p>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          window.localStorage.setItem(
            "selectedGenres",
            JSON.stringify(selectedGenres)
          );
          navigate('/Showcase')
        }}
        disabled={selectedGenres.length < 3}
      >
        Next Page
      </button>
    </div>
  );
}

export default Info;
