import styles from './DetailsCar.module.css'
const  DetailsCar  = ({cars}) => {
  return (
    <div className={styles.card}>
       <h1>Carro</h1>
       <h2>{cars.marca}</h2>
       <p> Cor: {cars.cor} </p>
       <p> KM: {cars.km} </p>

        
    </div>
  )
}

export default DetailsCar