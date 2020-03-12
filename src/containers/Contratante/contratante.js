import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/navbar';
import ContratanteAPI from '../../api/contratanteAPI';
import DataTable from '../../components/DataTable/dataTable';

class Contratante extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contratantes: []   
        }

        this.contratanteAPI = new ContratanteAPI();
    }

    componentDidMount() {
        this.contratanteAPI.getContratante()
            .then(d => this.setState( { contratantes: [...this.state.contratantes, ...d.data] } ));
    }

    render() {

        return (
            <Fragment>
                <Navbar />
                <div className="content">
                    <div className="container">
                        <h3 className="section-title">Clientes</h3>

                            <DataTable  dado={this.state.contratantes} colunas={['telefone','nome','email']}/>
                           
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contratante;
