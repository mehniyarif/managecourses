(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{4432:function(e,t,s){Promise.resolve().then(s.bind(s,4589))},4589:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(9268),r=s(4715);class l{toTitleCase(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}toCapitalizeCase(e){return e.charAt(0).toUpperCase()+e.slice(1)}getArrayValues(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=[];return["commas","sum"].includes(s.listManipulation)?e.forEach(e=>{a=a.concat(this.getPropertyValue(e,t,s))}):a=a.concat(this.getPropertyValue(e[0],t,s)),a}getPropertyValue(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=[];return t.length>1&&e[t[0]]?Array.isArray(e[t[0]])?a=a.concat(this.getArrayValues(e[t[0]],t.slice(1),s)):t[0]in e&&(a=a.concat(this.getPropertyValue(e[t[0]],t.slice(1),s))):Array.isArray(e[t[0]])?a=a.concat(this.getArrayValues(e[t[0]],t.slice(1),s)):t[0]in e&&a.push(e[t[0]]),a}mergeColumns(e,t,s){let a=[];return null==s||s.mergeColumnNames.forEach(t=>{a.push(this.readProperty(e,{name:t}))}),a.join(" ")}readProperty(e,t){if(!e||!t.name)return null;let s=t.name.split("."),a={listManipulation:t.list_manipulation?t.list_manipulation:"first",textManipulation:t.text_manipulation?t.text_manipulation:"default"},r="";switch(r=["sum"].includes(a.listManipulation)?this.getPropertyValue(e,s,a).reduce((e,t)=>e+t,0):this.getPropertyValue(e,s,a).join(","),a.textManipulation){case"lower":return r.toLowerCase();case"upper":return r.toUpperCase();case"title":return this.toTitleCase(r);case"capitalize":return this.toCapitalizeCase(r);default:return r}}constructor(){}}let n=e=>{let{onDetailAction:t,onDeleteAction:s,...r}=e,n=new l;return(0,a.jsxs)("table",{className:"flex flex-col gap-2.5 w-full ",children:[(0,a.jsx)("thead",{className:"w-full",children:(0,a.jsx)("tr",{className:"grid grid-rows-1 w-full h-8 px-3 rounded-lg grid-cols-2 place-content-center place-items-center",style:{gridTemplateColumns:"repeat(".concat(null==r?void 0:r.columns.length,", minmax(0, 1fr)")},children:null==r?void 0:r.columns.map((e,t)=>(0,a.jsx)("th",{className:"flex h-full w-full justify-center items-center ",children:(0,a.jsx)("span",{className:"truncate text-xs font-['Montserrat'] font-semibold text-[#acacac]",children:e.title})},t))})}),(0,a.jsxs)("tbody",{className:"flex flex-col gap-2.5 w-full ",children:[(null==r?void 0:r.data.length)===0&&(0,a.jsx)("tr",{className:"flex w-full justify-center items-center text-sm font-['Montserrat'] text-black mt-2.5 delay-700",children:(0,a.jsx)("td",{children:"No Data Available"})}),null==r?void 0:r.data.map((e,l)=>(0,a.jsx)("tr",{className:"bg-white grid grid-rows-1 w-full h-20 px-3 rounded-lg grid-cols-2 place-content-center place-items-center",style:{gridTemplateColumns:"repeat(".concat(null==r?void 0:r.columns.length,", minmax(0, 1fr)")},children:null==r?void 0:r.columns.map((l,i)=>(0,a.jsx)("td",{className:"flex h-full w-full justify-center items-center",children:"image"===l.type?(0,a.jsx)("img",{src:n.readProperty(e,l),className:"min-h-0 min-w-0 w-16 shrink-0"}):"merge"===l.type?(0,a.jsx)("span",{className:"truncate whitespace-nowrap text-sm font-['Montserrat'] text-black",children:n.mergeColumns(e,null==r?void 0:r.columns,l)}):"actions"===l.type?(0,a.jsxs)("span",{className:"flex justify-center items-center gap-6",children:[(0,a.jsx)("button",{onClick:()=>t(e),children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/wKFYQEwKMy5UOkupmgnF.svg",className:"hover:scale-105 min-h-0 min-w-0 mr-px relative w-5 shrink-0"})}),(0,a.jsx)("button",{onClick:()=>s(e),children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/dCXBHDB13CroFdgy2PGy.svg",className:"hover:scale-105 min-h-0 min-w-0 relative w-4 shrink-0"})})]}):(0,a.jsx)("span",{className:"truncate whitespace-nowrap text-sm font-['Montserrat'] text-black",children:n.readProperty(e,l)})},i))},l))]})]})};var i=s(6006),o=s(4028),c=s(6008),m=s(2533),d=s(2276),u=s.n(d);let h=e=>{let{onClose:t}=e,s=(0,c.useRouter)(),[l,n]=(0,i.useState)(!1),[o,m]=(0,i.useState)(""),[d,h]=(0,i.useState)({firstname:"",lastname:"",email:"",phone:"",website:"",companyName:"",password:"",passwordConfirm:""}),f=e=>{let{name:t,value:s}=e.target;h(e=>({...e,[t]:s})),x(e),n([...document.getElementById("create-new-student-form").querySelectorAll("input")].every(e=>e.checkValidity()))},x=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{name:s,value:a}=e.target;queueMicrotask(()=>{"passwordConfirm"===s&&a&&document.querySelector("#password").value===a?(e.target.setCustomValidity(""),m("")):e.target.value&&!e.target.checkValidity()?(t&&e.target.reportValidity(),m(e.target.validationMessage)):"passwordConfirm"===s&&a&&document.querySelector("#password").value!==a?(e.target.setCustomValidity("Passwords Not Match"),m(e.target.validationMessage)):(e.target.setCustomValidity(""),m(""))}),n([...document.getElementById("create-new-student-form").querySelectorAll("input")].every(e=>e.checkValidity()))},g=e=>{x(e,!0)};return(0,a.jsxs)("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsxs)("div",{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-1/2 md:max-w-full sm:max-w-lg",children:[(0,a.jsx)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,a.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,a.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-300 sm:mx-0 sm:h-10 sm:w-10",children:(0,a.jsx)("svg",{className:"w-6 h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 18",children:(0,a.jsx)("path",{d:"M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"})})}),(0,a.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[(0,a.jsx)("h3",{className:"text-base font-semibold leading-6 text-gray-900",id:"modal-title",children:"Create new student"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Please enter the student information you want to add completely below."})})]})]})}),(0,a.jsxs)("form",{className:"p-12",id:"create-new-student-form",children:[(0,a.jsxs)("div",{className:"grid gap-6 mb-6 md:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"First name"}),(0,a.jsx)("input",{type:"text",id:"first_name",value:d.firstname,minLength:2,name:"firstname",onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"John",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"last_name",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"Last name"}),(0,a.jsx)("input",{type:"text",id:"last_name",name:"lastname",value:d.lastname,minLength:2,onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"Doe",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{htmlFor:"company",className:"flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 ",children:["Company ",(0,a.jsx)("span",{className:"text-xs text-gray-600",children:"(optional)"})]}),(0,a.jsx)("input",{type:"text",id:"company",name:"companyName",value:d.companyName,minLength:2,onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"ManageCourses"})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{htmlFor:"phone",className:"flex justify-between mb-2 text-sm font-medium text-gray-900 ",children:["Phone number",(0,a.jsx)("span",{className:"text-xs text-gray-400",children:"e.g. 550 111 22 33"})]}),(0,a.jsxs)("div",{className:"flex w-full gap-1",children:[(0,a.jsx)("input",{type:"text",value:"+90",disabled:!0,className:"bg-gray-50 border w-12 border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "}),(0,a.jsx)("input",{type:"tel",id:"phone",name:"phone",value:d.phone,onChange:f,onBlur:g,minLength:10,maxLength:10,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"550 111 22 33",required:!0})]})]})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"website",className:"flex  items-center gap-1 mb-2 text-sm font-medium text-gray-900 ",children:["Website URL ",(0,a.jsx)("span",{className:"text-xs text-gray-600",children:"(optional)"})," ",(0,a.jsx)("span",{className:"ml-auto text-xs text-gray-400",children:"e.g. managecourses.com"})]}),(0,a.jsx)("input",{type:"text",id:"website",name:"website",value:d.website,onChange:f,pattern:"^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$",onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"managecourses.com"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"email",className:"flex justify-between mb-2 text-sm font-medium text-gray-900 ",children:["Email address",(0,a.jsx)("span",{className:"text-xs text-gray-400",children:"e.g. help@managecourses.com"})]}),(0,a.jsx)("input",{type:"email",id:"email",value:d.email,name:"email",onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"john.doe@company.com",required:!0})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"Password"}),(0,a.jsx)("input",{type:"password",id:"password",name:"password",value:d.password,minLength:8,onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"•••••••••",required:!0})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"confirm_password",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"Confirm password"}),(0,a.jsx)("input",{type:"password",id:"confirm_password",name:"passwordConfirm",minLength:8,value:d.passwordConfirm,onChange:f,onBlur:g,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",placeholder:"•••••••••",required:!0})]}),o&&(0,a.jsxs)("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50",role:"alert",children:[(0,a.jsx)("span",{className:"font-medium",children:"Form Validation alert!"})," ",o]})]}),(0,a.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(0,a.jsx)("button",{type:"button",disabled:!l,onClick:e=>{let a={firstName:d.firstname,lastName:d.lastname,email:d.email,phone:"+90 ".concat(d.phone),domain:d.website,password:d.password,company:{name:d.companyName}};(0,r.r4)(a).then(e=>{u()({title:'"'.concat(d.firstname," ").concat(d.lastname,'" student account created successfully'),text:"Successfully",icon:"success"}).then(e=>{e&&(t(),s.push("/students"),window.location.reload())})}).catch(e=>{u()({title:'Failed to create student account "'.concat(d.firstname," ").concat(d.lastname,'"'),text:"Operation failed",icon:"warning"}).then(e=>{e&&console.log("create confirmed.")})})},className:"inline-flex w-full justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",children:"Apply"}),(0,a.jsx)("button",{type:"button",onClick:t,className:"mt-3 inline-flex w-full  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",children:"Cancel"})]})]})})})]})};function f(){let e=(0,c.useSearchParams)(),t=(0,c.usePathname)(),s=(0,c.useRouter)(),l=new o.Z,d=parseInt(e.get("limit"))||5,f=parseInt(e.get("offset"))||0,[x,g]=(0,i.useState)(0),[p,b]=(0,i.useState)([]),[w,y]=(0,i.useState)(e.get("search")||""),[v,j]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e;return w?(clearTimeout(e),e=setTimeout(()=>{(0,r.pz)({q:w}).then(e=>{var t;b((null===(t=e.data)||void 0===t?void 0:t.users)||[])});let e=l.createQuerySet({search:w});s.push(t+e)},250)):(0,r.uh)({limit:d,offset:f}).then(e=>{b(e.data.users),g(e.data.total)}),()=>{clearTimeout(e)}},[w]);let N=e=>{u()({title:'Are you sure you want to delete the student named "'.concat(e.firstName," ").concat(e.lastName,'"?'),text:"This action cannot be undone!",icon:"warning",buttons:["Cancel","Delete"],dangerMode:!0}).then(t=>{t?(0,r.h8)(e.id).then(()=>{u()({title:'"'.concat(e.firstName," ").concat(e.lastName,'" student account deleted successfully'),text:"Successfully",icon:"info"}).then(()=>{s.push("/students"),window.location.reload()})}):console.log("Delete canceled.")})};return(0,a.jsx)(m.Z,{children:(0,a.jsxs)("div",{className:"flex bg-[#F8F8F8] h-full min-h-screen w-full flex-col items-center justify-between px-[30px] pt-[72px] pb-20",children:[(0,a.jsxs)("div",{className:"self-start flex flex-col justify-start gap-2 relative w-full items-center",children:[(0,a.jsxs)("div",{className:"flex justify-between mb-0 gap-6 relative w-full items-center",children:[(0,a.jsx)("div",{className:"whitespace-nowrap text-xl font-['Montserrat'] font-bold text-black mr-[499px] relative",children:"Students List"}),(0,a.jsxs)("div",{className:"h-10 flex flex-col font-['Montserrat'] w-[200px] relative ml-auto",children:[(0,a.jsx)("input",{value:w,onChange:e=>{y(e.target.value)},onKeyDown:e=>{if("Enter"===e.key){let e=l.createQuerySet({search:w});s.push(t+e)}},className:"h-full pr-10 focus:text-gray-500 rounded-lg focus:border-gray-100 focus:peer-gray-200 focus:outline-gray-200 border border-[#e5e5e5] pl-[15px] text-[#c4c4c4] text-[12px] bg-white",placeholder:"Search...",type:"search"}),(0,a.jsx)("img",{src:"https://file.rendit.io/n/3VbMVtvX04a7owYFsfuu.svg",onClick:()=>{window.location.reload()},className:"min-h-0 min-w-0 absolute top-3.5 right-4 w-3 shrink-0 cursor-pointer"})]}),(0,a.jsx)("button",{onClick:()=>{j(!0)},className:"flex flex-col justify-start relative w-[200px] items-center",children:(0,a.jsx)("div",{className:"bg-[#feaf00] flex flex-col justify-center relative w-full h-10 shrink-0 items-center rounded",children:(0,a.jsx)("span",{className:"whitespace-nowrap text-sm font-['Montserrat'] font-medium text-white relative",children:"ADD NEW STUDENT"})})})]}),(0,a.jsx)("div",{className:"border-solid border-[#e5e5e5] mb-3 relative w-full h-px shrink-0 bordert borderb-0 borderx-0"}),(0,a.jsx)(n,{data:p,columns:[{name:"image",type:"image",title:""},{name:"firstName",type:"merge",mergeColumnNames:["firstName","lastName"],title:"Name"},{name:"email",title:"Email"},{name:"phone",title:"Phone"},{name:"domain",title:"Website"},{name:"company.name",title:"Company Name"},{name:"action",type:"actions",title:""}],onDetailAction:e=>{s.push("/students/".concat(e.id))},onDeleteAction:e=>{N(e)}}),!w&&p.length>0&&(0,a.jsxs)("div",{className:"flex justify-end w-full mr-8 gap-1 mt-[33px] relative items-center mb-20",children:[(0,a.jsx)("div",{className:"text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-1 relative h-[75%]",children:"Rows per page:"}),(0,a.jsx)("select",{id:"students-limit-select-box",value:d,onChange:e=>{let a={limit:e.target.value||5,offset:f||0};(0,r.uh)(a).then(e=>{b(e.data.users),g(e.data.total)});let n=l.createQuerySet(a);s.push(t+n)},className:"cursor-pointer text-right mr-12 outline-none bg-transparent text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#4a4f6c] relative w-12 h-[75%]",children:[5,6,7,8,9,10,15,20,25].map((e,t)=>(0,a.jsx)("option",{value:e,children:e},t))}),(0,a.jsxs)("div",{className:"text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-5 relative h-[75%]",children:[f+1,"-",f+p.length," of ",x]}),(0,a.jsx)("button",{onClick:()=>{if(f<=0)return;let e=f-d;e<0&&(e=0);let a={offset:e||0,limit:d||5};(0,r.uh)(a).then(e=>{b(e.data.users),g(e.data.total)});let n=l.createQuerySet(a);s.push(t+n)},children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/JeemT0rIY33CVILgr1De.svg",className:"hover:scale-105 min-h-0 min-w-0 mr-2 relative w-6 shrink-0"})}),(0,a.jsx)("button",{onClick:e=>{if(f+d>=x)return;let a={offset:f+d,limit:d||5};(0,r.uh)(a).then(e=>{b(e.data.users),g(e.data.total)});let n=l.createQuerySet(a);s.push(t+n)},children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/jJkGrhSkyUiHphduJWhM.svg",className:"hover:scale-105 min-h-0 min-w-0 relative w-6 shrink-0"})})]})]}),v&&(0,a.jsx)(h,{onClose:()=>{j(!1)}})]})})}},9427:function(e,t,s){"use strict";s.r(t),s.d(t,{Navbar:function(){return l}});var a=s(9268),r=s(6008);s(5846),s(6394);let l=()=>{let e=(0,r.useRouter)();return(0,a.jsxs)("nav",{className:"bg-white flex fixed z-10 justify-between h-[60px] w-[calc(100%-270px)] right-0 top-0 items-center pl-8 pr-12",children:[(0,a.jsx)("button",{onClick:()=>e.back(),children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/98li1Ek27heYzXST0FbT.svg",className:"min-h-0 min-w-0 relative w-4 shrink-0"})}),(0,a.jsx)("img",{src:"https://file.rendit.io/n/nUHUpvjMJwvw2XgGs79w.svg",className:"min-h-0 min-w-0 relative w-4 shrink-0"})]})}},5258:function(e,t,s){"use strict";s.r(t),s.d(t,{Sidebar:function(){return c}});var a=s(9268),r=s(6008),l=s(5846),n=s.n(l),i=s(6394),o=s.n(i);let c=()=>{let e=(0,r.usePathname)(),t=(0,r.useRouter)();return(0,a.jsx)("aside",{className:"overflow-hidden bg-[#fcfcfc] flex flex-row justify-start fixed z-10 min-w-[270px] h-full items-center",children:(0,a.jsxs)("div",{className:"bg-[#f2eae1] flex flex-col justify-start gap-8 relative w-full h-full text-center items-center py-4",children:[(0,a.jsxs)("div",{className:"flex justify-center mb-6 relative justify-center",children:[(0,a.jsx)("span",{className:"w-1 h-full bg-amber-300",children:"\xa0"}),(0,a.jsx)("div",{className:"whitespace-nowrap text-[20px] font-['Montserrat'] font-bold text-black ml-2 relative",children:"MANAGE COURSES"})]}),(0,a.jsx)("div",{className:"min-h-[150px] h-[150px] min-w-0 self-center mb-12 relative",children:(0,a.jsx)("img",{src:"https://file.rendit.io/n/QIZVhQinXB0vU9z2Trwt.svg",className:"min-h-0 min-w-0"})}),(0,a.jsx)("div",{className:"w-full gap-8 flex justify-center flex-col items-center",children:[{path:"/",header:"Home",width:19,height:17,svgSrc:"https://file.rendit.io/n/oaG27LI0LSiIE8vgCC4n.svg"},{path:"/course",header:"Course",width:12,height:15,svgSrc:"https://file.rendit.io/n/cZ8eMJWiJVR3FmPTN4RH.svg"},{path:"/students",header:"Students",width:20,height:16,svgSrc:"https://file.rendit.io/n/B256z64mgLaJq410pDzJ.svg"},{path:"/payment",header:"Payment",width:15,height:17,svgSrc:"https://file.rendit.io/n/jibcjULLkkP64PwkLXF7.svg"},{path:"/report",header:"Report",width:13,height:17,svgSrc:"https://file.rendit.io/n/IFajcMR4OQTuKcQvJkFL.svg"},{path:"/settings",header:"Settings",width:15,height:17,svgSrc:"https://file.rendit.io/n/U2IZz7hPNggb4gQACRUZ.svg"}].map((t,s)=>(0,a.jsxs)(n(),{href:t.path,className:"".concat(t.path==="/".concat(e.split("/").slice(0,2).join(""))?"bg-[#feaf00]":""," cursor-pointer flex justify-center gap-4 relative h-10 items-center w-[193px] py-3 rounded"),children:[(0,a.jsx)(o(),{src:t.svgSrc,alt:"no image alt",height:t.height,width:t.height,className:"min-h-0 min-w-0 relative w-5 h-5 shrink-0"}),(0,a.jsx)("div",{className:"text-sm font-['Montserrat'] font-medium text-black relative",children:t.header})]},s))}),(0,a.jsxs)("div",{className:"self-center flex mt-auto mb-[33px] flex-row justify-start gap-6 relative w-24 items-center",children:[(0,a.jsx)("button",{onClick:()=>t.push("/login"),className:"cursor-pointer text-sm font-['Montserrat'] font-medium text-black mb-px relative",children:"Logout"}),(0,a.jsx)("img",{src:"https://file.rendit.io/n/KMRiiY7ti82T2r1X7BbA.svg",className:"min-h-0 min-w-0 relative w-4 shrink-0"})]})]})})}},2533:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(9268),r=s(5258),l=s(9427);function n(e){let{children:t}=e;return(0,a.jsxs)("main",{className:"flex h-full w-full pl-[270px]",children:[(0,a.jsx)(r.Sidebar,{}),(0,a.jsxs)("div",{className:"flex pt-[60px] flex-col w-[calc(100%-270px)] ml-auto bg-[#fcfcfc] min-h-screen",children:[(0,a.jsx)(l.Navbar,{}),t]})]})}},4715:function(e,t,s){"use strict";s.d(t,{r4:function(){return o},h8:function(){return m},uh:function(){return l},PR:function(){return i},pz:function(){return n},Nq:function(){return c}});let a=s(4214).Z.create({baseURL:"https://dummyjson.com/"});var r=s(4028);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new r.Z,s={skip:e.offset,limit:e.limit},l=t.createQuerySet(s);return a.get("/users"+l).then(t=>{let s=JSON.parse(localStorage.getItem("createdUsers"))||[];return t.data.total+=s.length,e.offset>=100&&(t.data.users=t.data.users.concat(s.slice(100-e.offset,100-e.offset+e.limit))),t}).catch(e=>{throw console.log(e),e})}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new r.Z().createQuerySet(e);return a.get("/users/search"+t).then(t=>{let s=JSON.parse(localStorage.getItem("createdUsers"))||[];return e.q&&(t.data.users=t.data.users.concat(s.filter(t=>t.firstName.toLowerCase().search(e.q.toLowerCase())>-1||t.lastName.toLowerCase().search(e.q.toLowerCase())>-1))),t}).catch(e=>{throw console.log(e),e})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return;let t=(JSON.parse(localStorage.getItem("createdUsers"))||[]).find(t=>parseInt(t.id)===parseInt(e));return t?Promise.resolve({data:t}):a.get("/users/".concat(e)).then(e=>e).catch(e=>{throw console.log(e),e})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.post("/users/add",e).then(t=>{let s=JSON.parse(localStorage.getItem("createdUsers"))||[];return e.id=s.length+1001,e.image="https://robohash.org/consequunturautconsequatur.png",s.push(e),localStorage.setItem("createdUsers",JSON.stringify(s)),t}).catch(e=>{throw console.log(e),e})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{id:t,...s}=e,r=JSON.parse(localStorage.getItem("createdUsers"))||[],l=r.findIndex(e=>parseInt(e.id)===parseInt(t));return l>-1?(Object.entries(s).forEach(e=>{let[t,s]=e;r[l][t]=s}),localStorage.setItem("createdUsers",JSON.stringify(r)),Promise.resolve({data:e})):a.put("/users/".concat(t),s).then(e=>e).catch(e=>{throw console.log(e),e})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return;let t=JSON.parse(localStorage.getItem("createdUsers"))||[],s=t.findIndex(t=>parseInt(t.id)===parseInt(e));return s>-1?(t.splice(s,1),localStorage.setItem("createdUsers",JSON.stringify(t)),Promise.resolve({data:e})):a.delete("/users/".concat(e)).then(e=>e).catch(e=>{throw console.log(e),e})}},4028:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});class a{filterParams(){for(let[e,t]of Object.entries(this.data))null!==t&&""!==t&&(this.filteredParams[e]=t)}createQuerySet(e){return this.data=e,this.filterParams(),"?".concat(new URLSearchParams(this.filteredParams).toString())}constructor(){this.data={},this.filteredParams={}}}}},function(e){e.O(0,[758,450,253,769,744],function(){return e(e.s=4432)}),_N_E=e.O()}]);