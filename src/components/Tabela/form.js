import React, { Component } from 'react';
import FormValidator from '../../util/FormValidator';
import PopUp from '../../util/PopUp';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome:'',
            email: '',
            telefone: '',
        }

        this.validaForm = new FormValidator([
            {
                campo:'nome',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },

            {
                campo:'email',
                metodo:'isEmail',
                validoQuando: true,
                mensagem: 'Entre com um email valido'
            },

            {
                campo:'telefone',
                metodo:'isMobilePhone',
                args: ['pt-BR'],
                validoQuando: true,
                mensagem: 'Entre com um telefone valido'
            },
        ])
    }

    inputListener = event => {
        const { name, value } = event.target; 
        this.setState( { [name]: value });
    }

    submitForm = () => {
        const validacao = this.validaForm.valida(this.state);
        
        if(validacao.isValid) {
            this.props.submitListener(this.state);
            this.setState({ nome: '', email: '', telefone: '' });
            PopUp.exibePopup('success', 'Contratante salvo com sucesso');
        }
        else{
            const { nome, email, telefone } = validacao;
            const campos = [nome, email, telefone];

            const camposInvalidos = campos.filter(elem => elem.isInvalid);

            camposInvalidos.forEach( campo => {
                PopUp.exibePopup('error', campo.mensagem);
            })
        }
    }

    render() {
        
        const { nome, email, telefone } = this.state;

        return (
            <div className="row">
                <br />

                <h4 className="truncate">Cadastrar novos usuários</h4>

                <form>

                    <div className="row">
                        <div className="input-field col s4">
                            <input 
                                placeholder="Nome" 
                                id="nome" 
                                type="text" 
                                className="validate" 
                                name="nome"
                                value={ nome }
                                onChange={ this.inputListener }
                            />
                        </div>
                        <div className="input-field col s4">
                            <input 
                                placeholder="Email" 
                                id="email" 
                                type="text" 
                                className="validate" 
                                name="email"
                                value={ email }
                                onChange={ this.inputListener }
                            />
                        </div>
                        <div className="input-field col s4">
                            <input 
                                placeholder="Telefone" 
                                id="telefone" 
                                type="text" 
                                className="validate" 
                                name="telefone"
                                value={ telefone }
                                onChange={ this.inputListener }
                            />
                        </div>
                    </div>

                    <button onClick={ this.submitForm } className="waves-effect waves-light btn right" style={ {marginRight :'0.75rem'} } type="button">Salvar</button>

                </form>
            </div>
        )
    }
}

export default Form
