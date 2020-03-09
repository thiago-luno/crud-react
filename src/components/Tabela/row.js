import React, { Component } from 'react'

export class Row extends Component {

    render() {
        const { contratante, removerContratante, index } = this.props;
        
        return (
            <tr key={index}>
                <td>{contratante.nome}</td>
                <td>{contratante.email}</td>
                <td>{contratante.telefone}</td>
                <td><button className="waves-effect waves-light btn" onClick={() => removerContratante(index)}>Remover</button></td>
            </tr>
        )
    }
}

export default Row
