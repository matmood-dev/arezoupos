import{r as p,j as e}from"./vendor-react-CRZW6wHZ.js";import{d as c}from"./vendor-styled-HqHy2qUa.js";import{u as f,x as _,G as I}from"./vendor-icons-DKkSWR1V.js";import{B as w}from"./Button-4LKQu1lR.js";import{u as M}from"./vendor-i18n-GeQ4qXZA.js";const A="view-mode";function F(r=A){const[x,u]=p.useState(()=>{const l=localStorage.getItem(r);return l==="list"||l==="grid"?l:"list"});return p.useEffect(()=>{localStorage.setItem(r,x)},[r,x]),p.useEffect(()=>{const l=h=>{h.key===r&&(h.newValue==="list"||h.newValue==="grid")&&u(h.newValue)};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)},[r]),[x,u]}const E=c.div`
  background: ${r=>r.theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  width: 100%;
  @media (max-width: 768px) {
    display: ${r=>r.$isOpen?"grid":"none"};
    position: fixed;
    left: 12px;
    right: 12px;
    top: 76px; /* below header */
    z-index: 1200;
    max-height: calc(100vh - 100px);
    overflow: auto;
    padding: 16px;
    box-shadow: ${r=>r.theme.shadows.large};
    border-radius: 12px;
    background: ${r=>r.theme.colors.surface2};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,s=c.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,o=c.label`
  font-size: 12px;
  color: ${r=>r.theme.colors.textSecondary};
`,d=c.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  background: ${r=>r.theme.colors.glass};
  color: ${r=>r.theme.colors.text};

  /* Space for our calendar icon */
  &[type='date'] {
    padding-right: 40px;
  }

  /* Hide native calendar indicator but keep it functional */
  &[type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &[type='date']::-moz-calendar-picker-indicator {
    color: transparent;
    cursor: pointer;
  }
`,b=c.div`
  position: relative;
  display: flex;
  align-items: center;

  input { width: 100%; }
`,y=c(I)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${r=>r.theme.colors.textSecondary};
  width: 18px;
  height: 18px;
  pointer-events: none;
`,j=c.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  background: ${r=>r.theme.colors.glass};
  color: ${r=>r.theme.colors.text};
`,C=c(w)`
  background: transparent;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  color: ${r=>r.theme.colors.textSecondary};

  &:hover:not(:disabled) {
    background: ${r=>r.theme.colors.glass};
    transform: none;
    box-shadow: none;
  }
`,H=c.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 10px;
    button {
      width: 100%;
    }
  }
`;function z({categories:r=[],branches:x=[],onApply:u,onClear:l,initialFilters:h,isOpen:S=!0,onClose:v,variant:m="inventory"}){const{t:i}=M(),[t,g]=p.useState({}),n=(a,D)=>{g(B=>({...B,[a]:D}))},$=()=>u(t),k=()=>{g({}),l&&l()};return p.useEffect(()=>{h&&g(h)},[h]),e.jsxs(E,{$isOpen:S,children:[e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.search")||"Search"}),e.jsx(d,{value:t.search??"",onChange:a=>n("search",a.target.value),placeholder:"Search by name or description"})]}),m==="inventory"&&e.jsxs(s,{children:[e.jsx(o,{children:"Category"}),e.jsxs(j,{value:t.category??"",onChange:a=>n("category",a.target.value),children:[e.jsx("option",{value:"",children:"All categories"}),r.map(a=>e.jsx("option",{value:a.name,children:a.name},a.categoryid))]})]}),m==="inventory"&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Min Price (BHD)"}),e.jsx(d,{type:"number",min:"0",step:"0.001",value:t.minPrice??"",onChange:a=>n("minPrice",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Max Price (BHD)"}),e.jsx(d,{type:"number",min:"0",step:"0.001",value:t.maxPrice??"",onChange:a=>n("maxPrice",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Min Stock"}),e.jsx(d,{type:"number",min:"0",step:"1",value:t.minStock??"",onChange:a=>n("minStock",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Max Stock"}),e.jsx(d,{type:"number",min:"0",step:"1",value:t.maxStock??"",onChange:a=>n("maxStock",a.target.value)})]})]}),m==="customers"&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.email")}),e.jsx(d,{value:t.email??"",onChange:a=>n("email",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.phone")}),e.jsx(d,{value:t.phone??"",onChange:a=>n("phone",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.address")}),e.jsx(d,{value:t.address??"",onChange:a=>n("address",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.created_after")}),e.jsx(d,{type:"date",value:t.startDate??"",onChange:a=>n("startDate",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:i("advanced_search.created_before")}),e.jsx(d,{type:"date",value:t.endDate??"",onChange:a=>n("endDate",a.target.value)})]})]}),m==="orders"&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Order ID or Customer Name"}),e.jsx(d,{value:t.orderId??t.customerName??"",onChange:a=>{n("orderId",a.target.value),n("customerName",a.target.value)},placeholder:"Order # or customer"})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Status"}),e.jsxs(j,{value:t.status??"",onChange:a=>n("status",a.target.value),children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"completed",children:"Completed"}),e.jsx("option",{value:"cancelled",children:"Cancelled"})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Branch"}),e.jsxs(j,{value:t.branchId??"",onChange:a=>n("branchId",a.target.value),children:[e.jsx("option",{value:"",children:"All Branches"}),x.map(a=>e.jsx("option",{value:a.branchid,children:a.name},a.branchid))]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Min Total (BHD)"}),e.jsx(d,{type:"number",min:"0",step:"0.001",value:t.minTotal??"",onChange:a=>n("minTotal",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Max Total (BHD)"}),e.jsx(d,{type:"number",min:"0",step:"0.001",value:t.maxTotal??"",onChange:a=>n("maxTotal",a.target.value)})]}),e.jsxs(s,{children:[e.jsx(o,{children:"From Date"}),e.jsxs(b,{children:[e.jsx(d,{type:"date",value:t.startDate??"",onChange:a=>n("startDate",a.target.value)}),e.jsx(y,{"aria-hidden":!0})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"To Date"}),e.jsxs(b,{children:[e.jsx(d,{type:"date",value:t.endDate??"",onChange:a=>n("endDate",a.target.value)}),e.jsx(y,{"aria-hidden":!0})]})]})]}),e.jsxs(H,{children:[v&&e.jsxs(C,{onClick:v,children:[e.jsx(f,{})," ",i("advanced_search.close")]}),e.jsxs(C,{onClick:k,children:[e.jsx(f,{})," ",i("advanced_search.clear_filters")]}),e.jsxs(w,{onClick:$,children:[e.jsx(_,{})," ",i("advanced_search.apply_filters")]})]})]})}export{z as A,F as u};
