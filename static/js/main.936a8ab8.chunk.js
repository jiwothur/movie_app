(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(18),d=a(17),p=a(16),_=a.n(p),E=(a(42),function(e){var t=e.year,a=e.title,n=e.summary,r=(e.medium_cover_image,e.genres);return s.a.createElement("div",{className:"movie"},s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},a),s.a.createElement("h5",{className:"movie__year"},t),s.a.createElement("ul",{className:"movie__genres"},r.map((function(e,t){return s.a.createElement("li",{className:"genres__genre",key:t},e)}))),s.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))}),f=(a(43),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMovies=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n.state={isLoading:!0,movies:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.movies,a=e.isLoading;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading...")):s.a.createElement("div",null,t.map((function(e){return s.a.createElement(E,Object.assign({key:e.id},e))}))))}},{key:"componentDidMount",value:function(){this.getMovies()}}]),a}(n.Component));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.936a8ab8.chunk.js.map