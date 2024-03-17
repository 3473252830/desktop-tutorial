(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705],{1024:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return L},default:function(){return U}});var r=t(39827),a=t(9112),n=t(65455),o=t(13038),l=t(82473),i=t(61236),u=t(52134),c=t(25494),d=t(19841),p=t(80483),g=t.n(p),m=t(70079),j=t(1454),x=t(9063),f=t(84692),h=t(68498),w=t(35250);function y(e){let{checked:s}=e;return(0,w.jsx)("div",{className:"p-2",children:s?(0,w.jsx)(j.bTu,{}):(0,w.jsx)(j.Tfp,{})})}var b=t(7557),Z=t(36607),v=t(52299);function k(e){let{className:s,inputClassName:t,value:r,onChange:a,placeholder:n}=e;return(0,w.jsxs)("div",{className:(0,d.default)("relative",s),children:[(0,w.jsx)(j.jRj,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,w.jsx)("input",{type:"text",value:r,onChange:a,placeholder:n,className:(0,d.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",t),autoComplete:"off"})]})}var S=t(42005),M=t(70917),C=t(95250),N=t(16244),O=t(24668),P=t(61888),D=t(85641),G=t(4373);function E(e){let{group:s,isOpen:t,onClose:r}=e,a=(0,x.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),n=(0,O.t)(),o=null==n?void 0:n.getWorkspaceId(),{0:l,1:i}=(0,m.useState)(""),{0:c,1:d}=(0,m.useState)(0),{data:p}=(0,G.Z)(o,c*G.I,l,G.I,u.Wk),{0:g,1:h}=(0,m.useState)([]),{0:y,1:Z}=(0,m.useState)([]),S=p?Math.ceil(p.total/G.I):0;async function M(e){Z(s=>[...s,e]);try{await Q(o,s.id,e),h(s=>[...s,e])}catch(e){console.error(e)}finally{Z(s=>s.filter(s=>s!==e))}}return(0,w.jsx)(N.Z,{type:"warning",isOpen:t,onClose:null!=r?r:P.noop,title:a,size:"custom",className:"max-w-screen-md",showCloseButton:!0,children:(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsx)("p",{children:a}),(0,w.jsx)(k,{value:l,inputClassName:"w-full",onChange:e=>{i(e.target.value)}}),(0,w.jsxs)(C.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(C.Z.Header,{children:[(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,w.jsx)(C.Z.HeaderCell,{})]}),(0,w.jsx)(C.Z.Body,{children:null==p?void 0:p.items.map(e=>(0,w.jsxs)(C.Z.Row,{children:[(0,w.jsx)(C.Z.Cell,{children:e.name}),(0,w.jsx)(C.Z.Cell,{children:e.email}),(0,w.jsx)(C.Z.Cell,{textAlign:"right",className:"pr-1",children:(0,w.jsx)(b.z,{size:"small",color:"neutral",disabled:y.includes(e.id),onClick:()=>{g.includes(e.id)||M(e.id)},children:g.includes(e.id)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(D.nQ,{}),(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j.OvN,{}),(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})]})})})]},e.id))})]}),(0,w.jsx)("div",{className:"flex flex-row justify-center",children:(0,w.jsx)(v.t,{currentPage:c,onChangeIndex:e=>{d(e)},length:S})})]})})}async function Q(e,s,t){await o.Z.addWorkspaceGroupUser(e,s,t)}var _=t(68832);function q(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function T(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?q(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function R(e){let{workspaceId:s,group:t}=e,r=(0,x.Z)(),{0:a,1:n}=(0,m.useState)(!1),{0:p,1:g}=(0,m.useState)(""),{0:h,1:y}=(0,m.useState)(0),{data:Z,isLoading:k,isPlaceholderData:N}=(0,i.a)({queryKey:[s,"groups",t.id,p,"members-page-".concat(h)],queryFn:()=>o.Z.listWorkspaceGroupMembers(s,t.id,p,10*h),placeholderData:u.Wk}),{0:O,1:P}=(0,m.useState)(!1),G=(0,m.useRef)(null),Q=(0,l.NL)();(0,m.useEffect)(()=>{a&&G.current&&G.current.focus()},[a]);let{mutateAsync:q}=(0,c.D)({mutationFn:async e=>await o.Z.removeWorkspaceGroupMember(s,t.id,e),onMutate:e=>(Q.cancelQueries({queryKey:[s,"groups",t.id]}),Q.setQueryData([s,"groups",t.id,p,"members-page-".concat(h)],s=>s?T(T({},s),{},{items:s.items.filter(s=>s.id!==e),total:s.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:Z}),onError:(e,r,a)=>{Q.setQueryData([s,"groups",t.id,"members-page-".concat(h)],null==a?void 0:a.previousData),Q.invalidateQueries({queryKey:[s,"groups",t.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),Q.invalidateQueries({queryKey:[s,"groups"]})}});return(0,w.jsxs)("div",{className:"flex w-full flex-col",children:[(0,w.jsxs)("div",{className:"flex flex-row items-center ",children:[(0,w.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,w.jsx)("div",{className:"grow"}),(0,w.jsx)(_.u,{label:r.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,w.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{n(!0)},children:(0,w.jsx)(D.ol,{})})}),(0,w.jsx)("input",{type:"text",ref:G,placeholder:r.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,d.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",a?"w-64":"w-0"),value:p,onChange:()=>{var e,s;y(0),g(null!==(e=null===(s=G.current)||void 0===s?void 0:s.value)&&void 0!==e?e:"")}})]}),(0,w.jsxs)(C.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(C.Z.Header,{children:[(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,w.jsx)(C.Z.HeaderCell,{})]}),(0,w.jsx)(C.Z.Body,{className:k||N?"opacity-50":void 0,children:null==Z?(0,w.jsx)(C.Z.Row,{children:(0,w.jsx)(C.Z.Cell,{colSpan:3,children:(0,w.jsx)(S.Z,{})})}):0===Z.items.length?(0,w.jsx)(C.Z.Row,{children:(0,w.jsx)(C.Z.Cell,{colSpan:3,children:""===p?(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):Z.items.map(e=>(0,w.jsxs)(C.Z.Row,{children:[(0,w.jsx)(C.Z.Cell,{children:(0,w.jsx)("span",{className:"ml-3",children:e.name})}),(0,w.jsx)(C.Z.Cell,{children:e.email}),(0,w.jsx)(C.Z.Cell,{textAlign:"right",children:(0,w.jsxs)(M.Z.Root,{children:[(0,w.jsx)(M.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(j.K9M,{className:"icon-sm"})}),(0,w.jsx)(M.Z.Portal,{children:(0,w.jsx)(M.Z.Content,{children:(0,w.jsx)(M.Z.Item,{onClick:()=>q(e.id),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]})})]},e.id))})]}),(0,w.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[(0,w.jsx)(b.z,{color:"neutral",onClick:()=>P(!0),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),(0,w.jsx)("div",{className:"grow"}),Z&&Z.items.length>0&&(0,w.jsx)(v.t,{currentPage:h,onChangeIndex:e=>{y(e)},length:Math.ceil(Z.total/10)})]}),O&&(0,w.jsx)(E,{isOpen:!0,onClose:()=>{Q.invalidateQueries({queryKey:[s,"groups"]}),P(!1)},group:t})]})}function I(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function A(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?I(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function K(e){let{workspaceId:s}=e,t=(0,x.Z)(),r=(0,l.NL)(),{0:a,1:p}=(0,m.useState)(""),{0:g,1:j}=(0,m.useState)(0),{data:h,isLoading:y,isPlaceholderData:Z}=(0,i.a)({queryKey:""===a?[s,"groups","page-".concat(g)]:[s,"groups","filtered",a,"page-".concat(g)],queryFn:()=>o.Z.getWorkspaceGroups(s,{query:a,offset:10*g}),placeholderData:u.Wk}),{0:M,1:N}=(0,m.useState)(!1),O=e=>{e&&(j(0),p("")),N(e)},{mutateAsync:P}=(0,c.D)({mutationFn:async e=>{let{workspaceId:s,name:t}=e;return await o.Z.createWorkspaceGroup(s,t)},onMutate:e=>{let{workspaceId:s,name:t}=e;return r.cancelQueries({queryKey:[s,"groups"]}),r.setQueryData([s,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),A(A({},e),{},{items:[{id:"new",name:t,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:h}},onError:(e,a,o)=>{r.setQueryData([s,"groups","page-0"],null==o?void 0:o.previousGroups),r.invalidateQueries({queryKey:[s,"groups"]}),"Group with this name already exists."===e.message&&n.m.warning(t.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),r.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:D}=(0,c.D)({mutationFn:async e=>await o.Z.deleteWorkspaceGroup(s,e),onMutate:e=>(r.cancelQueries({queryKey:[s,"groups","page-0"]}),r.setQueryData([s,"groups","page-0"],s=>(s||(s={items:[]}),A(A({},s),{},{items:s.items.filter(s=>s.id!==e)}))),{previousGroups:h}),onError:(e,t,a)=>{r.setQueryData([s,"groups","page-0"],null==a?void 0:a.previousGroups),r.invalidateQueries({queryKey:[s,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),r.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:G}=(0,c.D)({mutationFn:async e=>{let{workspaceId:s,groupID:t,name:r}=e;return await o.Z.updateWorkspaceGroup(s,t,r)},onMutate:e=>{let{workspaceId:s,groupID:t,name:a}=e,n=r.getQueryData([s,"groups","page-".concat(g)]);return r.setQueryData([s,"groups","page-".concat(g)],e=>(e||(e={items:[]}),A(A({},e),{},{items:e.items.map(e=>e.id===t?A(A({},e),{},{name:a}):e)}))),{previousGroups:n}},onError:(e,s,a)=>{r.setQueryData([s,"groups","page-".concat(g)],null==a?void 0:a.previousGroups),"Group with this name already exists."===e.message&&n.m.warning(t.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),r.invalidateQueries({queryKey:[s,"groups"]})}});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,w.jsx)(k,{className:"max-w-12",inputClassName:"w-full",value:a,onChange:e=>{p(e.target.value),j(0)},placeholder:t.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),(0,w.jsx)(b.z,{onClick:()=>O(!0),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(C.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(C.Z.Header,{children:[(0,w.jsx)(C.Z.HeaderCell,{}),(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,w.jsx)(C.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,w.jsx)(C.Z.HeaderCell,{})]}),(0,w.jsxs)(C.Z.Body,{className:(0,d.default)((y||Z)&&"opacity-50"),children:[M&&(0,w.jsx)(H,{group:"new",workspaceId:s,onChangeName:async e=>{""!==e.trim()&&(P({workspaceId:s,name:e}),O(!1))},onDelete:()=>null}),null==h?(0,w.jsx)(C.Z.Row,{children:(0,w.jsx)(C.Z.Cell,{colSpan:5,textAlign:"center",children:(0,w.jsx)(S.Z,{})})}):0===h.items.length?(0,w.jsx)(C.Z.Row,{children:(0,w.jsx)(C.Z.Cell,{colSpan:5,textAlign:"center",children:""===a?(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):h.items.map(e=>(0,w.jsx)(H,{group:e,workspaceId:s,onDelete:D,onChangeName:async t=>{G({workspaceId:s,groupID:e.id,name:t})}},e.id))]})]}),h&&(0,w.jsx)("div",{className:"flex flex-row justify-center",children:(0,w.jsx)(v.t,{length:Math.ceil(h.total/10),currentPage:Math.min(g,Math.ceil(h.total/10)),onChangeIndex:e=>j(e)})})]})]})}function F(e){let{currentWorkspaceId:s}=e,t=(0,x.Z)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g(),{children:(0,w.jsx)("title",{children:t.formatMessage(B.title)})}),(0,w.jsx)(a.yG,{title:t.formatMessage(B.title),subtitle:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.subtitle",defaultMessage:"Only workspace owners can view and change these settings"})}),(0,w.jsx)(a.hb,{showSpinner:!1,children:(0,w.jsx)(K,{workspaceId:s})})]})}function H(e){let{group:s,workspaceId:t,onChangeName:r,onDelete:a}=e,n=(0,x.Z)(),{0:o,1:l}=(0,m.useState)(!1),{0:i,1:u}=(0,m.useState)("new"===s?"":s.name),{0:c,1:d}=(0,m.useState)(!1),{0:p,1:g}=(0,m.useState)("new"===s),{0:b,1:v}=(0,m.useState)(null),k=(0,m.useRef)(null);(0,m.useEffect)(()=>{if("new"===s||p){var e;null===(e=k.current)||void 0===e||e.focus()}},[s,p]);let S=async()=>{if(""===i.trim()){u("new"===s?"":s.name),g(!1),d(!1);return}r&&(d(!0),await r(i)),d(!1),g(!1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(C.Z.Row,{onClick:()=>l(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,w.jsx)(C.Z.Cell,{children:(0,w.jsx)(y,{checked:o})}),(0,w.jsx)(C.Z.Cell,{children:"new"===s||p?(0,w.jsx)(Z.Z,{ref:k,name:"newGroupName",value:i,disabled:c,placeholder:n.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>u(e.target.value),onBlur:()=>{i!==("new"===s?"":s.name)&&S()},onPressEnter:S}):s.name}),(0,w.jsx)(C.Z.Cell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===s?"0":s.num_members}})}),(0,w.jsx)(C.Z.Cell,{children:"new"!==s&&s.created_time?(0,w.jsx)(h.Ji,{value:s.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,w.jsx)(C.Z.Cell,{textAlign:"right",children:"new"!==s&&(0,w.jsxs)(M.Z.Root,{children:[(0,w.jsx)(M.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(j.K9M,{className:"icon-sm"})}),(0,w.jsx)(M.Z.Portal,{children:(0,w.jsxs)(M.Z.Content,{children:[(0,w.jsx)(M.Z.Item,{onClick:e=>{g(!0),setTimeout(()=>{var e;null===(e=k.current)||void 0===e||e.focus()},120),e.stopPropagation()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,w.jsx)(M.Z.Item,{onClick:e=>{v(s),e.stopPropagation()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]})})]}),o&&"new"!==s&&(0,w.jsx)(C.Z.Row,{children:(0,w.jsx)(C.Z.Cell,{colSpan:5,className:"pl-8",children:(0,w.jsx)(R,{group:s,workspaceId:t})})}),b&&(0,w.jsx)(W,{group:b,onDelete:a,onClose:()=>v(null)})]})}function W(e){let{group:s,onDelete:t,onClose:r}=e,a=(0,x.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:s.name});return(0,w.jsx)(N.Z,{type:"warning",isOpen:!0,onClose:r,title:a,showCloseButton:!0,primaryButton:(0,w.jsx)(b.z,{color:"danger",onClick:async()=>{t(s.id),r()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,w.jsx)(b.z,{onClick:r,color:"neutral",children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,w.jsx)("p",{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:s.name}})})})}let B=(0,h.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function z(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}var L=!0;function U(e){return(0,w.jsx)(F,function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?z(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}({},e))}U.getLayout=function(e){return(0,w.jsx)(a.ZP,{mobilePageTitle:"Groups",requireAdminPrivileges:!0,children:e})}},96654:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return t(1024)}])}},function(e){e.O(0,[9112,4736,2888,9774,179],function(){return e(e.s=96654)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-88de251df5c912ef.js.map