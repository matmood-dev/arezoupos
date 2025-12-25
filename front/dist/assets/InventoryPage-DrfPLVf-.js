import{r as d,a as xe,j as t}from"./vendor-react-CRZW6wHZ.js";import{u as Ue,A as Oe}from"./AdvancedSearch-kF4vunq6.js";import{d as i}from"./vendor-styled-HqHy2qUa.js";import{a as Re,i as v}from"./index-v5rrbpvu.js";import{u as He}from"./useCategories-CU2ihhJA.js";import{B as P}from"./Button-4LKQu1lR.js";import{s as Ve,t as Ye,r as We,u as L,v as _,p as R,w as me,x as Ge,y as Qe}from"./vendor-icons-DKkSWR1V.js";import{z as a}from"./vendor-toast-hkeavouR.js";import{u as Xe}from"./vendor-i18n-GeQ4qXZA.js";import{u as Je}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const he=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",Ke=i.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,Ze=i.h1`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,et=i.div`
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
`,tt=i.div`
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
`,ot=i(Ge)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,it=i(Qe)`
  color: ${e=>e.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`,rt=i.input`
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
`,nt=i.div`
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
`,st=i(P)`
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
`,at=i.div`
  display: flex;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
`,ge=i.button`
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
`,dt=i.div`
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
`,lt=i.h3`
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
`,ct=i.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,ue=i.div`
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
`,j=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`,k=i.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,B=i.input`
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
`,pt=i.select`
  padding: 12px 16px;
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: ${e=>e.theme.shadows.glow};
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`,xt=i.textarea`
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
`,mt=i.div`
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
`,fe=i(P)`
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
`,ye=i(P)`
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
`,ht=i.div``,gt=i.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`,ut=i.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,ft=i.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,yt=i.div`
  text-align: center;
  padding: 40px;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 16px;
`,bt=i.div`
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
`,wt=i.div`
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
`,vt=i.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  background: ${e=>e.theme.colors.glass};

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 100px;
    margin-bottom: 10px;
  }
`,jt=i.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-weight: 500;

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 100px;
    margin-bottom: 10px;
  }
`,kt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`,$t=i.h4`
  margin: 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`,St=i.div`
  display: flex;
  gap: 8px;
`,f=i.button`
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
`,Ct=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }
`,H=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=i.span`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`,Y=i.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  font-weight: 600;

  &.low-stock {
    color: #f59e0b;
    font-weight: 700;
    position: relative;

    &::after {
      content: '⚠️';
      margin-left: 4px;
      font-size: 12px;
    }
  }
`,zt=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,It=i.div`
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
`,_t=i.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`,Bt=i.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background: ${e=>e.theme.colors.glass};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`,Pt=i.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`,Ft=i.div`
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
`,Dt=i.div`
  flex: 1;
`,Et=i.h4`
  margin: 0 0 8px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`,Lt=i.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 15px;
  }
`,W=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,G=i.span`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`,Q=i.span`
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  font-weight: 600;

  &.low-stock {
    color: #f59e0b;
    font-weight: 700;
    position: relative;

    &::after {
      content: '⚠️';
      margin-left: 4px;
      font-size: 12px;
    }
  }
`,Mt=i.p`
  margin: 0;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
`,At=i.p`
  margin: 8px 0 0 0;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Nt=i.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`,qt=i.div`
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
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`,Tt=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Ut=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: stretch;
  }
`,Ot=i.span`
  color: ${e=>e.theme.colors.text};
  font-weight: 600;
  font-size: 14px;
`,be=i(P)`
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
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      transform: translateY(-1px);
      box-shadow: ${e.theme.shadows.medium};
    }
  `:`
    background: ${e.theme.gradients.primary};
    color: white;
    
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: ${e.theme.shadows.medium};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`,X=i.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${e=>e.theme.colors.accent};
`,Rt=i.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  color: ${e=>e.theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`,Ht=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Vt=i.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.large};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
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

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 16px;
  }
`,Yt=i.h3`
  margin: 0 0 20px 0;
  color: ${e=>e.theme.colors.text};
  font-size: 20px;
  font-weight: 600;
`,Wt=i.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`,Gt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,Qt=i.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
  }
`,M=i.button`
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

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`,J=i.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
    text-align: center;
  }
`,Xt=i.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.glass};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 6px;
    width: 100%;
    max-width: 140px;
  }
`,vo=()=>{const{t:e}=Xe(),K=Je(),{canDeleteItems:A}=Re(),[p,y]=d.useState(new Set),[we,F]=d.useState(!1),[D,N]=d.useState(""),[m,S]=d.useState([]),[s,q]=d.useState({}),[ve,Z]=d.useState(!0),[ee,te]=d.useState(""),[je,oe]=d.useState(!1),[C,E]=Ue(),[ke,ie]=d.useState(!1),[$e,Se]=d.useState(window.innerWidth<=768);d.useEffect(()=>{const o=()=>Se(window.innerWidth<=768);return window.addEventListener("resize",o),window.innerWidth<=768&&C==="list"&&E("grid"),()=>window.removeEventListener("resize",o)},[E,C]);const[c,T]=d.useState({name:"",description:"",price:"",category:"",stock_quantity:"",image:null}),{categories:re,loading:Ce}=He(),[x,b]=d.useState(1),ne=[10,20,50],[w,ze]=d.useState(ne[0]),$=d.useCallback(async()=>{try{Z(!0);const o=await v.getAll({});o.success&&o.data?S(o.data):te(e("inventory.error"))}catch(o){console.error("Error fetching items:",o),te(o instanceof Error?o.message:e("inventory.error"))}finally{Z(!1)}},[e]);d.useEffect(()=>{$()},[$]),d.useEffect(()=>{const o=()=>{$()};return window.addEventListener("inventory-updated",o),()=>window.removeEventListener("inventory-updated",o)},[$]);const U=()=>{T({name:"",description:"",price:"",category:"",stock_quantity:"",image:null}),oe(!1)},Ie=()=>{U(),oe(!0)},se=o=>{K(`/inventory/edit/${o.itemid}`)},ae=async o=>{const r=m.find(n=>n.itemid===o);r&&a(n=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete ",r.name,"?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:'This will permanently remove the item. Orders will show "Deleted Item".'}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>a.dismiss(n.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:e("common.cancel")}),t.jsx("button",{onClick:()=>{a.dismiss(n.id),Le(r)},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Delete"})]})]}),{duration:1e4,style:{background:"#fff1f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},de=o=>{y(r=>{const n=new Set(r);return n.has(o)?n.delete(o):n.add(o),n})},_e=()=>{const o=I.map(n=>n.itemid),r=o.length>0&&o.every(n=>p.has(n));y(r?n=>{const l=new Set(n);return o.forEach(h=>l.delete(h)),l}:n=>{const l=new Set(n);return o.forEach(h=>l.add(h)),l})},Be=()=>{y(new Set)},Pe=async()=>{p.size!==0&&a(o=>t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:["Delete ",p.size," item(s) permanently?"]}),t.jsx("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"12px"},children:'This will permanently remove the items. Orders will show "Deleted Item" for these items.'}),t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[t.jsx("button",{onClick:()=>a.dismiss(o.id),style:{padding:"6px 12px",border:"1px solid #d1d5db",background:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Cancel"}),t.jsx("button",{onClick:()=>{a.dismiss(o.id),Fe()},style:{padding:"6px 12px",border:"none",background:"#ef4444",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Delete"})]})]}),{duration:15e3,style:{background:"#fff1f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"16px"}})},Fe=async()=>{const o=Array.from(p),r=a.loading(`Deleting ${o.length} item(s)...`);try{const n=await Promise.allSettled(o.map(O=>v.delete(O))),l=n.filter(O=>O.status==="fulfilled").length,h=n.length-l;l>0&&a.success(`${l} item(s) deleted successfully`,{id:r}),h>0&&a.error(`${h} items failed to delete`,{id:r}),await $(),y(new Set)}catch(n){a.error("Failed to delete items",{id:r}),console.error("Bulk delete error:",n)}},De=()=>{p.size!==0&&F(!0)},Ee=async()=>{if(!D||isNaN(Number(D))){a.error("Please enter a valid stock quantity");return}const o=Array.from(p),r=a.loading(`Updating stock for ${o.length} items...`);try{const n=o.map(l=>{const h=new FormData;return h.append("stock_quantity",D),v.update(l,h)});await Promise.all(n),a.success(`Successfully updated stock for ${o.length} items`,{id:r}),await $(),y(new Set),F(!1),N("")}catch(n){a.error("Failed to update some items",{id:r}),console.error("Bulk update error:",n)}},Le=async o=>{a.promise(v.delete(o.itemid),{loading:e("inventory.deleting",{name:o.name})||"Deleting...",success:r=>{if(r.success)return S(m.filter(n=>n.itemid!==o.itemid)),e("inventory.delete_success",{name:o.name})||"Deleted successfully";throw new Error(e("inventory.delete_error")||"Failed to delete")},error:r=>r instanceof Error?r.message:e("inventory.delete_error")||"Failed to delete"})},le=async o=>{a.promise(v.unarchive(o.itemid),{loading:e("inventory.unarchiving",{name:o.name})||"Unarchiving...",success:r=>{if(r.success)return S(m.filter(n=>n.itemid!==o.itemid)),e("inventory.unarchive_success",{name:o.name})||"Unarchived successfully";throw new Error(e("inventory.unarchive_error")||"Failed to unarchive")},error:r=>r instanceof Error?r.message:e("inventory.unarchive_error")||"Failed to unarchive"})},ce=async o=>{a.promise(v.permanentDelete(o.itemid),{loading:e("inventory.permanent_deleting",{name:o.name})||"Permanently deleting...",success:r=>{if(r.success)return S(m.filter(n=>n.itemid!==o.itemid)),e("inventory.permanent_delete_success",{name:o.name})||"Permanently deleted";throw new Error(e("inventory.permanent_delete_error")||"Failed to permanently delete")},error:r=>r instanceof Error?r.message:e("inventory.permanent_delete_error")||"Failed to permanently delete"})},Me=async o=>{o.preventDefault();const r=new FormData;r.append("name",c.name),r.append("description",c.description),r.append("price",c.price);const n=c.category?.toString()||"";/^\d+$/.test(n)?r.append("categoryid",n):r.append("category",n),r.append("stock_quantity",c.stock_quantity),c.image&&r.append("image",c.image);try{const l=await v.create(r);l.success&&l.data?(S([...m,l.data]),U(),a.success(e("inventory.add_success"))):a.error(e("inventory.add_error"))}catch(l){a.error(l instanceof Error?l.message:e("inventory.add_error"))}},z=o=>{const{name:r,value:n}=o.target;T({...c,[r]:n})},Ae=o=>{const r=o.target.files?.[0]||null;T({...c,image:r})},g=xe.useMemo(()=>m.filter(o=>{if(s.search&&s.search.trim()!==""){const r=s.search.toLowerCase();if(!o.name.toLowerCase().includes(r)&&!(o.description&&o.description.toLowerCase().includes(r)))return!1}if(s.category&&s.category!==""&&(o.category||"")!==s.category)return!1;if(s.minPrice&&s.minPrice!==""){const r=Number(s.minPrice);if(Number(o.price)<r)return!1}if(s.maxPrice&&s.maxPrice!==""){const r=Number(s.maxPrice);if(Number(o.price)>r)return!1}if(s.minStock&&s.minStock!==""){const r=Number(s.minStock);if(Number(o.stock_quantity)<r)return!1}if(s.maxStock&&s.maxStock!==""){const r=Number(s.maxStock);if(Number(o.stock_quantity)>r)return!1}return!0}),[m,s]);d.useEffect(()=>{y(new Set),b(1)},[g]);const u=Math.max(1,Math.ceil(g.length/w)),I=xe.useMemo(()=>{const o=(x-1)*w;return g.slice(o,o+w)},[g,x,w]),Ne=g.length===0?0:(x-1)*w+1,qe=Math.min(x*w,g.length);d.useEffect(()=>{x>u&&b(u)},[x,u]);const pe=o=>{q(o)},Te=()=>q({});return t.jsxs(Ke,{children:[t.jsx(Ze,{children:e("inventory.title")}),t.jsxs(et,{children:[ke?t.jsx(Oe,{initialFilters:s,categories:re,onApply:pe,onClear:Te,isOpen:!0,onClose:()=>ie(!1)}):t.jsxs(tt,{onClick:()=>ie(!0),children:[t.jsx(ot,{}),t.jsx(rt,{type:"text",placeholder:e("inventory.search_placeholder","Search items..."),value:s.search||"",onChange:o=>{const r={...s,search:o.target.value};q(r),pe(r)},onClick:o=>o.stopPropagation()}),t.jsx(it,{})]}),t.jsxs(nt,{children:[!$e&&t.jsxs(at,{children:[t.jsxs(ge,{$active:C==="grid",onClick:()=>E("grid"),children:[t.jsx(Ve,{}),e("inventory.view_grid")]}),t.jsxs(ge,{$active:C==="list",onClick:()=>E("list"),children:[t.jsx(Ye,{}),e("inventory.view_list")]})]}),t.jsxs(st,{onClick:Ie,children:[t.jsx(We,{}),e("inventory.add_item")]})]}),je&&t.jsxs(dt,{children:[t.jsx(lt,{children:e("inventory.add_item")}),t.jsxs(ct,{onSubmit:Me,children:[t.jsxs(ue,{children:[t.jsxs(j,{children:[t.jsxs(k,{htmlFor:"name",children:[e("inventory.name")," *"]}),t.jsx(B,{id:"name",name:"name",type:"text",value:c.name,onChange:z,required:!0})]}),t.jsxs(j,{children:[t.jsxs(k,{htmlFor:"category",children:[e("inventory.category")," *"]}),t.jsxs(pt,{id:"category",name:"category",value:c.category,onChange:z,required:!0,children:[t.jsx("option",{value:"",children:e("inventory.select_category")}),Ce?t.jsx("option",{value:"",disabled:!0,children:e("inventory.loading_categories")}):re.map(o=>t.jsx("option",{value:o.categoryid.toString(),children:o.name},o.categoryid))]})]})]}),t.jsxs(ue,{children:[t.jsxs(j,{children:[t.jsxs(k,{htmlFor:"price",children:[e("inventory.price")," *"]}),t.jsx(B,{id:"price",name:"price",type:"number",step:"0.01",min:"0",value:c.price,onChange:z,required:!0})]}),t.jsxs(j,{children:[t.jsxs(k,{htmlFor:"stock_quantity",children:[e("inventory.stock")," *"]}),t.jsx(B,{id:"stock_quantity",name:"stock_quantity",type:"number",min:"0",value:c.stock_quantity,onChange:z,required:!0})]})]}),t.jsxs(j,{children:[t.jsx(k,{htmlFor:"description",children:e("inventory.description")}),t.jsx(xt,{id:"description",name:"description",value:c.description,onChange:z,rows:3})]}),t.jsxs(j,{children:[t.jsx(k,{htmlFor:"image",children:e("inventory.image")}),t.jsx(B,{id:"image",name:"image",type:"file",accept:"image/*",onChange:Ae}),c.image&&t.jsx("div",{style:{marginTop:"8px",fontSize:"14px",color:"#64748b"},children:e("inventory.image_selected",{name:c.image.name})})]}),t.jsxs(mt,{children:[t.jsxs(fe,{type:"button",onClick:U,children:[t.jsx(L,{}),e("common.cancel")]}),t.jsxs(ye,{type:"submit",children:[t.jsx(_,{}),e("inventory.add_item")]})]})]})]}),p.size>0&&t.jsxs(qt,{children:[t.jsxs(Tt,{children:[t.jsxs(Ot,{children:[p.size," ",e("inventory.selected")||"item(s) selected"]}),t.jsx(P,{onClick:Be,style:{padding:"6px 12px",fontSize:"13px"},children:e("inventory.clear_selection")||"Clear Selection"})]}),t.jsxs(Ut,{children:[t.jsxs(be,{onClick:De,children:[t.jsx(_,{}),e("inventory.update_stock")||"Update Stock"]}),A&&t.jsxs(be,{$variant:"danger",onClick:Pe,children:[t.jsx(R,{}),"Delete Selected"]})]})]}),t.jsxs(ht,{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[t.jsx(gt,{style:{margin:0},children:e("inventory.current_inventory",{count:g.length})}),m.length>0&&t.jsxs(Rt,{children:[t.jsx(X,{type:"checkbox",checked:I.length>0&&I.every(o=>p.has(o.itemid)),onChange:_e}),e("inventory.select_all")]})]}),ve?t.jsx(ut,{children:e("inventory.loading")}):ee?t.jsx(ft,{children:ee}):m.length===0?t.jsx(yt,{children:e("inventory.no_items")}):C==="grid"?t.jsx(bt,{children:I.map(o=>t.jsxs(wt,{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"},children:[t.jsx(X,{type:"checkbox",checked:p.has(o.itemid),onChange:()=>de(o.itemid),onClick:r=>r.stopPropagation()}),t.jsxs(St,{children:[t.jsx(f,{onClick:()=>se(o),title:e("common.edit"),children:t.jsx(me,{})}),A&&t.jsx(t.Fragment,{children:o.active?t.jsx(f,{onClick:()=>ae(o.itemid),title:e("inventory.archive"),children:t.jsx(R,{})}):t.jsxs(t.Fragment,{children:[t.jsx(f,{onClick:()=>le(o),title:e("inventory.unarchive"),children:t.jsx(_,{})}),t.jsx(f,{onClick:()=>ce(o),title:e("inventory.permanent_delete"),style:{color:"#ef4444"},children:t.jsx(L,{})})]})})]})]}),o.image?t.jsx(vt,{src:he(o.image),alt:o.name,onError:r=>{console.error("Image failed to load:",o.image,r),r.target.style.display="none"}}):t.jsx(jt,{children:e("pos.no_image")}),t.jsx(kt,{children:t.jsx($t,{children:o.name})}),t.jsxs(Ct,{children:[t.jsxs(H,{children:[t.jsxs(V,{children:[e("inventory.price"),":"]}),t.jsxs(Y,{children:["BHD ",Number(o.price).toFixed(3)]})]}),t.jsxs(H,{children:[t.jsxs(V,{children:[e("inventory.stock"),":"]}),t.jsx(Y,{className:o.stock_quantity<10?"low-stock":"",children:o.stock_quantity})]}),t.jsxs(H,{children:[t.jsxs(V,{children:[e("inventory.category"),":"]}),t.jsx(Y,{children:o.category})]})]}),o.description&&t.jsx(Mt,{children:o.description})]},o.itemid))}):t.jsx(zt,{children:I.map(o=>t.jsx(It,{children:t.jsxs(_t,{children:[t.jsx(X,{type:"checkbox",checked:p.has(o.itemid),onChange:()=>de(o.itemid),onClick:r=>r.stopPropagation()}),o.image?t.jsx(Bt,{src:he(o.image),alt:o.name,onError:r=>{console.error("Image failed to load:",o.image,r),r.target.style.display="none"}}):t.jsx(Pt,{children:e("pos.no_image")}),t.jsxs(Ft,{children:[t.jsxs(Dt,{children:[t.jsx(Et,{children:o.name}),t.jsxs(Lt,{children:[t.jsxs(W,{children:[t.jsxs(G,{children:[e("inventory.price"),":"]}),t.jsxs(Q,{children:["BHD ",Number(o.price).toFixed(3)]})]}),t.jsxs(W,{children:[t.jsxs(G,{children:[e("inventory.stock"),":"]}),t.jsx(Q,{className:o.stock_quantity<10?"low-stock":"",children:o.stock_quantity})]}),t.jsxs(W,{children:[t.jsxs(G,{children:[e("inventory.category"),":"]}),t.jsx(Q,{children:o.category})]})]}),o.description&&t.jsx(At,{children:o.description})]}),t.jsxs(Nt,{children:[t.jsx(f,{onClick:()=>se(o),title:e("common.edit"),children:t.jsx(me,{})}),A&&t.jsx(t.Fragment,{children:o.active?t.jsx(f,{onClick:()=>ae(o.itemid),title:e("inventory.archive"),children:t.jsx(R,{})}):t.jsxs(t.Fragment,{children:[t.jsx(f,{onClick:()=>le(o),title:e("inventory.unarchive"),children:t.jsx(_,{})}),t.jsx(f,{onClick:()=>ce(o),title:e("inventory.permanent_delete"),style:{color:"#ef4444"},children:t.jsx(L,{})})]})})]})]})]})},o.itemid))}),t.jsxs(Gt,{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Xt,{value:w,onChange:o=>{ze(Number(o.target.value)),b(1)},children:ne.map(o=>t.jsx("option",{value:o,children:o},o))}),t.jsx(J,{style:{marginLeft:8},children:"Items per page"}),t.jsx(J,{style:{marginLeft:12},children:`Showing ${Ne}–${qe} of ${g.length} items`})]}),t.jsxs(Qt,{children:[t.jsx(M,{onClick:()=>b(1),disabled:x===1,children:"«"}),t.jsx(M,{onClick:()=>b(o=>Math.max(1,o-1)),disabled:x===1,children:"Prev"}),t.jsx(J,{children:`Page ${x} of ${u}`}),t.jsx(M,{onClick:()=>b(o=>Math.min(u,o+1)),disabled:x===u,children:"Next"}),t.jsx(M,{onClick:()=>b(u),disabled:x===u,children:"»"})]})]})]}),we&&t.jsx(Ht,{onClick:()=>F(!1),children:t.jsxs(Vt,{onClick:o=>o.stopPropagation(),children:[t.jsxs(Yt,{children:["Update Stock for ",p.size," Items"]}),t.jsxs(j,{children:[t.jsx(k,{children:"New Stock Quantity"}),t.jsx(B,{type:"number",value:D,onChange:o=>N(o.target.value),placeholder:"Enter stock quantity",min:"0"})]}),t.jsxs(Wt,{children:[t.jsxs(fe,{onClick:()=>{F(!1),N("")},children:[t.jsx(L,{}),e("common.cancel")]}),t.jsxs(ye,{onClick:Ee,children:[t.jsx(_,{}),e("inventory.update_stock")||"Update Stock"]})]})]})})]})]})};export{vo as default};
