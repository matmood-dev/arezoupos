import{r as n,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as s}from"./vendor-styled-HqHy2qUa.js";import{b as v}from"./index-v5rrbpvu.js";import{B as _}from"./Button-4LKQu1lR.js";import{s as H,t as L,r as M,w as y,p as $,B as O,M as P}from"./vendor-icons-DKkSWR1V.js";import{z as x}from"./vendor-toast-hkeavouR.js";import{u as A}from"./vendor-i18n-GeQ4qXZA.js";import{u as R}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const V=s.div`
  padding: 20px;
  @media (max-width: 768px) { padding: 15px; }
  @media (max-width: 480px) { padding: 10px; }
`,G=s.h1`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.25rem; }
`,I=s.div`
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};
  @media (max-width: 768px) { padding: 20px; border-radius: 12px; }
  @media (max-width: 480px) { padding: 15px; }
`,W=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) { flex-direction: column; gap: 15px; margin-bottom: 20px; }
`,F=s.div`
  display: flex;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
`,k=s.button`
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
`,N=s(_)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${e=>e.theme.shadows.large}; }
  svg { width: 20px; height: 20px; }
`,Y=s.div``,q=s.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`,J=s.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,K=s.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,Q=s.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,X=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  @media (max-width: 1200px) { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
  @media (max-width: 992px) { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 15px; }
`,Z=s.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.3s ease;
  @media (max-width: 768px) { padding: 15px; border-radius: 10px; }
  @media (max-width: 480px) { padding: 12px; }
  &:hover { transform: translateY(-2px); box-shadow: ${e=>e.theme.shadows.medium}; }
  @media (max-width: 768px) { &:hover { transform: none; } }
`,ee=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`,te=s.h4`
  margin: 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  margin-right: 10px;
`,S=s.div`
  display: flex;
  gap: 8px;
`,p=s.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover { transform: scale(1.1); }
  &:nth-child(1):hover { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
  &:nth-child(2):hover { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
  svg { width: 16px; height: 16px; color: ${e=>e.theme.colors.textSecondary}; }
`,re=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;
`,z=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,C=s.div`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,se=s.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  word-break: break-word;
`,U=s.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${e=>e.role==="admin"?"background: rgba(239, 68, 68, 0.1); color: #ef4444;":"background: rgba(59, 130, 246, 0.1); color: #3b82f6;"}
`,ie=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${e=>e.theme.colors.textSecondary};
`,oe=s.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
`,de=s.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`,a=s.th`
  text-align: left;
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  color: ${e=>e.theme.colors.textSecondary};
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
`,l=s.td`
  padding: 16px;
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
`,ne=s.tr`
  &:last-child td { border-bottom: none; }
  &:hover { background: ${e=>e.theme.colors.glass}; }
`,Be=()=>{const{t:e}=A(),h=R(),[o,m]=n.useState([]),[B,g]=n.useState(!0),[u,f]=n.useState(""),[c,b]=n.useState(()=>{const r=localStorage.getItem("users-view-mode");return r==="list"||r==="grid"?r:"grid"});n.useEffect(()=>{D()},[]),n.useEffect(()=>{localStorage.setItem("users-view-mode",c)},[c]);const D=async()=>{try{g(!0);const r=await v.getAll();r.success&&r.data?m(r.data):f(e("users.loading")??"Failed to load users")}catch(r){f(r instanceof Error?r.message:e("users.loading")??"Failed to load users")}finally{g(!1)}},T=()=>h("/users/edit/new"),j=r=>h(`/users/edit/${r.userid}`),w=r=>{const i=o.find(d=>d.userid===r);i&&x(d=>t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:"8px",fontWeight:"500"},children:e("users.delete_confirm")}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:e("users.delete_confirm")}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>x.dismiss(d.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:()=>{x.dismiss(d.id),E(i)},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:e("users.delete")})]})]}),{duration:1e4,style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},E=async r=>{x.promise(v.delete(r.userid),{loading:e("users.delete"),success:i=>{if(i.success)return m(o.filter(d=>d.userid!==r.userid)),e("users.delete_success");throw new Error(e("users.delete_error"))},error:i=>i instanceof Error?i.message:e("users.delete_error")})};return t.jsxs(V,{children:[t.jsx(G,{children:e("users.title")}),t.jsxs(I,{children:[t.jsxs(W,{children:[t.jsxs(F,{children:[t.jsxs(k,{$active:c==="grid",onClick:()=>b("grid"),children:[t.jsx(H,{})," ",e("users.grid")??"Grid"]}),t.jsxs(k,{$active:c==="list",onClick:()=>b("list"),children:[t.jsx(L,{})," ",e("users.list")??"List"]})]}),t.jsxs(N,{onClick:T,children:[t.jsx(M,{})," ",e("users.add_user")]})]}),t.jsxs(Y,{children:[t.jsxs(q,{children:[e("users.title")," (",o.length,")"]}),B?t.jsx(J,{children:e("users.loading")}):u?t.jsx(K,{children:u}):o.length===0?t.jsx(Q,{children:e("users.no_users")}):c==="grid"?t.jsx(X,{children:o.map(r=>t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(te,{children:r.username}),t.jsxs(S,{children:[t.jsx(p,{onClick:()=>j(r),title:e("users.edit"),children:t.jsx(y,{})}),t.jsx(p,{onClick:()=>w(r.userid),title:e("users.delete"),children:t.jsx($,{})})]})]}),t.jsxs(re,{children:[t.jsxs(z,{children:[t.jsx(C,{children:t.jsx(O,{})}),t.jsx(se,{children:r.email})]}),t.jsxs(z,{children:[t.jsx(C,{children:t.jsx(P,{})}),t.jsx(U,{role:r.role,children:r.role})]})]}),t.jsxs(ie,{children:[t.jsxs("span",{children:[e("users.created")??"Created",": ",new Date(r.created_at).toLocaleDateString()]}),t.jsxs("span",{children:[e("users.updated")??"Updated",": ",new Date(r.updated_at).toLocaleDateString()]})]})]},r.userid))}):t.jsx(oe,{children:t.jsxs(de,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(a,{children:e("users.username")}),t.jsx(a,{children:e("users.email")}),t.jsx(a,{children:e("users.role")}),t.jsx(a,{children:e("users.created")}),t.jsx(a,{children:e("users.updated")}),t.jsx(a,{children:e("users.actions")})]})}),t.jsx("tbody",{children:o.map(r=>t.jsxs(ne,{children:[t.jsx(l,{children:t.jsx("div",{style:{fontWeight:600,color:"inherit"},children:r.username})}),t.jsx(l,{children:r.email}),t.jsx(l,{children:t.jsx(U,{role:r.role,children:r.role})}),t.jsx(l,{children:new Date(r.created_at).toLocaleDateString()}),t.jsx(l,{children:new Date(r.updated_at).toLocaleDateString()}),t.jsx(l,{children:t.jsxs(S,{children:[t.jsx(p,{onClick:()=>j(r),title:e("users.edit"),children:t.jsx(y,{})}),t.jsx(p,{onClick:()=>w(r.userid),title:e("users.delete"),children:t.jsx($,{})})]})})]},r.userid))})]})})]})]})]})};export{Be as default};
