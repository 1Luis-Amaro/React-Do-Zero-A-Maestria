
import './App.css';
import DetailsCar from './components/DetailsCar';

const carros = [
  {id: 1, marca: "ferrari", cor:"Roxa", km: 21321},
  {id: 2, marca: "mercedes", cor:"branca", km: 341321},
  {id: 3, marca: "BMW", cor:"branca", km: 546554},

]

function App() {
  return (
    <div className="App">
     <h1>Desafio CSS</h1>
     <div className='car-container'>
     {carros.map((cars)=>(
       <DetailsCar  cars={cars}
       key={cars.id}
       marca={cars.marca}
       cor={cars.cor}
       km={cars.km}
       
       />

     ))}

     </div>
    </div>
  );
}

export default App;
