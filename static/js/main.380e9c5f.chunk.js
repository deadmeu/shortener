(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(8),o=n.n(l),c=n(6),s=n.n(c),u=n(9),i=n(1),p=n(2),h=n(4),b=n(3),m=n(5);function d(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"Shortener"))}var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},g=n(10),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={url:""},n.onSubmit=function(e){e.preventDefault(),n.props.shortenUrl(n.state.url),n.setState({url:""})},n.onChange=function(e){return n.setState(Object(g.a)({},e.target.name,e.target.value))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:j},a.a.createElement("input",{type:"text",name:"url",style:{flex:"10",padding:"5px"},placeholder:"Shorten your link",value:this.state.url,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:1}}))}}]),t}(r.Component),j={display:"flex"},O=y;function v(){return a.a.createElement("div",null,a.a.createElement("p",null,"Loading..."))}var E=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"submitContainer"},a.a.createElement(d,null),a.a.createElement(O,{shortenUrl:this.props.shortenUrl}),this.props.loading?a.a.createElement(v,null):null)}}]),t}(r.Component),k=(n(18),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{borderBottom:"3px #ccc dotted"}},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.mapping,t=e.shortUrl,n=e.longUrl;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,t),a.a.createElement("br",null),a.a.createElement("p",null,"links to"),a.a.createElement("br",null),a.a.createElement("p",null,n))}}]),t}(r.Component)),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{color:"#f4f4f4",textAlign:"center",padding:"10px"}},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{style:this.getStyle()},a.a.createElement("h1",null,this.props.status))}}]),t}(r.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.result,t=e.shortUrl,n=e.longUrl,r=e.status,l={shortUrl:t,longUrl:n};return a.a.createElement("div",{className:"resultContainer"},a.a.createElement(S,{status:r}),a.a.createElement(k,{mapping:l}))}}]),t}(r.Component),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={result:{shortUrl:"short123",longUrl:"long345",status:null},loading:!1},n.shortenUrl=function(){var e=Object(u.a)(s.a.mark(function e(t){var r,a,l,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),"https://g5lo9j4ib7.execute-api.ap-southeast-2.amazonaws.com/dev/shorten",r={url:t},a={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}},e.next=6,fetch("https://g5lo9j4ib7.execute-api.ap-southeast-2.amazonaws.com/dev/shorten",a);case 6:return l=e.sent,console.log(l),o="success",e.next=11,l.json();case 11:c=e.sent,console.log(JSON.stringify(c)),n.setState({result:{shortUrl:c.shortenedUrl,longUrl:c.originalUrl,status:o}}),e.t0=o,e.next="success"===e.t0?17:"warning"===e.t0?19:"error"===e.t0?21:23;break;case 17:return document.body.style="background: green;",e.abrupt("break",24);case 19:return document.body.style="background: yellow;",e.abrupt("break",24);case 21:return document.body.style="background: red;",e.abrupt("break",24);case 23:return e.abrupt("break",24);case 24:n.setState({loading:!1});case 25:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.result.status?a.a.createElement(U,{result:this.state.result}):null,a.a.createElement(E,{shortenUrl:this.shortenUrl,loading:this.state.loading}))}}]),t}(r.Component);o.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.380e9c5f.chunk.js.map