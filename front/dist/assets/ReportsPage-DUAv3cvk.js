const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-charts-CdjMXZq-.js","assets/vendor-react-CRZW6wHZ.js","assets/vendor-cookie-CE1G-McA.js","assets/vendor-clsx-B-dksMZM.js","assets/vendor-react-dom-eMdmkXs9.js","assets/vendor-scheduler-CWG1rEj-.js","assets/vendor-es-toolkit-CqiAyqPx.js","assets/vendor-d3-shape-D615ovhT.js","assets/vendor-d3-path-CimkQT29.js","assets/vendor-use-sync-external-store-D71NX0v1.js","assets/vendor-reselect-Cg9BXdu5.js","assets/vendor-@reduxjs-toolkit-Ce9-gWmP.js","assets/vendor-redux-BXkGT1VS.js","assets/vendor-redux-thunk-ClJT1hhx.js","assets/vendor-immer-B82CE1ke.js","assets/vendor-victory-vendor-BJmk5oAg.js","assets/vendor-d3-scale-D4oPfGQv.js","assets/vendor-internmap-BkD7Hj8s.js","assets/vendor-d3-array-g_qRI3rN.js","assets/vendor-d3-time-format-Dzsv3U5k.js","assets/vendor-d3-time-CD8iKzkK.js","assets/vendor-d3-interpolate-BPXZzoDY.js","assets/vendor-d3-color-9lF95FHy.js","assets/vendor-d3-format-CzD4bSOQ.js","assets/vendor-decimal.js-light-DQE-3iDJ.js","assets/vendor-eventemitter3-BV0whYPZ.js","assets/vendor-react-is-Rj29YxKv.js","assets/vendor-react-redux-DntFBri8.js","assets/vendor-tiny-invariant-BaFNuDhB.js"])))=>i.map(i=>d[i]);
import{_ as H}from"./vendor-jspdf-XL3IGN3Y.js";import{r as x,j as e}from"./vendor-react-CRZW6wHZ.js";import{d as a}from"./vendor-styled-HqHy2qUa.js";import{a as ne,r as T}from"./index-v5rrbpvu.js";import{j as ie,f as de,h as ce,R as le,G as xe,S as z}from"./vendor-icons-DKkSWR1V.js";import{z as p}from"./vendor-toast-hkeavouR.js";import{u as pe}from"./vendor-i18n-GeQ4qXZA.js";import{f as I,s as he}from"./vendor-datefns-BHf9bgNI.js";import{u as me}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-eMdmkXs9.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-goober-wofAfydu.js";const K=a.div``,q=a.h1`
  color: ${r=>r.theme.colors.text};
  margin-bottom: 16px;
`,G=a.div`
  background: ${r=>r.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
`,ue=a.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  border-bottom: 2px solid ${r=>r.theme.colors.glassBorder};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${r=>r.theme.colors.accent};
    border-radius: 4px;
  }
`,P=a.button`
  background: ${r=>r.$active?r.theme.colors.accent:"transparent"};
  color: ${r=>r.$active?"#fff":r.theme.colors.text};
  border: none;
  padding: 12px 24px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${r=>r.$active?r.theme.colors.accent:r.theme.colors.surface};
  }
`,X=a.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
`,Y=a.input`
  background: ${r=>r.theme.colors.surface};
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  border-radius: 8px;
  padding: 10px 12px;
  color: ${r=>r.theme.colors.text};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${r=>r.theme.colors.accent};
  }
`,M=a.button`
  background: ${r=>r.theme.colors.accent};
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${r=>r.theme.shadows.small};
  }
`,je=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,O=a.div`
  background: ${r=>r.theme.colors.surface};
  border-radius: 10px;
  padding: 16px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: ${r=>r.$clickable===!1?"default":"pointer"};
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease;

  ${r=>r.$clickable===!1?"":`&:hover {
    transform: translateY(-3px);
    box-shadow: ${r.theme.shadows.small};
    border-color: ${r.theme.colors.accent};
  }`}
`,B=a.div`
  font-size: 20px;
  font-weight: 700;
  color: ${r=>r.theme.colors.text};
`,R=a.div`
  color: ${r=>r.theme.colors.textSecondary};
`,u=a.h3`
  margin-top: 20px;
  margin-bottom: 12px;
`,A=a.div`
  background: ${r=>r.theme.colors.surface};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
`,U=a.h4`
  margin-bottom: 16px;
  color: ${r=>r.theme.colors.text};
`,L=a.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 10px 12px;
    border-bottom: 1px solid ${r=>r.theme.colors.glassBorder};
  }

  th {
    font-weight: 600;
    color: ${r=>r.theme.colors.textSecondary};
  }
`,be=a.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  
  ${r=>{const h=r.$status.toLowerCase(),d=r.theme.mode==="dark"||r.theme.colors.text==="#f8fafc";return h==="completed"?`
        background: ${d?"rgba(34, 197, 94, 0.15)":"rgba(34, 197, 94, 0.1)"};
        color: ${d?"#4ade80":"#16a34a"};
        border: 1px solid ${d?"rgba(34, 197, 94, 0.3)":"rgba(34, 197, 94, 0.2)"};
      `:h==="pending"?`
        background: ${d?"rgba(251, 146, 60, 0.15)":"rgba(251, 146, 60, 0.1)"};
        color: ${d?"#fb923c":"#ea580c"};
        border: 1px solid ${d?"rgba(251, 146, 60, 0.3)":"rgba(251, 146, 60, 0.2)"};
      `:h==="cancelled"?`
        background: ${d?"rgba(239, 68, 68, 0.15)":"rgba(239, 68, 68, 0.1)"};
        color: ${d?"#f87171":"#dc2626"};
        border: 1px solid ${d?"rgba(239, 68, 68, 0.3)":"rgba(239, 68, 68, 0.2)"};
      `:`
      background: ${d?"rgba(156, 163, 175, 0.15)":"rgba(156, 163, 175, 0.1)"};
      color: ${d?"#9ca3af":"#6b7280"};
      border: 1px solid ${d?"rgba(156, 163, 175, 0.3)":"rgba(156, 163, 175, 0.2)"};
    `}}
`,Q=a.div`
  background: ${r=>r.theme.colors.surface};
  border-radius: 10px;
  padding: 16px;
  border: 1px solid ${r=>r.theme.colors.glassBorder};
  margin-bottom: 16px;
`,j=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${r=>r.theme.colors.glassBorder};
  
  &:last-child {
    border-bottom: none;
  }
`,b=a.span`
  color: ${r=>r.theme.colors.textSecondary};
  font-size: 14px;
`,g=a.span`
  font-weight: 600;
  color: ${r=>r.$trend==="up"?"#4ade80":r.$trend==="down"?"#f87171":r.theme.colors.text};
`,Pe=()=>{const{t:r}=pe(),{canViewReports:h}=ne(),d=me(),[_,E]=x.useState("overview"),[W,f]=x.useState(!0),[V,J]=x.useState(null),[o,Z]=x.useState(null),[y,ee]=x.useState(I(he(new Date),"yyyy-MM-dd")),[k,re]=x.useState(I(new Date,"yyyy-MM-dd"));x.useEffect(()=>{h&&(async()=>{try{f(!0);const n=await T.getSummary();if(n.success)Z(n.data);else throw new Error(n.message||"Failed to load reports")}catch(n){J(n instanceof Error?n.message:"Failed to load reports")}finally{f(!1)}})()},[h]);const te=(t,n)=>{if(!t||t.length===0)return;const v=Object.keys(t[0]),C=[v.join(","),...t.map(D=>v.map(i=>D[i]).join(","))].join(`
`),c=new Blob([C],{type:"text/csv"}),w=window.URL.createObjectURL(c),m=document.createElement("a");m.href=w,m.download=`${n}_${I(new Date,"yyyy-MM-dd")}.csv`,m.click(),window.URL.revokeObjectURL(w)},se=async()=>{try{f(!0);const t=new Date(y),n=new Date(k);n.setHours(23,59,59,999);const v=t.toISOString(),C=n.toISOString(),c=await T.getOrdersByDateRange(v,C);if(!c.success){p.error(r("reports.export_error"));return}if(!c.data||c.data.length===0){p.error(r("reports.export_no_orders"));return}const w=[r("reports.export_order_number"),r("reports.export_branch"),r("reports.export_date"),r("reports.export_customer_name"),r("reports.export_total_amount"),r("reports.export_status")],m=c.data.map(l=>[l.orderid,l.branch_name||"",new Date(l.created_at).toLocaleString(),l.customer_name||r("orders.walk_in_customer"),Number(l.total_amount).toFixed(3),l.status]),D=[w.join(","),...m.map(l=>l.map(F=>`"${String(F).replace(/"/g,'""')}"`).join(","))].join(`
`),i=new Blob([D],{type:"text/csv"}),S=window.URL.createObjectURL(i),$=document.createElement("a");$.href=S,$.download=`orders_${y}_to_${k}.csv`,$.click(),window.URL.revokeObjectURL(S),p.success(r("reports.export_success"))}catch(t){console.error("Export orders failed",t),p.error(r("reports.export_error"))}finally{f(!1)}},oe=async()=>{try{f(!0);const t=new Date(y),n=new Date(k);n.setHours(23,59,59,999);const v=t.toISOString(),C=n.toISOString(),c=await T.getOrdersByDateRange(v,C);if(!c.success){p.error(r("reports.export_error"));return}if(!c.data||c.data.length===0){p.error(r("reports.export_no_orders"));return}const w=[r("reports.export_order_number"),r("reports.export_branch"),r("reports.export_date"),r("reports.export_customer_name"),r("reports.export_total_amount"),r("reports.export_status")],m=c.data.map(i=>[i.orderid,i.branch_name||"",new Date(i.created_at).toLocaleString(),i.customer_name||r("orders.walk_in_customer"),Number(i.total_amount).toFixed(3),i.status]),D=[w,...m];try{const i=(await H(async()=>{const{default:F}=await import("./vendor-xlsx-CNerDvZX.js");return{default:F}},[])).default||await H(()=>import("./vendor-xlsx-CNerDvZX.js"),[]),S=i.utils.aoa_to_sheet(D),$=i.utils.book_new();i.utils.book_append_sheet($,S,"Orders");const l=`orders_${y}_to_${k}.xlsx`;i.writeFile($,l),p.success(r("reports.export_success"))}catch(i){console.error("Excel export failed",i),p.error(r("reports.export_excel_missing"))}}catch(t){console.error("Export orders failed",t),p.error(r("reports.export_error"))}finally{f(!1)}},N=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#3b82f6"],[s,ae]=x.useState(null);return x.useEffect(()=>{let t=!0;return(async()=>{const n=await H(()=>import("./vendor-charts-CdjMXZq-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]));t&&ae(n)})(),()=>{t=!1}},[]),h?e.jsxs(K,{children:[e.jsx(q,{children:r("reports.title")}),e.jsx(G,{children:W?e.jsx("div",{children:r("reports.loading")}):V?e.jsx("div",{children:V}):e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsx(P,{$active:_==="overview",onClick:()=>E("overview"),children:r("reports.tab_overview")}),e.jsx(P,{$active:_==="sales",onClick:()=>E("sales"),children:r("reports.tab_sales")}),e.jsx(P,{$active:_==="customers",onClick:()=>E("customers"),children:r("reports.tab_customers")})]}),_==="overview"&&e.jsxs(e.Fragment,{children:[e.jsxs(je,{children:[e.jsxs(O,{onClick:()=>d("/customers"),role:"button","aria-label":r("reports.customers"),children:[e.jsx(ie,{size:28}),e.jsxs("div",{children:[e.jsx(R,{children:r("reports.customers")}),e.jsx(B,{children:o?.totals?.customers??0})]})]}),e.jsxs(O,{onClick:()=>d("/inventory"),role:"button","aria-label":r("reports.items"),children:[e.jsx(de,{size:28}),e.jsxs("div",{children:[e.jsx(R,{children:r("reports.items")}),e.jsx(B,{children:o?.totals?.items??0})]})]}),e.jsxs(O,{onClick:()=>d("/orders"),role:"button","aria-label":r("reports.orders"),children:[e.jsx(ce,{size:28}),e.jsxs("div",{children:[e.jsx(R,{children:r("reports.orders")}),e.jsx(B,{children:o?.totals?.orders??0})]})]})]}),e.jsx(u,{children:r("reports.total_revenue")}),e.jsxs(O,{$clickable:!1,children:[e.jsx(le,{size:24}),e.jsxs("div",{children:[e.jsx(R,{children:r("reports.total_revenue")}),e.jsxs(B,{children:["BHD ",Number(o?.revenue||0).toFixed(3)]})]})]}),e.jsx(u,{children:r("reports.top_selling_items")}),e.jsxs(L,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r("reports.item")}),e.jsx("th",{children:r("reports.quantity_sold")})]})}),e.jsx("tbody",{children:o?.topItems?.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.name}),e.jsx("td",{children:t.total_quantity})]},t.itemid))})]}),e.jsx(u,{children:r("reports.low_stock")}),e.jsxs(L,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r("reports.item")}),e.jsx("th",{children:r("reports.stock")})]})}),e.jsx("tbody",{children:o?.lowStock?.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.name}),e.jsx("td",{children:t.stock_quantity})]},t.itemid))})]}),e.jsx(u,{children:r("reports.recent_orders")}),e.jsxs(L,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r("reports.order")}),e.jsx("th",{children:r("reports.customer")}),e.jsx("th",{children:r("reports.amount")}),e.jsx("th",{children:r("reports.status")})]})}),e.jsx("tbody",{children:o?.recentOrders?.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.orderid}),e.jsx("td",{children:t.customer_name??r("orders.walk_in_customer")}),e.jsxs("td",{children:["BHD ",Number(t.total_amount).toFixed(3)]}),e.jsx("td",{children:e.jsx(be,{$status:t.status,children:t.status})})]},t.orderid))})]})]}),_==="sales"&&e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:[e.jsx(xe,{size:20}),e.jsx(Y,{type:"date",value:y,onChange:t=>ee(t.target.value)}),e.jsx("span",{children:r("reports.date_range_to")}),e.jsx(Y,{type:"date",value:k,onChange:t=>re(t.target.value)}),e.jsxs(M,{onClick:se,children:[e.jsx(z,{size:18}),r("reports.export_csv")]}),e.jsxs(M,{onClick:oe,children:[e.jsx(z,{size:18}),r("reports.export_excel")]})]}),e.jsxs(A,{children:[e.jsx(U,{children:r("reports.sales_trend_chart")}),s?e.jsx(s.ResponsiveContainer,{width:"100%",height:300,children:e.jsxs(s.LineChart,{data:o?.salesByDay||[],children:[e.jsx(s.CartesianGrid,{strokeDasharray:"3 3",stroke:"#374151"}),e.jsx(s.XAxis,{dataKey:"date",stroke:"#9ca3af"}),e.jsx(s.YAxis,{stroke:"#9ca3af"}),e.jsx(s.Tooltip,{contentStyle:{background:"#1f2937",border:"1px solid #374151",borderRadius:"8px"}}),e.jsx(s.Legend,{}),e.jsx(s.Line,{type:"monotone",dataKey:"total_sales",stroke:"#6366f1",strokeWidth:2,name:"Sales (BHD)"})]})}):e.jsx("div",{children:r("reports.loading_chart")})]}),e.jsxs(A,{children:[e.jsx(U,{children:r("reports.top_items_chart")}),s?e.jsx(s.ResponsiveContainer,{width:"100%",height:300,children:e.jsxs(s.BarChart,{data:o?.topItems||[],children:[e.jsx(s.CartesianGrid,{strokeDasharray:"3 3",stroke:"#374151"}),e.jsx(s.XAxis,{dataKey:"name",stroke:"#9ca3af"}),e.jsx(s.YAxis,{stroke:"#9ca3af"}),e.jsx(s.Tooltip,{contentStyle:{background:"#1f2937",border:"1px solid #374151",borderRadius:"8px"}}),e.jsx(s.Legend,{}),e.jsx(s.Bar,{dataKey:"total_quantity",fill:"#8b5cf6",name:"Quantity Sold"})]})}):e.jsx("div",{children:r("reports.loading_chart")})]}),e.jsx(u,{children:r("reports.revenue_comparison")}),e.jsxs(Q,{children:[e.jsxs(j,{children:[e.jsx(b,{children:r("reports.this_week")}),e.jsxs(g,{$trend:"up",children:["BHD ",(o?.revenue*.15||0).toFixed(3)," ↑"]})]}),e.jsxs(j,{children:[e.jsx(b,{children:r("reports.last_week")}),e.jsxs(g,{$trend:"neutral",children:["BHD ",(o?.revenue*.12||0).toFixed(3)]})]}),e.jsxs(j,{children:[e.jsx(b,{children:r("reports.this_month")}),e.jsxs(g,{$trend:"up",children:["BHD ",(o?.revenue*.6||0).toFixed(3)," ↑"]})]}),e.jsxs(j,{children:[e.jsx(b,{children:r("reports.last_month")}),e.jsxs(g,{$trend:"down",children:["BHD ",(o?.revenue*.4||0).toFixed(3)," ↓"]})]})]})]}),_==="customers"&&e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsxs(M,{onClick:()=>te(o?.recentOrders||[],"customer_orders"),children:[e.jsx(z,{size:18}),r("reports.export_customer_data")]})}),e.jsxs(A,{children:[e.jsx(U,{children:r("reports.order_status_distribution")}),s?e.jsx(s.ResponsiveContainer,{width:"100%",height:300,children:e.jsxs(s.PieChart,{children:[e.jsx(s.Pie,{data:[{name:"Completed",value:o?.recentOrders?.filter(t=>t.status==="completed").length||0},{name:"Pending",value:o?.recentOrders?.filter(t=>t.status==="pending").length||0},{name:"Cancelled",value:o?.recentOrders?.filter(t=>t.status==="cancelled").length||0}],cx:"50%",cy:"50%",labelLine:!1,label:t=>`${t.name}: ${t.value}`,outerRadius:100,fill:"#8884d8",dataKey:"value",children:[0,1,2].map(t=>e.jsx(s.Cell,{fill:N[t%N.length]},`cell-${t}`))}),e.jsx(s.Tooltip,{})]})}):e.jsx("div",{children:r("reports.loading_chart")})]}),e.jsx(u,{children:r("reports.top_customers")}),e.jsxs(L,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r("reports.customer")}),e.jsx("th",{children:r("reports.total_orders_label")}),e.jsx("th",{children:r("reports.total_spent")})]})}),e.jsx("tbody",{children:o?.recentOrders?.slice(0,5).map((t,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.customer_name??r("orders.walk_in_customer")}),e.jsx("td",{children:"1"}),e.jsxs("td",{children:["BHD ",Number(t.total_amount).toFixed(3)]})]},n))})]}),e.jsx(u,{children:r("reports.customer_metrics")}),e.jsxs(Q,{children:[e.jsxs(j,{children:[e.jsx(b,{children:r("reports.total_customers")}),e.jsx(g,{children:o?.totals?.customers??0})]}),e.jsxs(j,{children:[e.jsx(b,{children:r("reports.avg_order_value")}),e.jsxs(g,{children:["BHD ",((o?.revenue||0)/(o?.totals?.orders||1)).toFixed(3)]})]}),e.jsxs(j,{children:[e.jsx(b,{children:r("reports.orders_per_customer")}),e.jsx(g,{children:((o?.totals?.orders||0)/(o?.totals?.customers||1)).toFixed(2)})]})]})]})]})})]}):e.jsxs(K,{children:[e.jsx(q,{children:r("reports.title")}),e.jsx(G,{children:e.jsx("div",{children:r("reports.no_permission")})})]})};export{Pe as default};
