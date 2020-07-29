

export default class ApiService {
    constructor () {
        this.credentials = require('./twitchAppConf.json');
    }

    getTwitchLoginLink () {
        return `${this.credentials.twitchCredentials.baseUrl}client_id=${this.credentials.twitchCredentials.clientId}&redirect_uri=${this.credentials.twitchCredentials.redirectUri}&response_type=${this.credentials.twitchCredentials.responseType}`;
    }
}
