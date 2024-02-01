export default function Chips({ data, selectedGenres, setselectedGenres }) {
  const HandleClick = () => {
    if (selectedGenres.includes(data.id)) {
      setselectedGenres((prev) => prev.filter((Item) => Item !== data.id));
    } else {
      setselectedGenres((prev) => [...prev, data.id]);
    }
  };
  return(
  <div>
    {data}
    &nbsp;&nbsp;
    <span onClick={HandleClick}>X</span>
  </div>
  )
}
