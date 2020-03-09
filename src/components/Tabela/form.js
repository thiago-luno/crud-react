import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome:'',
            email: '',
            telefone: ''
        }

        this.handlerNameChange = this.handlerNameChange.bind(this);
        this.handlerEmailChange = this.handlerEmailChange.bind(this);
        this.handlerTelefoneChange = this.handlerTelefoneChange.bind(this);

    }

    handlerNameChange = (event) => this.setState( { nome: event.target.value });
    handlerEmailChange = (event) => this.setState( { email: event.target.value });
    handlerTelefoneChange = (event) => this.setState( { telefone: event.target.value });

    render() {
        return (
            <div className="row">
                <br />

                <h4 className="truncate">Cadastrar novos usuários</h4>

                <form>

                    <div className="row">
                        <div class="input-field col s4">
                            <input 
                                placeholder="Nome" 
                                id="first_name" 
                                type="text" 
                                class="validate" 
                                value={ this.state.nome }
                                onChange={ this.handlerNameChange }
                            />
                        </div>
                        <div class="input-field col s4">
                            <input 
                                placeholder="Email" 
                                id="email" 
                                type="text" 
                                class="validate" 
                                value={ this.state.email }
                                onChange={ this.handlerEmailChange }
                            />
                        </div>
                        <div class="input-field col s4">
                            <input 
                                placeholder="Telefone" 
                                id="telefone" 
                                type="text" 
                                class="validate" 
                                value={ this.state.telefone }
                                onChange={ this.handlerTelefoneChange }
                            />
                        </div>
                    </div>

                    <button className="waves-effect waves-light btn right" style={ {marginRight :'0.75rem'} }>Salvar</button>

                </form>
            </div>
        )
    }
}

export default Form
