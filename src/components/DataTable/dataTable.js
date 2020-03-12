import React, { Component } from 'react'

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.colunas = [];
        this.linhas = [];
    }

    montarLinhas() {
        this.props.dado.forEach(dado => {
            
            let linha = {};
            
            this.props.colunas.forEach(coluna => {
                linha[coluna] = dado[coluna];
            });

            this.linhas.push(linha);
        });
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
                        {this.linhas.map((linha,index) => {

                            let tr = [];
                            let td = [];
                            let count = 0;

                            for (let key in linha) {
                                td.push(<td key={count}>{linha[key]}</td>);
                                count++;
                            }

                            tr.push(<tr key={index}>{td}</tr>)

                           return tr;
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;
