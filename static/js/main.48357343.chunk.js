(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{20:function(t,e,n){t.exports=n(43)},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),c=n(6),s=n(2),l=n(3),d=n(4),p=n(5),u=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,r=e.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChangeProps(a)}}),o.a.createElement("button",{onClick:function(){return t.props.deleteTodoProps(a)}},"Delete"),o.a.createElement("span",{style:this.props.todo.completed?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(o.a.Component),m=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.props.todos.map((function(e){return o.a.createElement(u,{key:e.id,todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps})})))}}]),n}(o.a.Component),h=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Ramiro's Todos App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},f=n(17),b=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},"  ",o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),o.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),n}(a.Component),v=n(18),y=n.n(v),g=n(19),j=n.n(g),O=(n(42),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodoItem=function(e){var n={id:y()(),title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[n])})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:9}}).then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodoProps:this.addTodoItem}),o.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(o.a.Component));i.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.48357343.chunk.js.map