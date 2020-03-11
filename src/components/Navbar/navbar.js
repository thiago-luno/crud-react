import React, { Component } from 'react';
import LinkWrapper from '../Global/LinkWrapper';

export class Navbar extends Component {

    render() {

        return (
            <nav className="teal lighten-2">
                <div className="nav-wrapper container">

                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}} style={ { display: 'flex' } }>
                        <img src="https://pngimg.com/uploads/mantis/mantis_PNG29.png" style={ {width: '95px', display: 'flex'} } alt="logo"/>
                        <span style={ {color: '#cddc39'} }>Frogstamp</span>
                    </LinkWrapper>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <LinkWrapper 
                                to="/lista" 
                                isActive={(match, location) => {
                                    if (location.pathname === '/' || location.pathname === '/lista') return true;
                                }}>
                                Lista
                            </LinkWrapper>
                        </li>
                        
                        <li><LinkWrapper to="/clientes">Clientes</LinkWrapper></li>

                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
