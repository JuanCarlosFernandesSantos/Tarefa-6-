import React from 'react';
class Cabecalho extends React.Component {
  constructor(props) {
      super(props);
      
  }
  render() {
      return (
          <div>
             
              <h1>
              Esse é o conteúdo do componente Cabeçalho
              </h1>
          </div>
      )
  }
}

export default Cabecalho;

// Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
//• Método "render" para renderizar a seguinte mensagem na tela do browser:
//Esse é o conteúdo do componente Cabeçalho.