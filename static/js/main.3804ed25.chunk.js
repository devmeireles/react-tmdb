(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},37:function(e,a,t){e.exports=t(73)},42:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),s=t.n(c),l=(t(42),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),d=function(e){var a=window.location.pathname+window.location.search,t=e.path===a?"nav-item active":"nav-item",n=e.disabled?"nav-link disabled":"nav-link";return r.a.createElement("li",{className:t},r.a.createElement("a",{href:e.path,className:n},e.name,e.path===a?r.a.createElement("span",{className:"sr-only"},"(current)"):""))},p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={isToggleOn:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"showDropdown",value:function(e){e.preventDefault(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){var e=this,a="dropdown-menu"+(this.state.isToggleOn?" show":"");return r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(a){e.showDropdown(a)}},this.props.name),r.a.createElement("div",{className:a,"aria-labelledby":"navbarDropdown"},this.props.children))}}]),a}(r.a.Component),v=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light"},r.a.createElement("div",{className:"ml-5"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement(d,{path:"/react-tmdb/",name:"Home"}),r.a.createElement(d,{path:"/page2",name:"Page2"}),r.a.createElement(d,{path:"/page3",name:"Disabled",disabled:"true"}),r.a.createElement(p,{name:"Dropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))))}}]),a}(r.a.Component),h=t(8),b=t.n(h),f=t(21),E=t(36),g=t(14),w=t(12),N=t(33),O=t.n(N).a.create({baseURL:"https://api.themoviedb.org/3"}),j=(t(30),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={results:[],info:{},page:1},t.loadFilms=Object(g.a)(b.a.mark(function e(){var a,n,r,c,s,l=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>0&&void 0!==l[0]?l[0]:1,e.next=3,O.get("/trending/movie/day?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US&page=".concat(a));case 3:n=e.sent,r=n.data,c=r.results,s=Object(E.a)(r,["results"]),t.setState({results:[].concat(Object(f.a)(t.state.results),Object(f.a)(c)),info:s,page:a});case 6:case"end":return e.stop()}},e)})),t.nextPage=function(){var e=t.state,a=e.page,n=(e.info,a+1);t.loadFilms(n)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadFilms()}},{key:"render",value:function(){var e=this.state,a=e.results,t=e.page,n=e.info,c=a.map(function(e,a){return r.a.createElement("div",{className:"film col",key:a},r.a.createElement(w.b,{to:"/movie/".concat(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/"+e.poster_path})),r.a.createElement(w.b,{to:"/movie/".concat(e.id)},r.a.createElement("p",{className:"movieListTitle"},e.title)))});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},c),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{className:"btn btn-primary",disabled:t===n.pages,onClick:this.nextPage},"Load More"))))}}]),a}(r.a.Component)),y=(t(71),t(13)),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5 pt-5"},r.a.createElement(j,null))}}]),a}(n.Component),x=t(20),C=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e,a=this.props.genres,t=[];return void 0!==a&&a.forEach(function(e){t.push(e.name)}),e=t.join(", "),r.a.createElement("span",null,e)}}]),a}(n.Component),S=t(16),_=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={visible:6},t.loadMore=t.loadMore.bind(Object(S.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"loadMore",value:function(){this.setState(function(e){return{visible:e.visible+6}})}},{key:"render",value:function(){var e=this.props.casts;return r.a.createElement("div",{className:"row"},e.slice(0,this.state.visible).map(function(e,a){return r.a.createElement("div",{className:"col-2",key:a},r.a.createElement(w.b,{to:"/people/".concat(e.id),className:"linkDefault"},r.a.createElement("img",{className:"rounded mx-auto d-block",src:e.profile_path?"https://image.tmdb.org/t/p/w185/".concat(e.profile_path):"http://www.simpleimageresizer.com/_uploads/photos/56ebef2e/person_8x10_1_80x120.png",style:{maxWidth:80}}),r.a.createElement("p",{className:"text-center"},r.a.createElement("span",{className:"castName"},e.name)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"castPosition"},e.character?e.character:e.department))))}),this.state.visible<e.length&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{onClick:this.loadMore,type:"button",className:"load-more"},"Load more")))))}}]),a}(n.Component),D=function(e){function a(e){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.trailers;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},e.map(function(e,a){return r.a.createElement("div",{className:"col-6 mt-4",key:a},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-responsive-item",type:"text/html",src:"https://www.youtube.com/embed/"+e.key,key:a,frameBorder:"0"})))})))}}]),a}(n.Component),T=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).convertToDolar=function(e){return"$".concat(e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))||!1},e.loadFilm=Object(g.a)(b.a.mark(function a(){var t,n;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,a.next=3,O.get("/movie/".concat(t,"?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US"));case 3:n=a.sent,e.setState({movie:n.data,genres:n.data.genres});case 5:case"end":return a.stop()}},a)})),e.loadCast=Object(g.a)(b.a.mark(function a(){var t,n;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,a.next=3,O.get("/movie/".concat(t,"/credits?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US"));case 3:n=a.sent,e.setState({cast:n.data.cast,crew:n.data.crew});case 5:case"end":return a.stop()}},a)})),e.loadVideos=Object(g.a)(b.a.mark(function a(){var t,n,r;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,a.next=3,O.get("/movie/".concat(t,"/videos?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US"));case 3:n=a.sent,r=n.data.results.filter(function(e){return"Trailer"==e.type}),e.setState({trailers:r});case 6:case"end":return a.stop()}},a)})),e.state={movie:{},genres:{},cast:{},crew:{},trailers:{}},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loadFilm(),this.loadCast(),this.loadVideos();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.posterPath.style.backgroundImage="url(http://image.tmdb.org/t/p/original"+this.state.movie.backdrop_path+")"}},{key:"render",value:function(){var e=this,a=this.state.movie,t=(this.state.genres,this.state.cast),n=this.state.crew,c=this.state.trailers;return r.a.createElement("div",{className:"fluid-container"},r.a.createElement("div",{className:"filmPage",ref:function(a){e.posterPath=a}},r.a.createElement("div",{className:"filmHeader"},r.a.createElement("div",{className:"col-4 ml-5"},r.a.createElement("h1",{className:"filmTitle"},a.title),r.a.createElement("h2",{className:"filmTagLine"},a.tagline?a.tagline:null)),r.a.createElement("div",{className:"col-5 ml-5"},r.a.createElement("p",null,a.overview),r.a.createElement("p",null,r.a.createElement(C,{genres:a.genres})),r.a.createElement("p",null,r.a.createElement("span",{className:"mr-5"},r.a.createElement(x.a,null)," ",a.release_date?a.release_date.substring(0,4):null),r.a.createElement("span",{className:"ml-5"},r.a.createElement(x.b,null)," ",a.runtime?a.runtime+" mins":null))))),r.a.createElement("div",{className:"filmInfo"},r.a.createElement("div",{className:"container"},t.length>0&&r.a.createElement("div",{className:"row castBox mt-2"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"text-center mb-4"},"Principal Cast")),r.a.createElement(_,{casts:t})),n.length>0&&r.a.createElement("div",{className:"row castBox mt-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"text-center mb-4 pt-2"},"Principal Crew")),r.a.createElement(_,{casts:n})),c.length>0&&r.a.createElement("div",{className:"row trailerBox mt-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"text-center mb-4 pt-2"},"Trailers")),r.a.createElement(D,{trailers:c})))))}}]),a}(n.Component),P=function(){return r.a.createElement(w.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:k}),r.a.createElement(y.a,{path:"/movie/:id",component:T})))},M=function(e){function a(e){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"fluid-container"},r.a.createElement(P,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(72);s.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.3804ed25.chunk.js.map