import React, { Component, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import orderBy from 'lodash/orderBy'
import Navbar from './components/Navbar/navbar';
import Table from './containers/Lista/table';
import Search from './containers/Lista/search';
import Form from './containers/Lista/form';
import PopUp from './components/PopUp/PopUp';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contratantes : [
        {nome: "Thiago", email: "thiago@thiago", telefone: "(19) 98160-9514"},
        {nome: "Pedro", email: "pedro@pedro", telefone: "(19) 98160-9514"},
        {nome: "João", email: "joao@joao", telefone: "(19) 88160-9514"},
        {nome: "Maria", email: "maria@maria", telefone: "(19) 98160-9514"},
        {nome: "Adriano", email: "thiago@thiago", telefone: "(19) 98160-9514"},
      ],

      order: 'desc',
      query: '',
    }
  }

  removerContratante = (index) => {
      this.setState(
        { contratantes : this.state.contratantes.filter( (item,  pos) => index !== pos) }
      );
      PopUp.exibePopup('error', 'Removido com sucesso');
  };

  ordernar = (column) => {
    const order = this.state.order === 'desc' ? 'asc' : 'desc';

    this.setState({ 
      contratantes : orderBy(this.state.contratantes, [column], [order]),
      order : order,
    })
  };

  onQueryChange = (query) => {
    this.setState({
      query : query,
    })
  }

  submitListener = contratante => {
    this.setState(
      { contratantes : [...this.state.contratantes, contratante] }
    )
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="content">
          <div className="container">
            <Search query = { this.state.query } change={ this.onQueryChange }/>
            <Table  contratantes={ this.state.contratantes } removerContratante = { this.removerContratante } ordernar={ this.ordernar } query = { this.state.query }/>
            <Form  submitListener={this.submitListener}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
