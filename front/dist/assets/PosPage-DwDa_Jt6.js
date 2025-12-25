import{r as n,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as r,m as F}from"./vendor-styled-HqHy2qUa.js";import{u as E}from"./useCart-DRNaftD2.js";import{i as N,s as O}from"./index-v5rrbpvu.js";import{z as d}from"./vendor-toast-hkeavouR.js";import{l as W,m as q,n as H,o as Y,p as D}from"./vendor-icons-DKkSWR1V.js";import{u as A}from"./vendor-i18n-GeQ4qXZA.js";import{u as L}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const w=r.div`
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${e=>e.theme.shadows.large};
    border-color: ${e=>e.theme.colors.accent};
    transform: translateY(-2px);
  }
`,z=r.button`
  background: ${e=>e.$primary?e.theme.gradients.primary:e.theme.colors.glass};
  color: ${e=>e.$primary?"white":e.theme.colors.text};
  border: 1px solid ${e=>e.$primary?"transparent":e.theme.colors.glassBorder};
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.glow};
    background: ${e=>e.$primary?e.theme.gradients.primary:e.theme.colors.surface};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,T=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",U=F`
  from { transform: translateY(12px) scale(.98); opacity: 0; }
  to { transform: translateY(0px) scale(1); opacity: 1; }
`,M=r.div`
  position: fixed;
  right: ${e=>e.$rtl?"auto":"24px"};
  left: ${e=>e.$rtl?"24px":"auto"};
  bottom: 24px;
  z-index: 1200;
  display: flex;
  align-items: center;
  gap: 12px;
`,G=r.button`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: ${e=>e.theme.shadows.large};
  transition: transform .14s ease, box-shadow .14s ease;

  &:active { transform: translateY(2px) scale(.99); }
`,Q=r.div`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: white;
  background: #ef4444;
`,X=r.div`
  width: 640px;
  max-width: calc(100vw - 48px);
  height: 68vh;
  max-height: 720px;
  background: ${e=>e.theme.colors.surface2};
  border-radius: 14px;
  box-shadow: ${e=>e.theme.shadows.large};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  animation: ${U} .16s ease;
  transition: transform .18s ease, opacity .18s ease;
  opacity: ${e=>e.$open?"1":"0"};
  transform: ${e=>e.$open?"translateY(0) scale(1)":"translateY(12px) scale(.98)"};
`,J=r.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
`,K=r.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.colors.text};
`,V=r.div`
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Z=r.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`,ee=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,P=r.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
`,te=r.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
`,oe=r.div`
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
`,re=r.div`
  padding: 12px;
  border-top: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.glass};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`,se=r.div`
  padding: 40px 12px;
  text-align: center;
  color: ${e=>e.theme.colors.textSecondary};
`,ie=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,v=r.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  padding: 6px;
  height: 32px;
  min-width: 32px;
  line-height: 0;
`,ne=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,B=r.button`
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
`,ae=()=>{const{cart:e,updateQuantity:x,updateItemNote:$,updateItemPrice:u,total:k,removeFromCart:h,clearCart:C}=E(),m=L(),[g,p]=n.useState(!1),[S,_]=n.useState(!1),[f,b]=n.useState({}),[y,I]=n.useState({});n.useEffect(()=>{_(document.documentElement.dir==="rtl")},[]),n.useEffect(()=>{const o=i=>i.key==="Escape"&&p(!1);return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[]);const{t:a}=A(),s=e.reduce((o,i)=>o+i.quantity,0);return t.jsxs(M,{$rtl:S,children:[t.jsx("div",{style:{position:"relative"},children:t.jsx(G,{onClick:()=>p(o=>!o),"aria-expanded":g,"aria-haspopup":"dialog",title:"Open cart","data-testid":"floating-cart-button",children:t.jsxs(ie,{children:[t.jsx(W,{size:22}),s>0&&t.jsx(Q,{children:s})]})})}),t.jsx("div",{style:{display:g?"block":"none"},children:t.jsxs(X,{$open:g,role:"dialog","aria-label":"Cart panel",children:[t.jsxs(J,{children:[t.jsx(K,{children:a("pos.current_order")}),t.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:t.jsx(v,{onClick:()=>p(!1),"aria-label":"Close cart",children:t.jsx(q,{size:18})})})]}),t.jsx(V,{children:e.length===0?t.jsx(se,{children:a("pos.empty_cart")}):e.map(o=>t.jsxs(Z,{children:[t.jsxs(ee,{children:[o.product.image?t.jsx(P,{src:T(o.product.image),alt:o.product.name}):t.jsx(P,{src:"",alt:o.product.name}),t.jsxs("div",{style:{minWidth:0,display:"flex",flexDirection:"column"},children:[t.jsx(te,{children:o.product.name}),t.jsx(oe,{children:typeof o.overridePrice=="number"?t.jsxs("span",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsxs("span",{children:["BHD ",Number(o.overridePrice).toFixed(3)]}),t.jsxs("span",{style:{fontSize:12,color:"#6b7280",textDecoration:"line-through"},children:["BHD ",Number(o.product.price).toFixed(3)]})]}):`BHD ${Number(o.product.price).toFixed(3)}`}),t.jsxs("div",{style:{marginTop:6,display:"flex",alignItems:"flex-start",gap:0,minWidth:0},children:[t.jsx(v,{onClick:()=>I(i=>({...i,[o.product.itemid]:!i[o.product.itemid]})),"aria-label":`toggle-price-${o.product.itemid}`,title:o.overridePrice?"Edit price":"Change price",children:t.jsx(H,{size:25})}),y[o.product.itemid]?t.jsx("input",{"aria-label":`price-${o.product.itemid}`,type:"number",step:"0.001",min:"0",value:typeof o.overridePrice=="number"?String(o.overridePrice):String(o.product.price),onChange:i=>{const l=i.target.value,c=l===""?void 0:Number(l);u(o.product.itemid,typeof c=="number"&&!isNaN(c)?c:void 0)},style:{width:140,minWidth:0,padding:6,borderRadius:8,border:"1px solid rgba(0,0,0,0.06)",fontSize:12}}):null,t.jsx(v,{onClick:()=>b(i=>({...i,[o.product.itemid]:!i[o.product.itemid]})),"aria-label":`toggle-note-${o.product.itemid}`,title:o.note?"Edit note":"Add note",children:t.jsx(Y,{size:25})}),f[o.product.itemid]?t.jsx("textarea",{"aria-label":`note-${o.product.itemid}`,placeholder:"Add note",value:o.note??"",onChange:i=>$(o.product.itemid,i.target.value),style:{flex:1,minWidth:0,padding:6,borderRadius:8,border:"1px solid rgba(0,0,0,0.06)",resize:"vertical",fontSize:12}}):o.note?t.jsx("div",{style:{color:"#6b7280",fontSize:13,maxWidth:420,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.note}):null]})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsxs(ne,{children:[t.jsx(B,{onClick:()=>x(o.product.itemid,o.quantity-1),children:"-"}),t.jsx("div",{style:{minWidth:22,textAlign:"center"},children:o.quantity}),t.jsx(B,{onClick:()=>{try{x(o.product.itemid,o.quantity+1)}catch{d.error(a("pos.stock_limit"))}},children:"+"})]}),t.jsx(v,{onClick:()=>h(o.product.itemid),"aria-label":"Remove item",style:{color:"#ef4444"},title:a("pos.remove_item")||"Remove",children:t.jsx(D,{size:18})})]})]},o.product.itemid))}),t.jsxs(re,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("span",{style:{color:"var(--muted)",fontSize:13},children:a("pos.total")}),t.jsxs("span",{style:{fontWeight:800},children:["BHD ",k.toFixed(3)]})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(z,{onClick:()=>{e.length&&(m("/checkout"),p(!1))},$primary:!0,disabled:e.length===0,children:a("pos.checkout")}),t.jsx(z,{onClick:()=>{e.length!==0&&d(o=>t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:8,fontWeight:600},children:a("pos.clear_cart_confirm_title")}),t.jsx("div",{style:{color:"#64748b",marginBottom:12},children:a("pos.clear_cart_confirm_message")}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[t.jsx("button",{onClick:()=>d.dismiss(o.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:6,cursor:"pointer"},children:a("common.cancel")}),t.jsx("button",{onClick:()=>{d.dismiss(o.id),C(),d.success(a("pos.clear_success"))},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:6,cursor:"pointer"},children:a("pos.clear_cart")})]})]}),{duration:1e4,style:{background:"#fff7ed",border:"1px solid #fed7aa",padding:"12px",borderRadius:8}})},style:{background:"#fff",color:"#ef4444",border:"1px solid #ef4444"},disabled:e.length===0,children:a("pos.clear_cart")})]})]})]})})]})},le=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",ce=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: transparent; /* Background handled by global body style */

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }
`,de=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 10px;
  }
`,R=r(w)`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
  }
`,pe=r.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 140px;
  }
`,xe=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${R}:hover & {
    transform: scale(1.1);
  }
`,he=r.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,me=r.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  line-height: 1.4;
`,ue=r.p`
  margin: auto 0 0 0;
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
`,ge=r.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  z-index: 1;
`,fe=r.div`
  font-size: 12px;
  color: ${e=>e.$lowStock?"#ef4444":e.theme.colors.textSecondary};
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${e=>e.$lowStock?"#ef4444":"#22c55e"};
  }
`,be=r.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
  flex-wrap: wrap;
`,ye=r.input`
  padding: 14px 20px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 15px;
  flex: 1;
  min-width: 250px;
  background: ${e=>e.theme.colors.surface};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  box-shadow: ${e=>e.theme.shadows.small};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.shadows.glow};
    transform: translateY(-2px);
  }
`,je=r.select`
  padding: 14px 20px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 15px;
  background: ${e=>e.theme.colors.surface};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  box-shadow: ${e=>e.theme.shadows.small};
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.shadows.glow};
    transform: translateY(-2px);
  }

  option {
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    padding: 10px;
  }
`,De=()=>{const{t:e}=A(),{cart:x,addToCart:$}=E(),[u,k]=n.useState(""),[h,C]=n.useState(e("pos.all_categories")),[m,g]=n.useState([]),[p,S]=n.useState([]),[_,f]=n.useState(!0),[b,y]=n.useState("");n.useEffect(()=>{(async()=>{try{f(!0);const o=await N.getAll();o.success&&o.data?g(o.data):y(e("pos.error"))}catch(o){y(o instanceof Error?o.message:e("pos.error"))}finally{f(!1)}})()},[e]),n.useEffect(()=>{(async()=>{try{const o=await O.getCategories();o.success&&o.data&&S(o.data.map(i=>i.name))}catch(o){console.error("Failed to fetch categories",o)}})()},[]);const I=n.useMemo(()=>{const s=m.map(l=>l.category),o=e("pos.all_categories"),i=new Set([o,...p,...s]);return Array.from(i).sort((l,c)=>l===o?-1:c===o?1:l.localeCompare(c))},[m,p,e]),a=n.useMemo(()=>m.filter(s=>{const o=s.name.toLowerCase().includes(u.toLowerCase()),i=h===e("pos.all_categories")||s.category===h;return o&&i}),[u,h,m,e]);return t.jsxs(ce,{children:[t.jsxs("div",{children:[t.jsxs(be,{children:[t.jsx(ye,{type:"text",placeholder:e("pos.search_placeholder"),value:u,onChange:s=>k(s.target.value)}),t.jsx(je,{value:h,onChange:s=>C(s.target.value),children:I.map(s=>t.jsx("option",{value:s,children:s},s))})]}),t.jsx(de,{children:_?t.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px"},children:t.jsx(w,{children:e("pos.loading")})}):b?t.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px",color:"#ef4444"},children:t.jsx(w,{children:b})}):a.length===0?t.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px",color:"#64748b"},children:t.jsx(w,{children:e("pos.no_products")})}):a.map(s=>{const o=x.find(j=>j.product.itemid===s.itemid),i=o?o.quantity:0,l=s.stock_quantity>i,c=s.stock_quantity<=0;return t.jsxs(R,{onClick:()=>{if(c)return d.error(e("pos.out_of_stock"));if(!l)return d.error(e("pos.stock_limit"));try{$(s)}catch(j){d.error(j instanceof Error?j.message:e("pos.add_error"))}},children:[t.jsxs(pe,{children:[s.image?t.jsx(xe,{src:le(s.image),alt:s.name}):t.jsx("div",{style:{width:"100%",height:"100%",background:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8"},children:e("pos.no_image")}),t.jsx(ge,{children:s.category})]}),t.jsxs(he,{children:[t.jsx(me,{children:s.name}),t.jsx(fe,{$lowStock:s.stock_quantity<=5,children:c?e("pos.out_of_stock_label"):e("pos.in_stock",{count:s.stock_quantity})}),t.jsxs(ue,{children:["BHD ",Number(s.price).toFixed(3)]})]}),!l&&!c&&t.jsx("div",{style:{position:"absolute",top:10,left:10,background:"#ef4444",color:"white",padding:"2px 8px",borderRadius:10,fontSize:10,fontWeight:"bold",zIndex:2},children:"MAX"})]},s.itemid)})})]}),t.jsx(ae,{})]})};export{De as default};
