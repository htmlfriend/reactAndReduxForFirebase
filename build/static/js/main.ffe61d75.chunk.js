(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{70:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),a=n(19),r=n.n(a),s=n(14),i=n(13),d=n(22),l=n(9),u=n(10),j=n(12),b=n(11),O=n(3),h=n(26),p=n.n(h),f=n(39),m=n(40),v=n.n(m),x="ADD_TODO",y="GET_TODOS",g="DELETE_TODO",k=(n(70),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{className:"todo mb-2",children:[Object(o.jsx)("p",{style:{color:"red"},children:" email: "}),Object(o.jsxs)("p",{children:["Name : ",this.props.title]}),Object(o.jsx)("button",{className:"btn btn-danger",style:{fontSize:"30px"},onClick:function(){return t.props.deleteTodo(t.props.id)},children:"Delete elem"})]},this.props.id)}}]),n}(c.Component)),N=Object(i.b)(null,{deleteTodo:function(t){return{type:g,id:t}}})(k),T=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{style:{color:"red"},children:"List todo "}),Array.isArray(this.props.todos)&&this.props.todos.length?this.props.todos.map((function(e){return Object(o.jsx)(N,{id:e.id,title:e.title,deleteTodo:t.props.deleteTodo},e.id)})):Object(o.jsx)("h1",{children:"Loding ....."})]})}}]),n}(c.Component),w=n(21),D=(n(71),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={title:""},t.onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value)),console.log(e.target.value)},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo({id:Date.now(),title:t.state.title}),t.setState({title:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"add-todo",onSubmit:this.onSubmit,children:[Object(o.jsx)("h1",{children:"Add a task"}),Object(o.jsxs)("div",{className:"form-group mb-3",children:[Object(o.jsx)("label",{htmlFor:"title",children:"Name of a task"}),Object(o.jsx)("input",{onChange:this.onChange,type:"text",name:"title",value:this.state.title,className:"form-control"})]}),Object(o.jsx)("button",{className:"btn btn-success btn-lg",type:"submit",children:"Add task"})]})}}]),n}(c.Component)),S=Object(i.b)(null,{addTodo:function(t){return{type:x,todo:t}}})(D),C=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("ul",{className:"nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{className:"nav-link",to:"/",children:"Tasks"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{className:"nav-link",to:"/add",children:"Add task"})})]})}}]),n}(c.Component),A=[{id:1,title:"wash your hands"},{id:2,title:"wash my car"},{id:3,title:"water my flowers"}],E=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"getUsers",value:function(){this.setState({todos:A,loading:!1})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState({todos:[].concat(Object(d.a)(this.state.todos),A),loding:!1})}},{key:"componentDidMount",value:function(){this.props.getTodos()}},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(C,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(o.jsx)(T,{todos:t.props.todos})}}),Object(o.jsx)(O.a,{exact:!0,path:"/add",component:function(){return Object(o.jsx)(S,{})}})]})]})}}]),n}(c.Component),L=Object(O.f)(Object(i.b)((function(t){return{todos:t.todoReducer.todos}}),{getTodos:function(){return function(){var t=Object(f.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://jsonplaceholder.typicode.com/todos");case 2:n=t.sent,e({type:y,todos:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(E));var _=n(15),J=n(41),R=n(16),z={todos:null},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(R.a)(Object(R.a)({},t),{},{todos:[e.todo].concat(Object(d.a)(t.todos))});case y:return Object(R.a)(Object(R.a)({},t),{},{todos:e.todos});case g:return Object(R.a)(Object(R.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.id}))});default:return t}},F=Object(_.c)({todoReducer:B}),G=Object(_.d)(F,Object(_.a)(J.a)),I=Object(o.jsx)(i.a,{store:G,children:Object(o.jsx)(s.a,{children:Object(o.jsx)(L,{})})});r.a.render(I,document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ffe61d75.chunk.js.map