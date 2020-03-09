import React, { Component } from 'react'

export class Thead extends Component {
    render() {
        
        const { ordernar } = this.props;

        return (
            <thead>
                <tr>
                    <th>Nome <i className="material-icons" onClick={() => ordernar('nome')}>expand_less</i></th>
                    <th>Email <i className="material-icons" onClick={() => ordernar('email')}>expand_less</i></th>
                    <th>Telefone <i className="material-icons" onClick={() => ordernar('telefone')}>expand_less</i></th>
                    <th>Remover</th>
                </tr>
            </thead>  
        )
    }
}

export default Thead
