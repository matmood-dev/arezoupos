import{r as p,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as r}from"./vendor-styled-HqHy2qUa.js";import{o as z}from"./index-v5rrbpvu.js";import{z as k,I as L,o as N,J as q,K as A,L as f,A as M,B as F,C as R,D as U}from"./vendor-icons-DKkSWR1V.js";import{z as j}from"./vendor-toast-hkeavouR.js";import{u as Y}from"./vendor-i18n-GeQ4qXZA.js";import{c as Q,u as G}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const b=r.div`
  padding: 20px;
  @media (max-width: 768px) { padding: 15px; }
  @media (max-width: 480px) { padding: 10px; }
`,C=r.div`
  margin-bottom: 30px;
  @media (max-width: 768px) { margin-bottom: 20px; }
  @media (max-width: 480px) { margin-bottom: 16px;}
`,S=r.button`
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
  &:hover { background: ${e=>e.theme.colors.surface}; transform: translateX(-2px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 13px; svg { width: 14px; height: 14px; } }
`,J=r.h1`
  color: ${e=>e.theme.colors.text};
  margin: 0;
  font-size: 2rem;
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.25rem; }
`,K=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
    margin: 0 10px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
    margin: 0 5px;
  }
`,X=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    gap: 16px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`,V=r.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,W=r.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
  @media (max-width: 480px) { font-size: 20px; }
`,Z=r.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
`,ee=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: 480px) {
    gap: 8px;
  }
`,te=r.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
`,re=r.select`
  padding: 10px 16px;
  border: 2px solid ${e=>{switch(e.status){case"completed":return"#16a34a";case"pending":return"#d97706";case"cancelled":return"#dc2626";default:return e.theme.colors.glassBorder}}};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  &:focus { outline: none; box-shadow: ${e=>e.theme.shadows.glow}; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 14px; }
`,ie=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  /* Prevent button text from breaking into multiple lines */
  > button { white-space: nowrap; }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    /* Use a 2-column grid on small screens so there are two buttons per row */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    > button {
      width: 100%;
      font-size: 13px;
      padding: 8px 10px;
      min-width: 0;
      justify-content: center;
    }
  }
`,h=r.div`
  margin-bottom: 30px;
  @media (max-width: 768px) { margin-bottom: 20px; }
`,g=r.h3`
  color: ${e=>e.theme.colors.text};
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 480px) { font-size: 16px; margin-bottom: 16px; }
`,oe=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 16px; }
`,d=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  @media (max-width: 480px) { padding: 12px; gap: 10px; }
`,n=r.div`
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: 480px) { width: 18px; height: 18px; }
`,a=r.div`
  flex: 1;
`,l=r.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.textSecondary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`,x=r.div`
  color: ${e=>e.theme.colors.text};
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px) { font-size: 14px; }
`,se=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,de=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: ${e=>e.theme.shadows.medium}; }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  @media (max-width: 480px) {
    padding: 12px;
    gap: 10px;
  }
`,ne=r.div`
  flex: 1;
`,ae=r.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 4px;
  @media (max-width: 480px) { font-size: 14px; }
`,le=r.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};
  @media (max-width: 480px) { font-size: 13px; }
`,xe=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: right;
  @media (max-width: 768px) {
    align-self: flex-end;
    text-align: right;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    align-self: stretch;
    text-align: right;
  }
`,ce=r.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};
  font-weight: 500;
`,pe=r.div`
  font-size: 16px;
  font-weight: 700;
  color: ${e=>e.theme.colors.accent};
  @media (max-width: 480px) { font-size: 14px; }
`,me=r.div`
  margin-top: 20px;
  padding: 20px;
  background: ${e=>e.theme.gradients.primary};
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  @media (max-width: 480px) { padding: 16px; margin-top: 16px; }
`,he=r.div`
  font-size: 14px;
  color: ${e=>(e.theme.mode==="dark","rgba(255,255,255,0.85)")};
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,ge=r.div`
  font-size: 28px;
  font-weight: 700;
  color: white;
  @media (max-width: 480px) { font-size: 24px; }
`,ue=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: ${e=>e.theme.colors.textSecondary};
`,fe=r.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  background: rgba(239,68,68,0.1);
  border-radius: 8px;
  border: 1px solid rgba(239,68,68,0.2);
`,u=r.button`
  padding: 10px 14px;
  min-height: 44px;
  border-radius: 12px;
  border: none;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: ${e=>e.theme.shadows.small};

  svg { width: 16px; height: 16px; color: white; flex-shrink: 0; }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.medium};
    opacity: 0.98;
  }

  &:active { transform: translateY(0); }

  &:focus-visible { outline: 2px solid ${e=>e.theme.colors.accent}; outline-offset: 2px; }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 13px;
    min-height: 42px;
    border-radius: 10px;
  }
`,je=r.div`
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  color: ${e=>e.theme.colors.text};
  line-height: 1.5;
  white-space: pre-wrap;
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`,be=r.div`
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`,Ae=()=>{const{t:e}=Y(),{id:m}=Q(),c=G(),[i,w]=p.useState(null),[B,v]=p.useState(!0),[y,O]=p.useState(""),_=p.useCallback(async()=>{try{v(!0);const o=await z.getById(parseInt(m));o.success&&o.data?w(o.data):O(e("editOrder.not_found"))}catch(o){O(o instanceof Error?o.message:e("editOrder.load_error"))}finally{v(!1)}},[m,e]);p.useEffect(()=>{m&&_()},[m,_]);const I=async o=>{if(i)try{const s=await z.update(i.orderid,{status:o});s.success&&s.data?(w(s.data),j.success(e("editOrder.status_updated",{status:o})),window.dispatchEvent(new CustomEvent("inventory-updated"))):j.error(e("editOrder.failed_to_update_status"))}catch(s){j.error(s instanceof Error?s.message:e("editOrder.failed_to_update_status"))}},$=()=>c("/orders"),P=()=>{i&&c(`/orders/receipt/${i.orderid}`)},D=()=>{i&&c(`/orders/invoice/${i.orderid}`)},H=()=>{i&&c(`/orders/quotation/${i.orderid}`)},E=()=>{i&&c(`/orders/delivery/${i.orderid}`)},T=o=>new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return B?t.jsx(b,{children:t.jsx(ue,{children:e("editOrder.loading")})}):y||!i?t.jsxs(b,{children:[t.jsx(C,{children:t.jsxs(S,{onClick:$,children:[t.jsx(k,{}),e("editOrder.back_to_orders")]})}),t.jsx(fe,{children:y||e("editOrder.not_found")})]}):t.jsxs(b,{children:[t.jsxs(C,{children:[t.jsxs(S,{onClick:$,children:[t.jsx(k,{}),e("editOrder.back_to_orders")]}),t.jsx(J,{children:e("editOrder.title")})]}),t.jsxs(K,{children:[t.jsxs(X,{children:[t.jsxs(V,{children:[t.jsx(W,{children:e("editOrder.order_number",{id:i.orderid})}),t.jsx(Z,{children:T(i.created_at)})]}),t.jsxs(ee,{children:[t.jsx(te,{children:e("editOrder.status_label")}),t.jsxs(re,{status:i.status,value:i.status,onChange:o=>I(o.target.value),children:[t.jsx("option",{value:"pending",children:e("editOrder.status_pending")}),t.jsx("option",{value:"completed",children:e("editOrder.status_completed")}),t.jsx("option",{value:"cancelled",children:e("editOrder.status_cancelled")})]}),t.jsxs(ie,{children:[t.jsxs(u,{onClick:P,title:e("editOrder.receipt"),children:[t.jsx(L,{}),e("editOrder.receipt")]}),t.jsxs(u,{onClick:D,title:e("editOrder.invoice"),children:[t.jsx(N,{}),e("editOrder.invoice")]}),t.jsxs(u,{onClick:H,title:e("editOrder.quotation"),children:[t.jsx(q,{}),e("editOrder.quotation")]}),t.jsxs(u,{onClick:E,title:e("editOrder.delivery"),children:[t.jsx(A,{}),e("editOrder.delivery")]})]})]})]}),t.jsxs(h,{children:[t.jsx(g,{children:e("editOrder.customer_info")}),t.jsxs(oe,{children:[(()=>{const o=i.customer_name==="Deleted customer"?e("orders.deleted_customer"):i.customer_name;return o?t.jsxs(t.Fragment,{children:[t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(f,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("editOrder.name_label")}),t.jsx(x,{children:o})]})]}),i.customer_phone&&t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(M,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("editOrder.phone_label")}),t.jsx(x,{children:i.customer_phone})]})]}),i.customer_email&&t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(F,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("editOrder.email_label")}),t.jsx(x,{children:i.customer_email})]})]}),i.customer_address&&t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(R,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("editOrder.address_label")}),t.jsx(x,{children:i.customer_address})]})]})]}):t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(f,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("editOrder.customer_type")}),t.jsx(x,{children:e("editOrder.walk_in_customer")})]})]})})(),i.branch_name&&t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(U,{})}),t.jsxs(a,{children:[t.jsx(l,{children:e("checkout.branch")}),t.jsx(x,{children:i.branch_name})]})]}),i.user_name&&t.jsxs(d,{children:[t.jsx(n,{children:t.jsx(f,{})}),t.jsxs(a,{children:[t.jsx(l,{children:"Created by"}),t.jsx(x,{children:i.user_name})]})]})]})]}),i.notes&&t.jsxs(h,{children:[t.jsx(g,{children:e("editOrder.notes_label","Order Notes")}),t.jsx(je,{children:i.notes})]}),i.payment_method&&t.jsxs(h,{children:[t.jsx(g,{children:e("editOrder.payment_method_label","Payment Method")}),t.jsx(be,{children:e(`checkout.${i.payment_method}`,i.payment_method)})]}),t.jsxs(h,{children:[t.jsx(g,{children:e("editOrder.order_items")}),t.jsx(se,{children:i.items.map((o,s)=>t.jsxs(de,{children:[t.jsxs(ne,{children:[t.jsx(ae,{children:o.name??`#${o.itemid}`}),o.note&&t.jsx("div",{style:{marginTop:6,color:"#6b7280",fontSize:13},children:o.note}),t.jsx(le,{children:o.category??""})]}),t.jsxs(xe,{children:[t.jsxs(ce,{children:["×",o.quantity]}),t.jsxs(pe,{children:["BHD ",(Number(o.price)*o.quantity).toFixed(3)]})]})]},s))}),t.jsxs(me,{children:[t.jsx(he,{children:e("editOrder.total_amount_label")}),t.jsxs(ge,{children:["BHD ",Number(i.total_amount).toFixed(3)]})]})]})]})]})};export{Ae as default};
