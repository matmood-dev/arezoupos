import{j as o}from"./vendor-react-CRZW6wHZ.js";import{d as t}from"./vendor-styled-HqHy2qUa.js";import{B as n}from"./Button-4LKQu1lR.js";import{T as a,z as d}from"./vendor-icons-DKkSWR1V.js";import{u as c}from"./vendor-i18n-GeQ4qXZA.js";import{u as l}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";const m=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  padding: 20px;
  text-align: center;
`,p=t.h1`
  font-size: 8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.accent};
  margin: 0;
  text-shadow: ${e=>e.theme.shadows.glow};
  background: linear-gradient(45deg, ${e=>e.theme.colors.accent}, ${e=>e.theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,x=t.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${e=>e.theme.colors.text};
  margin: 20px 0;
  text-shadow: ${e=>e.theme.shadows.medium};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,h=t.p`
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textSecondary};
  margin: 20px 0 40px 0;
  max-width: 500px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`,g=t.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,u=t(n)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.large};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,f=t(n)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  background: ${e=>e.theme.colors.glass};
  border: 2px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 12px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.large};
    border-color: ${e=>e.theme.colors.accent};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,E=()=>{const e=l(),{t:r}=c(),i=()=>{e("/pos")},s=()=>{e(-1)};return o.jsxs(m,{children:[o.jsx(p,{children:"404"}),o.jsx(x,{children:r("notFound.title","Page Not Found")}),o.jsx(h,{children:r("notFound.message","The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to continue.")}),o.jsxs(g,{children:[o.jsxs(u,{onClick:i,children:[o.jsx(a,{}),r("notFound.go_home","Go to POS")]}),o.jsxs(f,{onClick:s,children:[o.jsx(d,{}),r("notFound.go_back","Go Back")]})]})]})};export{E as default};
