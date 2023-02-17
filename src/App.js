import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [style, setStyle] = useState({background: "cornflowerblue"})
  const [childs, setChilds] = useState([])
  const handleClolor = () =>{
    setStyle({background: "goldenrod"})
  }

  const handleAdd = () =>{
    setChilds([...childs, <div className='child'> </div>])
  }
  const handleRemove = () =>{
    setChilds(childs.slice(0, childs.length-1))
  }
  return (
    <div className="main-container">
      <div className="display-container" style={style} >
      {childs}
      </div>
      <div className='buttons'>
        <button onClick={handleClolor}>Change color</button>
        <button onClick={handleAdd}>Add Child</button>
        <button onClick={handleRemove}>Remove Child</button>
      </div>
    </div>
  );
}
