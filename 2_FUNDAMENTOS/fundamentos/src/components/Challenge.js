
const Challenge = () => {
    const a = 5
    const b = 5
    
    return (
        <div>
            <div>
                <p>A = {a}</p>
                <p>B = {b} </p>  
                <button onClick={() => console.log(a + b)} > Somar </button>
            </div>
           
        </div>
    )
}

export default Challenge
