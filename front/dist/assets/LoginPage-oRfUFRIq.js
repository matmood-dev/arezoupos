import{r as n,a as $,j as o}from"./vendor-react-CRZW6wHZ.js";import{d as r}from"./vendor-styled-HqHy2qUa.js";import{u as j}from"./index-v5rrbpvu.js";import{B as v}from"./Button-4LKQu1lR.js";import{u as y}from"./vendor-i18n-GeQ4qXZA.js";import{u as k}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-toast-hkeavouR.js";import"./vendor-goober-wofAfydu.js";import"./vendor-icons-DKkSWR1V.js";import"./vendor-use-sync-external-store-D71NX0v1.js";const E=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  padding: 20px;
`,S=r.div`
  background: ${e=>e.theme.colors.glass};
  padding: 40px;
  border-radius: 20px;
  box-shadow: ${e=>e.theme.shadows.large};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 400px;
`,L=r.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`,z=r.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,u=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=r.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
`,x=r.input`
  padding: 15px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 12px;
  font-size: 16px;
  background: ${e=>e.theme.colors.surface};
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
`,B=r(v)`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  background: ${e=>e.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.large};
  }

  &:disabled {
    background: ${e=>e.theme.colors.glass};
    color: ${e=>e.theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
  }
`,C=r.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
`,X=()=>{const{t:e}=y(),{login:h,isLoading:a,isAuthenticated:i}=j(),s=k(),[l,b]=n.useState(""),[d,f]=n.useState(""),[c,p]=n.useState(""),w=async t=>{t.preventDefault(),p("");try{await h(l,d),s("/pos",{replace:!0})}catch(m){p(m instanceof Error?m.message:e("login.error"))}};return $.useEffect(()=>{i&&s("/pos",{replace:!0})},[i,s]),o.jsx(E,{children:o.jsxs(S,{children:[o.jsx(L,{children:e("login.title")}),o.jsxs(z,{onSubmit:w,children:[o.jsxs(u,{children:[o.jsx(g,{htmlFor:"username",children:e("login.username")||"Username"}),o.jsx(x,{id:"username",type:"text",placeholder:e("login.username_placeholder")||"Enter your username",value:l,onChange:t=>b(t.target.value),required:!0})]}),o.jsxs(u,{children:[o.jsx(g,{htmlFor:"password",children:e("login.password")}),o.jsx(x,{id:"password",type:"password",placeholder:e("login.password_placeholder"),value:d,onChange:t=>f(t.target.value),required:!0})]}),c&&o.jsx(C,{children:c}),o.jsx(B,{type:"submit",disabled:a,children:e(a?"login.logging_in":"login.login_button")})]})]})})};export{X as default};
