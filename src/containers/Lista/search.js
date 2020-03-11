import React, { Component } from 'react';
import debounce from 'lodash/debounce'

export class Search extends Component {

    constructor(props) {
        super(props)
        this.onQueryChange = this.onQueryChange.bind(this)
        
        this.state = {
            query : this.props.query
        }
        
        this.clear = this.clear.bind(this);
        this.servicesValue = debounce(this.servicesValue, 300);
    }
    
    onQueryChange(e) {
        this.setState({ query : e.target.value });
        this.servicesValue(e.target.value);
    }

    servicesValue = (value) => {
        this.props.change(value);
    }
    
    clear() {
        this.props.change('');
        this.setState({ query : '' });
    }

    render() {

        const styles = {
            iconClose : {
                position:  'absolute',
                right: '0',
                top: '15px',
                cursor: 'pointer',
                color: '#4db6ac',
                userSelect: 'none'
            }
        }
        
        return (
            <div className="input-field col s6">
                <input 
                    placeholder="Pesquisar..."
                    id="pesquisa" 
                    type="text" 
                    className="validate" 
                    value={ this.state.query } 
                    onChange={ this.onQueryChange }
                />
                { this.state.query ? <i className="material-icons" style={ styles.iconClose } onClick={ this.clear }>clear</i> : null }
            </div>
        )
    }
}

export default Search
