import { useState } from "react"
import { json } from "react-router-dom"

export default function Notes() {
  const [notes, setnotes] = useState(
    JSON.parse(window.localStorage.getItem("notes"))
  );

  const Handlechange = (e) => {
    setnotes(e.target.value);
    window.localStorage.setItem("notes", JSON.stringify(e.target.value));
  };

  return (
    <div>
      <textarea value={notes} onChange={Handlechange}></textarea>
    </div>
  );
}