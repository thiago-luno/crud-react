import React, { Component } from 'react';
import LinkWrapper from '../Global/LinkWrapper';

export class Navbar extends Component {

    render() {
        const location = window.location.pathname;
        console.log('location', typeof location)
        return (
            <nav className="teal lighten-2" style={ {marginBottom: '50px'} }>
                <div className="nav-wrapper container">
                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}}><img src="https://pngimg.com/uploads/mantis/mantis_PNG29.png" style={ {width: '95px'} }/></LinkWrapper>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/">Lista</LinkWrapper></li>
                        <li><LinkWrapper to="/teste">Ainda não sei</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
