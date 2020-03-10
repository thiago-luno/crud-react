import React, { Component } from 'react'

export class Card extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.img} />
                            <span className="card-title">{ this.props.title }</span>
                        </div>
                        <div className="card-content">
                            { this.props.content }
                        </div>
                        <div className="card-action">
                            <a className="valign-wrapper" href="/"><i className="material-icons">visibility</i> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
