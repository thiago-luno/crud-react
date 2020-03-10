import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LinkWrapper extends Component {
    render() {
        return (
            <NavLink activeStyle={{fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.1)' }} { ...this.props } />
        )
    }
}

export default LinkWrapper
