import{r as d,a as Z,j as t}from"./vendor-react-CRZW6wHZ.js";import{u as Ce,A as ze}from"./AdvancedSearch-kF4vunq6.js";import{d as r}from"./vendor-styled-HqHy2qUa.js";import{B as T}from"./Button-4LKQu1lR.js";import{a as _e,o as L,s as Ie}from"./index-v5rrbpvu.js";import{s as Oe,t as De,p as $,B as Be,D as Pe,E as ee,F as Le,f as Me,x as Ee,y as Te}from"./vendor-icons-DKkSWR1V.js";import{z as a}from"./vendor-toast-hkeavouR.js";import{u as Ae}from"./vendor-i18n-GeQ4qXZA.js";import{u as He}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const Fe=r.div`
  padding: 20px;
  @media (max-width: 768px) { padding: 15px; }
  @media (max-width: 480px) { padding: 10px; }
`,Ne=r.h1`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.25rem; }
`,We=r.div`
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};
  @media (max-width: 768px) { padding: 20px; border-radius: 12px; }
  @media (max-width: 480px) { padding: 15px; }
`,Re=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    border-color: ${e=>e.theme.colors.accent}40;
    box-shadow: ${e=>e.theme.shadows.small};
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`,Ve=r(Ee)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Ye=r(Te)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`,qe=r.input`
  flex: 1;
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 16px;
  color: ${e=>e.theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Ge=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  /* tablet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 14px;
    margin-bottom: 18px;
  }

  /* mobile - tighter card layout and two columns where possible */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(110px, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  /* very small narrow phones fallback to single column */
  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`,Ue=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) { justify-content: center; margin-bottom: 20px; }
`,Qe=r.div`
  display: flex;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`,te=r.button`
  padding: 10px 16px;
  border: none;
  background: ${e=>e.$active?e.theme.gradients.primary:"transparent"};
  color: ${e=>e.$active?"white":e.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover { background: ${e=>e.$active?e.theme.gradients.primary:e.theme.colors.surface}; }
  svg { width: 16px; height: 16px; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 13px; svg { width: 14px; height: 14px; } }
  &:first-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
`,S=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 18px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  text-align: center;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,C=r.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.accent};
  margin-bottom: 5px;
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 2px;
  }
`,z=r.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Xe=r.div`
  margin-top: 30px;
  @media (max-width: 768px) { margin-top: 20px; }
`,Je=r.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media (max-width: 768px) { font-size: 1.25rem; margin-bottom: 16px; }
  @media (max-width: 480px) { font-size: 1.1rem; margin-bottom: 12px; }
`,se=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  border: 2px solid ${e=>e.theme.colors.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  animation: slideDown 0.3s ease;
  @keyframes slideDown { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 768px) { flex-direction: column; align-items: stretch; gap: 12px; }
`,re=r.div` display: flex; align-items: center; gap: 12px; flex-wrap: wrap; `,ie=r.div` display: flex; gap: 8px; flex-wrap: wrap; `,oe=r.span` color: ${e=>e.theme.colors.text}; font-weight: 600; font-size: 14px; `,ne=r(T)`
  display: flex; align-items: center; gap: 8px; padding: 10px 16px; font-size: 14px; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; border: none;
  ${e=>e.$variant==="danger"?` background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; &:hover:not(:disabled) { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); transform: translateY(-1px); box-shadow: ${e.theme.shadows.medium}; }`:` background: ${e.theme.gradients.primary}; color: white; &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: ${e.theme.shadows.medium}; }`}
  &:disabled { opacity: 0.5; cursor: not-allowed; } svg { width: 16px; height: 16px; } @media (max-width: 768px) { flex: 1; justify-content: center; }
`,M=r.input` width: 18px; height: 18px; cursor: pointer; accent-color: ${e=>e.theme.colors.accent}; `,Ke=r.label` display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; color: ${e=>e.theme.colors.text}; font-size: 14px; font-weight: 500; `,Ze=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  @media (max-width: 1200px) { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
  @media (max-width: 992px) { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 16px; }
`,et=r.div`
  background: ${e=>e.theme.colors.surface}99;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.medium};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover { transform: translateY(-5px) scale(1.01); box-shadow: ${e=>e.theme.shadows.large}; border-color: ${e=>e.theme.colors.glassBorder}99; }
`,tt=r.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.surface}4D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`,st=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,rt=r.div`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.01em;
`,it=r.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
`,ae=r.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${e=>{switch(e.status){case"completed":return"#dcfce7";case"pending":return"#fef3c7";case"cancelled":return"#fee2e2";default:return e.theme.colors.glass}}};
  color: ${e=>{switch(e.status){case"completed":return"#166534";case"pending":return"#92400e";case"cancelled":return"#991b1b";default:return e.theme.colors.textSecondary}}};
`,ot=r.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`,nt=r.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover { transform: scale(1.1); background: rgba(59,130,246,0.1); }
  svg { width: 14px; height: 14px; color: ${e=>e.theme.colors.textSecondary}; }
`,de=r(nt)`
  &:hover { background: rgba(239,68,68,0.1); svg { color: #ef4444; } }
`,at=r.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
`,dt=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  background: ${e=>e.theme.colors.surface}4D;
  padding: 12px;
  border-radius: 10px;
`,le=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,ce=r.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.accent};
  color: white;
  font-weight: 600;
  font-size: 13px;
  flex-shrink: 0;
`,xe=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  min-width: 0;
  padding: 4px 0;
  overflow: hidden;
`,pe=r.div`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.accent};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,me=r.span`
  color: ${e=>e.theme.colors.text};
  font-size: 13px;
  font-weight: 500;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,lt=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  background: ${e=>e.theme.colors.surface}4D;
  padding: 12px;
  border-radius: 10px;
`,ct=r.div`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.colors.accent};
  text-align: right;
  margin-bottom: 8px;
`,xt=r.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  padding-right: 6px;
`,pt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 13px;
  gap: 8px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
  &:last-child { border-bottom: none; }
`,mt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`,ht=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }
`,_=r.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`,E=r.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,gt=r.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.glass};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 6px;
    font-size: 13px;
  }
`,ut=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }
`,ft=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.text};
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`,wt=r.span`
  color: ${e=>e.theme.colors.textSecondary};
  margin: 0 8px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 13px;
`,bt=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${e=>e.theme.colors.accent};
  white-space: nowrap;
`,jt=r.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
`,yt=r.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  background: rgba(239,68,68,0.1);
  border-radius: 8px;
  border: 1px solid rgba(239,68,68,0.2);
`,vt=r.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
`,kt=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$t=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.3s ease;
  @media (max-width: 768px) { padding: 15px; border-radius: 10px; }
  @media (max-width: 480px) { padding: 12px; }
  &:hover { transform: translateY(-1px); box-shadow: ${e=>e.theme.shadows.medium}; }
  @media (max-width: 768px) { &:hover { transform: none; } }
`,St=r.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 15px; }
`,Ct=r.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 10px; }
`,zt=r.div`
  flex: 1;
`,_t=r.h4`
  margin: 0 0 8px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  overflow-wrap: anywhere;
  font-weight: 600;
  @media (max-width: 768px) { font-size: 16px; }
  @media (max-width: 480px) { font-size: 15px; }
`,It=r.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 480px) { gap: 15px; }
`,I=r.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,O=r.span`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`,D=r.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`,Ot=r.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  @media (max-width: 768px) { align-self: flex-end; }
`,es=()=>{const{t:e}=Ae(),he=He(),{canDeleteOrders:y}=_e(),[m,A]=d.useState([]),[ge,H]=d.useState(!0),[F,N]=d.useState(""),[n,B]=d.useState({}),[ue,W]=d.useState(!1),[c,w]=d.useState(new Set),[b,v]=Ce(),[fe,we]=d.useState([]),P=d.useCallback(async()=>{try{H(!0);const s=await L.getAll();s.success&&s.data?A(s.data):N(e("orders.error"))}catch(s){N(s instanceof Error?s.message:e("orders.error"))}finally{H(!1)}},[e]),R=d.useCallback(async()=>{try{const s=await Ie.getBranches();s.success&&s.data&&we(s.data.map(i=>({branchid:i.branchid,name:i.name})))}catch(s){console.error("Failed to fetch branches:",s)}},[]);d.useEffect(()=>{P(),R()},[P,R]),d.useEffect(()=>{const s=()=>{window.innerWidth<=768&&b==="grid"&&v("list")};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[b,v]);const V=s=>he(`/orders/edit/${s.orderid}`),Y=s=>{w(i=>{const o=new Set(i);return o.has(s)?o.delete(s):o.add(s),o})},be=()=>{const s=j.map(o=>o.orderid),i=s.length>0&&s.every(o=>c.has(o));w(i?o=>{const g=new Set(o);return s.forEach(l=>g.delete(l)),g}:o=>{const g=new Set(o);return s.forEach(l=>g.add(l)),g})},q=s=>B(s),je=()=>B({}),p=Z.useMemo(()=>m.filter(s=>{if(n.orderId&&n.orderId.trim()!==""){const i=n.orderId.trim();if(!(s.orderid.toString().includes(i)||s.customer_name&&s.customer_name.toLowerCase().includes(i.toLowerCase())))return!1}if(n.status&&s.status!==n.status||n.minTotal&&n.minTotal!==""&&Number(s.total_amount)<Number(n.minTotal)||n.maxTotal&&n.maxTotal!==""&&Number(s.total_amount)>Number(n.maxTotal))return!1;if(n.startDate&&n.startDate!==""){const i=new Date(n.startDate);if(new Date(s.created_at)<i)return!1}if(n.endDate&&n.endDate!==""){const i=new Date(n.endDate);if(new Date(s.created_at)>i)return!1}return!(n.branchId&&n.branchId!==""&&s.branchid!==Number(n.branchId))}),[m,n]);d.useEffect(()=>{w(new Set),u(1)},[p]);const[x,u]=d.useState(1),G=[10,20,50],[f,ye]=d.useState(G[0]),h=Math.max(1,Math.ceil(p.length/f)),j=Z.useMemo(()=>{const s=(x-1)*f;return p.slice(s,s+f)},[p,x,f]),ve=p.length===0?0:(x-1)*f+1,ke=Math.min(x*f,p.length);d.useEffect(()=>{x>h&&u(h)},[x,h]);const U=()=>w(new Set),Q=async()=>{c.size!==0&&a(s=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete ",c.size," order(s)?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:"This action cannot be undone."}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>a.dismiss(s.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:()=>{a.dismiss(s.id),$e()},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:e("common.delete")})]})]}),{duration:1e4,style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},$e=async()=>{const s=Array.from(c),i=a.loading(`Deleting ${s.length} orders...`);try{await Promise.all(s.map(o=>L.delete(o))),a.success(`Successfully deleted ${s.length} orders`,{id:i}),await P(),w(new Set)}catch(o){a.error("Failed to delete some orders",{id:i}),console.error("Bulk delete orders error:",o)}},X=async s=>{a.custom(i=>t.jsxs("div",{style:{background:"#1f2937",color:"white",padding:"16px",borderRadius:"8px",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",display:"flex",flexDirection:"column",gap:"12px",minWidth:"300px"},children:[t.jsx("div",{style:{fontWeight:"600",fontSize:"16px"},children:e("orders.delete_confirm_title",{id:s.orderid})}),t.jsx("div",{style:{fontSize:"14px",color:"#9ca3af"},children:e("orders.delete_confirm_message")}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>a.dismiss(i.id),style:{padding:"6px 12px",background:"#374151",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:async()=>{a.dismiss(i.id);const o=a.loading(e("orders.deleting"),{style:{background:"#3b82f6",color:"white"}});try{(await L.delete(s.orderid)).success?(A(m.filter(l=>l.orderid!==s.orderid)),window.dispatchEvent(new CustomEvent("inventory-updated")),a.dismiss(o),a.success(e("orders.delete_success",{id:s.orderid}),{duration:4e3,style:{background:"#10b981",color:"white",border:"1px solid #059669"}})):(a.dismiss(o),a.error(e("orders.delete_error"),{duration:4e3,style:{background:"#ef4444",color:"white",border:"1px solid #dc2626"}}))}catch{a.dismiss(o),a.error(e("orders.delete_error"),{duration:4e3,style:{background:"#ef4444",color:"white",border:"1px solid #dc2626"}})}},style:{padding:"6px 12px",background:"#ef4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:e("common.delete")})]})]}),{duration:1/0,position:"top-center"})},J=s=>{switch(s){case"completed":return t.jsx(Me,{});case"pending":return t.jsx(ee,{});case"cancelled":return t.jsx(Le,{});default:return t.jsx(ee,{})}},K=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),k=(()=>{const s=m.length,i=m.filter(l=>l.status==="completed").length,o=m.filter(l=>l.status==="pending").length,g=m.filter(l=>l.status==="completed").reduce((l,Se)=>l+Number(Se.total_amount),0);return{total:s,completed:i,pending:o,totalRevenue:g}})();return t.jsxs(Fe,{children:[t.jsx(Ne,{children:e("orders.title")}),t.jsxs(We,{children:[t.jsxs(Ge,{children:[t.jsxs(S,{children:[t.jsx(C,{children:k.total}),t.jsx(z,{children:e("orders.total_orders")})]}),t.jsxs(S,{children:[t.jsx(C,{children:k.completed}),t.jsx(z,{children:e("orders.completed")})]}),t.jsxs(S,{children:[t.jsx(C,{children:k.pending}),t.jsx(z,{children:e("orders.pending")})]}),t.jsxs(S,{children:[t.jsxs(C,{children:["BHD ",k.totalRevenue.toFixed(3)]}),t.jsx(z,{children:e("orders.total_revenue")})]})]}),ue?t.jsx(ze,{initialFilters:n,categories:[],branches:fe,onApply:q,onClear:je,isOpen:!0,onClose:()=>W(!1),variant:"orders"}):t.jsxs(Re,{onClick:()=>W(!0),children:[t.jsx(Ve,{}),t.jsx(qe,{type:"text",placeholder:e("orders.search_placeholder","Search orders..."),value:n.search||"",onChange:s=>{const i={...n,search:s.target.value};B(i),q(i)},onClick:s=>s.stopPropagation()}),t.jsx(Ye,{})]}),t.jsx(Ue,{children:t.jsxs(Qe,{children:[t.jsxs(te,{$active:b==="grid",onClick:()=>v("grid"),children:[t.jsx(Oe,{}),e("orders.view_grid")]}),t.jsxs(te,{$active:b==="list",onClick:()=>v("list"),children:[t.jsx(De,{}),e("orders.view_list")]})]})}),t.jsxs(Xe,{children:[t.jsxs(Je,{children:[e("orders.recent_orders",{count:p.length}),t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:p.length>0&&t.jsxs(Ke,{children:[t.jsx(M,{type:"checkbox",checked:j.length>0&&j.every(s=>c.has(s.orderid)),onChange:be}),e("orders.select_all")]})})]}),c.size>0&&t.jsxs(se,{children:[t.jsxs(re,{children:[t.jsxs(oe,{children:[c.size," ",e("orders.selected")||"order(s) selected"]}),t.jsx(T,{onClick:U,style:{padding:"6px 12px",fontSize:"13px"},children:e("inventory.clear_selection")||"Clear Selection"})]}),t.jsx(ie,{children:y&&t.jsxs(ne,{$variant:"danger",onClick:Q,children:[t.jsx($,{})," ",e("orders.delete_selected")||"Delete Selected"]})})]}),ge?t.jsx(jt,{children:e("orders.loading")}):F?t.jsx(yt,{children:F}):m.length===0?t.jsx(vt,{children:e("orders.no_orders")}):b==="grid"?t.jsxs(t.Fragment,{children:[c.size>0&&t.jsxs(se,{children:[t.jsxs(re,{children:[t.jsxs(oe,{children:[c.size," ",e("orders.selected")||"order(s) selected"]}),t.jsx(T,{onClick:U,style:{padding:"6px 12px",fontSize:"13px"},children:e("inventory.clear_selection")||"Clear Selection"})]}),t.jsx(ie,{children:y&&t.jsxs(ne,{$variant:"danger",onClick:Q,children:[t.jsx($,{})," ",e("orders.delete_selected")||"Delete Selected"]})})]}),t.jsx(Ze,{children:j.map(s=>t.jsxs(et,{onClick:()=>V(s),style:{cursor:"pointer"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"6px"},children:[t.jsx(M,{type:"checkbox",checked:c.has(s.orderid),onChange:()=>Y(s.orderid),onClick:i=>i.stopPropagation()}),t.jsxs(tt,{style:{flex:1},children:[t.jsxs(st,{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:t.jsx(rt,{children:e("orders.order_number",{id:s.orderid})})}),t.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"flex-start",flexWrap:"wrap"},children:[t.jsx(it,{children:K(s.created_at)}),t.jsxs(ae,{status:s.status,children:[J(s.status),s.status]})]})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t.jsx(ot,{children:y&&t.jsx(de,{onClick:i=>{i.stopPropagation(),X(s)},title:e("orders.delete_order"),children:t.jsx($,{})})})})]})]}),t.jsxs(at,{children:[t.jsx(dt,{children:(()=>{const i=s.customer_name==="Deleted customer"?e("orders.deleted_customer"):s.customer_name;return i?t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsx(ce,{children:(i||"W").split(" ").map(o=>o[0]).slice(0,2).join("").toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:{fontWeight:600,color:"inherit",maxWidth:"220px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i}),s.customer_phone&&t.jsx("div",{style:{fontSize:12,color:"#6b7280",marginTop:2,maxWidth:"220px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:s.customer_phone})]})]}),s.customer_email&&t.jsxs(xe,{children:[t.jsx(pe,{children:t.jsx(Be,{})}),t.jsx(me,{children:s.customer_email})]}),s.branch_name&&t.jsxs(xe,{children:[t.jsx(pe,{children:t.jsx(Pe,{})}),t.jsx(me,{children:s.branch_name})]})]}):t.jsxs(le,{children:[t.jsx(ce,{children:"WI"}),t.jsx("div",{children:t.jsx("div",{style:{fontWeight:600},children:e("orders.walk_in_customer")})})]})})()}),t.jsxs(lt,{children:[t.jsxs(ct,{children:["BHD ",Number(s.total_amount).toFixed(3)]}),t.jsxs(xt,{children:[s.items.slice(0,3).map((i,o)=>t.jsxs(pt,{children:[t.jsx(ft,{children:i.name??`#${i.itemid}`}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsxs(wt,{children:["×",i.quantity]}),t.jsxs(bt,{children:["BHD ",(Number(i.price)*i.quantity).toFixed(3)]})]})]},o)),s.items.length>3&&t.jsx("div",{style:{textAlign:"center",padding:"5px",color:"#64748b",fontSize:"12px"},children:e("orders.more_items",{count:s.items.length-3})})]})]})]})]},s.orderid))})]}):t.jsx(t.Fragment,{children:t.jsx(kt,{children:j.map(s=>t.jsx($t,{onClick:()=>V(s),style:{cursor:"pointer"},children:t.jsxs(St,{children:[t.jsx(M,{type:"checkbox",checked:c.has(s.orderid),onChange:()=>Y(s.orderid),onClick:i=>i.stopPropagation(),style:{marginRight:"12px"}}),t.jsxs(Ct,{children:[t.jsxs(zt,{children:[t.jsx(_t,{children:e("orders.order_number",{id:s.orderid})}),t.jsxs(It,{children:[t.jsxs(I,{children:[t.jsx(O,{children:e("orders.date_label")}),t.jsx(D,{children:K(s.created_at)})]}),t.jsxs(I,{children:[t.jsx(O,{children:e("orders.status_label")}),t.jsx(D,{children:t.jsxs(ae,{status:s.status,children:[J(s.status),s.status]})})]}),t.jsxs(I,{children:[t.jsx(O,{children:e("orders.total_label")}),t.jsxs(D,{children:["BHD ",Number(s.total_amount).toFixed(3)]})]}),t.jsxs(I,{children:[t.jsx(O,{children:e("orders.customer_label")}),t.jsx(D,{children:s.customer_name==="Deleted customer"?e("orders.deleted_customer"):s.customer_name||e("orders.walk_in_customer")})]})]})]}),t.jsx(Ot,{children:y&&t.jsx(de,{onClick:i=>{i.stopPropagation(),X(s)},title:e("orders.delete_order"),children:t.jsx($,{})})})]})]})},s.orderid))})}),t.jsxs(mt,{children:[t.jsxs(ut,{children:[t.jsx(gt,{value:f,onChange:s=>{ye(Number(s.target.value)),u(1)},children:G.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(E,{style:{marginLeft:8},children:"Items per page"}),t.jsx(E,{style:{marginLeft:12},children:`Showing ${ve}–${ke} of ${p.length} orders`})]}),t.jsxs(ht,{children:[t.jsx(_,{onClick:()=>u(1),disabled:x===1,children:"«"}),t.jsx(_,{onClick:()=>u(s=>Math.max(1,s-1)),disabled:x===1,children:"Prev"}),t.jsx(E,{children:`Page ${x} of ${h}`}),t.jsx(_,{onClick:()=>u(s=>Math.min(h,s+1)),disabled:x===h,children:"Next"}),t.jsx(_,{onClick:()=>u(h),disabled:x===h,children:"»"})]})]})]})]})]})};export{es as default};
