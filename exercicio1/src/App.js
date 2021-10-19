import React from 'react';
class Cabecalho extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          corFavorita: "vermelho"
      };
  }
  render() {
      return (
          <div>
             
              <h1>
                  A minha cor favorita é {this.state.corFavorita}
              </h1>
          </div>
      )
  }
}

export default Cabecalho;

//Crie uma aplicação React com um componente de classe chamado "Cabecalho", que contenha:
//• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
//corFavorita: vermelho
//• Método "render" para renderizar a seguinte mensagem na tela do browser:
//A minha cor favorita é <exibir o valor do objeto state>