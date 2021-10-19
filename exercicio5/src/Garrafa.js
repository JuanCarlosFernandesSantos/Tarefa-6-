import React from 'react';

class Garrafa extends React.Component {
    componentWillMount() {
        alert('O componente chamado Cabecalho está preste a ser desmontado.')
    }

    render() {
        return (
            <div><h1>Olá, React!</h1></div>
        )
    }
}

export default Garrafa;