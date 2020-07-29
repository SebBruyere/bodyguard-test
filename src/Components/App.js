import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Layouts';
import ApiService from '../Common/ApiService';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
    Button: {
        marginTop: 50,
        marginBottom: 50,
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


    render() {
        return (
            <Fragment>
                <Header />
                <Container maxWidth="sm">
                    <Grid
                        container
                        item
                        xs={12}
                        justify="center"
                        alignItems="center"
                    >
                        <Button href={apiService.getTwitchLoginLink()} variant="contained" color="primary" style={styles.Button} onClick={this.props.handleClick}>
                            Connect to Twitch
                        </Button>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}
