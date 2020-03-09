import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import orderBy from 'lodash/orderBy'
import Table from './components/Tabela/table';
import Search from './components/Tabela/search';
import Form from './components/Tabela/form';

class App extends Component {

  state = {
    contratantes : [
      {nome: "Thiago", email: "thiago@thiago", telefone: "(19) 98160-9514"},
      {nome: "Pedro", email: "pedro@pedro", telefone: "(19) 98160-9514"},
      {nome: "João", email: "joao@joao", telefone: "(19) 88160-9514"},
      {nome: "Maria", email: "maria@maria", telefone: "(19) 98160-9514"},
      {nome: "Adriano", email: "thiago@thiago", telefone: "(19) 98160-9514"},
    ],
    order: 'desc',
    query: '',
  };

  removerContratante = (index) => {
      this.setState(
        { contratantes : this.state.contratantes.filter( (item,  pos) => index !== pos) }
      )
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

  render() {
    return (
      <div className="container">
        <Search query = { this.state.query } change={ this.onQueryChange }/>
        <Table  contratantes={ this.state.contratantes } removerContratante = { this.removerContratante } ordernar={ this.ordernar } query = { this.state.query }/>
        <Form />
      </div>
    );
  }
}

export default App;
