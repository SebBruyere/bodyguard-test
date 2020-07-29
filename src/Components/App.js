import React, {Component, Fragment} from 'react';
import {Callback} from './Callback';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Header} from './Layouts';
import ApiService from '../Common/ApiService';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
    margins: {
        marginTop: 50,
        marginBottom: 50,
        color: "white"
    }
}

const apiService = new ApiService();

export default class extends Component {

    constructor () {
        super();
        this.state = {
            isLogged: false,
            token: ""
        }
    }

    componentDidMount () {
        if (window.localStorage.getItem("token")) {
            this.setState({
                "token": window.localStorage.getItem("token")
            });
        }
    }


    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Route path="/callback" component={Callback}/>
                </BrowserRouter>
                <Header />
                <Container maxWidth="sm">
                    <Grid
                        container
                        item
                        xs={12}
                        justify="center"
                        alignItems="center"
                    >
                        {!this.state.token && (
                            <Button href={apiService.getTwitchLoginLink()} variant="contained" color="primary" style={styles.margins} onClick={this.props.handleClick}>
                                Connect to Twitch
                            </Button>
                        )}
                        {this.state.token && (
                            <span style={styles.margins}>{this.state.token}</span>
                        )}
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}
