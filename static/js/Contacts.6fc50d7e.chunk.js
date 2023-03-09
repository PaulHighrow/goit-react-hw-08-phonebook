"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[315],{3309:function(n,e,t){t.d(e,{Gq:function(){return u},II:function(){return x},__:function(){return m},jj:function(){return f},zx:function(){return p}});var i,r,a,o,s,c=t(168),d=t(6444),l=t(5705),u=(0,d.ZP)(l.l0)(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  margin-bottom: 20px;\n"]))),m=d.ZP.label(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 10px;\n\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n"]))),x=(0,d.ZP)(l.gN)(a||(a=(0,c.Z)(["\n  font-size: 16px;\n  line-height: 1.4;\n\n  padding: 4px;\n  border: 1px solid #cccaca;\n  border-radius: 5px;\n"]))),f=(0,d.ZP)(l.Bc)(o||(o=(0,c.Z)(["\n  font-size: 11px;\n  font-weight: 400;\n\n  text-align: center;\n\n  color: #f28d7c;\n"]))),p=d.ZP.button(s||(s=(0,c.Z)(["\n  padding: 5px;\n  font-size: 16px;\n  border: 1px solid #b5b5b5;\n  border-radius: 5px;\n  background-color: #d5e3e1;\n  transition: var(--animation-global);\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: #f3f5ce;\n  }\n"])))},882:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var i,r,a,o,s,c,d,l,u,m,x,f,p,h,b=t(5705),g=t(9434),Z=t(6916),j=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},y=function(n){return n.filter},P=(0,Z.createSelector)([j,y],(function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().trim().includes(t)}))})),z=function(){return{contacts:(0,g.v9)(j),isLoading:(0,g.v9)(v),error:(0,g.v9)(w),filter:(0,g.v9)(y)}},_=t(5218),A=t(3634),q=t(2774),k=t(3309),C=t(184),N={name:"",number:""},I=function(){var n=(0,g.I0)(),e=z().contacts;return(0,C.jsx)(b.J9,{initialValues:N,onSubmit:function(t,i){var r=i.resetForm;e.some((function(n){return n.name===t.name}))?_.Am.error("Sorry, ".concat(t.name," is already in contacts.")):(n((0,A.uK)(t)),r(),_.Am.success("Contact successfully added!"))},validationSchema:q.OD,children:(0,C.jsxs)(k.Gq,{children:[(0,C.jsxs)(k.__,{children:["Name",(0,C.jsx)(k.II,{type:"text",name:"name"}),(0,C.jsx)(k.jj,{component:"div",name:"name"})]}),(0,C.jsxs)(k.__,{children:["Number",(0,C.jsx)(k.II,{type:"tel",name:"number"}),(0,C.jsx)(k.jj,{component:"div",name:"number"})]}),(0,C.jsx)(k.zx,{type:"submit",children:"Add contact"})]})})},S=t(9439),E=t(168),F=t(8820),$=t(6444),D=$.ZP.p(i||(i=(0,E.Z)(["\n  font-size: 16px;\n  line-height: 1.2;\n"]))),R=$.ZP.div(r||(r=(0,E.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),G=$.ZP.button(a||(a=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n\n  border: none;\n  background-color: transparent;\n  color: #4682b4;\n  transition: var(--animation-global);\n\n  width: 24px;\n  padding: 2px;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #000080;\n    filter: drop-shadow(var(--shadow-global));\n  }\n"]))),L=(0,$.ZP)(F.dEB)(o||(o=(0,E.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),O=(0,$.ZP)(F.ql3)(s||(s=(0,E.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),V=t(4373),T=$.ZP.button(c||(c=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n\n  border: none;\n  background-color: transparent;\n  color: #8b0000;\n  transition: var(--animation-global);\n\n  width: 24px;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #ff2400;\n    filter: drop-shadow(var(--shadow-global));\n  }\n\n  position: absolute;\n  right: -6%;\n  top: -4%;\n"]))),B=(0,$.ZP)(V.abH)(d||(d=(0,E.Z)(["\n  fill: currentColor;\n  width: 24px;\n  height: 24px;\n"]))),H=(0,$.ZP)(b.l0)(l||(l=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  gap: 8px;\n"]))),J=(0,$.ZP)(b.gN)(u||(u=(0,E.Z)(["\n  font-size: 16px;\n  line-height: 1.4;\n\n  padding: 4px;\n  border: 1px solid #cccaca;\n  border-radius: 5px;\n"]))),K=function(n){var e=n.defaultValues,t=n.toastId,i=n.toggleDisabled,r=(0,g.I0)(),a=(0,g.v9)(j);return(0,C.jsx)(b.J9,{initialValues:e,onSubmit:function(n){if(a.some((function(e){return e.name===n.name&&e.id!==n.id})))_.Am.error("Sorry, ".concat(n.name," is already in contacts."));else{if(n.name===e.name&&n.number===e.number)_.Am.dismiss(t),(0,_.Am)("No changes were made",{icon:"\ud83c\udd97"});else{var o={id:e.id,name:n.name,number:n.number};r((0,A.mP)(o)),_.Am.dismiss(t),_.Am.success("Contact successfully edited!")}i(!1)}},validationSchema:q.OD,children:(0,C.jsxs)(H,{children:[(0,C.jsx)(D,{children:"Edit Contact"}),(0,C.jsx)(J,{type:"text",name:"name"}),(0,C.jsx)(k.jj,{component:"div",name:"name"}),(0,C.jsx)(J,{type:"tel",name:"number"}),(0,C.jsx)(k.jj,{component:"div",name:"number"}),(0,C.jsx)(k.zx,{type:"submit",children:"Submit"}),(0,C.jsx)(T,{type:"button",onClick:function(){_.Am.dismiss(t),i(!1)},children:(0,C.jsx)(B,{})})]})})},M=t(2791),Y=function(n){var e=n.contact,t=e.id,i=e.name,r=e.number,a=(0,g.I0)(),o=(0,M.useState)(!1),s=(0,S.Z)(o,2),c=s[0],d=s[1],l=function(n){d(n)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(D,{children:[i,": ",r]}),(0,C.jsxs)(R,{children:[(0,C.jsx)(G,{type:"button",onClick:function(){d(!0),function(){var n={id:t,name:i,number:r};(0,_.Am)((function(e){return(0,C.jsx)(K,{defaultValues:n,toastId:e.id,toggleDisabled:l})}),{duration:1/0})}()},disabled:c,children:(0,C.jsx)(L,{})}),(0,C.jsx)(G,{type:"button",onClick:function(){a((0,A.GK)(t)),_.Am.success("Contact was deleted!")},children:(0,C.jsx)(O,{})})]})]})},U=$.ZP.h3(m||(m=(0,E.Z)(["\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]))),Q=$.ZP.ul(x||(x=(0,E.Z)(["\n  padding: 0 16px;\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n"]))),W=$.ZP.li(f||(f=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  border-bottom: 1px dashed #b5b5b5;\n"]))),X=function(){var n=(0,g.v9)(j),e=(0,g.v9)(P);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(U,{children:"Your Contacts"}),n.length?e.length?(0,C.jsx)(Q,{children:e.map((function(n){return(0,C.jsx)(W,{children:(0,C.jsx)(Y,{contact:n})},n.id)}))}):(0,C.jsx)(D,{children:"No matches found!"}):(0,C.jsx)(D,{children:"No contacts yet, use a form above to add some!"})]})},nn=t(4808),en=$.ZP.label(p||(p=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 20px;\n\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n"]))),tn=$.ZP.input(h||(h=(0,E.Z)(["\n  font-size: 16px;\n  line-height: 1.4;\n\n  padding: 4px;\n  border: 1px solid #cccaca;\n  border-radius: 5px;\n"]))),rn=function(){var n=z().filter,e=(0,g.I0)();return(0,C.jsxs)(en,{children:["Find contacts by name:",(0,C.jsx)(tn,{type:"text",value:n,onChange:function(n){e((0,nn.T)(n.target.value))}})]})},an=t(7793),on=t(3930),sn=t(3804),cn=function(){var n=(0,g.v9)(v),e=(0,g.v9)(w),t=(0,g.I0)();return(0,M.useEffect)((function(){t((0,A.yF)())}),[t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(on.xv,{children:["Manage your contacts in the",(0,C.jsx)(on.TR,{to:sn.Z.HOME,children:"Phonebook"})]}),(0,C.jsx)(I,{}),(0,C.jsx)(rn,{}),n&&!e&&(0,C.jsx)(an.a,{}),!n&&(0,C.jsx)(X,{})]})}},3930:function(n,e,t){t.d(e,{TR:function(){return u},__:function(){return x},im:function(){return m},xv:function(){return l}});var i,r,a,o,s=t(168),c=t(1087),d=t(6444),l=d.ZP.p(i||(i=(0,s.Z)(["\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n\n  padding: 30px;\n"]))),u=(0,d.ZP)(c.rU)(r||(r=(0,s.Z)(["\n  display: block;\n\n  font-family: Genos;\n  font-size: 40px;\n  font-style: italic;\n\n  line-height: 1.6;\n\n  color: #4682b4;\n  transition: var(--animation-global);\n\n  &:hover,\n  &:focus {\n    color: #000080;\n    filter: drop-shadow(var(--shadow-global));\n  }\n"]))),m=d.ZP.div(a||(a=(0,s.Z)(["\n  position: relative;\n  margin-bottom: 16px;\n  max-width: 205px;\n"]))),x=d.ZP.label(o||(o=(0,s.Z)(["\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n\n  gap: 4px;\n\n  font-size: 16px;\n  line-height: 1.2;\n"])))},2774:function(n,e,t){t.d(e,{OD:function(){return r},Yy:function(){return o},dm:function(){return a}});var i=t(2797),r=i.Ry().shape({name:i.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),number:i.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Please enter a valid number!").required("Number is required!")}),a=i.Ry().shape({email:i.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:i.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")}),o=i.Ry().shape({name:i.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),email:i.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:i.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")})}}]);
//# sourceMappingURL=Contacts.6fc50d7e.chunk.js.map