(this["webpackJsonpbodyguard-test"]=this["webpackJsonpbodyguard-test"]||[]).push([[0],{40:function(t,e,n){t.exports=n.p+"static/media/logo.ee7cd8ed.svg"},44:function(t,e,n){t.exports=n(74)},49:function(t,e,n){},67:function(t){t.exports=JSON.parse('{"twitchCredentials":{"baseUrl":"https://id.twitch.tv/oauth2/","clientId":"ckrhd0i2v7v2hp1d8vktrqhomz23d3","clientSecret":"ft3yh9weeshplz0rbj1dp4tol9albl","redirectUriCallback":"https://sebbruyere.github.io/bodyguard-test/%23/callback","redirectUriToken":"https://sebbruyere.github.io/bodyguard-test","responseType":"code"}}')},68:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(17),o=n.n(c),r=(n(49),n(18)),l=n(19),s=n(26),d=n(25),u=n(39),h=n.n(u),m=function(){function t(){Object(r.a)(this,t),this.credentials=n(67)}return Object(l.a)(t,[{key:"getTwitchLoginLink",value:function(){return"".concat(this.credentials.twitchCredentials.baseUrl,"authorize?")+"client_id=".concat(this.credentials.twitchCredentials.clientId)+"&redirect_uri=".concat(this.credentials.twitchCredentials.redirectUriCallback)+"&response_type=".concat(this.credentials.twitchCredentials.responseType)}},{key:"getTwitchToken",value:function(t){return"".concat(this.credentials.twitchCredentials.baseUrl,"token?")+"client_id=".concat(this.credentials.twitchCredentials.clientId)+"&client_secret=".concat(this.credentials.twitchCredentials.clientSecret)+"&code=".concat(t)+"&grant_type=authorization_code"+"&redirect_uri=".concat(this.credentials.twitchCredentials.redirectUriToken)}}]),t}(),g=new m,p=window.location.search.substring(1).split("&").reduce((function(t,e){if(e){var n=e.split("=");t[n[0]]=decodeURIComponent(n[1])}return t}),{}),w=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=g.getTwitchToken(p.code);h.a.post(t).then((function(t){console.log(t),t.data.access_token?(window.localStorage.setItem("token",t.data.access_token),window.location="/"):"/login"==t.data.redirect&&(window.location="/login")})).catch((function(t){window.location="/login"}))}},{key:"render",value:function(){return i.a.createElement("div",null,console.log(g.getTwitchToken(p.code)))}}]),n}(i.a.Component),k=n(41),b=n(4),f=n(40),y=n.n(f),v=(n(68),n(101)),C=n(96),E=n(97),T=function(t){return i.a.createElement(v.a,{position:"static"},i.a.createElement(C.a,null,i.a.createElement(E.a,{variant:"h4",color:"inherit"},"Bodyguard")))},j=n(98),O=n(99),_=n(100),I={margins:{marginTop:50,marginBottom:50,color:"white"}},S=new m,U=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={isLogged:!1,token:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.localStorage.getItem("token")&&this.setState({token:window.localStorage.getItem("token")})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(k.a,null,i.a.createElement(b.a,{path:"/callback",component:w})),i.a.createElement(T,null),i.a.createElement(j.a,{maxWidth:"sm"},i.a.createElement(O.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"center"},!this.state.token&&i.a.createElement(_.a,{href:S.getTwitchLoginLink(),variant:"contained",color:"primary",style:I.margins,onClick:this.props.handleClick},"Connect to Twitch"),this.state.token&&i.a.createElement("span",{style:I.margins},this.state.token),i.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.26da2ee5.chunk.js.map