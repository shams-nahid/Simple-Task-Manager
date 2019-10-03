(window.webpackJsonpui=window.webpackJsonpui||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(3)),l=a(4),i=a(6),m=a(5),u=a(7),p=a(8),d=a(1),v=a(9),f=a.n(v),h=a(15),b=a(13),E=a.n(b),j=function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("".concat("/api","/project"),e);case 3:t.push("/dashboard"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.project,t=e.projectName,a=e.projectIdentifier,r=e.description;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},a)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,t),n.a.createElement("p",null,r)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(a)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(p.b,{to:"updateProject/".concat(a)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{onClick:this.onDeleteClick.bind(this,a),className:"list-group-item delete"},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),t}(r.Component),y=Object(d.b)(null,{deleteProject:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the projet and all the data related to it")){t.next=4;break}return t.next=3,E.a.delete("".concat("/api","/project/").concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(g),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(N,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(y,{key:e.id,project:e})}))))))}}]),t}(r.Component),k=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/api","/project/all"));case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(O),w=a(27),C=a.n(w),P=function(e){if(e)return E.a.defaults.headers.common.Authorization=e;delete E.a.defaults.headers.common.Authorization},S=function(){return function(e){localStorage.removeItem("jwtToken"),P(!1),e({type:"SET_CURRENT_USER",payload:{}})}},_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e=this.props.security,t=e.validToken,a=e.user,r=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/register"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),a.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/register"},"Signup")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login")))),o=t&&a?r:c;return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"dashboard"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),o))}}]),t}(r.Component),T=Object(d.b)((function(e){return{security:e.security}}),{logout:S})(_),D=(a(78),a(23)),x=a(11),R=a(10),I=a(12),G=a.n(I),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){var t=e.errors;t&&this.setState({errors:t})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a={projectName:t.projectName,projectIdentifier:t.projectIdentifier,description:t.description,start_date:t.start_date,end_date:t.end_date};this.props.createProject(a,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.projectName,a=e.projectIdentifier,r=e.description,c=e.start_date,o=e.end_date,s=e.errors,l=s.projectName,i=s.projectIdentifier,m=s.description;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":l}),placeholder:"Project Name",name:"projectName",value:t,onChange:this.onChange}),l&&n.a.createElement("div",{className:"invalid-feedback"},l)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":i}),placeholder:"Unique Project ID",name:"projectIdentifier",value:a,onChange:this.onChange}),i&&n.a.createElement("div",{className:"invalid-feedback"},i)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control form-control-lg",{"is-invalid":m}),placeholder:"Project Description",name:"description",value:r,onChange:this.onChange}),m&&n.a.createElement("div",{className:"invalid-feedback"},m)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:c,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:o,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),U=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:j})(A),B=a(20),L=a(44),M={};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={projects:[],project:{}};function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={project_tasks:[],project_task:{}};function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z={user:{},validToken:!1},Y=Object(B.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"GET_PROJECTS":return q({},e,{projects:r});case"GET_PROJECT":return q({},e,{project:r});case"DELETE_PROJECT":return q({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==r}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.payload,r=t.type;switch(r){case"GET_BACKLOG":return F({},e,{project_tasks:a});case"GET_PROJECT_TASK":return F({},e,{project_task:a});case"DELETE_PROJECT_TASK":return F({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==a}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"SET_CURRENT_USER":return V({},e,{validToken:!!r,user:r});default:return e}}}),$={},Q=[L.a],Z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ee=window.navigator.userAgent.includes("Chrome")&&Z?Object(B.e)(Y,$,Object(B.d)(B.a.apply(void 0,Q),Z)):Object(B.e)(Y,$,Object(B.d)(B.a.apply(void 0,Q)));function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.errors,a=e.project;t&&this.setState({errors:t}),this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.id,a=e.history;this.props.getProject(t,a)}},{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a={id:t.id,projectName:t.projectName,projectIdentifier:t.projectIdentifier,description:t.description,start_date:t.start_date,end_date:t.end_date};this.props.createProject(a,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.projectName,a=e.projectIdentifier,r=e.description,c=e.start_date,o=e.end_date,s=e.errors,l=s.projectName,i=s.description;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":l}),placeholder:"Project Name",name:"projectName",value:t,onChange:this.onChange}),l&&n.a.createElement("div",{className:"invalid-feedback"},l)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:a,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control form-control-lg",{"is-invalid":i}),placeholder:"Project Description",name:"description",value:r,onChange:this.onChange}),i&&n.a.createElement("div",{className:"invalid-feedback"},i)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:c,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:o,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),re=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("".concat("/api","/project/").concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:j})(ae),ne=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task,r=a.projectSequence,c=a.priority,o=a.summary,s=a.acceptanceCriteria,l=a.projectIdentifier;switch(c){case 2:t="bg-warning text-light",e="MEDIUM";break;case 3:t="bg-info text-light",e="LOW";break;default:t="bg-danger text-light",e="HIGH"}return n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",r," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},o),n.a.createElement("p",{className:"card-text text-truncate "},s),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(l,"/").concat(r),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,l,r)},"Delete")))}}]),t}(r.Component),ce=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,". This action can not be undone."))){a.next=4;break}return a.next=3,E.a.delete("".concat("/api/backlog","/").concat(e,"/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ne),oe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks.map((function(e){return n.a.createElement(ce,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++){var o=e[c];switch(o.props.project_task.status){case"IN_PROGRESS":a.push(o);break;case"DONE":r.push(o);break;default:t.push(o)}}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),se=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.errors;t&&this.setState({errors:t})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.backlog.project_tasks,a=this.props.errors;return n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(e),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No tasks found here"):n.a.createElement(oe,{project_tasks:t})}(a,t))}}]),t}(r.Component),le=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("".concat("/api/backlog","/").concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(se),ie=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(R.a)(a)),a.onSubmit=a.onSubmit.bind(Object(R.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.errors;t&&this.setState({errors:t})}},{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.summary,r=t.acceptanceCriteria,n=t.status,c=t.priority,o=t.dueDate,s=t.projectIdentifier,l={summary:a,acceptanceCriteria:r,status:n,priority:c,dueDate:o,projectIdentifier:s};this.props.addProjectTask(s,l,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.summary,a=e.acceptanceCriteria,r=e.status,c=e.priority,o=e.dueDate,s=e.projectIdentifier,l=e.errors.summary;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(s),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":l}),name:"summary",placeholder:"Project Task summary",value:t,onChange:this.onChange}),l&&n.a.createElement("div",{className:"invalid-feedback"},l)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:a,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:o,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:c,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:r,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),me=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(h.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.post("".concat("/api/backlog","/").concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(ie),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",create_At:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,l=t.dueDate,i=t.projectIdentifier,m=t.create_At,u=e.errors;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:l,projectIdentifier:i,create_At:m,errors:u})}},{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,l=t.dueDate,i=t.projectIdentifier,m={id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:l,projectIdentifier:i,create_At:t.create_At},u=this.props;(0,u.updateProjectTask)(i,r,m,u.history)}},{key:"render",value:function(){var e=this.state,t=e.projectIdentifier,a=e.projectSequence,r=e.summary,c=e.acceptanceCriteria,o=e.dueDate,s=e.priority,l=e.status,i=e.errors,m=null;return i&&i.summary&&(m=i.summary),n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(t),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",t," | Project Task ID: ",a),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":m}),name:"summary",placeholder:"Project Task summary",value:r,onChange:this.onChange}),m&&n.a.createElement("div",{className:"invalid-feedback"},m)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:c,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:o,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:s,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:l,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),pe=Object(d.b)((function(e){var t=e.errors;return{projectTask:e.backlog.project_task,errors:t}}),{getProjectTask:function(e,t,a){return function(){var r=Object(h.a)(f.a.mark((function r(n){var c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.get("".concat("/api/backlog","/").concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(h.a)(f.a.mark((function n(c){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.patch("".concat("/api/backlog","/").concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(ue),de=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.security,a=e.history;return t.validToken&&a.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start you own"),n.a.createElement("hr",null),n.a.createElement(p.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),ve=Object(d.b)((function(e){return{security:e.security}}),{})(de),fe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",fullName:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.errors;t&&this.setState({errors:t})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.security,a=e.history;return t.validToken&&a.push("/dashboard")}},{key:"onChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(x.a)({},a,r))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.username,r=t.password,n={username:a,fullName:t.fullName,password:r,confirmPassword:t.confirmPassword};this.props.createNewUser(n,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,r=e.fullName,c=e.confirmPassword,o=e.errors,s=o.username,l=o.password,i=o.fullName,m=o.confirmPassword;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":i}),placeholder:"Full Name",name:"fullName",value:r,onChange:this.onChange}),i&&n.a.createElement("div",{className:"invalid-feedback"},i)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:G()("form-control form-control-lg",{"is-invalid":s}),placeholder:"Email Address",name:"username",value:t,onChange:this.onChange}),s&&n.a.createElement("div",{className:"invalid-feedback"},s)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":l}),placeholder:"Password",name:"password",value:a,onChange:this.onChange}),l&&n.a.createElement("div",{className:"invalid-feedback"},l)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":m}),placeholder:"Confirm Password",name:"confirmPassword",value:c,onChange:this.onChange}),m&&n.a.createElement("div",{className:"invalid-feedback"},m)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),he=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("".concat("/api/users","/register"),e);case 3:t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(fe),be=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(x.a)({},a,r))}},{key:"componentWillReceiveProps",value:function(e){var t=e.errors,a=e.security;return t&&this.setState({errors:t}),a.validToken&&this.props.history.push("/dashboard")}},{key:"componentDidMount",value:function(){var e=this.props,t=e.security,a=e.history;return t.validToken&&a.push("/dashboard")}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a={username:t.username,password:t.password};this.props.login(a)}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,r=e.errors,c=r.username,o=r.password;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:G()("form-control form-control-lg",{"is-invalid":c}),placeholder:"Email Address",name:"username",value:t,onChange:this.onChange}),c&&n.a.createElement("div",{className:"invalid-feedback"},c)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":o}),placeholder:"Password",name:"password",value:a,onChange:this.onChange}),o&&n.a.createElement("div",{className:"invalid-feedback"},o)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),Ee=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){var r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("".concat("/api/users","/login"),e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),P(n),c=C()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(be),je=a(45),ge=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(je.a)(e,["component","security"]);return n.a.createElement(D.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(D.a,{to:"/login"})}}))})),ye=localStorage.getItem("jwtToken");if(ye){P(ye);var Ne=C()(ye);ee.dispatch({type:"SET_CURRENT_USER",payload:Ne});var Oe=Date.now()/1e3;Ne.exp<Oe&&(ee.dispatch(S()),window.location.href="/")}var ke=function(){return n.a.createElement(d.a,{store:ee},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement(D.b,{exact:!0,path:"/",component:ve}),n.a.createElement(D.b,{exact:!0,path:"/register",component:he}),n.a.createElement(D.b,{exact:!0,path:"/login",component:Ee}),n.a.createElement(D.d,null,n.a.createElement(ge,{exact:!0,path:"/dashboard",component:k}),n.a.createElement(ge,{exact:!0,path:"/addProject",component:U}),n.a.createElement(ge,{exact:!0,path:"/updateProject/:id",component:re}),n.a.createElement(ge,{exact:!0,path:"/projectBoard/:id",component:le}),n.a.createElement(ge,{exact:!0,path:"/addProjectTask/:id",component:me}),n.a.createElement(ge,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:pe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.cedbaadc.chunk.js.map