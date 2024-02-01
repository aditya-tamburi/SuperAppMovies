export default function Box({ data, selectedGenres, setselectedGenres }) {
  const HandleClick = () => {
    if (selectedGenres.includes(data.id)) {
      setselectedGenres((prev) => prev.filter((Item) => Item !== data.id));
    } else {
      setselectedGenres((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{ 
        background: data.color, 
        textAlign: "center", 
        border: `${selectedGenres.includes(data.id) ? "4px solid green" : "4px solid black" }`
    }}
      onClick={HandleClick}
    >
      <h1>{data.id}</h1>
      {data.image}
    </div>
  );
}
