import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand} </li>
            <li> KM: {km} </li>
            <li>Cor: {color}</li>
        </ul>
        {newCar ===  true ? (
            <div>
                <p>Este carro é novo</p>
            </div>
        ) : (
            <div>
                <p>Este carro não é novo</p>
            </div>
        )}
    </div>
  )
}

export default CarDetails