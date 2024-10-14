const TemplateExpression = () => {
    const name = "Luis Otávio"
    const data = {
        age: 20,
        job:"Programmer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem? </h1>
            <p>Voce atua como: {data.job} e sua idade é {data.age} </p>
            <p> 4 + 4 = {4 + 4} </p>
            <p> {console.log("Jsx react")} </p>
        </div>
    )
}

export default TemplateExpression