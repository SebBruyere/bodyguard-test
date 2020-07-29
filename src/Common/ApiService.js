

export default class ApiService {
    constructor () {
        this.credentials = require('./twitchAppConf.json');
    }

    getTwitchLoginLink () {
        return  `${this.credentials.twitchCredentials.baseUrl}authorize?` +
                `client_id=${this.credentials.twitchCredentials.clientId}` +
                `&redirect_uri=${this.credentials.twitchCredentials.redirectUriCallback}` +
                `&response_type=${this.credentials.twitchCredentials.responseType}`;
    }

    getTwitchToken (code) {
        return `${this.credentials.twitchCredentials.baseUrl}token?` +
        `client_id=${this.credentials.twitchCredentials.clientId}` +
        `&client_secret=${this.credentials.twitchCredentials.clientSecret}` +
        `&code=${code}` +
        `&grant_type=authorization_code` +
        `&redirect_uri=${this.credentials.twitchCredentials.redirectUriToken}`;
    }
}
