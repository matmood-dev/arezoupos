import{r as x,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as a}from"./vendor-styled-HqHy2qUa.js";import{d as ye,a as _e,u as ke,L as K,s as j,b as X}from"./index-v5rrbpvu.js";import{B as ne}from"./Button-4LKQu1lR.js";import{L as Z,b as ee,M as Ce,B as $e,N as Ne,O as B,D as z,P as Fe,y as Se,w as Pe,p as te,Q as se}from"./vendor-icons-DKkSWR1V.js";import{z as i}from"./vendor-toast-hkeavouR.js";import{u as Be}from"./useCategories-CU2ihhJA.js";import{u as ze}from"./vendor-i18n-GeQ4qXZA.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-react-router-DDEx4Dfx.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const Le=e=>e?e.startsWith("http")||e.startsWith("data:")?e:`http://localhost:5000${e}`:"",Ee=a.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`,Ae=a.div`
  max-width: 1200px;
  margin: 0 auto 32px auto;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Re=a.h1`
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`,Te=a.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Oe=a.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ie=a.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 0;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};
  backdrop-filter: blur(20px);
  overflow: hidden;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`,De=a.div`
  display: flex;
  background: ${e=>e.theme.colors.glass};
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
`,He=a.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 24px;
  background: ${e=>e.$active?e.theme.colors.surface:"transparent"};
  border: none;
  border-bottom: 3px solid
    ${e=>e.$active?e.theme.colors.accent:"transparent"};
  color: ${e=>e.$active?e.theme.colors.text:e.theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
  position: relative;

  &:hover {
    color: ${e=>e.theme.colors.text};
    background: ${e=>e.$active?e.theme.colors.surface:e.theme.colors.glass};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${e=>e.$active?e.theme.colors.accent:e.theme.colors.textSecondary};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.9rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 0.85rem;
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Ue=a.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`,v=a.div`
  background: ${e=>e.theme.colors.glass};
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${e=>e.theme.shadows.medium};
    border-color: ${e=>e.theme.colors.accent}30;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`,y=a.h3`
  color: ${e=>e.theme.colors.text};
  margin: 0 0 24px 0;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${e=>e.theme.gradients.primary};
    border-radius: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${e=>e.theme.colors.accent};
    background: ${e=>e.theme.colors.accent}15;
    padding: 6px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,c=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* increased space between label and control */
  position: relative;
`,l=a.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 20px; /* spacing below the label */
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 3px;
    height: 12px;
    background: ${e=>e.theme.gradients.primary};
    border-radius: 2px;
  }
`,p=a.input`
  padding: 20px 22px; /* larger padding for clearer separation */
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.colors.background};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow},
      inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background: ${e=>e.theme.colors.surface};
    transform: translateY(-1px);
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.theme.colors.accent}50;
  }

  @media (max-width: 480px) {
    padding: 18px 16px;
    font-size: 16px; /* Prevent zoom on iOS */
  }
`,U=a.select`
  padding: 20px 22px; /* larger padding for selects */
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.colors.background};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 16px;
  padding-right: 56px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow},
      inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background: ${e=>e.theme.colors.surface};
    transform: translateY(-1px);
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.theme.colors.accent}50;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
    padding-right: 48px;
    font-size: 16px; /* Prevent zoom on iOS */
    background-position: right 12px center;
    background-size: 14px;
  }
`,re=a.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,L=a(ne)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
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

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`,Me=a.div`
  position: relative;
`,We=a.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${e=>e.theme.colors.glass};
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface};
    border-color: ${e=>e.theme.colors.accent};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Ye=a.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,qe=a.div`
  margin-top: 8px;
  padding: 8px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};
`,Ge=a.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
`,Ve=a.img`
  max-width: 200px;
  max-height: 120px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: ${e=>e.theme.shadows.small};
`,Qe=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Je=a.div`
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
`,Ke=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,Xe=a.h4`
  margin: 0;
  color: ${e=>e.theme.colors.text};
  font-size: 16px;
`,Ze=a.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  ${e=>e.$active?`
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  `:`
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  `}
`,et=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,tt=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,st=a.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${e=>e.theme.colors.accent}20;
  color: ${e=>e.theme.colors.accent};
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`,E=a(ne)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 12px;
  background: ${e=>e.theme.colors.accent};
  border: none;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${e=>e.theme.shadows.small};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,A=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 8px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.accent};
    background: ${e=>e.theme.colors.glass};
  }
`,rt=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,nt=a.div`
  background: ${e=>e.theme.colors.surface2};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.large};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${e=>e.theme.colors.primary},
      ${e=>e.theme.colors.accent}
    );
  }

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 16px;
  }
`,at=a.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 20px;
  font-weight: 600;
`,ot=a.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`,St=()=>{const{t:e,i18n:R}=ze(),{theme:ae,setMode:oe}=ye(),{isAdmin:k}=_e(),{user:f}=ke(),[C,ie]=x.useState("profile"),[M,W]=x.useState(!1),[Y,T]=x.useState(null),[r,u]=x.useState({theme:ae.mode,language:R.language,shopName:"My POS Shop",shopLogo:null,shopEmail:"",vatRegistrationNumber:"",bankName:"",bankAccountName:"",ibanNumber:"",accountNumber:"",swiftCode:"",currency:"BHD",taxRate:12,receiptFooter:"Thank you for your business!",branches:[],itemCategories:[]}),[ce,$]=x.useState(!1),[d,w]=x.useState({name:"",address:"",phone:"",cr:"",active:!0}),[S,N]=x.useState(null),[q,O]=x.useState(!1),[I,D]=x.useState(""),[P,le]=x.useState(!1),[m,_]=x.useState({email:"",currentPassword:"",newPassword:"",confirmPassword:"",avatar:null}),[G,F]=x.useState(!1);x.useEffect(()=>{(async()=>{try{const n=await j.getSettings();if(n.success&&n.data){const o=n.data;u(g=>({...g,shopName:o.shop_name,shopLogo:null,shopEmail:o.shop_email||"",vatRegistrationNumber:o.vat_registration_number||"",currency:o.currency,taxRate:Number(o.tax_rate),receiptFooter:o.receipt_footer,bankAccountName:o.bank_account_name||"",bankName:o.bank_name||"",ibanNumber:o.iban_number||"",accountNumber:o.account_number||"",swiftCode:o.swift_code||""})),o.shop_logo&&T(Le(o.shop_logo))}if(k){const o=await j.getBranches();o.success&&o.data&&u(g=>({...g,branches:o.data||[]}))}}catch(n){console.error("Error loading settings:",n),i.error(e("settings.load_error"))}})()},[k,e]);const{categories:V,loading:Q,reload:J}=Be();x.useEffect(()=>{u(s=>({...s,itemCategories:V||[]}))},[V]),x.useEffect(()=>{f&&_(s=>({...s,email:f.email||""}))},[f]);const de=async()=>{if(f)try{if(F(!0),m.email&&m.email!==f.email&&await X.update(f.userid.toString(),{email:m.email}),m.newPassword){if(!m.currentPassword){i.error(e("settings.current_password_required")),F(!1);return}if(m.newPassword!==m.confirmPassword){i.error(e("settings.password_mismatch")),F(!1);return}if(m.newPassword.length<6){i.error(e("settings.password_too_short")),F(!1);return}await X.update(f.userid.toString(),{password:m.newPassword,currentPassword:m.currentPassword}),_(s=>({...s,currentPassword:"",newPassword:"",confirmPassword:""}))}i.success(e("settings.profile_updated"))}catch(s){console.error("Error updating profile:",s),i.error(e("settings.profile_update_error"))}finally{F(!1)}},b=s=>{const{name:n,value:o,type:g}=s.target,h=s.target.checked;let H=o;g==="number"?H=parseFloat(o)||0:g==="checkbox"&&(H=h),u({...r,[n]:H})},pe=s=>{const n=s.target.value;R.changeLanguage(n),u({...r,language:n})},he=()=>{N(null),w({name:"",address:"",phone:"",cr:"",active:!0}),$(!0)},me=s=>{N(s.branchid),w({name:s.name,address:s.address,phone:s.phone||"",cr:s.cr||"",active:s.active}),$(!0)},ge=async()=>{try{if(!d.name||!d.address){i.error(e("settings.branch_required_error"));return}if(S){const s=await j.updateBranch(S,{name:d.name,address:d.address,phone:d.phone||void 0,cr:d.cr||void 0,active:d.active});s.success&&s.data&&(u(n=>({...n,branches:n.branches.map(o=>o.branchid===S?s.data:o)})),i.success(e("settings.branch_updated")))}else{const s=await j.createBranch({name:d.name,address:d.address,phone:d.phone||void 0,cr:d.cr||void 0,active:d.active});s.success&&s.data&&(u(n=>({...n,branches:[...n.branches,s.data]})),i.success(e("settings.branch_created")))}}catch(s){i.error(s instanceof Error?s.message:"Failed")}finally{$(!1),N(null)}},xe=s=>{i(n=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete Branch: ",s.name,"?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:"This action cannot be undone."}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>i.dismiss(n.id),style:{padding:"6px 12px"},children:"Cancel"}),t.jsx("button",{onClick:async()=>{i.dismiss(n.id);try{(await j.deleteBranch(s.branchid)).success&&(u(g=>({...g,branches:g.branches.filter(h=>h.branchid!==s.branchid)})),i.success("Branch deleted successfully"))}catch(o){console.error(o),i.error("Failed to delete branch")}},style:{padding:"6px 12px",background:"#ef4444",color:"white"},children:"Delete"})]})]}))},ue=async()=>{if(!I.trim())return i.error(e("settings.category_required_error"));try{const s=await j.createCategory({name:I.trim()});s.success&&s.data&&(u(n=>({...n,itemCategories:[...n.itemCategories,s.data]})),await J(),D(""),O(!1),i.success(e("settings.category_added")))}catch(s){console.error(s),i.error(e("settings.add_category_error"))}},be=s=>{i(n=>t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:"8px",fontWeight:"500"},children:e("settings.delete_category_confirm_title")}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:e("settings.delete_confirm_message")}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>i.dismiss(n.id),style:{padding:"6px 12px"},children:e("common.cancel")}),t.jsx("button",{onClick:async()=>{i.dismiss(n.id);try{(await j.deleteCategory(s)).success&&(u(g=>({...g,itemCategories:g.itemCategories.filter(h=>h.categoryid!==s)})),await J(),i.success(e("settings.category_deleted")))}catch(o){console.error(o),i.error(e("settings.delete_category_error"))}},style:{padding:"6px 12px",background:"#ef4444",color:"white"},children:e("common.delete")})]})]}))},fe=s=>{const n=s.target.files?.[0]||null;if(u({...r,shopLogo:n}),n){const o=new FileReader;o.onload=g=>{T(g.target?.result)},o.readAsDataURL(n)}else T(null)},je=s=>{const n=s;oe(n),u({...r,theme:n})},we=async s=>{s.preventDefault();try{if(W(!0),localStorage.setItem("theme",r.theme),C==="system"&&k){let n;const o={};if(r.shopLogo){const h=new FormData;h.append("shop_name",r.shopName),h.append("shop_email",r.shopEmail),h.append("vat_registration_number",r.vatRegistrationNumber),h.append("currency",r.currency),h.append("tax_rate",r.taxRate.toString()),h.append("receipt_footer",r.receiptFooter),h.append("shop_logo",r.shopLogo),h.append("bank_name",r.bankName||""),h.append("bank_account_name",r.bankAccountName||""),h.append("iban_number",r.ibanNumber||""),h.append("account_number",r.accountNumber||""),h.append("swift_code",r.swiftCode||""),n=h}else n={shop_name:r.shopName,shop_email:r.shopEmail,vat_registration_number:r.vatRegistrationNumber,currency:r.currency,tax_rate:parseFloat(r.taxRate.toString()),receipt_footer:r.receiptFooter,bank_name:r.bankName||"",bank_account_name:r.bankAccountName||"",iban_number:r.ibanNumber||"",account_number:r.accountNumber||"",swift_code:r.swiftCode||""},o["Content-Type"]="application/json";const g=await j.updateSettings(n);if(!g.success)throw new Error(g.message||e("settings.save_error"))}i.success(e("settings.save_success"))}catch(n){console.error("Error saving settings:",n),i.error(n instanceof Error?n.message:e("settings.save_error"))}finally{W(!1)}},ve=[{id:"profile",label:e("settings.profile"),icon:Z},{id:"appearance",label:e("settings.appearance"),icon:ee},...k?[{id:"system",label:e("settings.system"),icon:Ce}]:[]];return t.jsxs(Ee,{children:[t.jsxs(Ae,{children:[t.jsx(Re,{children:e("settings.title")}),t.jsx(Te,{children:e("settings.subtitle")})]}),t.jsx(Oe,{children:t.jsxs(Ie,{children:[t.jsx(De,{children:ve.map(s=>t.jsxs(He,{$active:C===s.id,onClick:()=>ie(s.id),children:[t.jsx(s.icon,{}),s.label]},s.id))}),t.jsxs(Ue,{children:[C==="profile"&&t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(Z,{}),e("settings.profile_information")]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"username",children:e("settings.username")}),t.jsx(p,{id:"username",name:"username",type:"text",value:f?.username||"",disabled:!0,style:{opacity:.6,cursor:"not-allowed"}}),t.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"4px"},children:e("settings.username_cannot_change")})]}),t.jsxs(c,{children:[t.jsxs(l,{htmlFor:"profileEmail",children:[t.jsx($e,{style:{display:"inline",marginRight:"8px"}}),e("settings.email")]}),t.jsx(p,{id:"profileEmail",name:"profileEmail",type:"email",value:m.email,onChange:s=>_({...m,email:s.target.value}),placeholder:e("settings.email_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"role",children:e("settings.role")}),t.jsx(p,{id:"role",name:"role",type:"text",value:f?.role||"",disabled:!0,style:{opacity:.6,cursor:"not-allowed",textTransform:"capitalize"}})]})]}),t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(Ne,{}),e("settings.change_password")]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"currentPassword",children:e("settings.current_password")}),t.jsx(p,{id:"currentPassword",name:"currentPassword",type:"password",value:m.currentPassword,onChange:s=>_({...m,currentPassword:s.target.value}),placeholder:e("settings.current_password_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"newPassword",children:e("settings.new_password")}),t.jsx(p,{id:"newPassword",name:"newPassword",type:"password",value:m.newPassword,onChange:s=>_({...m,newPassword:s.target.value}),placeholder:e("settings.new_password_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"confirmPassword",children:e("settings.confirm_password")}),t.jsx(p,{id:"confirmPassword",name:"confirmPassword",type:"password",value:m.confirmPassword,onChange:s=>_({...m,confirmPassword:s.target.value}),placeholder:e("settings.confirm_password_placeholder")})]}),t.jsx("div",{style:{marginTop:"24px"},children:t.jsxs(L,{onClick:de,disabled:G,children:[t.jsx(B,{}),e(G?"settings.updating":"settings.update_profile")]})})]})]}),C==="appearance"&&t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(ee,{}),e("settings.appearance")]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"theme",children:e("settings.theme")}),t.jsxs(U,{id:"theme",name:"theme",value:r.theme,onChange:s=>je(s.target.value),children:[t.jsx("option",{value:"light",children:e("settings.light")}),t.jsx("option",{value:"dark",children:e("settings.dark")}),t.jsx("option",{value:"system",children:e("settings.system_theme")})]})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"language",children:e("settings.language")}),t.jsxs(U,{id:"language",name:"language",value:r.language,onChange:pe,children:[t.jsx("option",{value:"en",children:"English"}),t.jsx("option",{value:"ar",children:"العربية"}),t.jsx("option",{value:"tl",children:"Filipino"}),t.jsx("option",{value:"ur",children:"اردو"}),t.jsx("option",{value:"fa",children:"فارسی"})]})]})]}),C==="system"&&k&&t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(z,{}),e("settings.system")]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"shopName",children:e("settings.shop_name")}),t.jsx(p,{id:"shopName",name:"shopName",type:"text",value:r.shopName,onChange:b,placeholder:e("settings.shop_name_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"shopEmail",children:e("settings.shop_email")}),t.jsx(p,{id:"shopEmail",name:"shopEmail",type:"email",value:r.shopEmail,onChange:b,placeholder:e("settings.shop_email_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"vatRegistrationNumber",children:e("settings.vat_registration_number")}),t.jsx(p,{id:"vatRegistrationNumber",name:"vatRegistrationNumber",type:"text",value:r.vatRegistrationNumber,onChange:b,placeholder:e("settings.vat_registration_number_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"shopLogo",children:e("settings.shop_logo")}),t.jsxs(Me,{children:[t.jsx(Ye,{id:"shopLogo",name:"shopLogo",type:"file",accept:"image/*",onChange:fe}),t.jsxs(We,{htmlFor:"shopLogo",children:[t.jsx(Fe,{}),e("settings.choose_logo")]}),Y&&t.jsx(Ge,{children:t.jsx(Ve,{src:Y,alt:"Logo preview"})}),r.shopLogo&&t.jsxs(qe,{children:[e("settings.selected_file")," ",r.shopLogo.name]})]})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"currency",children:e("settings.currency")}),t.jsxs(U,{id:"currency",name:"currency",value:r.currency,onChange:b,children:[t.jsx("option",{value:"BHD",children:e("settings.currency_bhd")}),t.jsx("option",{value:"USD",children:e("settings.currency_usd")}),t.jsx("option",{value:"EUR",children:e("settings.currency_eur")}),t.jsx("option",{value:"GBP",children:e("settings.currency_gbp")}),t.jsx("option",{value:"SAR",children:e("settings.currency_sar")})]})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"taxRate",children:e("settings.tax_rate")}),t.jsx(p,{id:"taxRate",name:"taxRate",type:"number",min:"0",max:"100",step:"0.01",value:r.taxRate,onChange:b})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"receiptFooter",children:e("settings.receipt_footer")}),t.jsx(p,{id:"receiptFooter",name:"receiptFooter",type:"text",value:r.receiptFooter,onChange:b,placeholder:e("settings.receipt_footer_placeholder")})]}),t.jsxs(v,{style:{marginTop:12},children:[t.jsxs(y,{children:[t.jsx(z,{}),e("settings.bank_details"),t.jsx("div",{style:{marginLeft:"auto"},children:t.jsx(A,{onClick:()=>le(s=>!s),"aria-expanded":P,title:e(P?"common.close":"common.open"),children:t.jsx(Se,{style:{transform:P?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"}})})})]}),t.jsxs("div",{style:{display:P?"block":"none"},children:[t.jsxs(c,{children:[t.jsx(l,{htmlFor:"bankName",children:e("settings.bank_name")}),t.jsx(p,{id:"bankName",name:"bankName",type:"text",value:r.bankName,onChange:b,placeholder:e("settings.bank_name_placeholder")}),t.jsx(l,{htmlFor:"bankAccountName",children:e("settings.bank_account_name")}),t.jsx(p,{id:"bankAccountName",name:"bankAccountName",type:"text",value:r.bankAccountName,onChange:b,placeholder:e("settings.bank_account_name_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"ibanNumber",children:e("settings.iban_number")}),t.jsx(p,{id:"ibanNumber",name:"ibanNumber",type:"text",value:r.ibanNumber,onChange:b,placeholder:e("settings.iban_number_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"accountNumber",children:e("settings.account_number")}),t.jsx(p,{id:"accountNumber",name:"accountNumber",type:"text",value:r.accountNumber,onChange:b,placeholder:e("settings.account_number_placeholder")})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"swiftCode",children:e("settings.swift_code")}),t.jsx(p,{id:"swiftCode",name:"swiftCode",type:"text",value:r.swiftCode,onChange:b,placeholder:e("settings.swift_code_placeholder")})]})]})]})]}),t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(z,{}),e("settings.branches")]}),t.jsx(Qe,{children:r.branches.map(s=>t.jsxs(Je,{children:[t.jsxs(Ke,{children:[t.jsx(Xe,{children:s.name}),t.jsx(Ze,{$active:s.active,children:s.active?e("settings.active"):e("settings.inactive")}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(A,{onClick:()=>me(s),title:"Edit Branch",children:t.jsx(Pe,{})}),t.jsx(A,{onClick:()=>xe(s),title:"Delete Branch",children:t.jsx(te,{})})]})]}),t.jsxs(et,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:e("settings.address")})," ",s.address]}),t.jsxs("div",{children:[t.jsx("strong",{children:e("settings.phone")})," ",s.phone]}),t.jsxs("div",{children:[t.jsx("strong",{children:"CR"})," ",s.cr||"N/A"]})]})]},s.branchid))}),t.jsxs(E,{onClick:he,children:[t.jsx(z,{}),e("settings.add_branch")]})]}),t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(se,{}),e("settings.categories")]}),t.jsxs(tt,{children:[Q&&t.jsx("div",{children:t.jsx(K,{size:36,ariaLabel:e("common.loading")})}),!Q&&r.itemCategories.map(s=>t.jsxs(st,{children:[s.name,t.jsx(A,{title:e("settings.delete_category"),onClick:()=>be(s.categoryid),children:t.jsx(te,{})})]},s.categoryid))]}),t.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:t.jsxs(E,{onClick:()=>O(!q),children:[t.jsx(se,{}),e("settings.add_category")]})}),q&&t.jsxs("div",{style:{marginTop:10},children:[t.jsxs(c,{children:[t.jsx(l,{htmlFor:"newCategory",children:e("settings.category_name")}),t.jsx(p,{id:"newCategory",name:"newCategory",placeholder:e("settings.category_placeholder"),value:I,onChange:s=>D(s.target.value)})]}),t.jsxs(re,{children:[t.jsxs(L,{onClick:ue,children:[t.jsx(B,{})," ",e("common.add")]}),t.jsx(E,{onClick:()=>{O(!1),D("")},children:e("common.cancel")})]})]})]}),t.jsx(re,{children:t.jsxs(L,{onClick:we,disabled:M,children:[t.jsx(B,{}),M?t.jsx(K,{inline:!0,size:18,ariaLabel:e("common.loading")}):e("common.save")]})})]})]})]})}),ce&&t.jsx(rt,{onClick:()=>{$(!1),N(null)},children:t.jsxs(nt,{onClick:s=>s.stopPropagation(),children:[t.jsx(at,{children:e(S?"settings.edit_branch":"settings.add_branch")}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"branchName",children:e("settings.branch_name")}),t.jsx(p,{id:"branchName",name:"branchName",value:d.name,onChange:s=>w({...d,name:s.target.value})})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"branchAddress",children:e("settings.address")}),t.jsx(p,{id:"branchAddress",name:"branchAddress",value:d.address,onChange:s=>w({...d,address:s.target.value})})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"branchPhone",children:e("settings.phone")}),t.jsx(p,{id:"branchPhone",name:"branchPhone",value:d.phone,onChange:s=>w({...d,phone:s.target.value})})]}),t.jsxs(c,{children:[t.jsx(l,{htmlFor:"branchCr",children:"CR"}),t.jsx(p,{id:"branchCr",name:"branchCr",value:d.cr,onChange:s=>w({...d,cr:s.target.value})})]}),t.jsx(c,{children:t.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx("input",{type:"checkbox",checked:d.active,onChange:s=>w({...d,active:s.target.checked})})," ",e("settings.active")]})}),t.jsxs(ot,{children:[t.jsxs(L,{onClick:()=>ge(),disabled:!1,children:[t.jsx(B,{})," ",e("common.save")]}),t.jsx(E,{onClick:()=>{$(!1),N(null)},children:e("common.cancel")})]})]})})]})};export{St as default};
