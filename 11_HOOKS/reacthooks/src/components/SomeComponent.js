import { forwardRef, useRef, useImperativeHandle } from 'react'  // Importa os hooks 'forwardRef', 'useRef' e 'useImperativeHandle' do React

const SomeComponent = forwardRef((props, ref) => {  // Define o componente 'SomeComponent' usando 'forwardRef' para permitir que o componente pai acesse sua referência
    const localInputRef = useRef()  // Cria uma referência local chamada 'localInputRef' para o campo de entrada (input)

    useImperativeHandle(ref, () => {  // Usando 'useImperativeHandle' para expor métodos específicos do componente para o componente pai
        return {  // Retorna um objeto contendo os métodos que serão acessíveis no componente pai
            validate: () => {  // Método 'validate' que é exposto ao componente pai
                if(localInputRef.current.value.length > 3) {  // Se o valor inserido no campo de entrada for maior que 3 caracteres
                    localInputRef.current.value = ""  // Limpa o campo de entrada
                }
            }
        }
    })

  return (  
    <div>  {/**Cria uma div para envolver o conteúdo */}
        <p>Insira no maximo 3 caracteres</p>  {/**Exibe uma mensagem para o usuário informando o limite de caracteres */}
        {/* Campo de entrada com referência local 'localInputRef' */}
        <input type="text" ref={localInputRef} />  
    </div>
  )
})  // Fecha o componente 'SomeComponent' usando 'forwardRef'

export default SomeComponent  // Exporta o componente 'SomeComponent' para ser usado em outros arquivos
