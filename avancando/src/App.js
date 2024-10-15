import { useState } from 'react';
import './App.css';

import Cidade from "./assets/como-tornar-uma-cidade-inteligente.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListaRender from './components/ListaRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './CarDetails';
import Fragment from './Fragment';
import Container from './Container';
import ExecuteFunction from './ExecuteFunction';



function App() {
  const [userName] = useState("Marilian")

  const cars = [
    {id: 1, brand: "Ferrari", color: "amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "roxo", newCar: false, km: 34344},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 2234}
  ] 
  
  function showMessage(){
    console.log("Evento do component pai")
  }

  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/*imagem
     {/**imagem em public */}
     <div>
      <img src="/flore.jpg" alt="Paisagem" />
     </div>
      {/**imagem em public */}
      <div>
        <img src={Cidade} alt="Cidade" />
        
      </div>
      <ManageData/>
      <ListaRender/>
      <ConditionalRender/>
      {/**props */}
      <ShowUserName name={userName} />
      {/**destructuring*/}
      <CarDetails brand="VW" km={100000} color="azul"newCar={false} />
      {/**reaproveitando*/}
      <CarDetails brand="Honda" color="Branco" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={343420} newCar={false}/>
      {/**loop em array de objetos */}
      {cars.map((car)=>(
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      {/**fragment */}
      <Fragment propFragment="teste"/>

      {/**children */}
      <Container myValue="testing">
        <p >e este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando container</h5>
      </Container>
      {/**executar funcao*/}
      <ExecuteFunction myFunction={showMessage}/>
    </div>
  );
}

export default App;
