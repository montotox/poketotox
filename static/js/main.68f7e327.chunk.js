(this.webpackJsonppoketotox=this.webpackJsonppoketotox||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(9),r=a.n(n),i=(a(31),a(25)),l=a(5),d=a.n(l),o=a(8),j=a(6),u=function(){var e=Object(o.a)(d.a.mark((function e(t){var a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(a);case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(d.a.mark((function e(){var t,a,s,c,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{pagination:5},a=r.length>1&&void 0!==r[1]?r[1]:0,e.prev=2,s="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(a),e.next=6,fetch(s);case 6:return c=e.sent,e.next=9,c.json();case 9:return n=e.sent,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=c.a.createContext({pokemonsLiked:[],updatePokemonsLikes:function(e){return null}}),m=p.Provider,_=p,O=a.p+"static/media/logo.e4828096.svg",x=a.p+"static/media/spain.7dddb7fe.svg",v=a.p+"static/media/us.7f6eb121.svg",f=(a(33),a(1));function g(e){var t=e.isEnglish,a=e.setIsEnglish,s=function(){a(!t)},c=t?Object(f.jsx)("img",{src:x,alt:"spanish",onClick:s}):Object(f.jsx)("img",{src:v,alt:"english",onClick:s});return Object(f.jsxs)("div",{className:"app-bar",children:[Object(f.jsx)("div",{className:"language",children:c}),Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("img",{src:O,alt:"logo",className:"logo__img"})})]})}var N=a(22);a(35);function k(e){var t=e.onSearch,a=e.isEnglish,c=Object(s.useState)(""),n=Object(j.a)(c,2),r=n[0],i=n[1],l=function(){var e=Object(o.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(r);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"searchbar",children:[Object(f.jsx)("input",{placeholder:a?"Search":"Buscar",onChange:function(e){i(e.target.value),console.log(e.target.value),0===e.target.value.length&&t(null)},className:"searchbar__input"}),Object(f.jsx)("button",{onClick:l,className:"searchbar__btn",children:Object(f.jsx)(N.a,{className:"searchbar__btn-icon"})})]})}var w=a(16),y=(a(36),a.p+"static/media/Pokeball.e67137ce.svg");function C(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:y,alt:"loading",className:"loading__img"})})}var S=a(58),E=a(59),P=a(23),L=a(24),M=a(10),F=a.p+"static/media/PokeballBackground.eb0411f8.svg";a(37);function I(e){var t=e.selected,a=e.setModal,s=e.isEnglish;console.log(t);var c=t.types[0].type.name,n=t.sprites.front_default,r=t.sprites.back_default,i=t.sprites.front_shiny,l=t.sprites.back_shiny,d=t.name,o=t.id,j=t.moves[0].move.name,u=t.moves[1].move.name,b=t.weight,h=t.height/10;return Object(f.jsx)("div",{className:"details",children:Object(f.jsxs)("div",{className:"details__card",children:[Object(f.jsxs)("div",{className:"details__card-header colorModal-".concat(c),children:[Object(f.jsxs)("div",{className:"details__card-header_top",children:[Object(f.jsx)("button",{className:"details__card-header_top-btn",onClick:function(){a(!1)},children:Object(f.jsx)(P.a,{className:"details__card-header_top-btn_icon"})}),Object(f.jsx)("p",{className:"details__card-header_top-name",children:d}),Object(f.jsxs)("p",{className:"details__card-header_top-id",children:["#",o]})]}),Object(f.jsx)("div",{className:"details__card-header_img",children:Object(f.jsx)("img",{src:F,alt:"pokeball"})})]}),Object(f.jsxs)("div",{className:"details__card-img",children:[Object(f.jsx)("img",{src:n,alt:d}),Object(f.jsx)("img",{src:r,alt:d}),Object(f.jsx)("img",{src:i,alt:d}),Object(f.jsx)("img",{src:l,alt:d})]}),Object(f.jsxs)("div",{className:"details__card-data",children:[Object(f.jsx)("div",{className:"details__card-data_types",children:t.types.map((function(e,a){return Object(f.jsx)("div",{className:"details__card-data_types-item colorModal-".concat(t.types[a].type.name),children:Object(f.jsx)("p",{children:t.types[a].type.name})},t.types[a].type.name)}))}),Object(f.jsxs)("div",{className:"details__card-data_about",children:[Object(f.jsx)("p",{className:"details__card-data_about-title",children:s?"About":"Detalles"}),Object(f.jsxs)("div",{className:"details__card-data_about-data",children:[Object(f.jsxs)("div",{className:"details__card-data_about-data_weight",children:[Object(f.jsxs)("div",{className:"details__card-data_about-data_weight-top",children:[Object(f.jsx)(M.d,{}),b," Kg"]}),Object(f.jsx)("div",{className:"details__card-data_about-data_weight-bottom",children:s?"Weight":"Peso"})]}),Object(f.jsxs)("div",{className:"details__card-data_about-data_height",children:[Object(f.jsxs)("div",{className:"details__card-data_about-data_height-top",children:[Object(f.jsx)(L.a,{}),h," m"]}),Object(f.jsx)("div",{className:"details__card-data_about-data_height-bottom",children:s?"Height":"Altura"})]}),Object(f.jsxs)("div",{className:"details__card-data_about-data_moves",children:[Object(f.jsx)("p",{children:j}),Object(f.jsx)("p",{children:u}),Object(f.jsx)("div",{className:"details__card-data_about-data_weight-bottom",children:s?"Moves":"Movimientos"})]})]})]}),Object(f.jsx)("div",{className:"details__card-data_stats",children:t.stats.map((function(e,a){return Object(f.jsxs)("div",{className:"details__card-data_stats-item",children:[Object(f.jsx)("p",{className:"details__card-data_stats-item_name",children:t.stats[a].stat.name}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"details__card-data_stats-item_data",children:t.stats[a].base_stat}),Object(f.jsx)("div",{className:"details__card-data_stats-item_bar",children:Object(f.jsx)("div",{className:"details__card-header colorModal-".concat(c," details__card-data_stats-item_bar-progress"),style:{width:"".concat(t.stats[a].base_stat,"px")}})})]})]},t.stats[a].stat.name)}))})]})]})})}a(38);var B=Object(S.a)((function(e){return{modal:{position:"absolute",width:"320px",height:"520px",borderRadius:"20px",backgroundColor:"#FFF",border:"2px solid #000",boxShadow:e.shadows[5],top:"50%",left:"50%",transform:"translate(-50%,-50%)",overflow:"hidden"}}}));function D(e){var t=e.pokemon,a=e.isEnglish,c=B(),n=Object(s.useState)(!1),r=Object(j.a)(n,2),i=r[0],l=r[1],d=Object(s.useState)(),o=Object(j.a)(d,2),u=o[0],b=o[1],h=Object(f.jsx)("div",{className:c.modal,children:Object(f.jsx)(I,{selected:u,setModal:l,isEnglish:a})}),p=Object(s.useContext)(_),m=p.pokemonsLiked,O=p.updatePokemonsLikes,x=t.types[0].type.name;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"card color-".concat(x),children:[Object(f.jsxs)("div",{className:"card__header",children:[Object(f.jsx)("button",{className:"card__header-btn",onClick:function(e){e.preventDefault(),O(t.name)},children:m.includes(t.name)?Object(f.jsx)(w.a,{className:"card__header-fillHeart"}):Object(f.jsx)(w.b,{className:"card__header-emptyHeart"})}),Object(f.jsxs)("div",{children:["#",t.id]})]}),Object(f.jsx)("div",{className:"card__picture",children:Object(f.jsx)("img",{src:t.sprites.front_default,alt:t.name,onClick:function(e){e.preventDefault(),b(t),l(!0)}})}),Object(f.jsx)("div",{className:"card__name",children:Object(f.jsx)("h3",{children:t.name})})]}),t?Object(f.jsx)(E.a,{open:i,onClose:function(){l(!i)},selected:u,isEnglish:a,children:h}):Object(f.jsx)("div",{})]})}a(41);function J(e){var t=e.onClickLeft,a=e.onClickRight,s=e.page,c=e.total;return Object(f.jsxs)("div",{className:"pagination",children:[1===s?Object(f.jsx)("div",{}):Object(f.jsx)("button",{className:"pagination__btn",children:Object(f.jsx)(M.b,{className:"pagination__btn-arrow",onClick:t})}),Object(f.jsxs)("div",{children:[s," de ",c]}),s===c?Object(f.jsx)("div",{}):Object(f.jsx)("button",{className:"pagination__btn",children:Object(f.jsx)(M.a,{className:"pagination__btn-arrow",onClick:a})})]})}a(42);function H(e){var t=Object(s.useContext)(_).pokemonsLiked,a=e.pokemons,c=e.page,n=e.setPage,r=e.total,i=e.loading,l=e.isEnglish;return Object(f.jsxs)("div",{className:"results",children:[Object(f.jsxs)("div",{className:"results__header",children:[Object(f.jsxs)("div",{className:"results__header-heart",children:[Object(f.jsx)(w.a,{className:"results__header-heart_icon"}),t.length," ",1===t.length?"like":"likes"]}),Object(f.jsx)(J,{className:"results__header-pagination",onClickLeft:function(){n(c-1)},onClickRight:function(){n(c+1)},page:c+1,total:r})]}),i?Object(f.jsx)(C,{}):Object(f.jsx)("div",{className:"cards",children:a.map((function(e,t){return Object(f.jsx)(D,{pokemon:e,isEnglish:l},e.name)}))})]})}a(43);function R(){return Object(f.jsxs)("div",{className:"notfound",children:[Object(f.jsx)(M.c,{className:"notfound__icon"}),Object(f.jsx)("h3",{className:"notfound__text",children:"No encontrado"})]})}a(44);var A="pokemon_liked";var T=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(0),r=Object(j.a)(n,2),l=r[0],p=r[1],_=Object(s.useState)(),O=Object(j.a)(_,2),x=O[0],v=O[1],N=Object(s.useState)(!0),w=Object(j.a)(N,2),y=w[0],C=w[1],S=Object(s.useState)([]),E=Object(j.a)(S,2),P=E[0],L=E[1],M=Object(s.useState)(!1),F=Object(j.a)(M,2),I=F[0],B=F[1],D=Object(s.useState)(!1),J=Object(j.a)(D,2),T=J[0],K=J[1],W=Object(s.useState)(!0),q=Object(j.a)(W,2),z=q[0],G=q[1],Q=function(){var e=Object(o.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,b(5,5*l);case 4:return t=e.sent,a=t.results.map(function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(a);case 8:s=e.sent,c(s),C(!1),v(Math.ceil(t.count/5)),B(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){!function(){var e=JSON.parse(window.localStorage.getItem(A))||[];L(e)}()}),[]),Object(s.useEffect)((function(){T||Q()}),[l]);var U=function(){var e=Object(o.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",Q());case 2:return C(!0),B(!1),K(!0),e.next=7,u(t);case 7:if(a=e.sent){e.next=14;break}return B(!0),C(!1),e.abrupt("return");case 14:c([a]),p(0),v(1);case 17:C(!1),K(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(m,{value:{pokemonsLiked:P,updatePokemonsLikes:function(e){var t=Object(i.a)(P),a=P.indexOf(e);a>=0?t.splice(a,1):t.push(e),L(t),window.localStorage.setItem(A,JSON.stringify(t))}},children:[Object(f.jsx)(g,{isEnglish:z,setIsEnglish:G}),Object(f.jsx)(k,{onSearch:U,isEnglish:z}),I?Object(f.jsx)(R,{}):Object(f.jsx)(H,{pokemons:a,page:l,setPage:p,total:x,loading:y,isEnglish:z})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),K()}},[[45,1,2]]]);
//# sourceMappingURL=main.68f7e327.chunk.js.map