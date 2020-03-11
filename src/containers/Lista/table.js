import React, { Component } from 'react';
import Thead from './thead';
import Row from './row'

class Table extends Component {

    render() {

        let rows = [];
        const { contratantes, removerContratante, ordernar } = this.props;

        contratantes.forEach( (contratante, index) => {

            if(contratante.nome.toUpperCase().indexOf(this.props.query.toUpperCase()) === -1) 
                return;
            
            rows.push(
                <Row contratante = { contratante }  removerContratante = { removerContratante } key={ index } index={ index } />
            )
        });

        return (
            <table className="highlight">
                <Thead ordernar = { ordernar }/>

                <tbody>{ rows }</tbody>
            </table>
        )
    }
}

export default Table
