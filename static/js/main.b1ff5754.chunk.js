(this["webpackJsonptodolist-promise"]=this["webpackJsonptodolist-promise"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(2),c=n(6),a=n.n(c),r=n(7),o=n.n(r),i=n(9),l=n(8),u=n(1),f=n(10),h=(n(17),n(11)),p=n(0),d=function(){var t=Object(h.a)({filterType:"all",tasks:[]}),e=Object(f.a)(t,2),n=e[0],s=e[1],c=function(t){var e=t.title,n=t.completed,s=t.toggleTask;return Object(p.jsx)("li",{className:"task-row",style:{textDecoration:n?"line-through":"none"},onClick:s,children:e})},a=function(t,e,n){t.length>0?s((function(s){return Object(u.a)(Object(u.a)({},s),{},{tasks:[].concat(Object(l.a)(s.tasks),[{id:e,title:t,completed:n}])})})):alert("Please Input a Task")},r=function(t,e){fetch(j,{method:"POST",body:JSON.stringify({id:"".concat(e),title:"".concat(t),completed:!1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))},d=function(t){s((function(e){return Object(u.a)(Object(u.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}))})})),function(t){var e=!n.tasks[t-1].completed;fetch(j+"/".concat(t),{method:"PATCH",body:JSON.stringify({completed:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}(t)},j="https://zhiying-to-do-list.herokuapp.com/tasks",b=fetch(j).then((function(t){if(!t.ok)throw new Error("Promise Alert: HTTP error! status: ".concat(t.status));return t.json()}));function k(){return(k=Object(i.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(j);case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("AsyncWait Alert: HTTP error! status: ".concat(e.status));case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=function(t){var e,s=t.taskAction;return Object(p.jsxs)("form",{onSubmit:function(t){0===n.tasks.length?(alert("Please Synchronize with Server Before Creating Task Manually"),t.preventDefault()):(t.preventDefault(),s(e.value),e.value="")},children:[Object(p.jsx)("label",{children:Object(p.jsx)("input",{className:"task-input",ref:function(t){return e=t},type:"text"})}),Object(p.jsx)("input",{className:"task-button",type:"submit",value:"Create Task Manually"})]})},O=function(t){t.filterType;var e=t.setFilterType;return Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{className:"filter-text",children:"Filter Tasks: "}),["all","completed","active"].map((function(t,n){return Object(p.jsx)("button",{className:"filter-buttons",onClick:function(){return e(t)},children:t},n)}))]})};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" Zhiying's To-Do List"}),Object(p.jsx)(m,{taskAction:function(t){t.length>0?s((function(e){return Object(u.a)(Object(u.a)({},e),{},{tasks:[].concat(Object(l.a)(e.tasks),[{id:n.tasks.length+1,title:t,completed:!1}])})})):alert("Please Input a Task"),window.confirm("Are you sure you want to save this new task into the database?")?(r(t,n.tasks.length+1),console.log("This is saved to database")):console.log("This is not saved to database but created locally")}}),Object(p.jsx)("button",{className:"fetch-buttons",onClick:function(){var t=[];n.tasks.map((function(e,n){return t.push(e.title.toLowerCase())})),b.then((function(e){e.tasks.forEach((function(e){t.includes(e.title.toLowerCase())?alert("Task ".concat(e.title," already exist")):a(e.title,e.id,e.completed)})),console.log(e.tasks)}))},children:"Synchronize with Server (Promise)"}),Object(p.jsx)("button",{className:"fetch-buttons",onClick:function(){var t=[];n.tasks.map((function(e,n){return t.push(e.title.toLowerCase())})),function(){return k.apply(this,arguments)}().then((function(e){e.tasks.forEach((function(e){t.includes(e.title.toLowerCase())?alert("Task ".concat(e.title," already exist")):a(e.title,e.id,e.completed)}))}))},children:"Synchronize with Server (Async/Wait)"}),Object(p.jsx)("h3",{children:" "}),Object(p.jsx)(O,{filterType:n.filterType,setFilterType:function(t){s((function(e){return Object(u.a)(Object(u.a)({},e),{},{filterType:t})}))}}),Object(p.jsx)("ul",{children:("all"===n.filterType?n.tasks:n.tasks.filter((function(t){return t.completed===("completed"===n.filterType)}))).map((function(t){return Object(p.jsx)(c,{title:t.title,completed:t.completed,toggleTask:function(){return d(t.id)}},t.id)}))})]})};function j(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d,{})})}var b=document.getElementById("root");a.a.render(Object(p.jsx)(s.StrictMode,{children:Object(p.jsx)(j,{})}),b)}},[[19,1,2]]]);
//# sourceMappingURL=main.b1ff5754.chunk.js.map