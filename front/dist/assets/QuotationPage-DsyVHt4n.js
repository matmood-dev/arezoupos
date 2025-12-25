const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-html2pdf-1uY42wdU.js","assets/vendor-cookie-CE1G-McA.js","assets/vendor-jspdf-XL3IGN3Y.js","assets/vendor-@babel-runtime-Dehwj3G0.js","assets/vendor-fflate-B2WnmEVw.js","assets/vendor-fast-png-CaYd17r8.js","assets/vendor-iobuffer-BmLRrqXH.js","assets/vendor-pako-n3Pgozwg.js","assets/vendor-html2canvas-CwVBrkl0.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./vendor-jspdf-XL3IGN3Y.js";import{r as p,j as e}from"./vendor-react-CRZW6wHZ.js";import{d as o}from"./vendor-styled-HqHy2qUa.js";import{o as Q,s as V}from"./index-v5rrbpvu.js";import{z as W}from"./vendor-icons-DKkSWR1V.js";import{z as _}from"./vendor-toast-hkeavouR.js";import{u as G}from"./vendor-i18n-GeQ4qXZA.js";import{c as M,u as J}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const K=r=>r?r.startsWith("http")?r:`http://localhost:5000${r}`:"",B=o.div`
  padding: 20px;
`,X=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Y=o.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  background: ${r=>r.theme.colors.glass};
  cursor: pointer;
  color: ${r=>r.theme.colors.text};
  font-weight: 600;
  &:hover { background: ${r=>r.theme.colors.surface}; }
  svg { color: inherit; width: 16px; height: 16px; }
`,Z=o.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${r=>r.theme.gradients.primary};
  color: white;
  cursor: pointer;
`,ee=o.div`
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
`,te=o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`,oe=o.div`
  flex: 1;
`,ne=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`,re=o.div`
  flex: 1;
`,se=o.div`
  flex: 1;
  text-align: right;
`,u=o.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #000;
`,y=o.div`
  margin-bottom: 6px;
  font-size: 14px;
`,k=o.div`
  border-top: 1px solid #d1d5db;
  margin: 20px 0;
`,ie=o.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`,h=o.th`
  text-align: left;
  padding: 12px 10px;
  background: #f3f4f6;
  color: #111827;
  font-weight: 700;
  font-size: 13px;
  border-bottom: 1px solid #d1d5db;
`,g=o.td`
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  color: #374151;
`,de=o(g)`
  text-align: center;
  width: 80px;
`,z=o(g)`
  text-align: right;
  width: 100px;
`,ae=o(g)`
  text-align: right;
  width: 120px;
  font-weight: bold;
`,le=o.div`
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
`,ce=o.div`
  text-align: right;
  margin-top: 20px;
`,xe=o.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: #000;
`,he=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  min-width: 220px;
`,me=o.div`
  background: #f3f4f6;
  padding: 12px 14px;
  min-width: 220px;
  max-width: 320px;
  text-align: left;
  border-radius: 4px;
  font-size: 13px;
  color: #111827;
`,w=o.div`
  font-size: 12px;
  color: #6b7280;
`,T=o.div`
  font-weight: 700;
  color: #111827;
  margin-top: 6px;
`,pe=o.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
`,Ce=()=>{const{id:r}=M(),[t,F]=p.useState(null),[n,E]=p.useState(null),[N,A]=p.useState(!0),O=J(),{t:d}=G();p.useEffect(()=>{r&&(async()=>{try{A(!0);const[i,a]=await Promise.all([Q.getById(Number(r)),V.getSettings()]);i.success&&i.data&&F(i.data),a.success&&a.data&&E(a.data)}catch(i){console.error("Failed to load quotation:",i),_.error("Failed to load quotation")}finally{A(!1)}})()},[r]);const C=()=>O(-1);if(N||!t)return e.jsx(B,{children:e.jsx("p",{children:"Loading quotation..."})});const f=n?.tax_rate?Number(n.tax_rate):0,j=t.items.reduce((s,i)=>s+Number(i.price)*(i.quantity||0),0),S=j*(f/100),P=j+S;return e.jsxs(B,{children:[e.jsxs(X,{children:[e.jsxs(Y,{onClick:C,children:[e.jsx(W,{})," Back"]}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(Z,{onClick:async()=>{try{const s=document.getElementById("quotation");if(!s)throw new Error("Element not found");const a=await(async c=>{const I=c.cloneNode(!0),H=Array.from(I.querySelectorAll("img"));return await Promise.all(H.map(async D=>{try{const x=D.src;if(!x||x.startsWith("data:"))return;const v=await fetch(x,{mode:"cors"});if(!v.ok)throw new Error(`Image fetch failed: ${v.status}`);const R=await v.blob(),L=await new Promise((q,U)=>{const m=new FileReader;m.onloadend=()=>q(m.result),m.onerror=U,m.readAsDataURL(R)});D.src=L}catch(x){console.warn("Could not inline image:",x)}})),I})(s),l=await $(()=>import("./vendor-html2pdf-1uY42wdU.js").then(c=>c.h),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await(l.default||l)().from(a).set({filename:`quotation-${t.orderid}.pdf`,margin:[10,10,10,10],html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}}).save(),_.success("Quotation downloaded")}catch(s){console.error("Download failed",s),_.error(s instanceof Error?s.message:"Failed to download")}},children:"Download PDF"})})]}),e.jsxs(ee,{id:"quotation",children:[e.jsxs(te,{children:[e.jsxs(oe,{children:[n?.shop_logo&&e.jsx("div",{style:{marginBottom:16},children:e.jsx("img",{src:K(n.shop_logo),alt:"logo",style:{maxWidth:150,maxHeight:80,objectFit:"contain"}})}),e.jsxs("div",{style:{fontSize:14,lineHeight:1.4},children:[t.branch_name&&e.jsx("div",{children:e.jsx("strong",{children:t.branch_name})}),t.branch_phone&&e.jsxs("div",{children:["Phone: ",t.branch_phone]}),n?.shop_email&&e.jsxs("div",{children:["Email: ",n.shop_email]}),t.branch_address&&e.jsxs("div",{children:["Address: ",t.branch_address]}),t.branch_cr&&e.jsxs("div",{children:["CR: ",t.branch_cr]}),n?.vat_registration_number&&e.jsxs("div",{children:["VAT REG#: ",n.vat_registration_number]})]})]}),e.jsxs(he,{children:[e.jsx("div",{style:{textAlign:"right"},children:e.jsx(xe,{children:"QUOTATION"})}),e.jsxs(me,{style:{alignSelf:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(w,{children:"Order #"}),e.jsxs(T,{children:["#",t.orderid]})]}),e.jsx(w,{style:{marginTop:10},children:"Quotation Date"}),e.jsx(T,{children:new Date(t.created_at).toLocaleDateString()}),e.jsx(w,{style:{marginTop:10},children:"Salesperson"}),e.jsx(T,{children:t.user_name||n?.shop_name||"-"})]})]})]}),e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(u,{children:d("editOrder.customer_info")}),e.jsx("div",{style:{fontSize:14,lineHeight:1.4},children:(()=>{const s=t.customer_name==="Deleted customer"?d("orders.deleted_customer"):t.customer_name;return s?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("strong",{children:s})}),t.customer_phone&&e.jsxs("div",{children:[d("editOrder.phone_label"),": ",t.customer_phone]}),t.customer_email&&e.jsxs("div",{children:[d("editOrder.email_label"),": ",t.customer_email]}),t.customer_address&&e.jsxs("div",{children:[d("editOrder.address_label"),": ",t.customer_address]})]}):e.jsx("div",{children:e.jsx("strong",{children:d("editOrder.walk_in_customer")})})})()})]}),e.jsxs(se,{children:[e.jsx(u,{children:d("editOrder.quotation")}),e.jsxs(y,{children:[e.jsx("strong",{children:d("editOrder.order_date")})," ",new Date(t.created_at).toLocaleDateString()]}),e.jsxs(y,{children:[e.jsx("strong",{children:d("editOrder.time_label")})," ",new Date(t.created_at).toLocaleTimeString()]}),e.jsxs(y,{children:[e.jsx("strong",{children:d("editOrder.status_label")})," ",t.status]})]})]}),e.jsx(k,{}),e.jsx(u,{children:"Items:"}),e.jsxs(ie,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(h,{children:"Description"}),e.jsx(h,{style:{textAlign:"center"},children:"Qty"}),e.jsx(h,{style:{textAlign:"right"},children:"Unit Price"}),e.jsx(h,{style:{textAlign:"right"},children:"Tax"}),e.jsx(h,{style:{textAlign:"right"},children:"Total"})]})}),e.jsx("tbody",{children:t.items.map((s,i)=>{const a=s.quantity||0,l=Number(s.price||0),b=l*(f/100),c=(l+b)*a;return e.jsxs("tr",{children:[e.jsxs(g,{children:[e.jsx("div",{style:{fontWeight:500},children:s.name}),s.note&&e.jsxs("div",{style:{fontSize:12,color:"#6b7280",marginTop:4},children:["Note: ",s.note]})]}),e.jsx(de,{children:a}),e.jsxs(z,{children:["BHD ",l.toFixed(3)]}),e.jsxs(z,{children:["BHD ",b.toFixed(3)]}),e.jsxs(ae,{children:["BHD ",c.toFixed(3)]})]},i)})})]}),e.jsx(ce,{children:e.jsxs(le,{children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Subtotal:"}),e.jsxs("div",{children:["BHD ",j.toFixed(3)]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:["VAT (",f,"%):"]}),e.jsxs("div",{children:["BHD ",S.toFixed(3)]})]}),e.jsxs("div",{className:"row subtotal",children:[e.jsx("div",{style:{fontSize:16},children:"Total Amount:"}),e.jsxs("div",{className:"total-amount",children:["BHD ",P.toFixed(3)]})]})]})}),t.notes&&e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx(u,{children:"Notes:"}),e.jsx("div",{style:{fontSize:14,lineHeight:1.4},children:t.notes})]})]}),e.jsxs(pe,{children:[e.jsxs("div",{style:{textAlign:"left",color:"#111"},children:[e.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"Account Details:"}),n?.bank_name&&e.jsx("div",{children:e.jsx("strong",{children:n.bank_name})}),n?.bank_account_name&&e.jsxs("div",{children:["Account: ",n.bank_account_name]}),n?.iban_number&&e.jsxs("div",{children:["IBAN: ",n.iban_number]}),n?.account_number&&e.jsxs("div",{children:["Account #: ",n.account_number]}),n?.swift_code&&e.jsxs("div",{children:["SWIFT: ",n.swift_code]}),e.jsxs("div",{style:{marginTop:8},children:[n?.shop_email&&e.jsxs("div",{children:["Email: ",n.shop_email]}),t.branch_address&&e.jsxs("div",{children:["Address: ",t.branch_address]}),(t.branch_phone||t.customer_phone)&&e.jsxs("div",{children:["Contact: ",t.branch_phone||t.customer_phone]})]})]}),e.jsx("div",{style:{marginTop:12,color:"#6b7280"},children:n?.receipt_footer||"Thank you for your business!"})]})]})]})};export{Ce as default};
