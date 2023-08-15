import React from 'react'
import './../styles/Parent.css';
export default function Parent() {
    let [model,setModel] = useState('')


    function showModel() {
    
      let a =createElement("h3", { style: { color: "black" } }, 'Model Content',createElement("h5", { style: { color: "black" } }, 'This is the model content'))
      setModel( a )
    }
    
  return (
    <div className="parent">
          <h1>Parent Component</h1>
          <div className="child">
            <h2>Child Component</h2>
            <button onClick={showModel}>Show Model</button>
          {model}
          </div>
        </div>
    
  )
}
