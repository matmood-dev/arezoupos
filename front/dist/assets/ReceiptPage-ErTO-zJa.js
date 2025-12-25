const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-html2pdf-1uY42wdU.js","assets/vendor-cookie-CE1G-McA.js","assets/vendor-jspdf-XL3IGN3Y.js","assets/vendor-@babel-runtime-Dehwj3G0.js","assets/vendor-fflate-B2WnmEVw.js","assets/vendor-fast-png-CaYd17r8.js","assets/vendor-iobuffer-BmLRrqXH.js","assets/vendor-pako-n3Pgozwg.js","assets/vendor-html2canvas-CwVBrkl0.js"])))=>i.map(i=>d[i]);
import{_ as H}from"./vendor-jspdf-XL3IGN3Y.js";import{r as m,j as e}from"./vendor-react-CRZW6wHZ.js";import{d as s}from"./vendor-styled-HqHy2qUa.js";import{o as C,s as N}from"./index-v5rrbpvu.js";import{z as W}from"./vendor-icons-DKkSWR1V.js";import{z as b}from"./vendor-toast-hkeavouR.js";import{u as O}from"./vendor-i18n-GeQ4qXZA.js";import{c as U,u as q}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const V=t=>t?t.startsWith("http")?t:`http://localhost:5000${t}`:"",S=s.div`
  padding: 20px;
`,G=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,M=s.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${t=>t.theme.colors.glassBorder};
  background: ${t=>t.theme.colors.glass};
  cursor: pointer;
  color: ${t=>t.theme.colors.text};
  font-weight: 600;
  &:hover { background: ${t=>t.theme.colors.surface}; }
  svg { color: inherit; width: 16px; height: 16px; }
`,Y=s.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${t=>t.theme.gradients.primary};
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.18s ease;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${t=>t.theme.shadows.small}; }
  &:focus-visible { outline: 2px solid ${t=>t.theme.colors.accent}; outline-offset: 2px; }
`,J=s.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
`,K=s.div`
  text-align: center;
  color: #6b7280;
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.6;
`,y=s.div`
  border-top: 1px dashed #d1d5db;
  margin: 16px 0;
`,Q=s.div`
  border-top: 2px solid #000;
  margin: 16px 0;
`,D=s.div`
  margin-bottom: 16px;
`,h=s.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
`,X=s.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-weight: 700;
  font-size: 16px;
`,Z=s.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
`,ve=()=>{const{id:t}=U(),[r,R]=m.useState(null),[i,B]=m.useState(null),[T,v]=m.useState(!0),F=q(),{t:A}=O();m.useEffect(()=>{t&&(async()=>{try{v(!0);const[n,a]=await Promise.all([C.getById(Number(t)),N.getSettings()]);n.success&&n.data&&R(n.data),a.success&&a.data&&B(a.data)}catch(n){console.error("Failed to load receipt:",n),b.error("Failed to load receipt")}finally{v(!1)}})()},[t]);const E=()=>{F(-1)};if(T||!r)return e.jsx(S,{children:e.jsx("p",{children:"Loading receipt..."})});const u=i?.tax_rate?Number(i.tax_rate):0,g=r.items.reduce((o,n)=>o+Number(n.price||0)*(n.quantity||0),0),w=g*(u/100),P=g+w;return e.jsxs(S,{children:[e.jsxs(G,{children:[e.jsxs(M,{onClick:E,children:[e.jsx(W,{})," Back"]}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(Y,{onClick:async()=>{try{const o=document.getElementById("receipt");if(!o)throw new Error("Receipt element not found");const a=await(async c=>{const _=c.cloneNode(!0),z=Array.from(_.querySelectorAll("img"));return await Promise.all(z.map(async f=>{try{const l=f.src;if(!l||l.startsWith("data:"))return;const j=await fetch(l,{mode:"cors"});if(!j.ok)throw new Error(`Image fetch failed: ${j.status}`);const I=await j.blob(),k=await new Promise(($,L)=>{const x=new FileReader;x.onloadend=()=>$(x.result),x.onerror=L,x.readAsDataURL(I)});f.src=k}catch(l){console.warn("Could not inline image for PDF generation:",f.src,l)}})),_})(o),d=await H(()=>import("./vendor-html2pdf-1uY42wdU.js").then(c=>c.h),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await(d.default||d)().from(a).set({filename:`receipt-${r.orderid}.pdf`,margin:[5,5,5,5],html2canvas:{scale:2},jsPDF:{unit:"mm",format:[80,297],orientation:"portrait"}}).save(),b.success("Receipt downloaded")}catch(o){console.error("Download PDF failed",o),b.error(o instanceof Error?o.message:"Failed to download PDF")}},children:"Download PDF"})})]}),e.jsxs(J,{id:"receipt",children:[i?.shop_logo&&e.jsx("div",{style:{textAlign:"center",marginBottom:12},children:e.jsx("img",{src:V(i.shop_logo),alt:"logo",style:{maxWidth:180,maxHeight:110,objectFit:"contain"}})}),e.jsxs(K,{children:[r.branch_phone&&e.jsxs("div",{children:["Tel: ",r.branch_phone]}),i?.shop_email&&e.jsx("div",{children:i.shop_email}),i?.vat_registration_number&&e.jsxs("div",{children:["VAT REG# ",i.vat_registration_number]}),r.branch_address&&e.jsxs("div",{children:["Area: ",r.branch_address]}),r.branch_cr&&e.jsxs("div",{children:["CR: ",r.branch_cr]})]}),e.jsx(y,{}),e.jsxs(D,{style:{fontSize:"13px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Ref#:"})," ",r.orderid]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Status:"})," ",r.status]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Date:"})," ",new Date(r.created_at).toLocaleDateString()]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Time:"})," ",new Date(r.created_at).toLocaleTimeString()]})]}),r.customer_name&&(()=>{const o=r.customer_name==="Deleted customer"?A("orders.deleted_customer"):r.customer_name;return e.jsxs("div",{style:{marginTop:4},children:[e.jsx("strong",{children:"Customer:"})," ",o]})})(),r.user_name&&e.jsxs("div",{style:{marginTop:4},children:[e.jsx("strong",{children:"Served by:"})," ",r.user_name]})]}),e.jsx(y,{}),e.jsxs(D,{children:[e.jsx("div",{style:{fontWeight:600,marginBottom:8,fontSize:"14px"},children:"ORDER ITEMS"}),r.items.map((o,n)=>{const a=o.quantity||0,d=Number(o.price||0),p=d*(u/100),c=(d+p)*a;return e.jsxs("div",{style:{marginBottom:8},children:[e.jsx(h,{children:e.jsx("div",{style:{flex:1,fontWeight:500},children:o.name})}),e.jsxs(h,{style:{fontSize:"13px",color:"#4b5563"},children:[e.jsxs("div",{children:[a," × BHD ",d.toFixed(3)]}),e.jsxs("div",{style:{fontWeight:600,color:"#000"},children:["BHD ",c.toFixed(3)]})]}),p>0&&e.jsxs("div",{style:{fontSize:12,color:"#6b7280"},children:["Tax per unit: BHD ",p.toFixed(3)]}),o.note&&e.jsxs("div",{style:{color:"#6b7280",fontSize:12,marginTop:2,fontStyle:"italic"},children:["Note: ",o.note]})]},n)})]}),e.jsx(Q,{}),e.jsxs(e.Fragment,{children:[e.jsxs(h,{style:{fontSize:"14px"},children:[e.jsx("div",{children:"Subtotal"}),e.jsxs("div",{children:["BHD ",g.toFixed(3)]})]}),e.jsxs(h,{style:{fontSize:"14px"},children:[e.jsxs("div",{children:["VAT (",u,"%)"]}),e.jsxs("div",{children:["BHD ",w.toFixed(3)]})]}),e.jsx(y,{}),e.jsxs(X,{children:[e.jsx("div",{children:"TOTAL"}),e.jsxs("div",{children:["BHD ",P.toFixed(3)]})]})]}),e.jsx(Z,{children:i?.receipt_footer||"Thank you for your business!"})]})]})};export{ve as default};
