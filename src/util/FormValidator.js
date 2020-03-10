import validator from 'validator';

class FormValidator {

    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valido() {
        const validacao = {};

        this.validacoes.map(
            regra => (validacao[regra.campo] = { isInvalid: false, mensagem: '' })
        );

        return { isValid: true, ...validacao };
    }

    valida(state) {
        
        let validacao = this.valido();

        this.validacoes.forEach(regra => {

            const campoValor = state[regra.campo.toString()];
            const args = regra.args || [];
            const metodoValidacao = validator[regra.metodo];
            
            if(metodoValidacao(campoValor, args) !== regra.validoQuando) {

                validacao[regra.campo] = {
                    isInvalid: true,
                    mensagem: regra.mensagem
                }

                validacao.isValid = false;
            } 
        });

        return validacao;
    }
}

export default FormValidator;