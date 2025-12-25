import{r as p,a as b,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as c}from"./vendor-styled-HqHy2qUa.js";import{u as V}from"./useCart-DRNaftD2.js";import{c as P,s as A,o as Y}from"./index-v5rrbpvu.js";import{B as T}from"./Button-4LKQu1lR.js";import{q as J,r as K,p as X}from"./vendor-icons-DKkSWR1V.js";import{z as n}from"./vendor-toast-hkeavouR.js";import{u as Z}from"./vendor-i18n-GeQ4qXZA.js";import{u as ee}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const te=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",E=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};

  @media (max-width: 768px) {
    padding: 16px;
    min-height: auto;
  }
`,F=c.h1`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 18px;
  }
`,oe=c.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`,re=c.div`
  background: ${e=>e.theme.colors.glass};
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 768px) {
    padding: 16px;
  }
`,z=c.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 1.5rem;
  border-bottom: 2px solid ${e=>e.theme.colors.glassBorder};
  padding-bottom: 10px;
`,se=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 0;
  }
`,ce=c.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
  background: ${e=>e.theme.colors.surface};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`,ae=c.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    align-items: flex-start;
  }
`,ne=c.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 4px;
`,ie=c.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
`,de=c.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`,N=c.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.glass};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};

  &:hover {
    background: ${e=>e.theme.gradients.primary};
    color: white;
    border-color: ${e=>e.theme.colors.accent};
    transform: scale(1.1);
  }
`,le=c.span`
  min-width: 30px;
  text-align: center;
  font-weight: 500;
  color: ${e=>e.theme.colors.text};
`,he=c.button`
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #ef4444;

  &:hover {
    background: #ef4444;
    color: white;
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,me=c.div`
  margin-top: 25px;
  padding: 20px;
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 12px;
  }
`,q=c.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 1.1rem;
`,pe=c.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  margin-top: 8px;
  border-top: 2px solid ${e=>e.theme.colors.glassBorder};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text};

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`,ue=c.div`
  background: ${e=>e.theme.colors.glass};
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 768px) {
    padding: 16px;
  }
`,xe=c.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,i=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=c.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
`,x=c.input`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  transition: all 0.3s ease;
  width: 100%;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,ge=c.textarea`
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
  width: 100%;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,k=c.select`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,fe=c.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }
`,R=c(T)`
  flex: 1;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.colors.glass};
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 12px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: #ef4444;
    color: #ef4444;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`,be=c(T)`
  flex: 1;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  background: ${e=>e.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

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

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`,He=()=>{const{t:e}=Z(),{cart:l,updateQuantity:M,removeFromCart:j,total:D,clearCart:H}=V(),v=ee(),[w,O]=p.useState([]),[L,Q]=p.useState([]),[y,U]=p.useState(0),[r,a]=p.useState({customerId:"",branchId:"",customerName:"",customerPhone:"",customerEmail:"",customerAddress:"",notes:"",paymentMethod:"cash"}),[_,$]=p.useState(!1),g=D,I=g*y/100,C=g+I;b.useEffect(()=>{(async()=>{try{const s=await P.getAll();s.success&&s.data&&O(s.data)}catch(s){console.error("Failed to fetch customers:",s)}})()},[]),b.useEffect(()=>{(async()=>{try{const s=await A.getBranches();s.success&&s.data&&Q(s.data)}catch(s){console.error("Failed to fetch branches:",s)}})()},[]),b.useEffect(()=>{(async()=>{try{const s=await A.getSettings();s.success&&s.data&&U(Number(s.data.tax_rate)||0)}catch(s){console.error("Failed to fetch settings:",s)}})()},[]);const B=(o,s)=>{if(s<=0)j(o);else{const h=l.find(u=>u.product.itemid===o);if(h&&s>h.product.stock_quantity){n.error(e("pos.stock_limit_error",{count:h.product.stock_quantity}));return}M(o,s)}},G=o=>{const s=w.find(h=>h.customerid.toString()===o);a(s?{...r,customerId:o,customerName:s.name,customerPhone:s.phone,customerEmail:s.email||"",customerAddress:s.address||""}:{...r,customerId:"",customerName:"",customerPhone:"",customerEmail:"",customerAddress:""})},W=async()=>{if(l.length!==0){if(!r.customerId){if(!r.customerName.trim()){n.error(e("checkout.error_name_required"));return}if(!r.customerPhone.trim()){n.error(e("checkout.error_phone_required"));return}}if(!r.branchId){n.error(e("checkout.error_branch_required")||"Please select a branch");return}$(!0);try{let o=r.customerId?parseInt(r.customerId):void 0;if(!o&&r.customerName&&r.customerPhone){const m={name:r.customerName.trim(),phone:r.customerPhone.trim(),email:r.customerEmail.trim()||void 0,address:r.customerAddress.trim()||void 0},f=await P.create(m);if(f.success&&f.data)o=f.data.customerid,n.success(e("checkout.customer_saved",{name:r.customerName}));else throw new Error(e("checkout.error_save_customer"))}const s=l.map(m=>({itemid:m.product.itemid,quantity:m.quantity,note:m.note?.trim()||void 0,price:typeof m.overridePrice=="number"?Number(m.overridePrice):void 0})),h={customerid:o,branchid:r.branchId?parseInt(r.branchId):void 0,items:s,notes:r.notes?.trim()||void 0,paymentMethod:r.paymentMethod||void 0,total_amount:C},u=await Y.create(h);u.success?(n.success(e("checkout.order_success",{id:u.data?.orderid})),H(),window.dispatchEvent(new CustomEvent("inventory-updated")),v("/pos")):n.error(e("checkout.error_create_order"))}catch(o){n.error(o instanceof Error?o.message:e("checkout.error_create_order"))}finally{$(!1)}}},S=()=>{v("/pos")};return l.length===0?t.jsxs(E,{children:[t.jsx(F,{children:e("checkout.title")}),t.jsxs("div",{style:{textAlign:"center",padding:"50px"},children:[t.jsx("p",{style:{color:"#64748b",fontSize:"18px",marginBottom:"20px"},children:e("pos.empty_cart")}),t.jsx(R,{onClick:S,children:e("checkout.back_to_pos")})]})]}):t.jsxs(E,{children:[t.jsx(F,{children:e("checkout.title")}),t.jsxs(oe,{children:[t.jsxs(re,{children:[t.jsx(z,{children:e("checkout.order_items")}),l.map(o=>t.jsxs(se,{children:[t.jsxs(ae,{children:[o.product.image&&t.jsx(ce,{src:te(o.product.image),alt:o.product.name}),t.jsxs("div",{children:[t.jsx(ne,{children:o.product.name}),t.jsxs(ie,{children:["BHD ",Number(o.product.price).toFixed(3)," ",e("checkout.each")]})]})]}),t.jsxs(de,{children:[t.jsx(N,{onClick:()=>B(o.product.itemid,o.quantity-1),children:t.jsx(J,{})}),t.jsx(le,{children:o.quantity}),t.jsx(N,{onClick:()=>B(o.product.itemid,o.quantity+1),children:t.jsx(K,{})}),t.jsx(he,{onClick:()=>j(o.product.itemid),title:e("checkout.remove_item"),children:t.jsx(X,{})})]})]},o.product.itemid)),t.jsxs(me,{children:[t.jsxs(q,{children:[t.jsx("span",{children:e("checkout.subtotal")}),t.jsxs("span",{children:["BHD ",g.toFixed(3)]})]}),t.jsxs(q,{children:[t.jsxs("span",{children:[e("checkout.vat")," (",y,"%)"]}),t.jsxs("span",{children:["BHD ",I.toFixed(3)]})]}),t.jsxs(pe,{children:[t.jsx("span",{children:e("checkout.total")}),t.jsxs("span",{children:["BHD ",C.toFixed(3)]})]})]})]}),t.jsxs(ue,{children:[t.jsx(z,{children:e("checkout.order_details")}),t.jsxs(xe,{children:[t.jsxs(i,{children:[t.jsx(d,{htmlFor:"customer",children:e("checkout.customer_optional")}),t.jsxs(k,{id:"customer",value:r.customerId,onChange:o=>G(o.target.value),children:[t.jsx("option",{value:"",children:e("checkout.walk_in_customer_hint")}),w.map(o=>t.jsxs("option",{value:o.customerid,children:[o.name," - ",o.phone]},o.customerid))]})]}),t.jsxs(i,{children:[t.jsxs(d,{htmlFor:"branch",children:[e("checkout.branch")," ",t.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),t.jsxs(k,{id:"branch",value:r.branchId,onChange:o=>a({...r,branchId:o.target.value}),required:!0,children:[t.jsx("option",{value:"",children:e("checkout.select_branch")}),L.filter(o=>o.active).map(o=>t.jsxs("option",{value:o.branchid,children:[o.name," - ",o.address]},o.branchid))]})]}),t.jsxs(i,{children:[t.jsxs(d,{htmlFor:"customerName",children:[e("checkout.customer_name")," ",!r.customerId&&t.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),t.jsx(x,{id:"customerName",type:"text",placeholder:e("checkout.customer_name_placeholder"),value:r.customerName,onChange:o=>a({...r,customerName:o.target.value}),required:!r.customerId})]}),t.jsxs(i,{children:[t.jsxs(d,{htmlFor:"customerPhone",children:[e("checkout.customer_phone")," ",!r.customerId&&t.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),t.jsx(x,{id:"customerPhone",type:"tel",placeholder:e("checkout.phone_number_placeholder"),value:r.customerPhone,onChange:o=>a({...r,customerPhone:o.target.value}),required:!r.customerId})]}),t.jsxs(i,{children:[t.jsx(d,{htmlFor:"customerEmail",children:e("checkout.email_optional")}),t.jsx(x,{id:"customerEmail",type:"email",placeholder:e("checkout.email_placeholder"),value:r.customerEmail,onChange:o=>a({...r,customerEmail:o.target.value})})]}),t.jsxs(i,{children:[t.jsx(d,{htmlFor:"customerAddress",children:e("checkout.address_optional")}),t.jsx(x,{id:"customerAddress",type:"text",placeholder:e("checkout.address_placeholder"),value:r.customerAddress,onChange:o=>a({...r,customerAddress:o.target.value})})]}),t.jsxs(i,{children:[t.jsx(d,{htmlFor:"paymentMethod",children:e("checkout.payment_method")}),t.jsxs(k,{id:"paymentMethod",value:r.paymentMethod,onChange:o=>a({...r,paymentMethod:o.target.value}),children:[t.jsx("option",{value:"cash",children:e("checkout.cash")}),t.jsx("option",{value:"card",children:e("checkout.card")}),t.jsx("option",{value:"bank_transfer",children:e("checkout.bank_transfer")})]})]}),t.jsxs(i,{children:[t.jsx(d,{htmlFor:"notes",children:e("checkout.notes_optional")}),t.jsx(ge,{id:"notes",placeholder:e("checkout.notes_placeholder"),value:r.notes,onChange:o=>a({...r,notes:o.target.value}),rows:3})]})]})]})]}),t.jsxs(fe,{children:[t.jsxs(R,{onClick:S,children:["← ",e("checkout.back_to_pos")]}),t.jsx(be,{onClick:W,disabled:_||l.length===0||!r.branchId,children:e(_?"checkout.processing":"checkout.complete_order")})]})]})};export{He as default};
