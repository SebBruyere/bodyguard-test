import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Layouts';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
    Button: {
        marginTop: 50,
        marginBottom: 50,
    }
}

export default class extends Component {

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
                        <Button variant="contained" color="primary" style={styles.Button}>
                            Connect to Twitch
                        </Button>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}
