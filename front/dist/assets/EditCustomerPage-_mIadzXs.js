import{r as a,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as o}from"./vendor-styled-HqHy2qUa.js";import{c as y}from"./index-v5rrbpvu.js";import{B}from"./Button-4LKQu1lR.js";import{z as $,u as P,v as I}from"./vendor-icons-DKkSWR1V.js";import{z as h}from"./vendor-toast-hkeavouR.js";import{u as D}from"./vendor-i18n-GeQ4qXZA.js";import{c as H,u as L}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const u=o.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,z=o.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`,k=o.button`
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
`,A=o.h1`
  color: ${e=>e.theme.colors.text};
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,O=o.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
  }
`,T=o.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`,_=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,p=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`,m=o.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,g=o.input`
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
`,q=o.textarea`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  resize: vertical;
  min-height: 80px;
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
    min-height: 70px;
  }
`,G=o.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`,R=o(B)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  background: ${e=>e.theme.colors.glass};
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: #ef4444;
    color: #ef4444;
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
`,X=o(B)`
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
`,N=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: ${e=>e.theme.colors.textSecondary};
`,Y=o.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,le=()=>{const{t:e}=D(),{id:d}=H(),f=L(),[x,F]=a.useState(null),[S,b]=a.useState(!0),[w,j]=a.useState(""),[s,C]=a.useState({name:"",email:"",phone:"",address:""}),v=a.useCallback(async()=>{try{b(!0);const r=await y.getById(parseInt(d));r.success&&r.data?(F(r.data),C({name:r.data.name,email:r.data.email||"",phone:r.data.phone,address:r.data.address||""})):j(e("editCustomer.customer_not_found"))}catch(r){console.error("Error fetching customer:",r),j(r instanceof Error?r.message:e("editCustomer.load_error"))}finally{b(!1)}},[d,e]);a.useEffect(()=>{d&&v()},[d,v]);const E=async r=>{if(r.preventDefault(),!x)return;const l={name:s.name,phone:s.phone,email:s.email||void 0,address:s.address||void 0};try{(await y.update(x.customerid,l)).success?(h.success(e("editCustomer.update_success")),f("/customers")):h.error(e("editCustomer.update_error"))}catch(i){h.error(i instanceof Error?i.message:e("editCustomer.update_error"))}},n=r=>{const{name:l,value:i}=r.target;C({...s,[l]:i})},c=()=>{f("/customers")};return S?t.jsx(u,{children:t.jsx(N,{children:e("editCustomer.loading")})}):w||!x?t.jsxs(u,{children:[t.jsx(z,{children:t.jsxs(k,{onClick:c,children:[t.jsx($,{}),e("editCustomer.back_to_customers")]})}),t.jsx(Y,{children:w||e("editCustomer.customer_not_found")})]}):t.jsxs(u,{children:[t.jsxs(z,{children:[t.jsxs(k,{onClick:c,children:[t.jsx($,{}),e("editCustomer.back_to_customers")]}),t.jsx(A,{children:e("editCustomer.title")})]}),t.jsx(O,{children:t.jsxs(T,{onSubmit:E,children:[t.jsxs(_,{children:[t.jsxs(p,{children:[t.jsxs(m,{htmlFor:"name",children:[e("customers.name")," *"]}),t.jsx(g,{id:"name",name:"name",type:"text",value:s.name,onChange:n,required:!0})]}),t.jsxs(p,{children:[t.jsxs(m,{htmlFor:"phone",children:[e("customers.phone")," *"]}),t.jsx(g,{id:"phone",name:"phone",type:"tel",value:s.phone,onChange:n,required:!0})]})]}),t.jsx(_,{children:t.jsxs(p,{children:[t.jsx(m,{htmlFor:"email",children:e("customers.email")}),t.jsx(g,{id:"email",name:"email",type:"email",value:s.email,onChange:n,placeholder:e("customers.email_placeholder")})]})}),t.jsxs(p,{children:[t.jsx(m,{htmlFor:"address",children:e("customers.address")}),t.jsx(q,{id:"address",name:"address",value:s.address,onChange:n,rows:3,placeholder:e("customers.address_placeholder")})]}),t.jsxs(G,{children:[t.jsxs(R,{type:"button",onClick:c,children:[t.jsx(P,{}),e("common.cancel")]}),t.jsxs(X,{type:"submit",children:[t.jsx(I,{}),e("editCustomer.update_button")]})]})]})})]})};export{le as default};
