import React from 'react';
import Garrafa from "./Garrafa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mostrar : true
    };
}
removerCabecalho = () =>{
  this.setState({mostrar: false});
}

render() {
  const {mostrar} = this.state;

  if(mostrar === true){
    var meuCabecalho = <Garrafa/>
  }

  return (
    <div>
      {meuCabecalho}
      <button type="button" onClick={this.removerCabecalho}>Remover Cabecalho </button>
    </div>
   
  )
}
}
export default App;