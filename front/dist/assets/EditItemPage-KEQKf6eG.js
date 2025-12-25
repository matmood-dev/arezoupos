import{r as s,j as t}from"./vendor-react-CRZW6wHZ.js";import{d as r}from"./vendor-styled-HqHy2qUa.js";import{i as I}from"./index-v5rrbpvu.js";import{u as D}from"./useCategories-CU2ihhJA.js";import{B as q}from"./Button-4LKQu1lR.js";import{z,u as H,v as R}from"./vendor-icons-DKkSWR1V.js";import{z as y}from"./vendor-toast-hkeavouR.js";import{u as T}from"./vendor-i18n-GeQ4qXZA.js";import{c as O,u as U}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-jspdf-XL3IGN3Y.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const G=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",w=r.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,C=r.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`,S=r.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: ${e=>e.theme.colors.glass};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 16px;

  &:hover {
    background: ${e=>e.theme.colors.surface};
    transform: translateX(-2px);
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
`,X=r.h1`
  color: ${e=>e.theme.colors.text};
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,N=r.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
  }
`,V=r.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`,B=r.div`
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
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`,p=r.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,g=r.input`
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
`,W=r.select`
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
`,Y=r.textarea`
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
`,J=r.div`
  margin-bottom: 16px;
  padding: 16px;
  background: ${e=>e.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
  }
`,K=r.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 12px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`,M=r.img`
  width: 100%;
  max-width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.glassBorder};

  @media (max-width: 768px) {
    max-width: 250px;
    height: 150px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    height: 120px;
  }
`,F=r.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,Q=r.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`,Z=r(q)`
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
`,ee=r(q)`
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
`,te=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: ${e=>e.theme.colors.textSecondary};
`,oe=r.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,_e=()=>{const{t:e}=T(),{id:c}=O(),j=U(),[n,E]=s.useState(null),[L,v]=s.useState(!0),[$,k]=s.useState(""),[i,l]=s.useState({name:"",description:"",price:"",category:"",stock_quantity:"",image:null}),{categories:h,loading:u}=D(),_=s.useCallback(async()=>{try{v(!0);const o=await I.getById(parseInt(c));o.success&&o.data?(E(o.data),l({name:o.data.name,description:o.data.description||"",price:o.data.price.toString(),category:o.data.category,stock_quantity:o.data.stock_quantity.toString(),image:null})):k(e("editItem.item_not_found"))}catch(o){console.error("Error fetching item:",o),k(o instanceof Error?o.message:e("editItem.load_error"))}finally{v(!1)}},[c,e]);s.useEffect(()=>{c&&_()},[c,_]),s.useEffect(()=>{if(!n||u)return;const o=h.find(a=>a.name===n.category);o&&l(a=>({...a,category:o.categoryid.toString()}))},[n,h,u]);const A=async o=>{if(o.preventDefault(),!n)return;const a=new FormData;a.append("name",i.name),a.append("description",i.description),a.append("price",i.price);const x=i.category?.toString()||"";/^\d+$/.test(x)?a.append("categoryid",x):a.append("category",x),a.append("stock_quantity",i.stock_quantity),i.image&&a.append("image",i.image);try{(await I.update(n.itemid,a)).success?(y.success(e("editItem.update_success")),j("/inventory")):y.error(e("editItem.update_error"))}catch(b){y.error(b instanceof Error?b.message:e("editItem.update_error"))}},m=o=>{const{name:a,value:x}=o.target;l({...i,[a]:x})},P=o=>{const a=o.target.files?.[0]||null;l({...i,image:a})},f=()=>{j("/inventory")};return L?t.jsx(w,{children:t.jsx(te,{children:e("editItem.loading")})}):$||!n?t.jsxs(w,{children:[t.jsx(C,{children:t.jsxs(S,{onClick:f,children:[t.jsx(z,{}),e("editItem.back_to_inventory")]})}),t.jsx(oe,{children:$||e("editItem.item_not_found")})]}):t.jsxs(w,{children:[t.jsxs(C,{children:[t.jsxs(S,{onClick:f,children:[t.jsx(z,{}),e("editItem.back_to_inventory")]}),t.jsx(X,{children:e("editItem.title")})]}),t.jsx(N,{children:t.jsxs(V,{onSubmit:A,children:[t.jsxs(B,{children:[t.jsxs(d,{children:[t.jsxs(p,{htmlFor:"name",children:[e("inventory.name")," *"]}),t.jsx(g,{id:"name",name:"name",type:"text",value:i.name,onChange:m,required:!0})]}),t.jsxs(d,{children:[t.jsxs(p,{htmlFor:"category",children:[e("inventory.category")," *"]}),t.jsxs(W,{id:"category",name:"category",value:i.category,onChange:m,required:!0,children:[t.jsx("option",{value:"",children:e("inventory.select_category")}),u?t.jsx("option",{value:"",disabled:!0,children:e("inventory.loading_categories")}):h.map(o=>t.jsx("option",{value:o.categoryid.toString(),children:o.name},o.categoryid))]})]})]}),t.jsxs(B,{children:[t.jsxs(d,{children:[t.jsxs(p,{htmlFor:"price",children:[e("inventory.price")," *"]}),t.jsx(g,{id:"price",name:"price",type:"number",step:"0.01",min:"0",value:i.price,onChange:m,required:!0})]}),t.jsxs(d,{children:[t.jsxs(p,{htmlFor:"stock_quantity",children:[e("inventory.stock")," *"]}),t.jsx(g,{id:"stock_quantity",name:"stock_quantity",type:"number",min:"0",value:i.stock_quantity,onChange:m,required:!0})]})]}),t.jsxs(d,{children:[t.jsx(p,{htmlFor:"description",children:e("inventory.description")}),t.jsx(Y,{id:"description",name:"description",value:i.description,onChange:m,rows:3})]}),t.jsxs(d,{children:[t.jsx(p,{htmlFor:"image",children:e("inventory.image")}),n.image&&t.jsxs(J,{children:[t.jsx(K,{children:e("editItem.current_image")}),t.jsx(M,{src:G(n.image),alt:n.name,onError:o=>{console.error("Current image failed to load:",n.image,o),o.target.style.display="none"}})]}),t.jsx(g,{id:"image",name:"image",type:"file",accept:"image/*",onChange:P}),i.image&&t.jsx(F,{children:e("editItem.new_image_selected",{name:i.image.name})}),!i.image&&n.image&&t.jsx(F,{children:e("editItem.keep_current_image")})]}),t.jsxs(Q,{children:[t.jsxs(Z,{type:"button",onClick:f,children:[t.jsx(H,{}),e("common.cancel")]}),t.jsxs(ee,{type:"submit",children:[t.jsx(R,{}),e("editItem.update_button")]})]})]})})]})};export{_e as default};
