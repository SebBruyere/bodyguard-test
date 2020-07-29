import React from "react";
import axios from "axios";
import ApiService from '../../Common/ApiService';

const apiService = new ApiService ();

const hash = window.location.search
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});


export default class Callback extends React.Component {

    componentDidMount() {
        var tokenUrl = apiService.getTwitchToken(hash.code);

        axios.post( tokenUrl )
        .then(function (response) {
            console.log(response);
            if (response.data.access_token) {
                window.location = "/token=" + response.data.access_token;
            } else if (response.data.redirect == '/login'){
                window.location = "/login"
            }
        })
        .catch(function(error) {
            window.location = "/login"
        })
    }

    render () {
        return (
            <div>
                {console.log(apiService.getTwitchToken(hash.code))}
            </div>
        );
    }
}
