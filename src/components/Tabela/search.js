import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props)
        this.onQueryChange = this.onQueryChange.bind(this)
    }

    onQueryChange(e) {
        this.props.change(e.target.value);
    }

    render() {

        const { query } = this.props; 
        
        return (
            <div className="input-field col s6">
                <input 
                    placeholder="Pesquisar..."
                    id="pesquisa" 
                    type="text" 
                    className="validate" 
                    value={ query } 
                    onChange={ this.onQueryChange }
                />
            </div>
        )
    }
}

export default Search
