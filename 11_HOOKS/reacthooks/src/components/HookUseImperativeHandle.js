import { useRef } from 'react'  // Importa o hook 'useRef' do React, que é usado para criar uma referência mutável que persiste entre renderizações

import SomeComponent from './SomeComponent'  // Importa o componente 'SomeComponent', que será usado dentro do componente atual

const HookUseImperativeHandle = () => {  // Define o componente funcional 'HookUseImperativeHandle'
    const componentRef = useRef()  // Cria uma referência chamada 'componentRef' usando o hook 'useRef'. Essa referência será atribuída ao componente filho

  return (  // Retorna o JSX a ser renderizado pelo componente
    <div>  {/*Cria uma div para envolver o conteúdo*/}
        <h2>useImperativeHandle</h2>  {/*Exibe o título 'useImperativeHandle' na página*/}
        {/* Renderiza o componente 'SomeComponent' e passa a referência 'componentRef' a ele */}
        <SomeComponent ref={componentRef}/>  
        {/* Cria um botão que, ao ser clicado, chama a função 'validate' do componente referenciado (via 'componentRef'*/}
        <button onClick={() => componentRef.current.validate()} >Validate</button>  
        <hr />  {/* Adiciona uma linha horizontal para separar o conteúdo */}
    </div>
  )  // Fecha a div
}

export default HookUseImperativeHandle  // Exporta o componente 'HookUseImperativeHandle' para ser usado em outros arquivos

//useRef: O hook useRef é utilizado para criar uma referência mutável para um elemento DOM ou um componente React. Ele retorna um objeto com a propriedade current, que pode ser acessada e alterada diretamente. A principal vantagem de usar useRef é que ele persiste entre renderizações, ou seja, a referência não é re-inicializada a cada renderização.

//useImperativeHandle: Esse hook é usado para personalizar os valores da referência que são expostos para o componente pai. Normalmente, quando você usa ref em um componente filho, ele expõe o DOM ou os métodos do componente. O useImperativeHandle permite controlar quais métodos ou propriedades do componente serão acessíveis quando a referência é usada no componente pai. Neste caso, o método validate do componente SomeComponent é exposto para o componente pai por meio da referência componentRef.
