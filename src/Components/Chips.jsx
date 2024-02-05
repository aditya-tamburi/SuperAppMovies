export default function Chips({ data, selectedGenres, setselectedGenres }) {
  const HandleClick = () => {
    if (selectedGenres.includes(data.id)) {
      setselectedGenres((prev) => prev.filter((Item) => Item !== data.id));
    } else {
      setselectedGenres((prev) => [...prev, data.id]);
    }
  };
  return(
  <div style={{color : "white" , background : "green" ,width:"fit-content" , height : 32  , border : "10px solid green" , borderRadius:"10px" , margin : "10px"}}>
    {data}
    &nbsp;&nbsp;&nbsp;
    <span onClick={HandleClick} >X</span>
  </div>
  )
}
