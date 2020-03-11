import React, { Component, Fragment } from 'react'
import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/Card/card';

export class Sobre extends Component {
    
    render() {

        const sobre = `Components: Tabela, Header, Navbar, Card, Form, PopUp, FormValidator`;

       

        return (
            <Fragment>
                <Navbar />
                <div className="content">
                    <div className="container">
                        <h3 className="section-title">Sobre</h3>
                        <Card  title={'Crud em React'} content={sobre} img={"https://image.freepik.com/free-vector/green-frog_105179-45.jpg"} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Sobre
