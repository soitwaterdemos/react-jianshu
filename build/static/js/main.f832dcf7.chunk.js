(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{133:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"getDetail",(function(){return u}));var a=e(19),i=Object(a.fromJS)({title:"",content:""}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"detail/CHANGE_DETAIL":return t.merge({title:n.title,content:n.content});default:return t}},c=e(38),l=e.n(c),u=function(t){return function(n){l.a.get("http://localhost:3333/api/detail.json?id="+t).then((function(t){var e,r,a=t.data.data;n((e=a.title,r=a.content,{type:"detail/CHANGE_DETAIL",title:e,content:r}))})).catch((function(){}))}};e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return r}))},146:function(t,n){t.exports="data:image/png;base64,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"},156:function(t,n,e){t.exports=e(259)},259:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getInputChangeAction",(function(){return I})),e.d(r,"getTodoitemDeleAction",(function(){return C})),e.d(r,"getBtnClickAction",(function(){return S}));var a={};e.r(a),e.d(a,"getHomeInfo",(function(){return st})),e.d(a,"getMoreList",(function(){return dt})),e.d(a,"toggleTopShow",(function(){return pt}));var i={};e.r(i),e.d(i,"searchFocus",(function(){return jt})),e.d(i,"searchBlur",(function(){return yt})),e.d(i,"mouseEnter",(function(){return kt})),e.d(i,"mouseLeave",(function(){return At})),e.d(i,"changePage",(function(){return wt})),e.d(i,"getList",(function(){return Lt}));var o={};e.r(o),e.d(o,"logout",(function(){return St})),e.d(o,"login",(function(){return Nt}));var c=e(0),l=e.n(c),u=e(3),s=e.n(u),d=e(4),p=e(5);function h(){var t=Object(d.a)(["\n\thtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed, \n\tfigure, figcaption, footer, header, hgroup, \n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\t/* HTML5 display-role reset for older browsers */\n\tarticle, aside, details, figcaption, figure, \n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n"]);return h=function(){return t},t}Object(p.a)(h());var f=e(33),g=e(43),b=e(13),m=e(14),v=e(16),x=e(15),E=e(17),O=e(21),j=e(264),y=e(104),k=e(262),A=(e(165),function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this;return l.a.createElement("div",{style:{marginLeft:"10px"}},l.a.createElement("h1",null,"TodoList"),l.a.createElement("ul",null,l.a.createElement("li",null,"React \u5165\u95e8\u7ec3\u4e60"),l.a.createElement("li",null,'\u70b9\u51fb"\u63d0\u4ea4"\u65b0\u589e\u5217\u8868\u9879,\u70b9\u51fb\u5217\u8868\u9879\u79fb\u9664\u6240\u9009\u9879')),l.a.createElement(j.a,{placeholder:"\u8bf7\u8f93\u5165...",value:this.props.inputValue,size:"large",style:{width:"300px",marginRight:"10px"},onChange:this.props.handleInputChange}),l.a.createElement(y.a,{type:"primary",onClick:this.props.handleBtnClick},"\u63d0\u4ea4"),l.a.createElement(k.a,{style:{marginTop:"10px",width:"300px"},size:"small",bordered:!0,dataSource:this.props.list,renderItem:function(n,e){return l.a.createElement(k.a.Item,{key:e,onClick:function(){t.props.handleTodoitemDele(e)}},"[",e,"] \u2192 ",n)}}))}}]),n}(c.Component)),w=e(19),L=Object(w.fromJS)({inputValue:"",list:["a","b","c","d","e","f","g","h","i","j","k"]}),I=function(t){return{type:"change_input_value",value:t}},C=function(t){return{type:"remove_todoitem",value:t}},S=function(){return{type:"add_todoItem"}},N=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(A,{inputValue:this.props.inputValue,handleInputChange:this.props.handleInputChange,handleBtnClick:this.props.handleBtnClick,handleTodoitemDele:this.props.handleTodoitemDele.bind(this),list:this.props.list})}}]),n}(c.Component),T=Object(O.b)((function(t){return{inputValue:t.get("todolist").get("inputValue"),list:t.get("todolist").get("list")}}),(function(t){return{handleInputChange:function(n){t(r.getInputChangeAction(n.target.value))},handleTodoitemDele:function(n){t(r.getTodoitemDeleAction(n))},handleBtnClick:function(){t(r.getBtnClickAction())}}}))(N);function q(){var t=Object(d.a)(["\n\tposition: fixed;\n\tright: 100px;\n\tbottom: 100px;\n\twidth: 60px;\n\theight: 60px;\n\tline-height: 60px;\n\ttext-align: center;\n\tborder: 1px solid #ccc;\n\tfont-size: 14px;\n"]);return q=function(){return t},t}function P(){var t=Object(d.a)(["\n\twidth: 100%;\n\theight: 40px;\n\tline-height: 40px;\n\tmargin: 30px 0;\n\tbackground: #a5a5a5;\n\ttext-align:center;\n\tborder-radius: 20px;\n\tcolor: #fff;\n\tcursor: pointer;\n"]);return P=function(){return t},t}function F(){var t=Object(d.a)(["\n\twidth: 278px;\n\tborder: 1px solid #dcdcdc;\n\tborder-radius: 3px;\n\theight: 300px;\n\tline-height: 300px;\n\ttext-align: center;\n"]);return F=function(){return t},t}function G(){var t=Object(d.a)(["\n\twidth: 280px;\n\theight: 50px;\n\tbackground: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-size: contain;\n"]);return G=function(){return t},t}function R(){var t=Object(d.a)(["\n\tmargin: 30px 0;\n\twidth: 280px;\n"]);return R=function(){return t},t}function z(){var t=Object(d.a)(["\n\twidth: 500px;\n\tfloat: left;\n\t.title {\n\t\tline-height: 27px;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\tcolor: #333;\n\t}\n\t.desc {\n\t\tline-height: 24px;\n\t\tfont-size: 13px;\n\t\tcolor: #999;\n\t}\n"]);return z=function(){return t},t}function H(){var t=Object(d.a)(["\n\toverflow: hidden;\n\tpadding: 20px 0;\n\tborder-bottom: 1px solid #dcdcdc;\n\t.pic {\n\t\tdisplay: block;\n\t\twidth: 125px;\n\t\theight: 100px;\n\t\tfloat: right;\n\t\tborder-radius: 10px;\n\t}\n"]);return H=function(){return t},t}function U(){var t=Object(d.a)(["\n\tfloat: left;\n\theight: 32px;\n\tline-height: 32px;\n\tmargin-left: 18px;\n\tmargin-bottom: 18px;\n\tpadding-right: 10px\n\tbackground: #f7f7f7;\n\tfont-size: 14px;\n\tcolor: #000;\n\tborder: 1px solid #dcdcdc;\n\tborder-radius: 4px;\n\t.topic-pic {\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\twidth: 32px;\n\t\theight: 32px;\n\t\tmargin-right: 10px;\n\t}\n"]);return U=function(){return t},t}function B(){var t=Object(d.a)(["\n\toverflow: hidden;\n\tpadding: 20px 0 10px 0;\n\tmargin-left: -18px;\n\tborder-bottom: 1px solid #dcdcdc;\n"]);return B=function(){return t},t}function M(){var t=Object(d.a)(["\n\twidth: 280px;\n\tfloat: right;\n"]);return M=function(){return t},t}function _(){var t=Object(d.a)(["\n\tfloat: left;\n\tmargin-left: 15px;\n\tpadding-top: 30px;\n\twidth: 625px;\n\t.banner-img {\n\t\twidth: 625px;\n\t\theight: 270px;\n\t}\n"]);return _=function(){return t},t}function D(){var t=Object(d.a)(["\n\toverflow: hidden;\n\twidth: 960px;\n\tmargin: 0 auto;\n"]);return D=function(){return t},t}var V=p.b.div(D()),J=p.b.div(_()),Z=p.b.div(M()),W=p.b.div(B()),X=p.b.div(U()),Q=p.b.div(H()),Y=p.b.div(z()),K=p.b.div(R()),$=p.b.div(G(),(function(t){return t.imgUrl})),tt=p.b.div(F()),nt=p.b.div(P()),et=p.b.div(q()),rt=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this.props.list;return l.a.createElement(W,null,t.map((function(t){return l.a.createElement(X,{key:t.get("id")},l.a.createElement("img",{className:"topic-pic",src:t.get("imgUrl"),alt:""}),t.get("title"))})))}}]),n}(c.PureComponent),at=Object(O.b)((function(t){return{list:t.getIn(["home","topicList"])}}),null)(rt),it=Object(w.fromJS)({topicList:[],articleList:[],recommendList:[],articlePage:1,showScroll:!1}),ot=function(t,n){return t.merge({topicList:Object(w.fromJS)(n.topicList),articleList:Object(w.fromJS)(n.articleList),recommendList:Object(w.fromJS)(n.recommendList)})},ct=function(t,n){return t.merge({articleList:t.get("articleList").concat(n.list),articlePage:n.nextPage})},lt=e(38),ut=e.n(lt),st=function(){return function(t){ut.a.get("http://localhost:3333/api/home.json").then((function(n){var e=n.data.data;t(function(t){return{type:"home/CHANGE_HOME_DATA",topicList:t.topicList,articleList:t.articleList,recommendList:t.recommendList}}(e))}))}},dt=function(t){return function(n){ut.a.get("http://localhost:3333/api/homeList.json?page="+t).then((function(e){var r,a,i=e.data.data;n((r=i,a=t+1,{type:"home/ADD_ARTICLE_LIST",list:Object(w.fromJS)(r),nextPage:a}))}))}},pt=function(t){return{type:"home/TOGGLE_SCROLL_TOP",show:t}},ht=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this.props,n=t.list,e=t.getMoreList,r=t.page;return l.a.createElement("div",null,n.map((function(t,n){return l.a.createElement(f.b,{key:n,to:"/detail/"+t.get("id")},l.a.createElement(Q,null,l.a.createElement("img",{alt:"",className:"pic",src:t.get("imgUrl")}),l.a.createElement(Y,null,l.a.createElement("h3",{className:"title"},t.get("title")),l.a.createElement("p",{className:"desc"},t.get("desc")))))})),l.a.createElement(nt,{onClick:function(){return e(r)}},"\u66f4\u591a\u6587\u5b57"))}}]),n}(c.PureComponent),ft=Object(O.b)((function(t){return{list:t.getIn(["home","articleList"]),page:t.getIn(["home","articlePage"])}}),(function(t){return{getMoreList:function(n){t(a.getMoreList(n))}}}))(ht),gt=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(K,null,this.props.list.map((function(t){return l.a.createElement($,{imgUrl:t.get("imgUrl"),key:t.get("id")})})))}}]),n}(c.PureComponent),bt=Object(O.b)((function(t){return{list:t.getIn(["home","recommendList"])}}),null)(gt),mt=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(tt,null,"\u5199\u70b9\u4ec0\u4e48...")}}]),n}(c.PureComponent),vt=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"handleScrollTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement(V,null,l.a.createElement(J,null,l.a.createElement("img",{className:"banner-img",alt:"\u56fe\u6302\u4e86",src:"http://localhost:3333/pic1.png"}),l.a.createElement(at,null),l.a.createElement(ft,null)),l.a.createElement(Z,null,l.a.createElement(bt,null),l.a.createElement(mt,null)),this.props.showScroll?l.a.createElement(et,{onClick:this.handleScrollTop},"\u9876\u90e8"):null)}},{key:"componentDidMount",value:function(){this.props.changeHomeData(),this.bindEvents()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeScrollTopShow)}},{key:"bindEvents",value:function(){window.addEventListener("scroll",this.props.changeScrollTopShow)}}]),n}(c.PureComponent),xt=Object(O.b)((function(t){return{showScroll:t.getIn(["home","showScroll"])}}),(function(t){return{changeHomeData:function(){t(a.getHomeInfo())},changeScrollTopShow:function(){document.documentElement.scrollTop>100?t(a.toggleTopShow(!0)):t(a.toggleTopShow(!1))}}}))(vt),Et=e(263),Ot=Object(w.fromJS)({focused:!1,mouseIn:!1,list:[],page:1,totalPage:1}),jt=function(){return{type:"header/SEARCH_FOCUS"}},yt=function(){return{type:"header/SEARCH_BLUR"}},kt=function(){return{type:"header/MOUSE_ENTER"}},At=function(){return{type:"header/MOUSE_LEAVE"}},wt=function(t){return{type:"header/CHANGE_PAGE",page:t}},Lt=function(){return function(t){ut.a.get("http://localhost:3333/api/headerList.json").then((function(n){var e=n.data;t(function(t){return{type:"header/CHANGE_LIST",data:Object(w.fromJS)(t),totalPage:Math.ceil(t.length/10)}}(e.data))})).catch((function(){console.log("error in /api/headerList.json")}))}},It="login/LOGOUT",Ct=Object(w.fromJS)({login:!1}),St=function(){return{type:It,value:!1}},Nt=function(t,n){return function(e){ut.a.get("http://localhost:3333/api/login.json?account="+t+"&password="+n).then((function(t){t.data.data?e({type:"login/CHANGE_LOGIN",value:!0}):alert("\u767b\u9646\u5931\u8d25")}))}},Tt=e(146),qt=e.n(Tt);function Pt(){var t=Object(d.a)(["\n\tfloat: right;\n\tmargin-top: 9px;\n\tmargin-right: 20px;\n\tpadding: 0 20px;\n\tline-height: 38px;\n\tborder-radius: 19px;\n\tborder: 1px solid #ec6149;\n\tfont-siz: 14px;\n\t&.reg {\n\t\tcolor: #ec6149;\n\t}\n\t&.writting {\n\t\tcolor: #fff;\n\t\tbackground: #ec6149;\n\t}\n\tsvg {\n\t\ttransform: translate(-4px,3px)\n\t}\n"]);return Pt=function(){return t},t}function Ft(){var t=Object(d.a)(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\theight: 56px;\n"]);return Ft=function(){return t},t}function Gt(){var t=Object(d.a)(["\n\tdisplay: block;\n\tfloat: left;\n\tline-height: 20px;\n\tpadding: 0 5px;\n\tmargin-right: 10px;\n\tmargin-bottom: 15px;\n\tfont-size: 12px;\n\tborder: 1px solid #ddd;\n\tcolor: #787878;\n\tborder-radius: 3px;\n"]);return Gt=function(){return t},t}function Rt(){var t=Object(d.a)(["\n\toverflow: hidden;\n"]);return Rt=function(){return t},t}function zt(){var t=Object(d.a)(["\n\tfloat: right;\n\tfont-size: 13px;\n\tcursor: pointer;\n\t.spin {\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\tfont-size: 12px;\n\t\tmargin-right: 2px;\n\t\ttransition: all .2s ease-in;\n\t\ttransform-origin: center center;\n\t}\n"]);return zt=function(){return t},t}function Ht(){var t=Object(d.a)(["\n\tmargin-top: 20px;\n\tmargin-bottom: 15px;\n\tline-height: 20px;\n\tfont-size: 14px;\n\tcolor: #969696;\n"]);return Ht=function(){return t},t}function Ut(){var t=Object(d.a)(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 56px;\n\twidth: 240px;\n\tpadding: 0 20px;\n\tbox-shadow: 0 0 8px rgba(0, 0, 0, .2);\n\tbackground: #fff;\n"]);return Ut=function(){return t},t}function Bt(){var t=Object(d.a)(["\n\twidth: 160px;\n\theight: 38px;\n\tpadding: 0 0px 0 20px;\n\tmargin-left: 20px;\n\tbox-sizing: border-box;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 20px;\n\tbackground: #eee;\n\tfont-size: 14px;\n\tcolor: #666;\n\t&::placeholder {\n\t\tcolor: #999;\n\t}\n\t&.focused {\n\t\twidth: 240px;\n\t}\n\t&.slide-enter {\n\t\ttransition: all .2s ease-out;\n\t}\n\t&.slide-enter-active {\n\t\twidth: 240px;\n\t}\n\t&.slide-exit {\n\t\ttransition: all .2s ease-out;\n\t}\n\t&.slide-exit-active {\n\t\twidth: 160px;\n\t}\n"]);return Bt=function(){return t},t}function Mt(){var t=Object(d.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: center;\n\theight: 100%;\n\twidth: auto;\n\n\t.zoom {\n\t\tposition: relative;\n\t\tright: 30px;\n\t\tline-height: 30px;\n\t\tborder-radius: 15px;\n\t\ttext-align: center;\n\t\t&.focused {\n\t\t\tcolor: red;\n\t\t}\n\t}\n"]);return Mt=function(){return t},t}function _t(){var t=Object(d.a)(["\n\tline-height: 56px;\n\tpadding: 0 15px;\n\tfont-size: 17px;\n\tcolor: #333;\n\t&.left {\n\t\tfloat: left;\n\t}\n\t&.right {\n\t\tfloat: right;\n\t\tcolor: #969696;\n\t}\n\t&.active {\n\t\tcolor: #ea6f5a;\n\t}\n"]);return _t=function(){return t},t}function Dt(){var t=Object(d.a)(["\n\twidth: 960px;\n\theight: 100%;\n\tpadding-right: 70px;\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n"]);return Dt=function(){return t},t}function Vt(){var t=Object(d.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: block;\n\twidth: 100px;\n\theight: 56px;\n\tbackground: url(",");\n\tbackground-size: contain;\n"]);return Vt=function(){return t},t}function Jt(){var t=Object(d.a)(["\n  min-width: 1240px;\n\tz-index: 1;\n\tposition: relative;\n\theight: 56px;\n\tborder-bottom: 1px solid #f0f0f0;\n\n  /* iconfont */\n\t.icon {\n\t\twidth: 20px; height: 20px;\n    vertical-align:center;\n    fill: currentColor;\n    overflow: hidden;\n\t}\n"]);return Jt=function(){return t},t}var Zt=p.b.div(Jt()),Wt=p.b.div(Vt(),qt.a),Xt=p.b.div(Dt()),Qt=p.b.div(_t()),Yt=p.b.div(Mt()),Kt=p.b.input.attrs({placeholder:"\u641c\u7d22"})(Bt()),$t=p.b.div(Ut()),tn=p.b.div(Ht()),nn=p.b.span(zt()),en=p.b.div(Rt()),rn=p.b.a(Gt()),an=p.b.div(Ft()),on=p.b.div(Pt()),cn=document.createElement("script");cn.src="http://at.alicdn.com/t/font_1565678_emwkr39kcmv.js",document.body.appendChild(cn);var ln=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"getListArea",value:function(){var t=this,n=this.props,e=n.focused,r=n.list,a=n.page,i=n.totalPage,o=n.mouseIn,c=n.handleMouseEnter,u=n.handleMouseLeave,s=n.handleChangePage,d=r.toJS(),p=[];if(d.length)for(var h=10*(a-1);h<10*a&&h<d.length;h++)p.push(l.a.createElement(rn,{key:d[h]},d[h]));return e||o?l.a.createElement($t,{onMouseEnter:c,onMouseLeave:u},l.a.createElement(tn,null,"\u70ed\u95e8\u641c\u7d22",l.a.createElement(nn,{onClick:function(){return s(a,i,t.spinIcon)}},l.a.createElement("svg",{className:"icon spin",ref:function(n){t.spinIcon=n},"aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"#icon-huanyipi"})),"\u6362\u4e00\u6279")),l.a.createElement(en,null,p)):null}},{key:"render",value:function(){var t=this.props,n=t.focused,e=t.handleInputFocus,r=t.handleInputBlur,a=t.list,i=t.login,o=t.logout;return l.a.createElement(Zt,null,l.a.createElement(f.b,{to:"/"},l.a.createElement(Wt,null)),l.a.createElement(Xt,null,l.a.createElement(Qt,{className:"left active"},"\u9996\u9875"),l.a.createElement(Qt,{className:"left"},"\u4e0b\u8f7dApp"),i?l.a.createElement(Qt,{onClick:o,className:"right"},"\u9000\u51fa"):l.a.createElement(f.b,{to:"/login"},l.a.createElement(Qt,{className:"right"},"\u767b\u5f55")),l.a.createElement(Qt,{className:"right"}),l.a.createElement(Yt,null,l.a.createElement(Et.a,{in:n,timeout:200,classNames:"slide"},l.a.createElement(Kt,{className:n?"focused":"",onFocus:function(){return e(a)},onBlur:r})),l.a.createElement("svg",{className:n?"focused icon zoom search":"icon zoom search","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"#icon-sousuo"})),this.getListArea())),l.a.createElement(an,null,l.a.createElement(f.b,{to:"/write"},l.a.createElement(on,{className:"writting"},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"#icon-xiezi"})),"\u5199\u6587\u7ae0")),l.a.createElement(on,{className:"reg"},"\u6ce8\u518c")))}}]),n}(c.Component),un=Object(O.b)((function(t){return{focused:t.get("header").get("focused"),list:t.getIn(["header","list"]),page:t.getIn(["header","page"]),totalPage:t.getIn(["header","totalPage"]),mouseIn:t.getIn(["header","mouseIn"]),login:t.getIn(["login","login"])}}),(function(t){return{handleInputFocus:function(n){0===n.size&&t(i.getList()),t(i.searchFocus())},handleInputBlur:function(){t(i.searchBlur())},handleMouseEnter:function(){t(i.mouseEnter())},handleMouseLeave:function(){t(i.mouseLeave())},handleChangePage:function(n,e,r){var a=r.style.transform.replace(/[^0-9]/gi,"");a=a?parseInt(a,10):0,r.style.transform="rotate("+(a+360)+"deg)",t(n<e?i.changePage(n+1):i.changePage(1))},logout:function(){t(o.logout())}}}))(ln),sn=e(147),dn=e.n(sn)()({loader:function(){return e.e(3).then(e.bind(null,266))},loading:function(){return l.a.createElement("div",null,"\u6b63\u5728\u52a0\u8f7d")}}),pn=function(){return l.a.createElement(dn,null)};function hn(){var t=Object(d.a)(["\n\twidth: 220px;\n\theight: 30px;\n\tline-height: 30px;\n\tcolor: #fff;\n\tbackground: #3194d0;\n\tborder-radius: 15px;\n\tmargin: 10px auto;\n\ttext-align: center;\n"]);return hn=function(){return t},t}function fn(){var t=Object(d.a)(["\n\tdisplay: block;\n\twidth: 200px;\n\theight: 30px;\n\tline-height: 30px;\n\tpadding: 0 10px;\n\tmargin: 10px auto;\n\tcolor: #777;\n"]);return fn=function(){return t},t}function gn(){var t=Object(d.a)(["\n\twidth: 400px;\n\theight: 180px;\n\tmargin: 100px auto;\n\tpadding-top: 20px;\n\tbackground: #fff;\n\tbox-shadow: 0 0 8px rgba(0,0,0,.1);\n"]);return gn=function(){return t},t}function bn(){var t=Object(d.a)(["\n\tz-index: 0;\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 56px;\n\tbackground: #eee;\n"]);return bn=function(){return t},t}var mn=p.b.div(bn()),vn=p.b.div(gn()),xn=p.b.input(fn()),En=p.b.div(hn()),On=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this;return this.props.loginStatus?l.a.createElement(g.a,{to:"/"}):l.a.createElement(mn,null,l.a.createElement(vn,null,l.a.createElement(xn,{placeholder:"\u8d26\u53f7",ref:function(n){t.account=n}}),l.a.createElement(xn,{placeholder:"\u5bc6\u7801",type:"password",ref:function(n){t.password=n}}),l.a.createElement(En,{onClick:function(){return t.props.login(t.account,t.password)}},"\u767b\u5f55")))}}]),n}(c.PureComponent),jn=Object(O.b)((function(t){return{loginStatus:t.getIn(["login","login"])}}),(function(t){return{login:function(n,e){t(o.login(n.value,e.value))}}}))(On),yn=function(t){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return this.props.loginStatus?l.a.createElement("div",null,"\u5199\u6587\u7ae0\u9875\u9762"):l.a.createElement(g.a,{to:"/login"})}}]),n}(c.PureComponent),kn=Object(O.b)((function(t){return{loginStatus:t.getIn(["login","login"])}}),null)(yn),An=function(){return l.a.createElement(f.a,null,l.a.createElement(un,null),l.a.createElement(g.b,{exact:!0,path:"/",component:xt}),l.a.createElement(g.b,{path:"/login",exact:!0,component:jn}),l.a.createElement(g.b,{path:"/write",exact:!0,component:kn}),l.a.createElement(g.b,{path:"/detail/:id",exact:!0,component:pn}),l.a.createElement(g.b,{exact:!0,path:"/todolist",component:T}))},wn=e(57),Ln=e(148),In=e(149),Cn=e(133),Sn=Object(In.combineReducers)({todolist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;if("change_input_value"===n.type)return t.set("inputValue",n.value);if("add_todoItem"===n.type){var e=t.get("list").push(t.get("inputValue"));return t.set("list",e)}return"remove_todoitem"===n.type?t.merge({list:t.get("list").splice(n.value,1)}):t},header:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"header/SEARCH_FOCUS":return t.set("focused",!0);case"header/SEARCH_BLUR":return t.set("focused",!1);case"header/CHANGE_LIST":return t.merge({list:n.data,totalPage:n.totalPage});case"header/MOUSE_ENTER":return t.set("mouseIn",!0);case"header/MOUSE_LEAVE":return t.set("mouseIn",!1);case"header/CHANGE_PAGE":return t.set("page",n.page);default:return t}},home:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"home/CHANGE_HOME_DATA":return ot(t,n);case"home/ADD_ARTICLE_LIST":return ct(t,n);case"home/TOGGLE_SCROLL_TOP":return t.set("showScroll",n.show);default:return t}},detail:Cn.b,login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"login/CHANGE_LOGIN":case It:return t.set("login",n.value);default:return t}}}),Nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||wn.c,Tn=Object(wn.d)(Sn,Nn(Object(wn.a)(Ln.a)));s.a.render(l.a.createElement(O.a,{store:Tn},l.a.createElement(An,null)),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.f832dcf7.chunk.js.map