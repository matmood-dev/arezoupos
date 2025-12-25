import{r as d,j as r}from"./vendor-react-CRZW6wHZ.js";import{d as t}from"./vendor-styled-HqHy2qUa.js";import{b as u}from"./index-v5rrbpvu.js";import{B as D}from"./Button-4LKQu1lR.js";import{z,v as F}from"./vendor-icons-DKkSWR1V.js";import{z as g}from"./vendor-toast-hkeavouR.js";import{u as P}from"./vendor-i18n-GeQ4qXZA.js";import{c as L,u as q}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const f=t.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,k=t.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
    gap: 12px;
  }
`,S=t.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: ${e=>e.theme.colors.glass};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 16px;

  &:hover {
    background: ${e=>e.theme.colors.surface};
    transform: translateX(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 13px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`,H=t.h1`
  color: ${e=>e.theme.colors.text};
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,I=t.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
  }
`,A=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,N=t.h2`
  margin: 0;
  color: ${e=>e.theme.colors.text};
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`,T=t.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`,G=t.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,O=t.h3`
  color: ${e=>e.theme.colors.text};
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`,M=t.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,c=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,m=t.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,w=t.input`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`,R=t.select`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`,X=t.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 8px;
    margin-top: 8px;
  }
`,Y=t(D)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  background: ${e=>e.theme.gradients.primary};
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${e=>e.theme.shadows.medium};
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`,J=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: ${e=>e.theme.colors.textSecondary};
`,K=t.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,fe=()=>{const{t:e}=P(),{id:a}=L(),b=q(),[n,C]=d.useState(null),[B,h]=d.useState(!0),[j,_]=d.useState(""),[o,U]=d.useState({username:"",email:"",password:"",role:"cashier"}),v=d.useCallback(async()=>{if(a==="new"){h(!1);return}try{h(!0);const s=await u.getById(a);s.success&&s.data?(C(s.data),U({username:s.data.username,email:s.data.email,password:"",role:s.data.role})):_(e("editUser.user_not_found"))}catch(s){console.error("Error fetching user:",s),_(s instanceof Error?s.message:e("editUser.load_error"))}finally{h(!1)}},[a,e]);d.useEffect(()=>{a&&v()},[a,v]);const E=async s=>{s.preventDefault();const l=a==="new";try{let i;if(l){const x={username:o.username,email:o.email,password:o.password,role:o.role};i=await u.create(x)}else{if(!n)return;const x={username:o.username,email:o.email,role:o.role};o.password&&(x.password=o.password),i=await u.update(n.userid,x)}i.success&&i.data?(g.success(e(l?"editUser.create_success":"editUser.update_success",{name:i.data.username})),b("/users")):g.error(e(l?"editUser.create_error":"editUser.update_error"))}catch(i){g.error(i instanceof Error?i.message:e(l?"editUser.create_error":"editUser.update_error"))}},p=s=>{U({...o,[s.target.name]:s.target.value})},y=()=>{b("/users")},$=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return B?r.jsx(f,{children:r.jsx(J,{children:e("editUser.loading")})}):j||!n&&a!=="new"?r.jsxs(f,{children:[r.jsx(k,{children:r.jsxs(S,{onClick:y,children:[r.jsx(z,{}),e("editUser.back_to_users")]})}),r.jsx(K,{children:j||e("editUser.user_not_found")})]}):r.jsxs(f,{children:[r.jsxs(k,{children:[r.jsxs(S,{onClick:y,children:[r.jsx(z,{}),e("editUser.back_to_users")]}),r.jsx(H,{children:e(a==="new"?"editUser.title_create":"editUser.title_edit")})]}),r.jsxs(I,{children:[a!=="new"&&n&&r.jsxs(A,{children:[r.jsx(N,{children:n.username}),r.jsxs(T,{children:[r.jsxs("span",{children:[e("users.created"),": ",$(n.created_at)]}),r.jsxs("span",{children:[e("users.updated"),": ",$(n.updated_at)]})]})]}),r.jsxs(G,{children:[r.jsx(O,{children:e("editUser.user_info")}),r.jsxs(M,{onSubmit:E,children:[r.jsxs(c,{children:[r.jsx(m,{htmlFor:"username",children:e("editUser.username_label")}),r.jsx(w,{id:"username",name:"username",type:"text",value:o.username,onChange:p,required:!0})]}),r.jsxs(c,{children:[r.jsx(m,{htmlFor:"email",children:e("editUser.email_label")}),r.jsx(w,{id:"email",name:"email",type:"email",value:o.email,onChange:p,required:!0})]}),r.jsxs(c,{children:[r.jsxs(m,{htmlFor:"password",children:[e("editUser.password_label")," ",e(a==="new"?"editUser.password_hint_new":"editUser.password_hint_edit")]}),r.jsx(w,{id:"password",name:"password",type:"password",value:o.password,onChange:p,placeholder:e(a==="new"?"editUser.password_placeholder_new":"editUser.password_placeholder_edit"),required:a==="new"})]}),r.jsxs(c,{children:[r.jsx(m,{htmlFor:"role",children:e("editUser.role_label")}),r.jsxs(R,{id:"role",name:"role",value:o.role,onChange:p,required:!0,children:[r.jsx("option",{value:"cashier",children:e("users.cashier")}),r.jsx("option",{value:"admin",children:e("users.admin")})]})]}),r.jsx(X,{children:r.jsxs(Y,{type:"submit",children:[r.jsx(F,{}),e(a==="new"?"editUser.create_button":"editUser.update_button")]})})]})]})]})]})};export{fe as default};
