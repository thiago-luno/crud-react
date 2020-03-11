import React, { Component } from 'react'

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.colunas = [];
        this.linhas = [];
        this.linha = {};
    }

    montarLinhas() {
        let linhas = [];
        this.props.colunas.forEach(coluna => {
            this.props.dado.forEach(dado => {

                let linha = {};

                linha[coluna] = dado[coluna];
                this.linhas.push(linha);
            });

        });

        console.log('this.linhas', linhas)
    }

    render() {
        
        this.colunas  = this.props.colunas.map( (coluna,index) => 
            <th key={ index }>{ coluna }</th>
        );  

        this.montarLinhas();

        return (
            <div>
                <table className="centered highlight">
                    <thead>
                        <tr>
                            { this.colunas }
                        </tr>
                    </thead>

                    <tbody>       
                        {this.linhas.map(linha => {
                            return <tr><td>{linha.nome}</td></tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;
