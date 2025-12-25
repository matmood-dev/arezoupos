import{r as n,a as K,j as t}from"./vendor-react-CRZW6wHZ.js";import{u as ke,A as Ce}from"./AdvancedSearch-kF4vunq6.js";import{d as o}from"./vendor-styled-HqHy2qUa.js";import{a as Se,c as C}from"./index-v5rrbpvu.js";import{B as v}from"./Button-4LKQu1lR.js";import{s as ze,t as Be,r as De,u as Le,v as Pe,p as _,w as Q,A as Ie,B as Fe,C as Z,x as Ee,y as Me}from"./vendor-icons-DKkSWR1V.js";import{z as d}from"./vendor-toast-hkeavouR.js";import{u as _e}from"./vendor-i18n-GeQ4qXZA.js";import{u as Ae}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const Oe=o.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,Te=o.h1`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,He=o.div`
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`,Re=o.div`
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
`,Ye=o(Ee)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Ve=o(Me)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`,We=o.input`
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
`,Ne=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    margin-bottom: 20px;
    padding: 12px 0;
  }
`,Ge=o(v)`
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

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.large};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,qe=o.div`
  display: flex;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`,ee=o.button`
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

  &:hover {
    background: ${e=>e.$active?e.theme.gradients.primary:e.theme.colors.surface};
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
`,Ue=o.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  box-shadow: ${e=>e.theme.shadows.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.accent});
  }

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
  }
`,Xe=o.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`,Je=o.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,te=o.div`
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
`,S=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`,z=o.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,A=o.input`
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
`,Ke=o.textarea`
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
`,Qe=o.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin-top: 20px;
    padding-top: 16px;
  }
`,Ze=o(v)`
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
`,et=o(v)`
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
`,tt=o.div``,st=o.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`,ot=o.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,rt=o.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,it=o.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,at=o.div`
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

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`,nt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,dt=o.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,lt=o.span`
  color: ${e=>e.theme.colors.text};
  font-weight: 600;
  font-size: 14px;
`,ct=o(v)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${e=>e.$variant==="danger"?`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    &:hover:not(:disabled) { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); transform: translateY(-1px); box-shadow: ${e.theme.shadows.medium}; }
  `:`
    background: ${e.theme.gradients.primary};
    color: white;
    &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: ${e.theme.shadows.medium}; }
  `}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
  svg { width: 16px; height: 16px; }
  @media (max-width: 768px) { flex: 1; justify-content: center; }
`,O=o.input`
  width: 18px; height: 18px; cursor: pointer; accent-color: ${e=>e.theme.colors.accent};
`,pt=o.label`
  display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; color: ${e=>e.theme.colors.text}; font-size: 14px; font-weight: 500;
`,xt=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`,mt=o.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${e=>e.theme.colors.accent}, ${e=>e.theme.colors.primary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.large};
    border-color: ${e=>e.theme.colors.accent}40;

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`,ht=o.div`
  display: flex;
  gap: 8px;
`,B=o.button`
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

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(1):hover {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  &:nth-child(2):hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${e=>e.theme.colors.textSecondary};

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`,gt=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`,se=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,oe=o.div`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,re=o.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  word-break: break-word;
`,ut=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,ft=o.div`
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
`,wt=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }
`,D=o.button`
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
`,T=o.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,bt=o.select`
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
`,jt=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }
`,yt=o.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${e=>e.theme.colors.accent}, ${e=>e.theme.colors.primary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.medium};
    border-color: ${e=>e.theme.colors.accent}40;

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-1px);
    }
  }
`,vt=o.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`,$t=o.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`,kt=o.div`
  flex: 1;
`,ie=o.h3`
  margin: 0 0 12px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`,Ct=o.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 15px;
  }
`,ae=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,ne=o.span`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`,de=o.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`,St=o.p`
  margin: 0;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`,zt=o.p`
  margin: 8px 0 0 0;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Bt=o.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`,Kt=()=>{const{t:e}=_e(),le=Ae(),{canDeleteCustomers:L}=Se(),[u,P]=n.useState([]),[ce,H]=n.useState(!0),[R,Y]=n.useState(""),[pe,V]=n.useState(!1),[c,f]=n.useState(new Set),[j,$]=ke(),[a,I]=n.useState({}),[xe,W]=n.useState(!1),[p,N]=n.useState({name:"",email:"",phone:"",address:""}),F=n.useCallback(async()=>{try{H(!0);const s=await C.getAll({});s.success&&s.data?P(s.data):Y(e("customers.error"))}catch(s){Y(s instanceof Error?s.message:e("customers.error"))}finally{H(!1)}},[e]);n.useEffect(()=>{F()},[F]),n.useEffect(()=>{const s=()=>{window.innerWidth<=768&&j==="list"&&$("grid")};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[j,$]);const E=()=>{N({name:"",email:"",phone:"",address:""}),V(!1)},me=()=>{E(),V(!0)},G=s=>{f(i=>{const r=new Set(i);return r.has(s)?r.delete(s):r.add(s),r})},he=()=>{const s=y.map(r=>r.customerid),i=s.length>0&&s.every(r=>c.has(r));f(i?r=>{const m=new Set(r);return s.forEach(b=>m.delete(b)),m}:r=>{const m=new Set(r);return s.forEach(b=>m.add(b)),m})},q=s=>I(s),ge=()=>I({}),x=K.useMemo(()=>u.filter(s=>{if(a.search&&a.search.trim()!==""){const i=a.search.toLowerCase();if(!s.name.toLowerCase().includes(i)&&!(s.address&&s.address.toLowerCase().includes(i)))return!1}if(a.email&&a.email.trim()!==""&&(!s.email||!s.email.toLowerCase().includes(a.email.toLowerCase()))||a.phone&&a.phone.trim()!==""&&(!s.phone||!s.phone.includes(a.phone))||a.address&&a.address.trim()!==""&&(!s.address||!s.address.toLowerCase().includes(a.address.toLowerCase())))return!1;if(a.startDate&&a.startDate!==""){const i=new Date(a.startDate);if(new Date(s.created_at)<i)return!1}if(a.endDate&&a.endDate!==""){const i=new Date(a.endDate);if(new Date(s.created_at)>i)return!1}return!0}),[u,a]);n.useEffect(()=>{f(new Set)},[x]);const[l,w]=n.useState(1),U=[10,20,50],[g,ue]=n.useState(U[0]),h=Math.max(1,Math.ceil(x.length/g)),y=K.useMemo(()=>{const s=(l-1)*g;return x.slice(s,s+g)},[x,l,g]),fe=x.length===0?0:(l-1)*g+1,we=Math.min(l*g,x.length);n.useEffect(()=>{l>h&&w(h)},[l,h]);const be=()=>f(new Set),je=async()=>{c.size!==0&&d(s=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete ",c.size," customer(s) permanently?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:'This will permanently remove the customers. Orders will show "Deleted Customer" for these customers.'}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>d.dismiss(s.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:()=>{d.dismiss(s.id),ye()},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Delete"})]})]}),{duration:15e3,style:{background:"#fff1f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},ye=async()=>{const s=Array.from(c),i=d.loading(`Deleting ${s.length} customers...`);try{const r=await Promise.allSettled(s.map(M=>C.delete(M))),m=r.filter(M=>M.status==="fulfilled").length,b=r.length-m;m>0&&d.success(`${m} customer(s) deleted successfully`,{id:i}),b>0&&d.error(`${b} customers failed to delete`,{id:i}),await F(),f(new Set)}catch(r){d.error("Failed to delete customers",{id:i}),console.error("Bulk delete customers error:",r)}},X=s=>{le(`/customers/edit/${s.customerid}`)},J=async s=>{const i=u.find(r=>r.customerid===s);i&&d(r=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete ",i.name,"?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:'This will permanently remove the customer. Orders will show "Deleted Customer".'}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>d.dismiss(r.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:()=>{d.dismiss(r.id),ve(i)},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Delete"})]})]}),{duration:1e4,style:{background:"#fff1f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},ve=async s=>{d.promise(C.delete(s.customerid),{loading:e("customers.deleting",{name:s.name})||"Deleting...",success:i=>{if(i.success)return P(u.filter(r=>r.customerid!==s.customerid)),e("customers.delete_success",{name:s.name})||"Deleted successfully";throw new Error(e("customers.delete_error")||"Failed to delete")},error:i=>i instanceof Error?i.message:e("customers.delete_error")||"Failed to delete"})},$e=async s=>{s.preventDefault();const i={name:p.name,email:p.email||void 0,phone:p.phone,address:p.address||void 0};try{d.promise(C.create(i),{loading:e("customers.creating"),success:r=>{if(r.success&&r.data)return P([...u,r.data]),E(),e("customers.create_success",{name:r.data.name});throw new Error(e("customers.create_error"))},error:r=>r instanceof Error?r.message:e("customers.create_error")})}catch(r){console.error("Unexpected error:",r)}},k=s=>{N({...p,[s.target.name]:s.target.value})};return t.jsxs(Oe,{children:[t.jsx(Te,{children:e("customers.title")}),t.jsxs(He,{children:[xe?t.jsx(Ce,{initialFilters:a,categories:[],onApply:q,onClear:ge,isOpen:!0,onClose:()=>W(!1),variant:"customers"}):t.jsxs(Re,{onClick:()=>W(!0),children:[t.jsx(Ye,{}),t.jsx(We,{type:"text",placeholder:e("customers.search_placeholder","Search customers..."),value:a.search||"",onChange:s=>{const i={...a,search:s.target.value};I(i),q(i)},onClick:s=>s.stopPropagation()}),t.jsx(Ve,{})]}),t.jsxs(Ne,{children:[t.jsxs(qe,{children:[t.jsxs(ee,{$active:j==="grid",onClick:()=>$("grid"),children:[t.jsx(ze,{}),e("customers.view_grid")]}),t.jsxs(ee,{$active:j==="list",onClick:()=>$("list"),children:[t.jsx(Be,{}),e("customers.view_list")]})]}),t.jsxs(Ge,{onClick:me,children:[t.jsx(De,{}),e("customers.add_customer")]})]}),pe&&t.jsxs(Ue,{children:[t.jsx(Xe,{children:e("customers.add_customer")}),t.jsxs(Je,{onSubmit:$e,children:[t.jsxs(te,{children:[t.jsxs(S,{children:[t.jsxs(z,{htmlFor:"name",children:[e("customers.name")," *"]}),t.jsx(A,{id:"name",name:"name",type:"text",value:p.name,onChange:k,required:!0})]}),t.jsxs(S,{children:[t.jsxs(z,{htmlFor:"phone",children:[e("customers.phone")," *"]}),t.jsx(A,{id:"phone",name:"phone",type:"tel",value:p.phone,onChange:k,required:!0})]})]}),t.jsx(te,{children:t.jsxs(S,{children:[t.jsx(z,{htmlFor:"email",children:e("customers.email")}),t.jsx(A,{id:"email",name:"email",type:"email",value:p.email,onChange:k,placeholder:e("customers.email_placeholder")})]})}),t.jsxs(S,{children:[t.jsx(z,{htmlFor:"address",children:e("customers.address")}),t.jsx(Ke,{id:"address",name:"address",value:p.address,onChange:k,rows:3,placeholder:e("customers.address_placeholder")})]}),t.jsxs(Qe,{children:[t.jsxs(Ze,{type:"button",onClick:E,children:[t.jsx(Le,{}),e("common.cancel")]}),t.jsxs(et,{type:"submit",children:[t.jsx(Pe,{}),e("customers.add_customer")]})]})]})]}),t.jsxs(tt,{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[t.jsx(st,{style:{margin:0},children:e("customers.customer_list",{count:x.length})}),x.length>0&&t.jsxs(pt,{children:[t.jsx(O,{type:"checkbox",checked:c.size===y.length&&y.length>0,onChange:he}),e("customers.select_all")]})]}),c.size>0&&t.jsxs(at,{children:[t.jsxs(nt,{children:[t.jsxs(lt,{children:[c.size," ",e("customers.selected")||"customers(s) selected"]}),t.jsx(v,{onClick:be,style:{padding:"6px 12px",fontSize:"13px"},children:e("inventory.clear_selection")||"Clear Selection"})]}),t.jsx(dt,{children:L&&t.jsxs(ct,{$variant:"danger",onClick:je,children:[t.jsx(_,{})," Delete Selected"]})})]}),ce?t.jsx(ot,{children:e("customers.loading")}):R?t.jsx(rt,{children:R}):u.length===0?t.jsx(it,{children:e("customers.no_customers")}):j==="grid"?t.jsx(xt,{children:y.map(s=>t.jsxs(mt,{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"15px"},children:[t.jsx(O,{type:"checkbox",checked:c.has(s.customerid),onChange:()=>G(s.customerid),onClick:i=>i.stopPropagation()}),t.jsxs(ht,{children:[t.jsx(B,{onClick:()=>X(s),title:e("common.edit"),children:t.jsx(Q,{})}),L&&t.jsx(B,{onClick:()=>J(s.customerid),title:e("common.delete"),children:t.jsx(_,{})})]})]}),t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(ie,{children:s.name})}),t.jsxs(gt,{children:[t.jsxs(se,{children:[t.jsx(oe,{children:t.jsx(Ie,{})}),t.jsx(re,{children:s.phone})]}),s.email&&t.jsxs(se,{children:[t.jsx(oe,{children:t.jsx(Fe,{})}),t.jsx(re,{children:s.email})]})]}),s.address&&t.jsxs(St,{children:[t.jsx(Z,{}),s.address]})]},s.customerid))}):t.jsx(t.Fragment,{children:t.jsx(ut,{children:y.map(s=>t.jsx(yt,{children:t.jsxs(vt,{children:[t.jsx(O,{type:"checkbox",checked:c.has(s.customerid),onChange:()=>G(s.customerid),onClick:i=>i.stopPropagation(),style:{marginRight:"12px"}}),t.jsxs($t,{children:[t.jsxs(kt,{children:[t.jsx(ie,{children:s.name}),t.jsxs(Ct,{children:[t.jsxs(ae,{children:[t.jsx(ne,{children:e("customers.phone_label")}),t.jsx(de,{children:s.phone})]}),s.email&&t.jsxs(ae,{children:[t.jsx(ne,{children:e("customers.email_label")}),t.jsx(de,{children:s.email})]})]}),s.address&&t.jsxs(zt,{children:[t.jsx(Z,{}),s.address]})]}),t.jsxs(Bt,{children:[t.jsx(B,{onClick:()=>X(s),title:e("common.edit"),children:t.jsx(Q,{})}),L&&t.jsx(B,{onClick:()=>J(s.customerid),title:e("common.delete"),children:t.jsx(_,{})})]})]})]})},s.customerid))})}),t.jsxs(ft,{children:[t.jsxs(jt,{children:[t.jsx(bt,{value:g,onChange:s=>{ue(Number(s.target.value)),w(1)},children:U.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(T,{style:{marginLeft:8},children:"Items per page"}),t.jsx(T,{style:{marginLeft:12},children:`Showing ${fe}–${we} of ${x.length} customers`})]}),t.jsxs(wt,{children:[t.jsx(D,{onClick:()=>w(1),disabled:l===1,children:"«"}),t.jsx(D,{onClick:()=>w(s=>Math.max(1,s-1)),disabled:l===1,children:"Prev"}),t.jsx(T,{children:`Page ${l} of ${h}`}),t.jsx(D,{onClick:()=>w(s=>Math.min(h,s+1)),disabled:l===h,children:"Next"}),t.jsx(D,{onClick:()=>w(h),disabled:l===h,children:"»"})]})]})]})]})]})};export{Kt as default};
