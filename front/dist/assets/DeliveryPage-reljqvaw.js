const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-html2pdf-1uY42wdU.js","assets/vendor-cookie-CE1G-McA.js","assets/vendor-jspdf-XL3IGN3Y.js","assets/vendor-@babel-runtime-Dehwj3G0.js","assets/vendor-fflate-B2WnmEVw.js","assets/vendor-fast-png-CaYd17r8.js","assets/vendor-iobuffer-BmLRrqXH.js","assets/vendor-pako-n3Pgozwg.js","assets/vendor-html2canvas-CwVBrkl0.js"])))=>i.map(i=>d[i]);
import{_ as W}from"./vendor-jspdf-XL3IGN3Y.js";import{r as m,j as e}from"./vendor-react-CRZW6wHZ.js";import{d as s}from"./vendor-styled-HqHy2qUa.js";import{o as O,s as q}from"./index-v5rrbpvu.js";import{z as Q}from"./vendor-icons-DKkSWR1V.js";import{z as v}from"./vendor-toast-hkeavouR.js";import{u as G}from"./vendor-i18n-GeQ4qXZA.js";import{c as M,u as Y}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const J=i=>i?i.startsWith("http")?i:`http://localhost:5000${i}`:"",S=s.div`
  padding: 20px;
`,K=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,X=s.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${i=>i.theme.colors.glassBorder};
  background: ${i=>i.theme.colors.glass};
  cursor: pointer;
  color: ${i=>i.theme.colors.text};
  font-weight: 600;
  &:hover { background: ${i=>i.theme.colors.surface}; }
  svg { color: inherit; width: 16px; height: 16px; }
`,Z=s.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${i=>i.theme.gradients.primary};
  color: white;
  cursor: pointer;
`,ee=s.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Use Noto Sans Arabic font for Arabic (RTL) */
  html[dir="rtl"] & {
    font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`,te=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`,se=s.div`
  flex: 1;
`,ne=s.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
`,re=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  min-width: 220px;
`,ie=s.div`
  background: #f3f4f6;
  padding: 12px 14px;
  min-width: 220px;
  max-width: 320px;
  text-align: left;
  border-radius: 4px;
  font-size: 13px;
  color: #111827;
`,y=s.div`
  font-size: 12px;
  color: #6b7280;
`,_=s.div`
  font-weight: 700;
  color: #111827;
  margin-top: 6px;
`,p=s.h3`
  font-size: 16px;
  margin: 12px 0;
  font-weight: 700;
`,oe=s.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`,x=s.th`
  text-align: left;
  padding: 12px 10px;
  background: #f3f4f6;
  color: #111827;
  font-weight: 700;
  font-size: 13px;
  border-bottom: 1px solid #d1d5db;
`,u=s.td`
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  color: #374151;
`,de=s.div`
  width: 320px;
  margin-left: auto;
  margin-top: 8px;
  font-size: 14px;
  color: #111827;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid transparent;
  }

  .subtotal {
    border-top: 1px solid #e5e7eb;
    padding-top: 10px;
  }

  .total-amount {
    font-weight: 800;
    font-size: 18px;
  }
`,ae=s(u)`
  text-align: center;
  width: 80px;
`,I=s(u)`
  text-align: right;
  width: 100px;
`,le=s(u)`
  text-align: right;
  width: 120px;
  font-weight: bold;
`,ce=s.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
`,xe=s.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`,he=s.div`
  flex: 1;
`,me=s.div`
  width: 260px;
`,B=s.div`
  margin-bottom: 6px;
  font-size: 14px;
`,E=s.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 18px 0;
`,pe=s.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`,Re=()=>{const{id:i}=M(),[t,k]=m.useState(null),[n,z]=m.useState(null),[F,w]=m.useState(!0),N=Y(),{t:C}=G();m.useEffect(()=>{i&&(async()=>{try{w(!0);const[o,d]=await Promise.all([O.getById(Number(i)),q.getSettings()]);o.success&&o.data&&k(o.data),d.success&&d.data&&z(d.data)}catch(o){console.error("Failed to load delivery note:",o),v.error("Failed to load delivery note")}finally{w(!1)}})()},[i]);const R=()=>N(-1);if(F||!t)return e.jsx(S,{children:e.jsx("p",{children:"Loading delivery note..."})});const g=n?.tax_rate?Number(n.tax_rate):0,f=t.items.reduce((r,o)=>r+Number(o.price||0)*(o.quantity||0),0),T=f*(g/100),P=f+T;return e.jsxs(S,{children:[e.jsxs(K,{children:[e.jsxs(X,{onClick:R,children:[e.jsx(Q,{})," Back"]}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(Z,{onClick:async()=>{try{const r=document.getElementById("delivery-note");if(!r)throw new Error("Element not found");const d=await(async l=>{const A=l.cloneNode(!0),H=Array.from(A.querySelectorAll("img"));return await Promise.all(H.map(async D=>{try{const c=D.src;if(!c||c.startsWith("data:"))return;const b=await fetch(c,{mode:"cors"});if(!b.ok)throw new Error(`Image fetch failed: ${b.status}`);const L=await b.blob(),U=await new Promise(($,V)=>{const h=new FileReader;h.onloadend=()=>$(h.result),h.onerror=V,h.readAsDataURL(L)});D.src=U}catch(c){console.warn("Could not inline image:",c)}})),A})(r),a=await W(()=>import("./vendor-html2pdf-1uY42wdU.js").then(l=>l.h),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await(a.default||a)().from(d).set({filename:`delivery-${t.orderid}.pdf`,margin:[10,10,10,10],html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}}).save(),v.success("Delivery note downloaded")}catch(r){console.error("Download failed",r),v.error(r instanceof Error?r.message:"Failed to download")}},children:"Download PDF"})})]}),e.jsxs(ee,{id:"delivery-note",children:[e.jsxs(te,{children:[e.jsxs(se,{children:[n?.shop_logo&&e.jsx("div",{style:{marginBottom:16},children:e.jsx("img",{src:J(n.shop_logo),alt:"logo",style:{maxWidth:150,maxHeight:80,objectFit:"contain"}})}),e.jsxs("div",{style:{fontSize:14,lineHeight:1.4},children:[t.branch_name&&e.jsx("div",{children:e.jsx("strong",{children:t.branch_name})}),t.branch_phone&&e.jsxs("div",{children:["Phone: ",t.branch_phone]}),n?.shop_email&&e.jsxs("div",{children:["Email: ",n.shop_email]}),t.branch_address&&e.jsxs("div",{children:["Address: ",t.branch_address]}),t.branch_cr&&e.jsxs("div",{children:["CR: ",t.branch_cr]}),n?.vat_registration_number&&e.jsxs("div",{children:["VAT REG#: ",n.vat_registration_number]})]})]}),e.jsxs(re,{children:[e.jsx("div",{style:{textAlign:"right"},children:e.jsx(ne,{children:"DELIVERY NOTE"})}),e.jsxs(ie,{style:{alignSelf:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(y,{children:"Order #"}),e.jsxs(_,{children:["#",t.orderid]})]}),e.jsx(y,{style:{marginTop:10},children:"Invoice Date"}),e.jsx(_,{children:new Date(t.created_at).toLocaleDateString()}),e.jsx(y,{style:{marginTop:10},children:"Salesperson"}),e.jsx(_,{children:t.user_name||n?.shop_name||"-"})]})]})]}),e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(p,{children:"Deliver To:"}),e.jsx("div",{style:{fontSize:14,lineHeight:1.4},children:(()=>{const r=t.customer_name==="Deleted customer"?C("orders.deleted_customer"):t.customer_name;return r?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("strong",{children:r})}),t.customer_phone&&e.jsxs("div",{children:["Mobile: ",t.customer_phone]}),t.customer_email&&e.jsxs("div",{children:["Email: ",t.customer_email]}),t.customer_address&&e.jsxs("div",{children:["Address: ",t.customer_address]})]}):e.jsx("div",{children:e.jsx("strong",{children:"Walk-in Customer"})})})()})]}),e.jsxs(me,{children:[e.jsx(p,{children:"Delivery Details"}),e.jsxs(B,{children:[e.jsx("strong",{children:"Order:"})," #",t.orderid]}),e.jsxs(B,{children:[e.jsx("strong",{children:"Status:"})," ",t.status]})]})]}),e.jsx(E,{}),e.jsx(p,{children:"Items Delivered"}),e.jsxs(oe,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(x,{children:"Description"}),e.jsx(x,{style:{textAlign:"center"},children:"Qty"}),e.jsx(x,{style:{textAlign:"right"},children:"Unit Price"}),e.jsx(x,{style:{textAlign:"right"},children:"Tax"}),e.jsx(x,{style:{textAlign:"right"},children:"Total"})]})}),e.jsx("tbody",{children:t.items.map((r,o)=>{const d=r.quantity||0,a=Number(r.price||0),j=a*(g/100),l=(a+j)*d;return e.jsxs("tr",{children:[e.jsxs(u,{children:[e.jsx("div",{style:{fontWeight:500},children:r.name}),r.note&&e.jsxs("div",{style:{fontSize:12,color:"#6b7280",marginTop:4},children:["Note: ",r.note]})]}),e.jsx(ae,{children:d}),e.jsxs(I,{children:["BHD ",a.toFixed(3)]}),e.jsxs(I,{children:["BHD ",j.toFixed(3)]}),e.jsxs(le,{children:["BHD ",l.toFixed(3)]})]},o)})})]}),e.jsx(pe,{children:e.jsxs(de,{children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Subtotal:"}),e.jsxs("div",{children:["BHD ",f.toFixed(3)]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:["VAT (",g,"%):"]}),e.jsxs("div",{children:["BHD ",T.toFixed(3)]})]}),e.jsxs("div",{className:"row subtotal",children:[e.jsx("div",{style:{fontSize:16},children:"Total Amount:"}),e.jsxs("div",{className:"total-amount",children:["BHD ",P.toFixed(3)]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Total Quantity:"}),e.jsx("div",{children:t.items.reduce((r,o)=>r+(o.quantity||0),0)})]})]})}),t.notes&&e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx(p,{children:"Notes:"}),e.jsx("div",{style:{fontSize:14,lineHeight:1.4},children:t.notes})]})]}),e.jsxs(ce,{children:[e.jsxs("div",{style:{textAlign:"left",color:"#111"},children:[e.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"Account Details:"}),n?.bank_name&&e.jsx("div",{children:e.jsx("strong",{children:n.bank_name})}),n?.bank_account_name&&e.jsxs("div",{children:["Account: ",n.bank_account_name]}),n?.iban_number&&e.jsxs("div",{children:["IBAN: ",n.iban_number]}),n?.account_number&&e.jsxs("div",{children:["Account #: ",n.account_number]}),n?.swift_code&&e.jsxs("div",{children:["SWIFT: ",n.swift_code]}),e.jsxs("div",{style:{marginTop:8},children:[n?.shop_email&&e.jsxs("div",{children:["Email: ",n.shop_email]}),t.branch_address&&e.jsxs("div",{children:["Address: ",t.branch_address]}),(t.branch_phone||t.customer_phone)&&e.jsxs("div",{children:["Contact: ",t.branch_phone||t.customer_phone]})]})]}),e.jsx("div",{style:{marginTop:12,color:"#6b7280"},children:n?.receipt_footer||"Thank you for your business!"})]})]})]})};export{Re as default};
