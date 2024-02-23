import { useState } from "react";
import "./App.css";
import SingleColor from "./components/SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      const colors = new Values(color).all(10);
      setList(colors);
      // console.log(list);  
    }
    catch(error){
setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input className={`${error?'error':null}`} value={color}  placeholder="#f15025" onChange={(e) => setColor(e.target.value) } />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {
          list.map((color,index)=>{
console.log(color);
return(<SingleColor key={index} {...color} index={index}/>);
        })}
      </section>
    </>
  );
}

export default App;
