import {useState} from "react"
import './App.css';
import MyComponent from './components/MyComponent';
import Title from "./Title";

function App() {
  const n = 15
  const [name] = useState("Matheus")
  const redTitle = false


  return (
    <div className="App">
      {/** CSS GLOBAL*/}
      <h1>React com CSS</h1>
       {/** CSS de componente*/}
      <MyComponent/>
      <p>este paragrafo é do app.js</p>
      {/** inline css*/}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}} >
        Este elemento foi estilizado de forma inline
      </p>
      {/**css inline  dinamico*/}
      <h2 style={n > 10 ? ({color:"purple"}):({color: "pink"})}> CSS dinamico</h2>
      <h3 style={name === "Matheus" ? {color: "green", backgroundColor:"#000"}: null}> teste nome</h3>

       {/**classe dinamica*/}
       <h2 className={redTitle ? "red-title" : "title"} >Este titulo vai ter classe dinamica</h2>

       {/**CSS Modules */}
       <Title/>
    </div>
  );
} 

export default App;
