(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{33:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){e.exports=t(54)},41:function(e,a,t){},42:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),s=t.n(r),l=(t(41),t(6)),i=t(7),o=t(9),m=t(8),d=t(24),u=t.n(d),h=(t(42),t(16)),p=t(27),f=t(29),b=t.n(f),E=t(5),g=t(30),y=t.n(g),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).titles=["Mechanical Engineer","Robotics Engineer (MSc)","Front-End Developer"],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(e)),e}return Object(i.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){if(this.props.sharedData){this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),5e3]})).flat()}var e=c.a.memo((function(){return c.a.createElement(p.a,{className:"title-styles",steps:["Mechanical Engineer",1200,"Robotics Engineer (MSc)",1200,"Front-End Developer",1200],loop:1e4})}),(function(e,a){return!0}));return c.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},c.a.createElement("div",{className:"row aligner",style:{height:"100%"}},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",null,c.a.createElement(E.Icon,{icon:y.a,style:{fontSize:"25rem",paddingBottom:"10rem"}}),c.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),c.a.createElement("br",null),c.a.createElement("h1",{className:"mb-0"},c.a.createElement(p.a,{steps:["Usman Khan"],wrapper:"p"})),c.a.createElement("div",{className:"title-container"},c.a.createElement(e,null)),c.a.createElement(b.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:c.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:c.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),t}(n.Component),w=(n.Component,t(13)),k=t.n(w),N=t(14),j=t.n(N),I=t(15),x=t.n(I),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo){this.props.resumeBasicInfo.section_name.about,this.props.resumeBasicInfo.description_header;var e=this.props.resumeBasicInfo.description}return c.a.createElement("section",{id:"about"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{style:{color:"black"}},c.a.createElement("span",null,"About Me")),c.a.createElement("div",{className:"row center mx-auto mb-5"},c.a.createElement("div",{className:"col-md-4 mb-5 center"},c.a.createElement("div",{className:"polaroid"},c.a.createElement("span",{style:{cursor:"auto"}},c.a.createElement("img",{height:"200px",width:"300px",src:"https://scontent.ficn2-2.fna.fbcdn.net/v/t1.6435-9/51401461_1125909770953241_5514271883853299712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCPfsXyyjoekAxKYiy_py145PKkq1LHzXjk8qSrUsfNf5yfzsgpaOLyxPlCVVMpAi-9cY7H1dT0I8vcYAiL5AY&_nc_ohc=w6owGXDwKvoAX9NNGTP&_nc_ht=scontent.ficn2-2.fna&oh=00_AfB31StAx473WQ27XJnj8WKCt24XG8uPQ0nbL3hVXtTUmA&oe=63DA1400",alt:"Avatar placeholder"}),c.a.createElement(E.Icon,{icon:j.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement(E.Icon,{icon:k.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement(E.Icon,{icon:x.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),c.a.createElement("div",{className:"col-md-8 center"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",c.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",c.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),c.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},c.a.createElement("br",null),c.a.createElement("span",{className:"wave"},"I'm a Robotics Engineer turned Front End Developer from Islamabad, Pakistan. Currently doing my Masters in Robotics from KAIST South Korea, I love taking complex problems and solve them using programming. I started programming on C++ as a hobby, before shifting to python completely and solving several problems using Machine Learning algorithms. Currently, I work with HTML, CSS, Javascript and React framework to create elegent amd clean websites.  "),c.a.createElement("p",null,c.a.createElement("span",{className:"wave"},"When I am not working, you will find me at the sports complex or music room playing piano! ")),c.a.createElement("br",null),c.a.createElement("br",null),e)))))))}}]),t}(n.Component),A=t(19),C=(t(49),t(26)),_=t(20),D=t.n(_),O=t(21),B=t.n(O),L=t(22),T=t.n(L),z=t(23),P=t.n(z),M=t(25),R=t.n(M),W=t(31),F=t.n(W),K=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo){this.props.resumeBasicInfo.section_name.experience;var e=this.props.resumeExperience.map((function(e,a){var t=e.technologies,n=e.mainTech.map((function(e,a){return c.a.createElement(C.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)})),r=t.map((function(e,a){return c.a.createElement(C.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return c.a.createElement(A.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:c.a.createElement("i",{className:"fab fa-angular experience-icon"}),key:a},c.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),c.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),c.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),c.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},r))}))}return c.a.createElement("section",{id:"resume",className:"pb-5"},c.a.createElement("div",{className:"col-md-12 mx-auto"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{className:"section-title",style:{color:"black"}},c.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},"Contact me")))),c.a.createElement("div",{className:"col-md-8 mx-auto"},c.a.createElement("div",{className:"col-md-4 mb-5 center"},c.a.createElement("span",{className:"polaroid",style:{display:"flex",justifyContent:"center"}},c.a.createElement("span",{style:{cursor:"auto"}},c.a.createElement("article",{class:"mw5 flex flex-column center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement(E.Icon,{icon:R.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("div",{class:"tc"},c.a.createElement("h1",{class:"f3"},"ADDRESS"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"})),c.a.createElement("p",{class:"lh-copy measure center f4 black-70"},"Daejeon, South Korea"))),c.a.createElement("span",{style:{cursor:"auto"}},c.a.createElement("article",{class:"mw-100 flex flex-column center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement(E.Icon,{icon:F.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("div",{class:"tc"},c.a.createElement("h1",{class:"f4"},"PHONE"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"})),c.a.createElement("p",{class:"lh-copy measure center f4 black-70"},"+923165068553"))),c.a.createElement("span",{style:{cursor:"auto"}},c.a.createElement("article",{class:"mw5 flex flex-column center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement(E.Icon,{icon:R.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("div",{class:"tc"},c.a.createElement("h1",{class:"f4"},"EMAIL"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"})),c.a.createElement("p",{class:"lh-copy measure center f4 black-70"},"usmankhan002011"),c.a.createElement("p",{class:"lh-copy measure center f4 black-70"},"@gmail.com"))))),c.a.createElement(A.VerticalTimeline,null,e,c.a.createElement(A.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:c.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),$=t(57),H=t(32),U=t.n(H),X=t(33),V=t.n(X),J=t(34),Y=t.n(J),G=(t(50),n.Component,function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)this.props.resumeBasicInfo.section_name.projects,this.props.resumeProjects.map((function(a){return c.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},c.a.createElement("span",{className:"portfolio-item d-block"},c.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},c.a.createElement("div",null,c.a.createElement("img",{src:"Capturre.png",alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),c.a.createElement("span",{className:"project-date"},"2022"),c.a.createElement("br",null),c.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return c.a.createElement("section",{id:"portfolio"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{className:"section-title",style:{color:"black"}},c.a.createElement("span",null,"Projects")),c.a.createElement("div",null,c.a.createElement("span",{style:{display:"flex",justifyContent:"space-evenly"}},c.a.createElement("a",{href:"https://usmankhan002011.github.io/Dancing-Robo/",target:"_blank"},c.a.createElement("article",{class:"br2 ba dark-gray b--black-10 mv4 w-100 w-5-m w-25-l mw5 center grow"},c.a.createElement("div",{class:"pa2 ph3-ns pb3-ns"},c.a.createElement("div",{class:"dt w-100 mt1"},c.a.createElement("div",{class:"dtc"},c.a.createElement("h1",{class:"f1 f4-ns mv0"},"Dancing Robot!"))),c.a.createElement("p",{class:"f4 lh-copy measure mt2 mid-gray"},"Make the robot dance with different inputs with the React based project!")))),c.a.createElement("a",{href:"https://usmankhan002011.github.io/Face-recognition-project/",target:"_blank"},c.a.createElement("article",{class:"br2 ba dark-gray b--black-10 mv4 w-100 w-5-m w-25-l mw5 center grow"},c.a.createElement("div",{class:"pa2 ph3-ns pb3-ns"},c.a.createElement("div",{class:"dt w-100 mt1"},c.a.createElement("div",{class:"dtc"},c.a.createElement("h1",{class:"f1 f4-ns mv0"},"Face Recognition App"))),c.a.createElement("p",{class:"f4 lh-copy measure mt2 mid-gray"},"Input any url of an image and see the magic of machine learning API to detect faces in an image!"))))))))}}]),t}(n.Component)),q=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)this.props.resumeBasicInfo.section_name.skills,this.props.sharedSkills.icons.map((function(e,a){return c.a.createElement("li",{className:"list-inline-item mx-3",key:a},c.a.createElement("span",null,c.a.createElement("div",{className:"text-center skills-tile"},c.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},c.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return c.a.createElement("section",{id:"skills"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{className:"section-title"},c.a.createElement("span",{className:"text-white"},"Skills"))),c.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:j.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"Python"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:x.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"Tensorflow"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:D.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"HTML 5"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:B.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"CSS 3"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:T.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"Javascript"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:k.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"Python"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))),c.a.createElement("article",{class:"mw5 center bg-dark-gray br3 pa3 pa4-ns mv3 ba b--black-10"},c.a.createElement("div",{class:"tc"},c.a.createElement(E.Icon,{icon:P.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),c.a.createElement("h1",{class:"f4 white"},"MATLAB"),c.a.createElement("hr",{class:"mw3 bb bw1 b--black-10"}))))))}}]),t}(n.Component),Q=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{projects:["dancing robo","face"]},sharedData:{name:"Usman Khan"}},n}return Object(i.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData()}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{sharedData:this.state.sharedData.basic_info}),c.a.createElement("div",{className:"col-md-12 mx-auto text-center language"}),c.a.createElement(S,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),c.a.createElement(G,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),c.a.createElement(q,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),c.a.createElement(K,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}))}}]),t}(n.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(52),t(53);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",s.a.render(c.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/Portfolio","/service-worker.js");Z?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(a,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.bb363572.chunk.js.map