import React, { Component } from 'react'

export default class Corporatiobank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporatiobank for {this.props.info.lastName}</h1>
            </div>
        )
    }
}
