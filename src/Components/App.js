import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <img src={logo} className="App-logo" alt="logo" />
            </Fragment>
        )
    }
}
