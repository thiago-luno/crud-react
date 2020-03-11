import React, { Component } from 'react'

export class Thead extends Component {
    render() {
        
        const { ordernar } = this.props;

        const style = {
            thead : {
                cursor: 'pointer',
                userSelect: 'none'
            }
        }

        return (
            <thead>
                <tr>
                    <th>
                        <span className="valign-wrapper">
                            Nome  
                            <i className="material-icons valign-wrapper" style={ style.thead } onClick={() => ordernar('nome')}>expand_less</i>
                        </span> 
                    </th>
                    
                    <th>
                        <span className="valign-wrapper">
                            Email 
                            <i className="material-icons"  style={ style.thead } onClick={() => ordernar('email')}>expand_less</i>
                        </span>
                    </th>


                    <th>
                        <span className="valign-wrapper">
                            Telefone 
                            <i className="material-icons"  style={ style.thead } onClick={() => ordernar('telefone')}>expand_less</i>
                        </span>
                    </th>

                    <th>Remover</th>
                </tr>
            </thead>  
        )
    }
}

export default Thead
