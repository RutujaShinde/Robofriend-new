(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"robocard"},r.a.createElement("img",{src:"https://robohash.org/swapnali/".concat(e.id),alt:"robo"}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email))}),d=function(e){var t=e.users;return r.a.createElement("div",{className:"list"},t.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})})))},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(t){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))},e.filteredcard=function(t){e.setState({seaarchfield:t.target.value})},e.state={users:[],seaarchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.users);var t=this.state.users.filter((function(t){return t.name.toLowerCase().includes(e.state.seaarchfield.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Robo Friend"),r.a.createElement("input",{type:"text",placeholder:"search robots",onChange:this.filteredcard}),r.a.createElement(d,{users:t}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.704bf559.chunk.js.map