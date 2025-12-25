const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-oRfUFRIq.js","assets/vendor-react-CRZW6wHZ.js","assets/vendor-cookie-CE1G-McA.js","assets/vendor-styled-HqHy2qUa.js","assets/vendor-@emotion-unitless-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/Button-4LKQu1lR.js","assets/vendor-i18n-GeQ4qXZA.js","assets/vendor-use-sync-external-store-D71NX0v1.js","assets/vendor-react-router-DDEx4Dfx.js","assets/vendor-react-dom-eMdmkXs9.js","assets/vendor-scheduler-CWG1rEj-.js","assets/vendor-jspdf-XL3IGN3Y.js","assets/vendor-@babel-runtime-Dehwj3G0.js","assets/vendor-fflate-B2WnmEVw.js","assets/vendor-fast-png-CaYd17r8.js","assets/vendor-iobuffer-BmLRrqXH.js","assets/vendor-pako-n3Pgozwg.js","assets/vendor-toast-hkeavouR.js","assets/vendor-goober-wofAfydu.js","assets/vendor-icons-DKkSWR1V.js","assets/PosPage-DwDa_Jt6.js","assets/useCart-DRNaftD2.js","assets/CheckoutPage-D9_bgygr.js","assets/InventoryPage-DrfPLVf-.js","assets/AdvancedSearch-kF4vunq6.js","assets/useCategories-CU2ihhJA.js","assets/EditItemPage-KEQKf6eG.js","assets/CustomersPage-DtVG2Y2I.js","assets/EditCustomerPage-_mIadzXs.js","assets/OrdersPage-BP_Q9l4n.js","assets/EditOrderPage-BHBZRIh6.js","assets/ReceiptPage-ErTO-zJa.js","assets/InvoicePage-C-UiW0Ab.js","assets/QuotationPage-DsyVHt4n.js","assets/DeliveryPage-reljqvaw.js","assets/UsersPage-CEryA2gR.js","assets/EditUserPage-DOLkEEdK.js","assets/SettingsPage-DUHbxiPe.js","assets/ReportsPage-DUAv3cvk.js","assets/vendor-datefns-BHf9bgNI.js","assets/NotFoundPage-CJWzBTOq.js"])))=>i.map(i=>d[i]);
import{r as n,j as a}from"./vendor-react-CRZW6wHZ.js";import{c as W}from"./vendor-react-dom-eMdmkXs9.js";import{i as G,B as Q,a as J,u as S}from"./vendor-i18n-GeQ4qXZA.js";import{_ as x}from"./vendor-jspdf-XL3IGN3Y.js";import{z as B,F as Y}from"./vendor-toast-hkeavouR.js";import{o as X,d as p,f as Z,m as ee}from"./vendor-styled-HqHy2qUa.js";import{H as T,a as N,b as ae,c as te,d as re,e as oe,f as ne,g as se,h as ie,i as ce,j as le,k as de}from"./vendor-icons-DKkSWR1V.js";import{u as F,a as _e,B as me,R as ue,b as y,N as ge}from"./vendor-react-router-DDEx4Dfx.js";import"./vendor-cookie-CE1G-McA.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-use-sync-external-store-D71NX0v1.js";import"./vendor-@babel-runtime-Dehwj3G0.js";import"./vendor-fflate-B2WnmEVw.js";import"./vendor-fast-png-CaYd17r8.js";import"./vendor-iobuffer-BmLRrqXH.js";import"./vendor-pako-n3Pgozwg.js";import"./vendor-goober-wofAfydu.js";import"./vendor-@emotion-unitless-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=r(o);fetch(o.href,d)}})();const pe={loading:"Loading...",error:"Error",save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",search:"Search...",actions:"Actions",add:"Add",close:"Close",confirm:"Confirm",yes:"Yes",no:"No",back:"Back",next:"Next",submit:"Submit",update:"Update",create:"Create"},he={menu:"Menu",pos:"Point of Sale",inventory:"Inventory",customers:"Customers",orders:"Orders",reports:"Reports",users:"Users",settings:"Settings",expand:"Expand Sidebar",collapse:"Collapse Sidebar"},be={title:"Welcome Back",subtitle:"Sign in to your account",username:"Username",password:"Password",username_placeholder:"Enter your username",password_placeholder:"Enter your password",login_button:"Sign In",logging_in:"Signing in...",error:"Invalid username or password",email:"Email",email_placeholder:"Enter your email address",logout:"Logout"},fe={search_placeholder:"Search products...",all_categories:"All",loading:"Loading products...",error:"Failed to load products",no_products:"No products found",out_of_stock:"Product is out of stock",stock_limit:"Cannot add more — stock limit reached",add_error:"Failed to add item to cart",no_image:"No Image",out_of_stock_label:"Out of Stock",in_stock:"{{count}} in stock",current_order:"Current Order",empty_cart:"Your cart is empty",empty_cart_sub:"Select products to start an order",increase_error:"Cannot increase quantity",total:"Total",checkout:"Proceed to Checkout",clear_cart:"Clear All",clear_cart_confirm_title:"Clear cart?",clear_cart_confirm_message:"Are you sure you want to remove all items from the cart?",clear_success:"Cart cleared",stock_limit_error:"Cannot add more than {{count}} items. Only {{count}} in stock."},ve={title:"Checkout",order_summary:"Order Summary",customer_info:"Customer Information",customer_name:"Customer Name",customer_phone:"Phone Number",customer_email:"Email",payment_method:"Payment Method",cash:"Cash",card:"Card",subtotal:"Subtotal",vat:"VAT",tax:"Tax",total:"Total",complete_order:"Complete Order",processing:"Processing...",success:"Order completed successfully!",error:"Failed to complete order",back_to_pos:"Back to POS",order_items:"Order Items",notes_label:"Order Notes",payment_method_label:"Payment Method",each:"each",remove_item:"Remove item",total_bhd:"Total: BHD",order_details:"Order Details",customer_optional:"Customer (Optional)",walk_in_customer_hint:"Walk-in Customer (will be saved)",customer_name_placeholder:"Enter customer name",phone_number_placeholder:"Enter phone number",email_optional:"Email (Optional)",email_placeholder:"Enter email address",address_optional:"Address (Optional)",address_placeholder:"Enter address",bank_transfer:"Bank Transfer",notes_optional:"Order Notes (Optional)",notes_placeholder:"Any special instructions or notes...",error_name_required:"Customer name is required for walk-in customers",error_phone_required:"Phone number is required for walk-in customers",customer_saved:'Customer "{{name}}" saved successfully!',error_save_customer:"Failed to save customer information",order_success:"Order created successfully! Order ID: {{id}}",error_create_order:"Failed to create order",select_branch:"Select Branch",branch:"Branch"},ye={title:"Inventory Management",add_item:"Add New Item",view_grid:"Grid",view_list:"List",name:"Name",category:"Category",price:"Price",stock:"Stock Quantity",description:"Description",image:"Image (Optional)",select_category:"Select category",loading_categories:"Loading categories...",image_selected:"Image selected: {{name}}",current_inventory:"Current Inventory ({{count}} items)",loading:"Loading items...",error:"Failed to load items",no_items:"No items in inventory. Add your first item!",add_success:"Item added successfully",add_error:"Failed to add item",delete_confirm_title:'Delete "{{name}}"?',delete_confirm_message:"This action cannot be undone.",deleting:"Deleting {{name}}...",delete_success:"{{name}} deleted successfully",delete_error:"Failed to delete item",archive:"Archive",archive_confirm_title:'Archive "{{name}}"?',archive_confirm_message:"This item will be hidden from inventory but can be restored later.",archiving:"Archiving {{name}}...",archive_success:"{{name}} archived successfully",archive_error:"Failed to archive item",unarchive:"Unarchive",unarchiving:"Unarchiving {{name}}...",unarchive_success:"{{name}} unarchived successfully",unarchive_error:"Failed to unarchive item",show_archived:"Archived Items",hide_archived:"Active Items",select_all:"Select All",search_placeholder:"Search items...",permanent_delete:"Delete permanently",permanent_deleting:"Deleting {{name}}...",permanent_delete_confirm_title:'Delete "{{name}}" permanently?',permanent_delete_confirm_message:"This will permanently remove the item from the database. Orders will retain a reference to this item as a deleted item.",permanent_delete_success:"{{name}} permanently deleted",permanent_delete_error:"Failed to permanently delete item",archive_selected:"Archive Selected",update_stock:"Update Stock",clear_selection:"Clear Selection",selected:"item(s) selected"},xe={title:"Edit Item",back_to_inventory:"Back to Inventory",loading:"Loading item...",item_not_found:"Item not found",load_error:"Failed to load item",current_image:"Current Image:",new_image_selected:"New image selected: {{name}}",keep_current_image:"Leave empty to keep current image",readd_button:"Re-add",category_readded:"Category re-added",category_readd_error:"Failed to re-add category",update_button:"Update Item",update_success:"Item updated successfully",update_error:"Failed to update item"},we={title:"Customer Management",add_customer:"Add New Customer",view_grid:"Grid",view_list:"List",name:"Name",phone:"Phone Number",email:"Email",address:"Address",email_placeholder:"customer@example.com",address_placeholder:"Enter customer address",customer_list:"Customer List ({{count}} customers)",loading:"Loading customers...",error:"Failed to load customers",no_customers:"No customers found. Add your first customer!",delete_confirm_title:'Delete "{{name}}"?',delete_confirm_message:"This action cannot be undone.",deleting:"Deleting {{name}}...",delete_success:"{{name}} deleted successfully",delete_error:"Failed to delete customer",creating:"Creating customer...",create_success:"{{name}} created successfully",create_error:"Failed to create customer",phone_label:"Phone:",email_label:"Email:",archive:"Archive",archive_confirm_title:'Archive "{{name}}"?',archive_confirm_message:"This customer will be hidden but can be restored later.",archiving:"Archiving {{name}}...",archive_success:"{{name}} archived successfully",archive_error:"Failed to archive customer",unarchive:"Unarchive",unarchiving:"Unarchiving {{name}}...",unarchive_success:"{{name}} unarchived successfully",unarchive_error:"Failed to unarchive customer",show_archived:"Archived Customers",hide_archived:"Active Customers",select_all:"Select All",search_placeholder:"Search customers...",archive_selected:"Archive Selected",archive_selected_confirm_title:"Archive {{count}} customer(s)?",archive_selected_confirm_message:"This will move the selected customers to the archive. You can restore them later.",no_active_selected:"No active customers selected to archive",archive_bulk_success:"Successfully archived {{count}} customer(s)",archive_bulk_error:"Failed to archive some customers",permanent_delete:"Delete permanently",permanent_delete_confirm_title:'Delete "{{name}}" permanently?',permanent_delete_confirm_message:"This will permanently remove the customer. Orders will retain a reference to this customer as a deleted customer.",permanent_delete_success:"{{name}} permanently deleted",permanent_delete_error:"Failed to permanently delete customer",selected:"customer(s) selected"},ke={title:"Edit Customer",back_to_customers:"Back to Customers",loading:"Loading customer...",customer_not_found:"Customer not found",load_error:"Failed to load customer",update_button:"Update Customer",update_success:"Customer updated successfully",update_error:"Failed to update customer"},$e={title:"Order History",view_grid:"Grid",view_list:"List",total_orders:"Total Orders",completed:"Completed",pending:"Pending",cancelled:"Cancelled",total_revenue:"Total Revenue",recent_orders:"Recent Orders",loading:"Loading orders...",error:"Failed to load orders",no_orders:"No orders found.",order_number:"Order #{{id}}",view_details:"View Details",receipt:"Receipt",invoice:"Invoice",delete_order:"Delete Order",delete_confirm_title:"Delete Order #{{id}}",delete_confirm_message:"Are you sure you want to delete this order? This action cannot be undone and will restore the item quantities to inventory.",deleting:"Deleting order...",delete_success:"Order #{{id}} deleted successfully",delete_error:"Failed to delete order",walk_in_customer:"Walk-in Customer",more_items:"+{{count}} more items",date_label:"Date:",status_label:"Status:",total_label:"Total:",customer_label:"Customer:",search_placeholder:"Search orders...",deleted_customer:"Deleted customer",quotation:"Quotation",delivery:"Delivery Note",select_all:"Select All",selected:"order(s) selected",delete_selected:"Delete Selected"},Ie={title:"Order Details",back_to_orders:"Back to Orders",loading:"Loading order...",not_found:"Order not found",load_error:"Failed to load order",order_number:"Order #{{id}}",order_date:"Date:",status_label:"Order Status",status_pending:"Pending",status_completed:"Completed",status_cancelled:"Cancelled",receipt:"Receipt",open_pdf:"Open PDF",download_pdf:"Download PDF",customer_info:"Customer Information",name_label:"Name",phone_label:"Phone",email_label:"Email",address_label:"Address",customer_type:"Customer Type",walk_in_customer:"Walk-in Customer",notes_label:"Order Notes",payment_method_label:"Payment Method",order_items:"Order Items",total_amount_label:"Total Amount",failed_to_create_download_link:"Failed to create download link",receipt_opened:"Receipt opened for download",failed_to_open_pdf:"Failed to open PDF",failed_to_download_pdf:"Failed to download PDF",failed_to_update_status:"Failed to update order status",status_updated:"Order status updated to {{status}}",invoice:"Invoice",quotation:"Quotation",delivery:"Delivery",time_label:"Time"},Pe={title:"User Management",add_user:"Add User",search_placeholder:"Search users...",username:"Username",email:"Email",role:"Role",status:"Status",actions:"Actions",edit:"Edit",delete:"Delete",delete_confirm:"Are you sure you want to delete this user?",delete_success:"User deleted successfully",delete_error:"Failed to delete user",no_users:"No users found",loading:"Loading users...",admin:"Admin",cashier:"Cashier",active:"Active",inactive:"Inactive",created:"Created",updated:"Updated",grid:"Grid",list:"List"},Se={title_create:"Create User",title_edit:"Edit User",back_to_users:"Back to Users",loading:"Loading user...",user_not_found:"User not found",load_error:"Failed to load user",user_info:"User Information",username_label:"Username *",email_label:"Email *",password_label:"Password",password_hint_new:"*",password_hint_edit:"(leave blank to keep current)",password_placeholder_new:"Enter password",password_placeholder_edit:"Enter new password",role_label:"Role *",create_button:"Create User",update_button:"Update User",create_success:"{{name}} created successfully",update_success:"{{name}} updated successfully",create_error:"Failed to create user",update_error:"Failed to update user"},Ce={title:"Reports & Statistics",no_permission:"You don't have permission to view reports.",loading:"Loading stats...",customers:"Customers",users:"Users",items:"Items",orders:"Orders",total_revenue:"Total Revenue (completed)",top_selling_items:"Top Selling Items",low_stock:"Low Stock",sales_last_30_days:"Sales (Last 30 days)",recent_orders:"Recent Orders",item:"Item",quantity_sold:"Quantity Sold",stock:"Stock",date:"Date",total_sales:"Total Sales",order:"Order",customer:"Customer",amount:"Amount",status:"Status",tab_overview:"Overview",tab_sales:"Sales Analytics",tab_customers:"Customer Insights",export_csv:"Export CSV",export_customer_data:"Export Customer Data",export_order_number:"Order Number",export_date:"Date",export_branch:"Branch",export_customer_name:"Customer Name",export_total_amount:"Total Amount",export_status:"Status",export_success:"Orders exported successfully",export_error:"Failed to export orders",export_no_orders:"No orders found in the selected date range",export_excel:"Export Excel (.xlsx)",export_excel_missing:"Install the 'xlsx' package to enable Excel export (npm i xlsx)",date_range_to:"to",sales_trend_chart:"Sales Trend (Last 7 Days)",top_items_chart:"Top Selling Items",revenue_comparison:"Revenue Comparison",this_week:"This Week",last_week:"Last Week",this_month:"This Month",last_month:"Last Month",order_status_distribution:"Order Status Distribution",top_customers:"Top Customers (by Order Count)",total_orders_label:"Total Orders",total_spent:"Total Spent",customer_metrics:"Customer Metrics",total_customers:"Total Customers",avg_order_value:"Average Order Value",orders_per_customer:"Orders per Customer"},Ee={title:"Settings",subtitle:"Customize your experience and manage your business settings",settings:"Settings",profile:"Profile",profile_information:"Profile Information",username_cannot_change:"Username cannot be changed",role:"Role",update_profile:"Update Profile",updating:"Updating...",profile_updated:"Profile updated successfully",profile_update_error:"Failed to update profile",current_password_required:"Current password is required to change password",password_mismatch:"Passwords do not match",password_too_short:"Password must be at least 6 characters",appearance:"Appearance",appearance_description:"Personalize your interface with themes and language preferences",system:"System",system_description:"Configure your business details, branches, and categories",language:"Language",select_language:"Select Language",theme:"Theme",light:"Light",dark:"Dark",system_theme:"System",shop_name:"Shop Name",currency:"Currency",tax_rate:"Tax Rate (%)",receipt_footer:"Receipt Footer",branches:"Branches",categories:"Item Categories",add_branch:"Add Branch",add_category:"Add Category",save_success:"Settings saved successfully",save_error:"Failed to save settings",username:"Username",email:"Email Address",username_placeholder:"Enter your username",email_placeholder:"Enter your email",change_password:"Change Password",current_password:"Current Password",new_password:"New Password",confirm_password:"Confirm New Password",current_password_placeholder:"Enter current password",new_password_placeholder:"Enter new password",confirm_password_placeholder:"Confirm new password",shop_logo:"Shop Logo",choose_logo:"Choose Logo",logo_preview:"Logo preview",selected_file:"Selected: ",currency_bhd:"BHD - Bahraini Dinar",currency_usd:"USD - US Dollar",currency_eur:"EUR - Euro",currency_gbp:"GBP - British Pound",currency_sar:"SAR - Saudi Riyal",shop_name_placeholder:"Enter your shop name",shop_email:"Shop Email",shop_email_placeholder:"Enter your shop email address",vat_registration_number:"VAT Registration Number",vat_registration_number_placeholder:"Enter your VAT registration number",receipt_footer_placeholder:"Thank you for your business!",bank_details:"Bank Details",bank_name:"Bank Name",bank_name_placeholder:"Enter bank name",bank_account_name:"Account Name",bank_account_name_placeholder:"Enter bank account name",iban_number:"IBAN Number",iban_number_placeholder:"Enter IBAN number",account_number:"Account Number",account_number_placeholder:"Enter account number",swift_code:"SWIFT Code",swift_code_placeholder:"Enter SWIFT/BIC code",active:"Active",inactive:"Inactive",edit_branch:"Edit Branch",delete_branch:"Delete Branch",address:"Address:",phone:"Phone:",branch_name:"Branch Name",branch_updated:"Branch updated",branch_created:"Branch created",branch_deleted:"Branch deleted",branch_required_error:"Branch name and address are required",delete_branch_confirm_title:'Delete "{{name}}"?',delete_confirm_message:"This action cannot be undone.",delete_branch_error:"Failed to delete branch",archive:"Archive",archive_branch:"Archive Branch",archive_branch_confirm_title:'Archive "{{name}}"?',archive_confirm_message:"This branch will be hidden but can be restored later.",archive_branch_error:"Failed to archive branch",unarchive_branch:"Unarchive Branch",branch_archived:"Branch archived",branch_unarchived:"Branch unarchived",unarchive_branch_error:"Failed to unarchive branch",show_archived_branches:"Archived Branches",hide_archived_branches:"Active Branches",delete_category:"Delete category",category_name:"Category Name",category_placeholder:"Enter category",category_added:"Category added",category_deleted:"Category deleted",category_required_error:"Category name required",add_category_error:"Failed to add category",delete_category_error:"Failed to delete category",delete_category_confirm_title:"Delete category?",load_error:"Failed to load settings"},Oe={title:"404 - Page Not Found",message:"The page you're looking for doesn't exist.",go_home:"Go to Home",go_back:"Go Back"},Ae={pos_system:"POS System",version:"V1.0.0",all_rights_reserved:"All rights reserved"},je={search:"Search Name/Description",email:"Email",phone:"Phone Number",address:"Address",created_before:"Created Before",created_after:"Created After",apply_filters:"Apply Filters",clear_filters:"Clear Filters",close:"Close"},Be={common:pe,sidebar:he,login:be,pos:fe,checkout:ve,inventory:ye,editItem:xe,customers:we,editCustomer:ke,orders:$e,editOrder:Ie,users:Pe,editUser:Se,reports:Ce,settings:Ee,notFound:Oe,footer:Ae,advanced_search:je},Te={loading:"جاري التحميل...",error:"خطأ",save:"حفظ",cancel:"إلغاء",delete:"حذف",edit:"تعديل",search:"بحث...",actions:"الإجراءات",add:"إضافة",close:"إغلاق",confirm:"تأكيد",yes:"نعم",no:"لا",back:"رجوع",next:"التالي",submit:"إرسال",update:"تحديث",create:"إنشاء"},Ne={menu:"القائمة",pos:"نقطة البيع",inventory:"المخزون",customers:"العملاء",orders:"الطلبات",reports:"التقارير",users:"المستخدمون",settings:"الإعدادات",expand:"توسيع الشريط الجانبي",collapse:"طي الشريط الجانبي"},Le={title:"مرحباً بعودتك",subtitle:"تسجيل الدخول إلى حسابك",username:"اسم المستخدم",password:"كلمة المرور",username_placeholder:"أدخل اسم المستخدم",password_placeholder:"أدخل كلمة المرور",login_button:"تسجيل الدخول",logging_in:"جاري تسجيل الدخول...",error:"اسم المستخدم أو كلمة المرور غير صحيحة",email:"البريد الإلكتروني",email_placeholder:"أدخل بريدك الإلكتروني",logout:"تسجيل الخروج"},Re={search_placeholder:"البحث عن المنتجات...",all_categories:"الكل",loading:"جاري تحميل المنتجات...",error:"فشل تحميل المنتجات",no_products:"لم يتم العثور على منتجات",out_of_stock:"المنتج غير متوفر في المخزون",stock_limit:"لا يمكن إضافة المزيد - تم الوصول إلى حد المخزون",add_error:"فشل إضافة المنتج إلى السلة",no_image:"لا توجد صورة",out_of_stock_label:"غير متوفر",in_stock:"{{count}} في المخزون",current_order:"الطلب الحالي",empty_cart:"سلتك فارغة",empty_cart_sub:"اختر المنتجات لبدء طلب",increase_error:"لا يمكن زيادة الكمية",total:"المجموع",checkout:"متابعة إلى الدفع",clear_cart:"مسح الكل",clear_cart_confirm_title:"تفريغ السلة؟",clear_cart_confirm_message:"هل أنت متأكد أنك تريد إزالة كل العناصر من السلة؟",clear_success:"تم مسح السلة",stock_limit_error:"لا يمكن إضافة أكثر من {{count}} عناصر. يوجد فقط {{count}} في المخزون."},Me={title:"الدفع",order_summary:"ملخص الطلب",customer_info:"معلومات العميل",customer_name:"اسم العميل",customer_phone:"رقم الهاتف",customer_email:"البريد الإلكتروني",payment_method:"طريقة الدفع",notes_label:"ملاحظات الطلب",payment_method_label:"طريقة الدفع",cash:"نقداً",card:"بطاقة",bank_transfer:"تحويل بنكي",subtotal:"المجموع الفرعي",vat:"ضريبة القيمة المضافة",tax:"الضريبة",total:"المجموع الكلي",complete_order:"إتمام الطلب",processing:"جاري المعالجة...",success:"تم إتمام الطلب بنجاح!",error:"فشل إتمام الطلب",back_to_pos:"العودة إلى نقطة البيع",order_items:"عناصر الطلب",each:"لكل",remove_item:"إزالة العنصر",total_bhd:"الإجمالي: د.ب",order_details:"تفاصيل الطلب",customer_optional:"العميل (اختياري)",walk_in_customer_hint:"عميل زائر (سيتم حفظه)",customer_name_placeholder:"أدخل اسم العميل",phone_number_placeholder:"أدخل رقم الهاتف",email_optional:"البريد الإلكتروني (اختياري)",email_placeholder:"أدخل البريد الإلكتروني",address_optional:"العنوان (اختياري)",address_placeholder:"أدخل العنوان",notes_optional:"ملاحظات الطلب (اختياري)",notes_placeholder:"أي تعليمات خاصة أو ملاحظات...",error_name_required:"اسم العميل مطلوب للعملاء الزائرين",error_phone_required:"رقم الهاتف مطلوب للعملاء الزائرين",customer_saved:'تم حفظ العميل "{{name}}" بنجاح!',error_save_customer:"فشل في حفظ معلومات العميل",order_success:"تم إنشاء الطلب بنجاح! رقم الطلب: {{id}}",error_create_order:"فشل في إنشاء الطلب",select_branch:"اختر الفرع",branch:"الفرع"},De={title:"إدارة المخزون",add_item:"إضافة عنصر جديد",view_grid:"شبكة",view_list:"قائمة",name:"الاسم",category:"الفئة",price:"السعر",stock:"كمية المخزون",description:"الوصف",image:"الصورة (اختياري)",select_category:"اختر الفئة",loading_categories:"جاري تحميل الفئات...",image_selected:"تم اختيار الصورة: {{name}}",current_inventory:"المخزون الحالي ({{count}} عنصر)",loading:"جاري تحميل العناصر...",error:"فشل تحميل العناصر",no_items:"لا توجد عناصر في المخزون. أضف عنصرك الأول!",add_success:"تمت إضافة العنصر بنجاح",add_error:"فشل إضافة العنصر",delete_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"لا يمكن التراجع عن هذا الإجراء.",deleting:"جاري حذف {{name}}...",delete_success:"تم حذف {{name}} بنجاح",delete_error:"فشل حذف العنصر",archive:"أرشفة",archive_confirm_title:'أرشفة "{{name}}"؟',archive_confirm_message:"سيتم إخفاء هذا العنصر من المخزون ولكن يمكن استعادته لاحقاً.",archiving:"جاري أرشفة {{name}}...",archive_success:"تم أرشفة {{name}} بنجاح",archive_error:"فشل أرشفة العنصر",unarchive:"إلغاء الأرشفة",unarchiving:"جاري إلغاء أرشفة {{name}}...",unarchive_success:"تم إلغاء أرشفة {{name}} بنجاح",unarchive_error:"فشل إلغاء أرشفة العنصر",show_archived:"العناصر المؤرشفة",hide_archived:"العناصر النشطة",select_all:"تحديد الكل",search_placeholder:"البحث في العناصر...",permanent_delete:"حذف نهائي",permanent_deleting:"جاري حذف {{name}}...",permanent_delete_confirm_title:'حذف "{{name}}" نهائياً؟',permanent_delete_confirm_message:"سيؤدي هذا إلى حذف العنصر نهائياً من قاعدة البيانات. ستظل الطلبات تشير إلى هذا العنصر كعنصر تم حذفه.",permanent_delete_success:"تم حذف {{name}} نهائياً",permanent_delete_error:"فشل الحذف النهائي للعنصر",archive_selected:"أرشفة المحدد",update_stock:"تحديث المخزون",clear_selection:"مسح التحديد",selected:"عنصر(عناصر) محددة"},Ue={title:"تعديل العنصر",back_to_inventory:"العودة إلى المخزون",loading:"جاري تحميل العنصر...",item_not_found:"العنصر غير موجود",load_error:"فشل تحميل العنصر",current_image:"الصورة الحالية:",new_image_selected:"تم اختيار صورة جديدة: {{name}}",keep_current_image:"اترك فارغاً للاحتفاظ بالصورة الحالية",readd_button:"إعادة الإضافة",category_readded:"تمت إعادة إضافة الفئة",category_readd_error:"فشل إعادة إضافة الفئة",update_button:"تحديث العنصر",update_success:"تم تحديث العنصر بنجاح",update_error:"فشل تحديث العنصر"},Fe={title:"إدارة العملاء",add_customer:"إضافة عميل جديد",view_grid:"شبكة",view_list:"قائمة",name:"الاسم",phone:"رقم الهاتف",email:"البريد الإلكتروني",address:"العنوان",email_placeholder:"customer@example.com",address_placeholder:"أدخل عنوان العميل",customer_list:"قائمة العملاء ({{count}} عميل)",loading:"جاري تحميل العملاء...",error:"فشل تحميل العملاء",no_customers:"لم يتم العثور على عملاء. أضف عميلك الأول!",delete_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"لا يمكن التراجع عن هذا الإجراء.",deleting:"جاري حذف {{name}}...",delete_success:"تم حذف {{name}} بنجاح",delete_error:"فشل حذف العميل",creating:"جاري إنشاء العميل...",create_success:"تم إنشاء {{name}} بنجاح",create_error:"فشل إنشاء العميل",phone_label:"الهاتف:",email_label:"البريد الإلكتروني:",archive:"أرشفة",archive_confirm_title:'أرشفة "{{name}}"؟',archive_confirm_message:"سيتم إخفاء هذا العميل ولكن يمكن استعادته لاحقاً.",archiving:"جاري أرشفة {{name}}...",archive_success:"تم أرشفة {{name}} بنجاح",archive_error:"فشل أرشفة العميل",unarchive:"إلغاء الأرشفة",unarchiving:"جاري إلغاء أرشفة {{name}}...",unarchive_success:"تم إلغاء أرشفة {{name}} بنجاح",unarchive_error:"فشل إلغاء أرشفة العميل",show_archived:"العملاء المؤرشفون",hide_archived:"العملاء النشطون",select_all:"تحديد الكل",search_placeholder:"البحث في العملاء...",archive_selected:"أرشفة المحدد",archive_selected_confirm_title:"أرشفة {{count}} عميل؟",archive_selected_confirm_message:"سيؤدي هذا إلى نقل العملاء المحددين إلى الأرشيف. يمكنك استعادتها لاحقًا.",no_active_selected:"لا توجد عملاء نشطة محددة للأرشفة",archive_bulk_success:"تم أرشفة {{count}} عميل(عملاء) بنجاح",archive_bulk_error:"فشل أرشفة بعض العملاء",permanent_delete:"حذف نهائي",permanent_delete_confirm_title:'حذف "{{name}}" نهائياً؟',permanent_delete_confirm_message:"سيؤدي هذا إلى حذف العميل نهائياً. ستظل الطلبات تشير إلى هذا العميل كعميل محذوف.",permanent_delete_success:"تم حذف {{name}} نهائياً",permanent_delete_error:"فشل الحذف النهائي للعميل",selected:"عميل(عملاء) محددة"},He={title:"تعديل العميل",back_to_customers:"العودة إلى العملاء",loading:"جاري تحميل العميل...",customer_not_found:"العميل غير موجود",load_error:"فشل تحميل العميل",update_button:"تحديث العميل",update_success:"تم تحديث العميل بنجاح",update_error:"فشل تحديث العميل"},ze={title:"سجل الطلبات",view_grid:"شبكة",view_list:"قائمة",total_orders:"إجمالي الطلبات",completed:"مكتمل",pending:"قيد الانتظار",cancelled:"ملغي",total_revenue:"إجمالي الإيرادات",recent_orders:"الطلبات الأخيرة",loading:"جاري تحميل الطلبات...",error:"فشل تحميل الطلبات",no_orders:"لم يتم العثور على طلبات.",order_number:"طلب #{{id}}",view_details:"عرض التفاصيل",receipt:"الإيصال",invoice:"الفاتورة",delete_order:"حذف الطلب",delete_confirm_title:"حذف الطلب #{{id}}",delete_confirm_message:"هل أنت متأكد من حذف هذا الطلب؟ لا يمكن التراجع عن هذا الإجراء وسيتم استعادة كميات العناصر إلى المخزون.",deleting:"جاري حذف الطلب...",delete_success:"تم حذف الطلب #{{id}} بنجاح",delete_error:"فشل حذف الطلب",walk_in_customer:"عميل عابر",more_items:"+{{count}} عنصر إضافي",date_label:"التاريخ:",status_label:"الحالة:",total_label:"الإجمالي:",customer_label:"العميل:",search_placeholder:"البحث في الطلبات...",deleted_customer:"عميل محذوف",quotation:"عرض أسعار",delivery:"مذكرة تسليم",select_all:"تحديد الكل",selected:"طلب(طلبات) محددة",delete_selected:"حذف المحدد"},qe={title:"تفاصيل الطلب",back_to_orders:"العودة إلى الطلبات",loading:"جاري تحميل الطلب...",not_found:"الطلب غير موجود",load_error:"فشل تحميل الطلب",order_number:"طلب #{{id}}",order_date:"التاريخ:",status_label:"حالة الطلب",status_pending:"قيد الانتظار",status_completed:"مكتمل",status_cancelled:"ملغي",receipt:"الإيصال",open_pdf:"فتح PDF",download_pdf:"تحميل PDF",customer_info:"معلومات العميل",name_label:"الاسم",phone_label:"الهاتف",email_label:"البريد الإلكتروني",address_label:"العنوان",customer_type:"نوع العميل",walk_in_customer:"عميل عابر",notes_label:"ملاحظات الطلب",payment_method_label:"طريقة الدفع",order_items:"عناصر الطلب",total_amount_label:"الإجمالي",failed_to_create_download_link:"فشل إنشاء رابط التحميل",receipt_opened:"تم فتح الإيصال للتنزيل",failed_to_open_pdf:"فشل فتح PDF",failed_to_download_pdf:"فشل تحميل PDF",failed_to_update_status:"فشل تحديث حالة الطلب",status_updated:"تم تحديث حالة الطلب إلى {{status}}",invoice:"فاتورة",quotation:"عرض أسعار",delivery:"تسليم",time_label:"الوقت"},Ve={title:"إدارة المستخدمين",add_user:"إضافة مستخدم",search_placeholder:"البحث عن المستخدمين...",username:"اسم المستخدم",email:"البريد الإلكتروني",role:"الدور",status:"الحالة",actions:"الإجراءات",edit:"تعديل",delete:"حذف",delete_confirm:"هل أنت متأكد من حذف هذا المستخدم؟",delete_success:"تم حذف المستخدم بنجاح",delete_error:"فشل حذف المستخدم",no_users:"لم يتم العثور على مستخدمين",loading:"جاري تحميل المستخدمين...",admin:"مدير",cashier:"كاشير",active:"نشط",inactive:"غير نشط",created:"تاريخ الإنشاء",updated:"تاريخ التحديث",grid:"شبكة",list:"قائمة"},Ke={title_create:"إنشاء مستخدم",title_edit:"تعديل المستخدم",back_to_users:"العودة للمستخدمين",loading:"جاري تحميل المستخدم...",user_not_found:"المستخدم غير موجود",load_error:"فشل تحميل المستخدم",user_info:"معلومات المستخدم",username_label:"اسم المستخدم *",email_label:"البريد الإلكتروني *",password_label:"كلمة المرور",password_hint_new:"*",password_hint_edit:"(اتركه فارغاً للاحتفاظ بالحالية)",password_placeholder_new:"أدخل كلمة المرور",password_placeholder_edit:"أدخل كلمة مرور جديدة",role_label:"الدور *",create_button:"إنشاء مستخدم",update_button:"تحديث المستخدم"},We={title:"الإعدادات",subtitle:"خصص تجربتك وأدر إعدادات عملك",settings:"الإعدادات",profile:"الملف الشخصي",appearance:"المظهر",appearance_description:"خصص واجهتك مع تفضيلات السمات واللغة",system:"النظام",system_description:"اضبط تفاصيل عملك والفروع والفئات",language:"اللغة",select_language:"اختر اللغة",theme:"السمة",light:"فاتح",dark:"داكن",system_theme:"النظام",shop_name:"اسم المتجر",currency:"العملة",tax_rate:"نسبة الضريبة (%)",receipt_footer:"تذييل الإيصال",branches:"الفروع",categories:"فئات العناصر",add_branch:"إضافة فرع",add_category:"إضافة فئة",save_success:"تم حفظ الإعدادات بنجاح",save_error:"فشل حفظ الإعدادات",username:"اسم المستخدم",email:"البريد الإلكتروني",username_placeholder:"أدخل اسم المستخدم",email_placeholder:"أدخل بريدك الإلكتروني",change_password:"تغيير كلمة المرور",current_password:"كلمة المرور الحالية",current_password_placeholder:"أدخل كلمة المرور الحالية",new_password:"كلمة المرور الجديدة",confirm_password:"تأكيد كلمة المرور الجديدة",new_password_placeholder:"أدخل كلمة المرور الجديدة",confirm_password_placeholder:"أكد كلمة المرور الجديدة",shop_logo:"شعار المتجر",choose_logo:"اختر الشعار",logo_preview:"معاينة الشعار",selected_file:"تم الاختيار: ",currency_bhd:"BHD - دينار بحريني",currency_usd:"USD - دولار أمريكي",currency_eur:"EUR - يورو",currency_gbp:"GBP - جنيه إسترليني",currency_sar:"SAR - ريال سعودي",shop_name_placeholder:"أدخل اسم متجرك",shop_email:"بريد المتجر الإلكتروني",shop_email_placeholder:"أدخل عنوان بريد المتجر الإلكتروني",vat_registration_number:"رقم تسجيل ضريبة القيمة المضافة",vat_registration_number_placeholder:"أدخل رقم تسجيل ضريبة القيمة المضافة",receipt_footer_placeholder:"شكراً لتعاملكم معنا!",bank_details:"تفاصيل البنك",bank_name:"اسم البنك",bank_name_placeholder:"أدخل اسم البنك",bank_account_name:"اسم الحساب",bank_account_name_placeholder:"أدخل اسم حساب البنك",iban_number:"رقم الآيبان",iban_number_placeholder:"أدخل رقم الآيبان",account_number:"رقم الحساب",account_number_placeholder:"أدخل رقم الحساب",swift_code:"رمز السويفت",swift_code_placeholder:"أدخل رمز السويفت / BIC",active:"نشط",inactive:"غير نشط",edit_branch:"تعديل الفرع",delete_branch:"حذف الفرع",address:"العنوان:",phone:"الهاتف:",branch_name:"اسم الفرع",branch_updated:"تم تحديث الفرع",branch_created:"تم إنشاء الفرع",branch_deleted:"تم حذف الفرع",branch_required_error:"اسم الفرع والعنوان مطلوبان",delete_branch_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"لا يمكن التراجع عن هذا الإجراء.",delete_branch_error:"فشل حذف الفرع",archive:"أرشفة",archive_branch:"أرشفة الفرع",archive_branch_confirm_title:'أرشفة "{{name}}"؟',archive_confirm_message:"سيتم إخفاء هذا الفرع ولكن يمكن استعادته لاحقاً.",archive_branch_error:"فشل أرشفة الفرع",unarchive_branch:"إلغاء أرشفة الفرع",branch_archived:"تم أرشفة الفرع",branch_unarchived:"تم إلغاء أرشفة الفرع",unarchive_branch_error:"فشل إلغاء أرشفة الفرع",show_archived_branches:"الفروع المؤرشفة",hide_archived_branches:"الفروع النشطة",delete_category:"حذف الفئة",category_name:"اسم الفئة",category_placeholder:"أدخل الفئة",category_added:"تمت إضافة الفئة",category_deleted:"تم حذف الفئة",category_required_error:"اسم الفئة مطلوب",add_category_error:"فشل إضافة الفئة",delete_category_error:"فشل حذف الفئة",delete_category_confirm_title:"حذف الفئة؟",load_error:"فشل تحميل الإعدادات"},Ge={title:"التقارير والإحصائيات",no_permission:"ليس لديك صلاحية لعرض التقارير.",loading:"جاري تحميل الإحصائيات...",customers:"العملاء",users:"المستخدمون",items:"المنتجات",orders:"الطلبات",total_revenue:"إجمالي الإيرادات (المكتملة)",top_selling_items:"المنتجات الأكثر مبيعًا",low_stock:"المخزون المنخفض",sales_last_30_days:"المبيعات (آخر 30 يومًا)",recent_orders:"أحدث الطلبات",item:"المنتج",quantity_sold:"الكمية المباعة",stock:"المخزون",date:"التاريخ",total_sales:"إجمالي المبيعات",order:"الطلب",customer:"العميل",amount:"المبلغ",status:"الحالة",tab_overview:"نظرة عامة",tab_sales:"تحليلات المبيعات",tab_customers:"رؤى العملاء",export_csv:"تصدير CSV",export_customer_data:"تصدير بيانات العملاء",export_order_number:"رقم الطلب",export_date:"التاريخ",export_branch:"الفرع",export_customer_name:"اسم العميل",export_total_amount:"المبلغ الإجمالي",export_status:"الحالة",export_success:"تم تصدير الطلبات بنجاح",export_error:"فشل تصدير الطلبات",export_no_orders:"لم يتم العثور على طلبات في النطاق الزمني المحدد",export_excel:"تصدير Excel (.xlsx)",export_excel_missing:"يرجى تثبيت الحزمة 'xlsx' لتمكين تصدير Excel (npm i xlsx)",date_range_to:"إلى",sales_trend_chart:"اتجاه المبيعات (آخر 7 أيام)",top_items_chart:"المنتجات الأكثر مبيعًا",revenue_comparison:"مقارنة الإيرادات",this_week:"هذا الأسبوع",last_week:"الأسبوع الماضي",this_month:"هذا الشهر",last_month:"الشهر الماضي",order_status_distribution:"توزيع حالات الطلبات",top_customers:"أفضل العملاء (حسب عدد الطلبات)",total_orders_label:"إجمالي الطلبات",total_spent:"إجمالي المبالغ المنفقة",customer_metrics:"مقاييس العملاء",total_customers:"إجمالي العملاء",avg_order_value:"متوسط قيمة الطلب",orders_per_customer:"الطلبات لكل عميل"},Qe={title:"404 - الصفحة غير موجودة",message:"الصفحة التي تبحث عنها غير موجودة.",go_home:"الذهاب للرئيسية",go_back:"العودة"},Je={pos_system:"نظام نقاط البيع",version:"الإصدار 1.0.0",all_rights_reserved:"جميع الحقوق محفوظة"},Ye={search:"البحث في الاسم/الوصف",email:"البريد الإلكتروني",phone:"رقم الهاتف",address:"العنوان",created_before:"تم الإنشاء قبل",created_after:"تم الإنشاء بعد",apply_filters:"تطبيق الفلاتر",clear_filters:"مسح الفلاتر",close:"إغلاق"},Xe={common:Te,sidebar:Ne,login:Le,pos:Re,checkout:Me,inventory:De,editItem:Ue,customers:Fe,editCustomer:He,orders:ze,editOrder:qe,users:Ve,editUser:Ke,settings:We,reports:Ge,notFound:Qe,footer:Je,advanced_search:Ye},Ze={loading:"Naglo-load...",error:"Error",save:"I-save",cancel:"Kanselahin",delete:"Burahin",edit:"I-edit",search:"Maghanap...",actions:"Mga Aksyon",add:"Idagdag",close:"Isara",confirm:"Kumpirmahin",yes:"Oo",no:"Hindi",back:"Bumalik",next:"Susunod",submit:"I-submit",update:"I-update",create:"Gumawa"},ea={menu:"Menu",pos:"Point of Sale",inventory:"Imbentaryo",customers:"Mga Customer",orders:"Mga Order",reports:"Mga Ulat",users:"Mga User",settings:"Mga Setting",expand:"Palawakin ang Sidebar",collapse:"I-collapse ang Sidebar"},aa={title:"Maligayang Pagbabalik",subtitle:"Mag-sign in sa iyong account",username:"Username",password:"Password",username_placeholder:"Ilagay ang iyong username",password_placeholder:"Ilagay ang iyong password",login_button:"Mag-sign In",logging_in:"Nag-sa-sign in...",error:"Maling username o password",email:"Email",email_placeholder:"Ilagay ang iyong email address",logout:"Mag-logout"},ta={search_placeholder:"Maghanap ng mga produkto...",all_categories:"Lahat",loading:"Naglo-load ng mga produkto...",error:"Hindi ma-load ang mga produkto",no_products:"Walang produkto na natagpuan",out_of_stock:"Out of stock ang produkto",stock_limit:"Hindi na maaaring magdagdag — naabot na ang limitasyon ng stock",add_error:"Hindi naidagdag ang item sa cart",no_image:"Walang Larawan",out_of_stock_label:"Out of Stock",in_stock:"{{count}} sa stock",current_order:"Kasalukuyang Order",empty_cart:"Walang laman ang iyong cart",empty_cart_sub:"Pumili ng mga produkto upang simulan ang order",increase_error:"Hindi maaaring dagdagan ang dami",total:"Kabuuan",checkout:"Magpatuloy sa Checkout",clear_cart:"I-clear Lahat",clear_cart_confirm_title:"I-clear ang cart?",clear_cart_confirm_message:"Sigurado ka bang gusto mong alisin lahat ng item sa cart?",clear_success:"Na-clear ang cart",stock_limit_error:"Hindi maaaring magdagdag ng higit sa {{count}} item. {{count}} lamang ang nasa stock."},ra={title:"Checkout",order_summary:"Buod ng Order",customer_info:"Impormasyon ng Customer",customer_name:"Pangalan ng Customer",customer_phone:"Numero ng Telepono",customer_email:"Email",payment_method:"Paraan ng Pagbabayad",cash:"Cash",card:"Card",subtotal:"Subtotal",vat:"VAT",tax:"Buwis",total:"Kabuuan",complete_order:"Kumpletuhin ang Order",processing:"Pinoproseso...",success:"Matagumpay na nakumpleto ang order!",error:"Hindi nakumpleto ang order",back_to_pos:"Bumalik sa POS",order_items:"Mga Item sa Order",notes_label:"Mga Tala sa Order",payment_method_label:"Paraan ng Pagbabayad",each:"bawat isa",remove_item:"Alisin ang item",total_bhd:"Kabuuan: PHP",order_details:"Mga Detalye ng Order",customer_optional:"Customer (Opsyonal)",walk_in_customer_hint:"Walk-in Customer (ise-save)",customer_name_placeholder:"Ilagay ang pangalan ng customer",phone_number_placeholder:"Ilagay ang numero ng telepono",email_optional:"Email (Opsyonal)",email_placeholder:"Ilagay ang email address",address_optional:"Address (Opsyonal)",address_placeholder:"Ilagay ang address",bank_transfer:"Bank Transfer",notes_optional:"Mga Tala sa Order (Opsyonal)",notes_placeholder:"Anumang espesyal na tagubilin o tala...",error_name_required:"Kailangan ang pangalan ng customer para sa walk-in customers",error_phone_required:"Kailangan ang numero ng telepono para sa walk-in customers",customer_saved:'Matagumpay na na-save ang Customer "{{name}}"!',error_save_customer:"Hindi na-save ang impormasyon ng customer",order_success:"Matagumpay na nalikha ang order! Order ID: {{id}}",error_create_order:"Hindi nalikha ang order",select_branch:"Pumili ng Branch",branch:"Branch"},oa={title:"Pamamahala ng Imbentaryo",add_item:"Magdagdag ng Bagong Item",view_grid:"Grid",view_list:"Listahan",name:"Pangalan",category:"Kategorya",price:"Presyo",stock:"Dami ng Stock",description:"Paglalarawan",image:"Larawan (Opsyonal)",select_category:"Pumili ng kategorya",loading_categories:"Naglo-load ng mga kategorya...",image_selected:"Napili ang larawan: {{name}}",current_inventory:"Kasalukuyang Imbentaryo ({{count}} item)",loading:"Naglo-load ng mga item...",error:"Hindi ma-load ang mga item",no_items:"Walang item sa imbentaryo. Idagdag ang iyong unang item!",add_success:"Matagumpay na naidagdag ang item",add_error:"Hindi naidagdag ang item",delete_confirm_title:'Burahin ang "{{name}}"?',delete_confirm_message:"Hindi na maaaring bawiin ito.",deleting:"Binubura ang {{name}}...",delete_success:"Matagumpay na nabura ang {{name}}",delete_error:"Hindi nabura ang item",archive:"I-archive",archive_confirm_title:'I-archive ang "{{name}}"?',archive_confirm_message:"Itatago ang item na ito sa imbentaryo ngunit maaaring maibalik mamaya.",archiving:"Ina-archive ang {{name}}...",archive_success:"Matagumpay na na-archive ang {{name}}",archive_error:"Hindi na-archive ang item",unarchive:"I-unarchive",unarchiving:"Ina-unarchive ang {{name}}...",unarchive_success:"Matagumpay na na-unarchive ang {{name}}",unarchive_error:"Hindi na-unarchive ang item",show_archived:"Mga Na-archive na Item",hide_archived:"Mga Aktibong Item",select_all:"Piliin Lahat",search_placeholder:"Maghanap ng mga item...",permanent_delete:"Permanenteng Burahin",permanent_deleting:"Permanenteng binubura ang {{name}}...",permanent_delete_confirm_title:'Permanenteng burahin ang "{{name}}"?',permanent_delete_confirm_message:"Permanenteng aalisin ito sa database. Panatilihin ng mga order ang sanggunian sa item na ito bilang deleted item.",permanent_delete_success:"Permanenteng nabura ang {{name}}",permanent_delete_error:"Hindi permanenteng nabura ang item",archive_selected:"I-archive ang Napili",update_stock:"I-update ang Stock",clear_selection:"I-clear ang Seleksyon",selected:"item(s) na napili"},na={title:"I-edit ang Item",back_to_inventory:"Bumalik sa Imbentaryo",loading:"Naglo-load ng item...",item_not_found:"Hindi natagpuan ang item",load_error:"Hindi ma-load ang item",current_image:"Kasalukuyang Larawan:",new_image_selected:"Bagong napiling larawan: {{name}}",keep_current_image:"Iwanang blangko upang panatilihin ang kasalukuyang larawan",readd_button:"Idagdag Muli",category_readded:"Muling naidagdag ang kategorya",category_readd_error:"Hindi muling naidagdag ang kategorya",update_button:"I-update ang Item",update_success:"Matagumpay na na-update ang item",update_error:"Hindi na-update ang item"},sa={title:"Pamamahala ng Customer",add_customer:"Magdagdag ng Bagong Customer",view_grid:"Grid",view_list:"Listahan",name:"Pangalan",phone:"Numero ng Telepono",email:"Email",address:"Address",email_placeholder:"customer@example.com",address_placeholder:"Ilagay ang address ng customer",customer_list:"Listahan ng Customer ({{count}} customer)",loading:"Naglo-load ng mga customer...",error:"Hindi ma-load ang mga customer",no_customers:"Walang customer na natagpuan. Idagdag ang iyong unang customer!",delete_confirm_title:'Burahin ang "{{name}}"?',delete_confirm_message:"Hindi na maaaring bawiin ito.",deleting:"Binubura ang {{name}}...",delete_success:"Matagumpay na nabura ang {{name}}",delete_error:"Hindi nabura ang customer",creating:"Gumagawa ng customer...",create_success:"Matagumpay na nalikha ang {{name}}",create_error:"Hindi nalikha ang customer",phone_label:"Telepono:",email_label:"Email:",archive:"I-archive",archive_confirm_title:'I-archive ang "{{name}}"?',archive_confirm_message:"Itatago ang customer na ito ngunit maaaring maibalik mamaya.",archiving:"Ina-archive ang {{name}}...",archive_success:"Matagumpay na na-archive ang {{name}}",archive_error:"Hindi na-archive ang customer",unarchive:"I-unarchive",unarchiving:"Ina-unarchive ang {{name}}...",unarchive_success:"Matagumpay na na-unarchive ang {{name}}",unarchive_error:"Hindi na-unarchive ang customer",show_archived:"Mga Na-archive na Customer",hide_archived:"Mga Aktibong Customer",select_all:"Piliin Lahat",search_placeholder:"Maghanap ng mga customer...",archive_selected:"I-archive ang Napili",archive_selected_confirm_title:"I-archive ang {{count}} customer(s)?",archive_selected_confirm_message:"Ililipat nito ang mga napiling customer sa archive. Maaari mo silang maibalik mamaya.",no_active_selected:"Walang aktibong customer na napili para i-archive",archive_bulk_success:"Matagumpay na na-archive ang {{count}} customer(s)",archive_bulk_error:"Hindi na-archive ang ilang customer",permanent_delete:"Permanenteng Burahin",permanent_delete_confirm_title:'Permanenteng burahin ang "{{name}}"?',permanent_delete_confirm_message:"Permanenteng aalisin ang customer. Panatilihin ng mga order ang sanggunian sa customer na ito bilang deleted customer.",permanent_delete_success:"Permanenteng nabura ang {{name}}",permanent_delete_error:"Hindi permanenteng nabura ang customer",selected:"customer(s) na napili"},ia={title:"I-edit ang Customer",back_to_customers:"Bumalik sa Mga Customer",loading:"Naglo-load ng customer...",customer_not_found:"Hindi natagpuan ang customer",load_error:"Hindi ma-load ang customer",update_button:"I-update ang Customer",update_success:"Matagumpay na na-update ang customer",update_error:"Hindi na-update ang customer"},ca={title:"Kasaysayan ng Order",view_grid:"Grid",view_list:"Listahan",total_orders:"Kabuuang Order",completed:"Nakumpleto",pending:"Nakabinbin",cancelled:"Kinansela",total_revenue:"Kabuuang Kita",recent_orders:"Mga Kamakailang Order",loading:"Naglo-load ng mga order...",error:"Hindi ma-load ang mga order",no_orders:"Walang order na natagpuan.",order_number:"Order #{{id}}",view_details:"Tingnan ang Mga Detalye",receipt:"Resibo",invoice:"Invoice",delete_order:"Burahin ang Order",delete_confirm_title:"Burahin ang Order #{{id}}",delete_confirm_message:"Sigurado ka bang gusto mong burahin ang order na ito? Hindi na maaaring bawiin at ibabalik ang dami ng item sa imbentaryo.",deleting:"Binubura ang order...",delete_success:"Matagumpay na nabura ang Order #{{id}}",delete_error:"Hindi nabura ang order",walk_in_customer:"Walk-in Customer",more_items:"+{{count}} pang item",date_label:"Petsa:",status_label:"Status:",total_label:"Kabuuan:",customer_label:"Customer:",search_placeholder:"Maghanap ng mga order...",deleted_customer:"Nabura na ang customer",quotation:"Quotation",delivery:"Delivery Note",select_all:"Piliin Lahat",selected:"order(s) na napili",delete_selected:"Burahin ang Napili"},la={title:"Mga Detalye ng Order",back_to_orders:"Bumalik sa Mga Order",loading:"Naglo-load ng order...",not_found:"Hindi natagpuan ang order",load_error:"Hindi ma-load ang order",order_number:"Order #{{id}}",order_date:"Petsa:",status_label:"Status ng Order",status_pending:"Nakabinbin",status_completed:"Nakumpleto",status_cancelled:"Kinansela",receipt:"Resibo",open_pdf:"Buksan ang PDF",download_pdf:"I-download ang PDF",customer_info:"Impormasyon ng Customer",name_label:"Pangalan",phone_label:"Telepono",email_label:"Email",address_label:"Address",customer_type:"Uri ng Customer",walk_in_customer:"Walk-in Customer",notes_label:"Mga Tala sa Order",payment_method_label:"Paraan ng Pagbabayad",order_items:"Mga Item sa Order",total_amount_label:"Kabuuang Halaga",failed_to_create_download_link:"Hindi nalikha ang link sa pag-download",receipt_opened:"Binuksan ang resibo para i-download",failed_to_open_pdf:"Hindi binuksan ang PDF",failed_to_download_pdf:"Hindi na-download ang PDF",failed_to_update_status:"Hindi na-update ang status ng order",status_updated:"Na-update ang status ng order sa {{status}}",invoice:"Invoice",quotation:"Quotation",delivery:"Delivery",time_label:"Oras"},da={title:"Pamamahala ng User",add_user:"Magdagdag ng User",search_placeholder:"Maghanap ng mga user...",username:"Username",email:"Email",role:"Role",status:"Status",actions:"Mga Aksyon",edit:"I-edit",delete:"Burahin",delete_confirm:"Sigurado ka bang gusto mong burahin ang user na ito?",delete_success:"Matagumpay na nabura ang user",delete_error:"Hindi nabura ang user",no_users:"Walang user na natagpuan",loading:"Naglo-load ng mga user...",admin:"Admin",cashier:"Cashier",active:"Aktibo",inactive:"Hindi Aktibo",created:"Nilikha",updated:"Na-update",grid:"Grid",list:"Listahan"},_a={title_create:"Gumawa ng User",title_edit:"I-edit ang User",back_to_users:"Bumalik sa Mga User",loading:"Naglo-load ng user...",user_not_found:"Hindi natagpuan ang user",load_error:"Hindi ma-load ang user",user_info:"Impormasyon ng User",username_label:"Username *",email_label:"Email *",password_label:"Password",password_hint_new:"*",password_hint_edit:"(iwanang blangko upang panatilihin ang kasalukuyan)",password_placeholder_new:"Ilagay ang password",password_placeholder_edit:"Ilagay ang bagong password",role_label:"Role *",create_button:"Gumawa ng User",update_button:"I-update ang User",create_success:"Matagumpay na nalikha ang {{name}}",update_success:"Matagumpay na na-update ang {{name}}",create_error:"Hindi nalikha ang user",update_error:"Hindi na-update ang user"},ma={title:"Mga Ulat at Estadistika",no_permission:"Wala kang pahintulot na tingnan ang mga ulat.",loading:"Naglo-load ng stats...",customers:"Mga Customer",users:"Mga User",items:"Mga Item",orders:"Mga Order",total_revenue:"Kabuuang Kita (nakumpleto)",top_selling_items:"Mga Pinakamabentang Item",low_stock:"Mababang Stock",sales_last_30_days:"Mga Benta (Huling 30 araw)",recent_orders:"Mga Kamakailang Order",item:"Item",quantity_sold:"Dami na Naibenta",stock:"Stock",date:"Petsa",total_sales:"Kabuuang Benta",order:"Order",customer:"Customer",amount:"Halaga",status:"Status",tab_overview:"Pangkalahatang-ideya",tab_sales:"Analitika ng Benta",tab_customers:"Mga Insight ng Customer",export_csv:"I-export ang CSV",export_customer_data:"I-export ang Data ng Customer",export_order_number:"Order Number",export_date:"Date",export_branch:"Branch",export_customer_name:"Customer Name",export_total_amount:"Total Amount",export_status:"Status",export_success:"Orders exported successfully",export_error:"Failed to export orders",export_no_orders:"No orders found in the selected date range",export_excel:"Export Excel (.xlsx)",export_excel_missing:"Install the 'xlsx' package to enable Excel export (npm i xlsx)",date_range_to:"hanggang",sales_trend_chart:"Trend ng Benta (Huling 7 Araw)",top_items_chart:"Mga Pinakamabentang Item",revenue_comparison:"Paghahambing ng Kita",this_week:"Sa Linggong Ito",last_week:"Noong Nakaraang Linggo",this_month:"Sa Buwang Ito",last_month:"Noong Nakaraang Buwan",order_status_distribution:"Pamamahagi ng Status ng Order",top_customers:"Mga Nangungunang Customer (ayon sa Bilang ng Order)",total_orders_label:"Kabuuang Order",total_spent:"Kabuuang Ginastos",customer_metrics:"Mga Metriko ng Customer",total_customers:"Kabuuang Customer",avg_order_value:"Average na Halaga ng Order",orders_per_customer:"Mga Order bawat Customer"},ua={title:"Mga Setting",subtitle:"I-customize ang iyong karanasan at pamahalaan ang mga setting ng iyong negosyo",settings:"Mga Setting",profile:"Profile",appearance:"Hitsura",appearance_description:"I-personalize ang iyong interface gamit ang mga theme at preference sa wika",system:"Sistema",system_description:"I-configure ang mga detalye ng iyong negosyo, branch, at kategorya",language:"Wika",select_language:"Pumili ng Wika",theme:"Theme",light:"Maliwanag",dark:"Madilim",system_theme:"Sistema",shop_name:"Pangalan ng Tindahan",currency:"Pera",tax_rate:"Rate ng Buwis (%)",receipt_footer:"Footer ng Resibo",branches:"Mga Branch",categories:"Mga Kategorya ng Item",add_branch:"Magdagdag ng Branch",add_category:"Magdagdag ng Kategorya",save_success:"Matagumpay na na-save ang mga setting",save_error:"Hindi na-save ang mga setting",username:"Username",email:"Email Address",username_placeholder:"Ilagay ang iyong username",email_placeholder:"Ilagay ang iyong email",change_password:"Baguhin ang Password",current_password:"Kasalukuyang Password",new_password:"Bagong Password",confirm_password:"Kumpirmahin ang Password",current_password_placeholder:"Ilagay ang kasalukuyang password",new_password_placeholder:"Ilagay ang bagong password",confirm_password_placeholder:"Kumpirmahin ang bagong password",shop_logo:"Logo ng Tindahan",choose_logo:"Pumili ng Logo",logo_preview:"Preview ng Logo",selected_file:"Napili: ",currency_bhd:"PHP - Philippine Peso",currency_usd:"USD - US Dollar",currency_eur:"EUR - Euro",currency_gbp:"GBP - British Pound",currency_sar:"SAR - Saudi Riyal",shop_name_placeholder:"Ilagay ang pangalan ng iyong tindahan",shop_email:"Email ng Tindahan",shop_email_placeholder:"Ilagay ang email address ng iyong tindahan",vat_registration_number:"Numero ng Rehistro sa VAT",vat_registration_number_placeholder:"Ilagay ang iyong numero ng rehistro sa VAT",receipt_footer_placeholder:"Salamat sa iyong negosyo!",bank_details:"Mga Detalye ng Bangko",bank_name:"Pangalan ng Bangko",bank_name_placeholder:"Ilagay ang pangalan ng bangko",bank_account_name:"Pangalan ng Account",bank_account_name_placeholder:"Ilagay ang pangalan ng account",iban_number:"Numero ng IBAN",iban_number_placeholder:"Ilagay ang numero ng IBAN",account_number:"Numero ng Account",account_number_placeholder:"Ilagay ang numero ng account",swift_code:"SWIFT Code",swift_code_placeholder:"Ilagay ang SWIFT/BIC code",active:"Aktibo",inactive:"Hindi Aktibo",edit_branch:"I-edit ang Branch",delete_branch:"Burahin ang Branch",address:"Address:",phone:"Telepono:",branch_name:"Pangalan ng Branch",branch_updated:"Na-update ang branch",branch_created:"Nalikha ang branch",branch_deleted:"Nabura ang branch",branch_required_error:"Kailangan ang pangalan at address ng branch",delete_branch_confirm_title:'Burahin ang "{{name}}"?',delete_confirm_message:"Hindi na maaaring bawiin ito.",delete_branch_error:"Hindi nabura ang branch",archive:"I-archive",archive_branch:"I-archive ang Branch",archive_branch_confirm_title:'I-archive ang "{{name}}"?',archive_confirm_message:"Itatago ang branch na ito ngunit maaaring maibalik mamaya.",archive_branch_error:"Hindi na-archive ang branch",unarchive_branch:"I-unarchive ang Branch",branch_archived:"Na-archive ang branch",branch_unarchived:"Na-unarchive ang branch",unarchive_branch_error:"Hindi na-unarchive ang branch",show_archived_branches:"Mga Na-archive na Branch",hide_archived_branches:"Mga Aktibong Branch",delete_category:"Burahin ang kategorya",category_name:"Pangalan ng Kategorya",category_placeholder:"Ilagay ang kategorya",category_added:"Naidagdag ang kategorya",category_deleted:"Nabura ang kategorya",category_required_error:"Kailangan ang pangalan ng kategorya",add_category_error:"Hindi naidagdag ang kategorya",delete_category_error:"Hindi nabura ang kategorya",delete_category_confirm_title:"Burahin ang kategorya?",load_error:"Hindi ma-load ang mga setting"},ga={title:"404 - Hindi Natagpuan ang Pahina",message:"Hindi umiiral ang pahinang hinintay mo.",go_home:"Pumunta sa Home",go_back:"Bumalik"},pa={pos_system:"POS System",version:"V1.0.0",all_rights_reserved:"Lahat ng karapatan ay nakalaan"},ha={search:"Maghanap sa Pangalan/Paglalarawan",email:"Email",phone:"Numero ng Telepono",address:"Address",created_before:"Nilikha Bago",created_after:"Nilikha Pagkatapos",apply_filters:"Ilapat ang Mga Filter",clear_filters:"I-clear ang Mga Filter",close:"Isara"},ba={common:Ze,sidebar:ea,login:aa,pos:ta,checkout:ra,inventory:oa,editItem:na,customers:sa,editCustomer:ia,orders:ca,editOrder:la,users:da,editUser:_a,reports:ma,settings:ua,notFound:ga,footer:pa,advanced_search:ha},fa={loading:"لوڈ ہو رہا ہے...",error:"خرابی",save:"محفوظ کریں",cancel:"منسوخ کریں",delete:"حذف کریں",edit:"ترمیم کریں",search:"تلاش کریں...",actions:"ایکشنز",add:"شامل کریں",close:"بند کریں",confirm:"تصدیق کریں",yes:"ہاں",no:"نہیں",back:"واپس",next:"اگلا",submit:"جمع کروائیں",update:"اپ ڈیٹ کریں",create:"بنائیں"},va={menu:"مینو",pos:"پوائنٹ آف سیل",inventory:"انوینٹری",customers:"گاہک",orders:"آرڈرز",reports:"رپورٹس",users:"صارفین",settings:"سیٹنگز",expand:"سائیڈ بار کو پھیلائیں",collapse:"سائیڈ بار کو سمیٹیں"},ya={title:"خوش آمدید",subtitle:"اپنے اکاؤنٹ میں سائن ان کریں",username:"صارف نام",password:"پاس ورڈ",username_placeholder:"اپنا صارف نام درج کریں",password_placeholder:"اپنا پاس ورڈ درج کریں",login_button:"سائن ان کریں",logging_in:"سائن ان ہو رہا ہے...",error:"غلط صارف نام یا پاس ورڈ",email:"ای میل",email_placeholder:"اپنا ای میل ایڈریس درج کریں",logout:"لاگ آؤٹ"},xa={search_placeholder:"مصنوعات تلاش کریں...",all_categories:"تمام",loading:"مصنوعات لوڈ ہو رہی ہیں...",error:"مصنوعات لوڈ کرنے میں ناکام",no_products:"کوئی مصنوعات نہیں ملیں",out_of_stock:"پروڈکٹ سٹاک ختم ہو گئی",stock_limit:"مزید شامل نہیں کر سکتے — سٹاک کی حد پہنچ گئی",add_error:"آئٹم کارٹ میں شامل کرنے میں ناکام",no_image:"کوئی تصویر نہیں",out_of_stock_label:"سٹاک ختم",in_stock:"{{count}} سٹاک میں",current_order:"موجودہ آرڈر",empty_cart:"آپ کی کارٹ خالی ہے",empty_cart_sub:"آرڈر شروع کرنے کے لیے مصنوعات منتخب کریں",increase_error:"مقدار بڑھانے میں ناکام",total:"کل",checkout:"چیکنگ آؤٹ کریں",clear_cart:"سب صاف کریں",clear_cart_confirm_title:"کارٹ صاف کریں؟",clear_cart_confirm_message:"کیا آپ واقعی کارٹ سے تمام آئٹمز ہٹانا چاہتے ہیں؟",clear_success:"کارٹ صاف ہو گئی",stock_limit_error:"{{count}} سے زیادہ آئٹمز شامل نہیں کر سکتے۔ صرف {{count}} سٹاک میں ہیں۔"},wa={title:"چیکنگ آؤٹ",order_summary:"آرڈر کا خلاصہ",customer_info:"گاہک کی معلومات",customer_name:"گاہک کا نام",customer_phone:"فون نمبر",customer_email:"ای میل",payment_method:"ادائیگی کا طریقہ",cash:"نقد",card:"کارڈ",subtotal:"ذیل کل",vat:"ویٹ",tax:"ٹیکس",total:"کل",complete_order:"آرڈر مکمل کریں",processing:"پروسیسنگ ہو رہی ہے...",success:"آرڈر کامیابی سے مکمل ہو گیا!",error:"آرڈر مکمل کرنے میں ناکام",back_to_pos:"پی او ایس پر واپس",order_items:"آرڈر آئٹمز",notes_label:"آرڈر نوٹس",payment_method_label:"ادائیگی کا طریقہ",each:"ہر ایک",remove_item:"آئٹم ہٹائیں",total_bhd:"کل: BHD",order_details:"آرڈر کی تفصیلات",customer_optional:"گاہک (اختیاری)",walk_in_customer_hint:"واک ان گاہک (محفوظ ہو جائے گا)",customer_name_placeholder:"گاہک کا نام درج کریں",phone_number_placeholder:"فون نمبر درج کریں",email_optional:"ای میل (اختیاری)",email_placeholder:"ای میل ایڈریس درج کریں",address_optional:"پتہ (اختیاری)",address_placeholder:"پتہ درج کریں",bank_transfer:"بینک ٹرانسفر",notes_optional:"آرڈر نوٹس (اختیاری)",notes_placeholder:"کوئی خاص ہدایات یا نوٹس...",error_name_required:"واک ان گاہکوں کے لیے گاہک کا نام ضروری ہے",error_phone_required:"واک ان گاہکوں کے لیے فون نمبر ضروری ہے",customer_saved:'گاہک "{{name}}" کامیابی سے محفوظ ہو گیا!',error_save_customer:"گاہک کی معلومات محفوظ کرنے میں ناکام",order_success:"آرڈر کامیابی سے بن گیا! آرڈر ID: {{id}}",error_create_order:"آرڈر بنانے میں ناکام",select_branch:"برانچ منتخب کریں",branch:"برانچ"},ka={title:"انوینٹری مینجمنٹ",add_item:"نیا آئٹم شامل کریں",view_grid:"گرڈ",view_list:"لسٹ",name:"نام",category:"زمرہ",price:"قیمت",stock:"سٹاک کی مقدار",description:"تفصیل",image:"تصویر (اختیاری)",select_category:"زمرہ منتخب کریں",loading_categories:"زمرے لوڈ ہو رہے ہیں...",image_selected:"تصویر منتخب ہو گئی: {{name}}",current_inventory:"موجودہ انوینٹری ({{count}} آئٹمز)",loading:"آئٹمز لوڈ ہو رہے ہیں...",error:"آئٹمز لوڈ کرنے میں ناکام",no_items:"انوینٹری میں کوئی آئٹم نہیں۔ اپنا پہلا آئٹم شامل کریں!",add_success:"آئٹم کامیابی سے شامل ہو گیا",add_error:"آئٹم شامل کرنے میں ناکام",delete_confirm_title:'"{{name}}" حذف کریں؟',delete_confirm_message:"یہ عمل واپس نہیں کیا جا سکتا۔",deleting:"{{name}} حذف ہو رہا ہے...",delete_success:"{{name}} کامیابی سے حذف ہو گیا",delete_error:"آئٹم حذف کرنے میں ناکام",archive:"آرکائیو",archive_confirm_title:'"{{name}}" آرکائیو کریں؟',archive_confirm_message:"یہ آئٹم انوینٹری سے چھپ جائے گا لیکن بعد میں بحال کیا جا سکتا ہے۔",archiving:"{{name}} آرکائیو ہو رہا ہے...",archive_success:"{{name}} کامیابی سے آرکائیو ہو گیا",archive_error:"آئٹم آرکائیو کرنے میں ناکام",unarchive:"ان آرکائیو",unarchiving:"{{name}} ان آرکائیو ہو رہا ہے...",unarchive_success:"{{name}} کامیابی سے ان آرکائیو ہو گیا",unarchive_error:"آئٹم ان آرکائیو کرنے میں ناکام",show_archived:"آرکائیو شدہ آئٹمز",hide_archived:"فعال آئٹمز",select_all:"سب منتخب کریں",search_placeholder:"آئٹمز تلاش کریں...",permanent_delete:"مستقل حذف کریں",permanent_deleting:"{{name}} مستقل حذف ہو رہا ہے...",permanent_delete_confirm_title:'"{{name}}" مستقل حذف کریں؟',permanent_delete_confirm_message:"یہ آئٹم ڈیٹا بیس سے مستقل ہٹ جائے گا۔ آرڈرز اس آئٹم کا حوالہ حذف شدہ آئٹم کے طور پر رکھیں گے۔",permanent_delete_success:"{{name}} مستقل حذف ہو گیا",permanent_delete_error:"آئٹم مستقل حذف کرنے میں ناکام",archive_selected:"منتخب کو آرکائیو کریں",update_stock:"سٹاک اپ ڈیٹ کریں",clear_selection:"انتخاب صاف کریں",selected:"آئٹم(ز) منتخب"},$a={title:"آئٹم ترمیم کریں",back_to_inventory:"انوینٹری پر واپس",loading:"آئٹم لوڈ ہو رہا ہے...",item_not_found:"آئٹم نہیں ملا",load_error:"آئٹم لوڈ کرنے میں ناکام",current_image:"موجودہ تصویر:",new_image_selected:"نئی تصویر منتخب ہو گئی: {{name}}",keep_current_image:"موجودہ تصویر برقرار رکھنے کے لیے خالی چھوڑیں",readd_button:"دوبارہ شامل کریں",category_readded:"زمرہ دوبارہ شامل ہو گیا",category_readd_error:"زمرہ دوبارہ شامل کرنے میں ناکام",update_button:"آئٹم اپ ڈیٹ کریں",update_success:"آئٹم کامیابی سے اپ ڈیٹ ہو گیا",update_error:"آئٹم اپ ڈیٹ کرنے میں ناکام"},Ia={title:"گاہک مینجمنٹ",add_customer:"نیا گاہک شامل کریں",view_grid:"گرڈ",view_list:"لسٹ",name:"نام",phone:"فون نمبر",email:"ای میل",address:"پتہ",email_placeholder:"customer@example.com",address_placeholder:"گاہک کا پتہ درج کریں",customer_list:"گاہکوں کی فہرست ({{count}} گاہک)",loading:"گاہک لوڈ ہو رہے ہیں...",error:"گاہک لوڈ کرنے میں ناکام",no_customers:"کوئی گاہک نہیں ملا۔ اپنا پہلا گاہک شامل کریں!",delete_confirm_title:'"{{name}}" حذف کریں؟',delete_confirm_message:"یہ عمل واپس نہیں کیا جا سکتا۔",deleting:"{{name}} حذف ہو رہا ہے...",delete_success:"{{name}} کامیابی سے حذف ہو گیا",delete_error:"گاہک حذف کرنے میں ناکام",creating:"گاہک بنا رہا ہے...",create_success:"{{name}} کامیابی سے بن گیا",create_error:"گاہک بنانے میں ناکام",phone_label:"فون:",email_label:"ای میل:",archive:"آرکائیو",archive_confirm_title:'"{{name}}" آرکائیو کریں؟',archive_confirm_message:"یہ گاہک چھپ جائے گا لیکن بعد میں بحال کیا جا سکتا ہے۔",archiving:"{{name}} آرکائیو ہو رہا ہے...",archive_success:"{{name}} کامیابی سے آرکائیو ہو گیا",archive_error:"گاہک آرکائیو کرنے میں ناکام",unarchive:"ان آرکائیو",unarchiving:"{{name}} ان آرکائیو ہو رہا ہے...",unarchive_success:"{{name}} کامیابی سے ان آرکائیو ہو گیا",unarchive_error:"گاہک ان آرکائیو کرنے میں ناکام",show_archived:"آرکائیو شدہ گاہک",hide_archived:"فعال گاہک",select_all:"سب منتخب کریں",search_placeholder:"گاہک تلاش کریں...",archive_selected:"منتخب کو آرکائیو کریں",archive_selected_confirm_title:"{{count}} گاہک(وں) کو آرکائیو کریں؟",archive_selected_confirm_message:"یہ منتخب گاہکوں کو آرکائیو میں منتقل کر دے گا۔ آپ انہیں بعد میں بحال کر سکتے ہیں۔",no_active_selected:"آرکائیو کرنے کے لیے کوئی فعال گاہک منتخب نہیں",archive_bulk_success:"{{count}} گاہک(وں) کو کامیابی سے آرکائیو کر دیا گیا",archive_bulk_error:"کچھ گاہکوں کو آرکائیو کرنے میں ناکام",permanent_delete:"مستقل حذف کریں",permanent_delete_confirm_title:'"{{name}}" مستقل حذف کریں؟',permanent_delete_confirm_message:"یہ گاہک مستقل ہٹ جائے گا۔ آرڈرز اس گاہک کا حوالہ حذف شدہ گاہک کے طور پر رکھیں گے۔",permanent_delete_success:"{{name}} مستقل حذف ہو گیا",permanent_delete_error:"گاہک مستقل حذف کرنے میں ناکام",selected:"گاہک(وں) منتخب"},Pa={title:"گاہک ترمیم کریں",back_to_customers:"گاہکوں پر واپس",loading:"گاہک لوڈ ہو رہا ہے...",customer_not_found:"گاہک نہیں ملا",load_error:"گاہک لوڈ کرنے میں ناکام",update_button:"گاہک اپ ڈیٹ کریں",update_success:"گاہک کامیابی سے اپ ڈیٹ ہو گیا",update_error:"گاہک اپ ڈیٹ کرنے میں ناکام"},Sa={title:"آرڈر کی تاریخ",view_grid:"گرڈ",view_list:"لسٹ",total_orders:"کل آرڈرز",completed:"مکمل",pending:"زیر التوا",cancelled:"منسوخ",total_revenue:"کل آمدنی",recent_orders:"حالیہ آرڈرز",loading:"آرڈرز لوڈ ہو رہے ہیں...",error:"آرڈرز لوڈ کرنے میں ناکام",no_orders:"کوئی آرڈر نہیں ملا۔",order_number:"آرڈر #{{id}}",view_details:"تفصیلات دیکھیں",receipt:"رسید",invoice:"انوائس",delete_order:"آرڈر حذف کریں",delete_confirm_title:"آرڈر #{{id}} حذف کریں",delete_confirm_message:"کیا آپ واقعی یہ آرڈر حذف کرنا چاہتے ہیں؟ یہ عمل واپس نہیں کیا جا سکتا اور آئٹم کی مقدار انوینٹری میں واپس ہو جائے گی۔",deleting:"آرڈر حذف ہو رہا ہے...",delete_success:"آرڈر #{{id}} کامیابی سے حذف ہو گیا",delete_error:"آرڈر حذف کرنے میں ناکام",walk_in_customer:"واک ان گاہک",more_items:"+{{count}} مزید آئٹمز",date_label:"تاریخ:",status_label:"حالت:",total_label:"کل:",customer_label:"گاہک:",search_placeholder:"آرڈرز تلاش کریں...",deleted_customer:"حذف شدہ گاہک",quotation:"کوٹیشن",delivery:"ڈلیوری نوٹ",select_all:"سب منتخب کریں",selected:"آرڈر(ز) منتخب",delete_selected:"منتخب حذف کریں"},Ca={title:"آرڈر کی تفصیلات",back_to_orders:"آرڈرز پر واپس",loading:"آرڈر لوڈ ہو رہا ہے...",not_found:"آرڈر نہیں ملا",load_error:"آرڈر لوڈ کرنے میں ناکام",order_number:"آرڈر #{{id}}",order_date:"تاریخ:",status_label:"آرڈر کی حالت",status_pending:"زیر التوا",status_completed:"مکمل",status_cancelled:"منسوخ",receipt:"رسید",open_pdf:"پی ڈی ایف کھولیں",download_pdf:"پی ڈی ایف ڈاؤن لوڈ کریں",customer_info:"گاہک کی معلومات",name_label:"نام",phone_label:"فون",email_label:"ای میل",address_label:"پتہ",customer_type:"گاہک کی قسم",walk_in_customer:"واک ان گاہک",notes_label:"آرڈر نوٹس",payment_method_label:"ادائیگی کا طریقہ",order_items:"آرڈر آئٹمز",total_amount_label:"کل رقم",failed_to_create_download_link:"ڈاؤن لوڈ لنک بنانے میں ناکام",receipt_opened:"رسید ڈاؤن لوڈ کے لیے کھول دی گئی",failed_to_open_pdf:"پی ڈی ایف کھولنے میں ناکام",failed_to_download_pdf:"پی ڈی ایف ڈاؤن لوڈ کرنے میں ناکام",failed_to_update_status:"آرڈر کی حالت اپ ڈیٹ کرنے میں ناکام",status_updated:"آرڈر کی حالت {{status}} میں اپ ڈیٹ ہو گئی",invoice:"انوائس",quotation:"کوٹیشن",delivery:"ڈلیوری",time_label:"وقت"},Ea={title:"صارف مینجمنٹ",add_user:"صارف شامل کریں",search_placeholder:"صارفین تلاش کریں...",username:"صارف نام",email:"ای میل",role:"کردار",status:"حالت",actions:"ایکشنز",edit:"ترمیم",delete:"حذف",delete_confirm:"کیا آپ واقعی یہ صارف حذف کرنا چاہتے ہیں؟",delete_success:"صارف کامیابی سے حذف ہو گیا",delete_error:"صارف حذف کرنے میں ناکام",no_users:"کوئی صارف نہیں ملا",loading:"صارفین لوڈ ہو رہے ہیں...",admin:"ایڈمن",cashier:"کیشیئر",active:"فعال",inactive:"غیر فعال",created:"بنایا گیا",updated:"اپ ڈیٹ کیا گیا",grid:"گرڈ",list:"لسٹ"},Oa={title_create:"صارف بنائیں",title_edit:"صارف ترمیم کریں",back_to_users:"صارفین پر واپس",loading:"صارف لوڈ ہو رہا ہے...",user_not_found:"صارف نہیں ملا",load_error:"صارف لوڈ کرنے میں ناکام",user_info:"صارف کی معلومات",username_label:"صارف نام *",email_label:"ای میل *",password_label:"پاس ورڈ",password_hint_new:"*",password_hint_edit:"(موجودہ برقرار رکھنے کے لیے خالی چھوڑیں)",password_placeholder_new:"پاس ورڈ درج کریں",password_placeholder_edit:"نیا پاس ورڈ درج کریں",role_label:"کردار *",create_button:"صارف بنائیں",update_button:"صارف اپ ڈیٹ کریں",create_success:"{{name}} کامیابی سے بن گیا",update_success:"{{name}} کامیابی سے اپ ڈیٹ ہو گیا",create_error:"صارف بنانے میں ناکام",update_error:"صارف اپ ڈیٹ کرنے میں ناکام"},Aa={title:"رپورٹس اور شماریات",no_permission:"آپ کو رپورٹس دیکھنے کی اجازت نہیں ہے۔",loading:"شماریات لوڈ ہو رہی ہیں...",customers:"گاہک",users:"صارفین",items:"آئٹمز",orders:"آرڈرز",total_revenue:"کل آمدنی (مکمل)",top_selling_items:"سب سے زیادہ فروخت ہونے والی آئٹمز",low_stock:"کم سٹاک",sales_last_30_days:"فروخت (پچھلے 30 دن)",recent_orders:"حالیہ آرڈرز",item:"آئٹم",quantity_sold:"فروخت شدہ مقدار",stock:"سٹاک",date:"تاریخ",total_sales:"کل فروخت",order:"آرڈر",customer:"گاہک",amount:"رقم",status:"حالت",tab_overview:"جائزہ",tab_sales:"فروخت کا تجزیہ",tab_customers:"گاہک بصیرت",export_csv:"سی ایس وی ایکسپورٹ کریں",export_customer_data:"گاہک ڈیٹا ایکسپورٹ کریں",export_order_number:"آرڈر نمبر",export_date:"تاریخ",export_branch:"برانچ",export_customer_name:"صارف کا نام",export_total_amount:"کل رقم",export_status:"اسٹیٹس",export_success:"آرڈرز کامیابی سے برآمد ہو گئے",export_error:"آرڈرز برآمد کرنے میں ناکامی",export_no_orders:"منتخب کردہ تاریخوں میں کوئی آرڈر نہیں ملا",export_excel:"Excel برآمد کریں (.xlsx)",export_excel_missing:"Excel برآمد کو فعال کرنے کے لیے 'xlsx' پیکیج انسٹال کریں (npm i xlsx)",date_range_to:"تا",sales_trend_chart:"فروخت کا رجحان (پچھلے 7 دن)",top_items_chart:"سب سے زیادہ فروخت ہونے والی آئٹمز",revenue_comparison:"آمدنی کا موازنہ",this_week:"اس ہفتے",last_week:"پچھلے ہفتے",this_month:"اس مہینے",last_month:"پچھلے مہینے",order_status_distribution:"آرڈر کی حالت کی تقسیم",top_customers:"سرفہرست گاہک (آرڈر کی تعداد کے لحاظ سے)",total_orders_label:"کل آرڈرز",total_spent:"کل خرچ",customer_metrics:"گاہک میٹرکس",total_customers:"کل گاہک",avg_order_value:"اوسط آرڈر ویلیو",orders_per_customer:"گاہک فی آرڈرز"},ja={title:"سیٹنگز",subtitle:"اپنے تجربے کو حسب ضرورت بنائیں اور اپنے کاروبار کی سیٹنگز کا نظم کریں",settings:"سیٹنگز",profile:"پروفائل",appearance:"ظاہری شکل",appearance_description:"تھیمز اور زبان کی ترجیحات کے ساتھ اپنے انٹرفیس کو ذاتی بنائیں",system:"سسٹم",system_description:"اپنے کاروبار کی تفصیلات، برانچز اور زمرے ترتیب دیں",language:"زبان",select_language:"زبان منتخب کریں",theme:"تھیم",light:"روشن",dark:"تاریک",system_theme:"سسٹم",shop_name:"دکان کا نام",currency:"کرنسی",tax_rate:"ٹیکس کی شرح (%)",receipt_footer:"رسید فوٹر",branches:"برانچز",categories:"آئٹم زمرے",add_branch:"برانچ شامل کریں",add_category:"زمرہ شامل کریں",save_success:"سیٹنگز کامیابی سے محفوظ ہو گئیں",save_error:"سیٹنگز محفوظ کرنے میں ناکام",username:"صارف نام",email:"ای میل ایڈریس",username_placeholder:"اپنا صارف نام درج کریں",email_placeholder:"اپنا ای میل درج کریں",change_password:"پاس ورڈ تبدیل کریں",current_password:"موجودہ پاس ورڈ",new_password:"نیا پاس ورڈ",confirm_password:"نیا پاس ورڈ تصدیق کریں",current_password_placeholder:"موجودہ پاس ورڈ درج کریں",new_password_placeholder:"نیا پاس ورڈ درج کریں",confirm_password_placeholder:"نیا پاس ورڈ دوبارہ درج کریں",shop_logo:"دکان کا لوگو",choose_logo:"لوگو منتخب کریں",logo_preview:"لوگو پیش نظارہ",selected_file:"منتخب: ",currency_bhd:"BHD - بحرینی دینار",currency_usd:"USD - امریکی ڈالر",currency_eur:"EUR - یورو",currency_gbp:"GBP - برطانوی پاؤنڈ",currency_sar:"SAR - سعودی ریال",shop_name_placeholder:"اپنی دکان کا نام درج کریں",shop_email:"دکان کی ای میل",shop_email_placeholder:"اپنی دکان کا ای میل ایڈریس درج کریں",vat_registration_number:"ویٹ رجسٹریشن نمبر",vat_registration_number_placeholder:"اپنا ویٹ رجسٹریشن نمبر درج کریں",receipt_footer_placeholder:"آپ کے کاروبار کا شکریہ!",bank_details:"بینک کی تفصیلات",bank_name:"بینک کا نام",bank_name_placeholder:"بینک کا نام درج کریں",bank_account_name:"اکاؤنٹ کا نام",bank_account_name_placeholder:"اکاؤنٹ کا نام درج کریں",iban_number:"آئی بان نمبر",iban_number_placeholder:"آئی بان نمبر درج کریں",account_number:"اکاؤنٹ نمبر",account_number_placeholder:"اکاؤنٹ نمبر درج کریں",swift_code:"سوئفٹ کوڈ",swift_code_placeholder:"سوئفٹ/بی آئی سی کوڈ درج کریں",active:"فعال",inactive:"غیر فعال",edit_branch:"برانچ ترمیم کریں",delete_branch:"برانچ حذف کریں",address:"پتہ:",phone:"فون:",branch_name:"برانچ کا نام",branch_updated:"برانچ اپ ڈیٹ ہو گئی",branch_created:"برانچ بن گئی",branch_deleted:"برانچ حذف ہو گئی",branch_required_error:"برانچ کا نام اور پتہ ضروری ہے",delete_branch_confirm_title:'"{{name}}" حذف کریں؟',delete_confirm_message:"یہ عمل واپس نہیں کیا جا سکتا۔",delete_branch_error:"برانچ حذف کرنے میں ناکام",archive:"آرکائیو",archive_branch:"برانچ آرکائیو کریں",archive_branch_confirm_title:'"{{name}}" آرکائیو کریں؟',archive_confirm_message:"یہ برانچ چھپ جائے گی لیکن بعد میں بحال کی جا سکتی ہے۔",archive_branch_error:"برانچ آرکائیو کرنے میں ناکام",unarchive_branch:"برانچ ان آرکائیو کریں",branch_archived:"برانچ آرکائیو ہو گئی",branch_unarchived:"برانچ ان آرکائیو ہو گئی",unarchive_branch_error:"برانچ ان آرکائیو کرنے میں ناکام",show_archived_branches:"آرکائیو شدہ برانچز",hide_archived_branches:"فعال برانچز",delete_category:"زمرہ حذف کریں",category_name:"زمرہ کا نام",category_placeholder:"زمرہ درج کریں",category_added:"زمرہ شامل ہو گیا",category_deleted:"زمرہ حذف ہو گیا",category_required_error:"زمرہ کا نام ضروری ہے",add_category_error:"زمرہ شامل کرنے میں ناکام",delete_category_error:"زمرہ حذف کرنے میں ناکام",delete_category_confirm_title:"زمرہ حذف کریں؟",load_error:"سیٹنگز لوڈ کرنے میں ناکام"},Ba={title:"404 - صفحہ نہیں ملا",message:"جو صفحہ آپ تلاش کر رہے ہیں وہ موجود نہیں ہے۔",go_home:"ہوم پر جائیں",go_back:"واپس جائیں"},Ta={pos_system:"پی او ایس سسٹم",version:"V1.0.0",all_rights_reserved:"جميع حقوق محفوظہ"},Na={search:"نام/تفصیل میں تلاش کریں",email:"ای میل",phone:"فون نمبر",address:"پتہ",created_before:"پہلے بنایا گیا",created_after:"بعد میں بنایا گیا",apply_filters:"فلٹرز لگائیں",clear_filters:"فلٹرز صاف کریں",close:"بند کریں"},La={common:fa,sidebar:va,login:ya,pos:xa,checkout:wa,inventory:ka,editItem:$a,customers:Ia,editCustomer:Pa,orders:Sa,editOrder:Ca,users:Ea,editUser:Oa,reports:Aa,settings:ja,notFound:Ba,footer:Ta,advanced_search:Na},Ra={loading:"در حال بارگذاری...",error:"خطا",save:"ذخیره",cancel:"لغو",delete:"حذف",edit:"ویرایش",search:"جستجو...",actions:"عملیات",add:"افزودن",close:"بستن",confirm:"تأیید",yes:"بله",no:"خیر",back:"برگشت",next:"بعدی",submit:"ارسال",update:"به‌روزرسانی",create:"ایجاد"},Ma={menu:"منو",pos:"نقطه فروش",inventory:"انبار",customers:"مشتریان",orders:"سفارش‌ها",reports:"گزارش‌ها",users:"کاربران",settings:"تنظیمات",expand:"گسترش نوار کناری",collapse:"جمع کردن نوار کناری"},Da={title:"خوش آمدید",subtitle:"به حساب خود وارد شوید",username:"نام کاربری",password:"رمز عبور",username_placeholder:"نام کاربری خود را وارد کنید",password_placeholder:"رمز عبور خود را وارد کنید",login_button:"ورود",logging_in:"در حال ورود...",error:"نام کاربری یا رمز عبور اشتباه است",email:"ایمیل",email_placeholder:"آدرس ایمیل خود را وارد کنید",logout:"خروج"},Ua={search_placeholder:"جستجوی محصولات...",all_categories:"همه",loading:"در حال بارگذاری محصولات...",error:"بارگذاری محصولات ناموفق بود",no_products:"محصولی یافت نشد",out_of_stock:"محصول موجود نیست",stock_limit:"نمی‌توان بیشتر اضافه کرد — سقف موجودی رسیده است",add_error:"افزودن آیتم به سبد خرید ناموفق بود",no_image:"بدون تصویر",out_of_stock_label:"موجود نیست",in_stock:"{{count}} موجود در انبار",current_order:"سفارش فعلی",empty_cart:"سبد خرید شما خالی است",empty_cart_sub:"محصولاتی را انتخاب کنید تا سفارش را شروع کنید",increase_error:"افزایش تعداد ممکن نیست",total:"جمع کل",checkout:"ادامه به پرداخت",clear_cart:"پاک کردن همه",clear_cart_confirm_title:"سبد خرید پاک شود؟",clear_cart_confirm_message:"آیا مطمئن هستید که می‌خواهید همه آیتم‌ها را از سبد خرید حذف کنید؟",clear_success:"سبد خرید پاک شد",stock_limit_error:"نمی‌توان بیش از {{count}} آیتم اضافه کرد. تنها {{count}} در انبار موجود است."},Fa={title:"پرداخت",order_summary:"خلاصه سفارش",customer_info:"اطلاعات مشتری",customer_name:"نام مشتری",customer_phone:"شماره تلفن",customer_email:"ایمیل",payment_method:"روش پرداخت",cash:"نقدی",card:"کارت",subtotal:"جمع جزء",vat:"ارزش افزوده",tax:"مالیات",total:"جمع کل",complete_order:"تکمیل سفارش",processing:"در حال پردازش...",success:"سفارش با موفقیت تکمیل شد!",error:"تکمیل سفارش ناموفق بود",back_to_pos:"بازگشت به نقطه فروش",order_items:"آیتم‌های سفارش",notes_label:"یادداشت‌های سفارش",payment_method_label:"روش پرداخت",each:"هر کدام",remove_item:"حذف آیتم",total_bhd:"جمع کل: BHD",order_details:"جزئیات سفارش",customer_optional:"مشتری (اختیاری)",walk_in_customer_hint:"مشتری حضوری (ذخیره خواهد شد)",customer_name_placeholder:"نام مشتری را وارد کنید",phone_number_placeholder:"شماره تلفن را وارد کنید",email_optional:"ایمیل (اختیاری)",email_placeholder:"آدرس ایمیل را وارد کنید",address_optional:"آدرس (اختیاری)",address_placeholder:"آدرس را وارد کنید",bank_transfer:"انتقال بانکی",notes_optional:"یادداشت‌های سفارش (اختیاری)",notes_placeholder:"هر دستورالعمل یا یادداشت خاص...",error_name_required:"نام مشتری برای مشتریان حضوری الزامی است",error_phone_required:"شماره تلفن برای مشتریان حضوری الزامی است",customer_saved:'مشتری "{{name}}" با موفقیت ذخیره شد!',error_save_customer:"ذخیره اطلاعات مشتری ناموفق بود",order_success:"سفارش با موفقیت ایجاد شد! شناسه سفارش: {{id}}",error_create_order:"ایجاد سفارش ناموفق بود",select_branch:"انتخاب شعبه",branch:"شعبه"},Ha={title:"مدیریت انبار",add_item:"افزودن آیتم جدید",view_grid:"شبکه‌ای",view_list:"لیستی",name:"نام",category:"دسته‌بندی",price:"قیمت",stock:"مقدار موجودی",description:"توضیحات",image:"تصویر (اختیاری)",select_category:"انتخاب دسته‌بندی",loading_categories:"در حال بارگذاری دسته‌بندی‌ها...",image_selected:"تصویر انتخاب شد: {{name}}",current_inventory:"انبار فعلی ({{count}} آیتم)",loading:"در حال بارگذاری آیتم‌ها...",error:"بارگذاری آیتم‌ها ناموفق بود",no_items:"آیتمی در انبار وجود ندارد. اولین آیتم خود را اضافه کنید!",add_success:"آیتم با موفقیت اضافه شد",add_error:"افزودن آیتم ناموفق بود",delete_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"این عمل قابل بازگشت نیست.",deleting:"در حال حذف {{name}}...",delete_success:"{{name}} با موفقیت حذف شد",delete_error:"حذف آیتم ناموفق بود",archive:"آرشیو",archive_confirm_title:'آرشیو "{{name}}"؟',archive_confirm_message:"این آیتم از انبار مخفی خواهد شد اما بعداً قابل بازیابی است.",archiving:"در حال آرشیو {{name}}...",archive_success:"{{name}} با موفقیت آرشیو شد",archive_error:"آرشیو آیتم ناموفق بود",unarchive:"خارج از آرشیو",unarchiving:"در حال خارج کردن {{name}} از آرشیو...",unarchive_success:"{{name}} با موفقیت خارج از آرشیو شد",unarchive_error:"خارج کردن آیتم از آرشیو ناموفق بود",show_archived:"آیتم‌های آرشیو شده",hide_archived:"آیتم‌های فعال",select_all:"انتخاب همه",search_placeholder:"جستجوی آیتم‌ها...",permanent_delete:"حذف دائمی",permanent_deleting:"در حال حذف دائمی {{name}}...",permanent_delete_confirm_title:'حذف دائمی "{{name}}"؟',permanent_delete_confirm_message:"این آیتم به طور دائم از پایگاه داده حذف خواهد شد. سفارش‌ها همچنان به این آیتم به عنوان آیتم حذف شده ارجاع خواهند داد.",permanent_delete_success:"{{name}} به طور دائم حذف شد",permanent_delete_error:"حذف دائمی آیتم ناموفق بود",archive_selected:"آرشیو موارد انتخاب شده",update_stock:"به‌روزرسانی موجودی",clear_selection:"پاک کردن انتخاب",selected:"آیتم(ها) انتخاب شده"},za={title:"ویرایش آیتم",back_to_inventory:"بازگشت به انبار",loading:"در حال بارگذاری آیتم...",item_not_found:"آیتم یافت نشد",load_error:"بارگذاری آیتم ناموفق بود",current_image:"تصویر فعلی:",new_image_selected:"تصویر جدید انتخاب شد: {{name}}",keep_current_image:"برای حفظ تصویر فعلی خالی بگذارید",readd_button:"دوباره اضافه کنید",category_readded:"دسته‌بندی دوباره اضافه شد",category_readd_error:"دوباره اضافه کردن دسته‌بندی ناموفق بود",update_button:"به‌روزرسانی آیتم",update_success:"آیتم با موفقیت به‌روزرسانی شد",update_error:"به‌روزرسانی آیتم ناموفق بود"},qa={title:"مدیریت مشتریان",add_customer:"افزودن مشتری جدید",view_grid:"شبکه‌ای",view_list:"لیستی",name:"نام",phone:"شماره تلفن",email:"ایمیل",address:"آدرس",email_placeholder:"customer@example.com",address_placeholder:"آدرس مشتری را وارد کنید",customer_list:"لیست مشتریان ({{count}} مشتری)",loading:"در حال بارگذاری مشتریان...",error:"بارگذاری مشتریان ناموفق بود",no_customers:"مشتری یافت نشد. اولین مشتری خود را اضافه کنید!",delete_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"این عمل قابل بازگشت نیست.",deleting:"در حال حذف {{name}}...",delete_success:"{{name}} با موفقیت حذف شد",delete_error:"حذف مشتری ناموفق بود",creating:"در حال ایجاد مشتری...",create_success:"{{name}} با موفقیت ایجاد شد",create_error:"ایجاد مشتری ناموفق بود",phone_label:"تلفن:",email_label:"ایمیل:",archive:"آرشیو",archive_confirm_title:'آرشیو "{{name}}"؟',archive_confirm_message:"این مشتری مخفی خواهد شد اما بعداً قابل بازیابی است.",archiving:"در حال آرشیو {{name}}...",archive_success:"{{name}} با موفقیت آرشیو شد",archive_error:"آرشیو مشتری ناموفق بود",unarchive:"خارج از آرشیو",unarchiving:"در حال خارج کردن {{name}} از آرشیو...",unarchive_success:"{{name}} با موفقیت خارج از آرشیو شد",unarchive_error:"خارج کردن مشتری از آرشیو ناموفق بود",show_archived:"مشتریان آرشیو شده",hide_archived:"مشتریان فعال",select_all:"انتخاب همه",search_placeholder:"جستجوی مشتریان...",archive_selected:"آرشیو موارد انتخاب شده",archive_selected_confirm_title:"آرشیو {{count}} مشتری؟",archive_selected_confirm_message:"این کار مشتریان انتخاب شده را به آرشیو منتقل می‌کند. بعداً می‌توانید آن‌ها را بازیابی کنید.",no_active_selected:"هیچ مشتری فعالی برای آرشیو انتخاب نشده است",archive_bulk_success:"{{count}} مشتری با موفقیت آرشیو شدند",archive_bulk_error:"آرشیو برخی مشتریان ناموفق بود",permanent_delete:"حذف دائمی",permanent_delete_confirm_title:'حذف دائمی "{{name}}"؟',permanent_delete_confirm_message:"این مشتری به طور دائم حذف خواهد شد. سفارش‌ها همچنان به این مشتری به عنوان مشتری حذف شده ارجاع خواهند داد.",permanent_delete_success:"{{name}} به طور دائم حذف شد",permanent_delete_error:"حذف دائمی مشتری ناموفق بود",selected:"مشتری(ها) انتخاب شده"},Va={title:"ویرایش مشتری",back_to_customers:"بازگشت به مشتریان",loading:"در حال بارگذاری مشتری...",customer_not_found:"مشتری یافت نشد",load_error:"بارگذاری مشتری ناموفق بود",update_button:"به‌روزرسانی مشتری",update_success:"مشتری با موفقیت به‌روزرسانی شد",update_error:"به‌روزرسانی مشتری ناموفق بود"},Ka={title:"تاریخچه سفارش‌ها",view_grid:"شبکه‌ای",view_list:"لیستی",total_orders:"کل سفارش‌ها",completed:"تکمیل شده",pending:"در انتظار",cancelled:"لغو شده",total_revenue:"کل درآمد",recent_orders:"سفارش‌های اخیر",loading:"در حال بارگذاری سفارش‌ها...",error:"بارگذاری سفارش‌ها ناموفق بود",no_orders:"سفارشی یافت نشد.",order_number:"سفارش شماره {{id}}",view_details:"مشاهده جزئیات",receipt:"رسید",invoice:"فاکتور",delete_order:"حذف سفارش",delete_confirm_title:"حذف سفارش شماره {{id}}",delete_confirm_message:"آیا مطمئن هستید که می‌خواهید این سفارش را حذف کنید؟ این عمل قابل بازگشت نیست و مقدار آیتم‌ها به انبار بازگردانده می‌شود.",deleting:"در حال حذف سفارش...",delete_success:"سفارش شماره {{id}} با موفقیت حذف شد",delete_error:"حذف سفارش ناموفق بود",walk_in_customer:"مشتری حضوری",more_items:"+{{count}} آیتم دیگر",date_label:"تاریخ:",status_label:"وضعیت:",total_label:"جمع کل:",customer_label:"مشتری:",search_placeholder:"جستجوی سفارش‌ها...",deleted_customer:"مشتری حذف شده",quotation:"پیش‌فاکتور",delivery:"یادداشت تحویل",select_all:"انتخاب همه",selected:"سفارش(ها) انتخاب شده",delete_selected:"حذف موارد انتخاب شده"},Wa={title:"جزئیات سفارش",back_to_orders:"بازگشت به سفارش‌ها",loading:"در حال بارگذاری سفارش...",not_found:"سفارش یافت نشد",load_error:"بارگذاری سفارش ناموفق بود",order_number:"سفارش شماره {{id}}",order_date:"تاریخ:",status_label:"وضعیت سفارش",status_pending:"در انتظار",status_completed:"تکمیل شده",status_cancelled:"لغو شده",receipt:"رسید",open_pdf:"باز کردن PDF",download_pdf:"دانلود PDF",customer_info:"اطلاعات مشتری",name_label:"نام",phone_label:"تلفن",email_label:"ایمیل",address_label:"آدرس",customer_type:"نوع مشتری",walk_in_customer:"مشتری حضوری",notes_label:"یادداشت‌های سفارش",payment_method_label:"روش پرداخت",order_items:"آیتم‌های سفارش",total_amount_label:"مبلغ کل",failed_to_create_download_link:"ایجاد لینک دانلود ناموفق بود",receipt_opened:"رسید برای دانلود باز شد",failed_to_open_pdf:"باز کردن PDF ناموفق بود",failed_to_download_pdf:"دانلود PDF ناموفق بود",failed_to_update_status:"به‌روزرسانی وضعیت سفارش ناموفق بود",status_updated:"وضعیت سفارش به {{status}} به‌روزرسانی شد",invoice:"فاکتور",quotation:"پیش‌فاکتور",delivery:"تحویل",time_label:"زمان"},Ga={title:"مدیریت کاربران",add_user:"افزودن کاربر",search_placeholder:"جستجوی کاربران...",username:"نام کاربری",email:"ایمیل",role:"نقش",status:"وضعیت",actions:"عملیات",edit:"ویرایش",delete:"حذف",delete_confirm:"آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟",delete_success:"کاربر با موفقیت حذف شد",delete_error:"حذف کاربر ناموفق بود",no_users:"کاربری یافت نشد",loading:"در حال بارگذاری کاربران...",admin:"مدیر",cashier:"صندوقدار",active:"فعال",inactive:"غیرفعال",created:"ایجاد شده",updated:"به‌روزرسانی شده",grid:"شبکه‌ای",list:"لیستی"},Qa={title_create:"ایجاد کاربر",title_edit:"ویرایش کاربر",back_to_users:"بازگشت به کاربران",loading:"در حال بارگذاری کاربر...",user_not_found:"کاربر یافت نشد",load_error:"بارگذاری کاربر ناموفق بود",user_info:"اطلاعات کاربر",username_label:"نام کاربری *",email_label:"ایمیل *",password_label:"رمز عبور",password_hint_new:"*",password_hint_edit:"(برای حفظ فعلی خالی بگذارید)",password_placeholder_new:"رمز عبور را وارد کنید",password_placeholder_edit:"رمز عبور جدید را وارد کنید",role_label:"نقش *",create_button:"ایجاد کاربر",update_button:"به‌روزرسانی کاربر",create_success:"{{name}} با موفقیت ایجاد شد",update_success:"{{name}} با موفقیت به‌روزرسانی شد",create_error:"ایجاد کاربر ناموفق بود",update_error:"به‌روزرسانی کاربر ناموفق بود"},Ja={title:"گزارش‌ها و آمار",no_permission:"شما اجازه مشاهده گزارش‌ها را ندارید.",loading:"در حال بارگذاری آمار...",customers:"مشتریان",users:"کاربران",items:"آیتم‌ها",orders:"سفارش‌ها",total_revenue:"کل درآمد (تکمیل شده)",top_selling_items:"پرفروش‌ترین آیتم‌ها",low_stock:"موجودی کم",sales_last_30_days:"فروش (۳۰ روز اخیر)",recent_orders:"سفارش‌های اخیر",item:"آیتم",quantity_sold:"تعداد فروش رفته",stock:"موجودی",date:"تاریخ",total_sales:"کل فروش",order:"سفارش",customer:"مشتری",amount:"مبلغ",status:"وضعیت",tab_overview:"بررسی اجمالی",tab_sales:"تحلیل فروش",tab_customers:"بینش مشتریان",export_csv:"خروجی CSV",export_customer_data:"خروجی اطلاعات مشتریان",export_order_number:"شماره سفارش",export_date:"تاریخ",export_branch:"شعبه",export_customer_name:"نام مشتری",export_total_amount:"مبلغ کل",export_status:"وضعیت",export_success:"سفارش‌ها با موفقیت صادر شدند",export_error:"صادر کردن سفارش‌ها موفق نبود",export_no_orders:"در بازه زمانی انتخاب شده سفارشی یافت نشد",export_excel:"خروجی Excel (.xlsx)",export_excel_missing:"برای فعال کردن خروجی Excel پکیج 'xlsx' را نصب کنید (npm i xlsx)",date_range_to:"تا",sales_trend_chart:"روند فروش (۷ روز اخیر)",top_items_chart:"پرفروش‌ترین آیتم‌ها",revenue_comparison:"مقایسه درآمد",this_week:"این هفته",last_week:"هفته گذشته",this_month:"این ماه",last_month:"ماه گذشته",order_status_distribution:"توزیع وضعیت سفارش",top_customers:"مشتریان برتر (بر اساس تعداد سفارش)",total_orders_label:"کل سفارش‌ها",total_spent:"کل هزینه شده",customer_metrics:"معیارهای مشتری",total_customers:"کل مشتریان",avg_order_value:"میانگین ارزش سفارش",orders_per_customer:"سفارش به ازای هر مشتری"},Ya={title:"تنظیمات",subtitle:"تجربه خود را شخصی‌سازی کنید و تنظیمات کسب‌وکار خود را مدیریت کنید",settings:"تنظیمات",profile:"پروفایل",appearance:"ظاهر",appearance_description:"رابط خود را با تم‌ها و ترجیحات زبانی شخصی‌سازی کنید",system:"سیستم",system_description:"جزئیات کسب‌وکار، شعبه‌ها و دسته‌بندی‌ها را تنظیم کنید",language:"زبان",select_language:"انتخاب زبان",theme:"تم",light:"روشن",dark:"تاریک",system_theme:"سیستم",shop_name:"نام فروشگاه",currency:"واحد پول",tax_rate:"نرخ مالیات (%)",receipt_footer:"پاورقی رسید",branches:"شعبه‌ها",categories:"دسته‌بندی‌های آیتم",add_branch:"افزودن شعبه",add_category:"افزودن دسته‌بندی",save_success:"تنظیمات با موفقیت ذخیره شد",save_error:"ذخیره تنظیمات ناموفق بود",username:"نام کاربری",email:"آدرس ایمیل",username_placeholder:"نام کاربری خود را وارد کنید",email_placeholder:"ایمیل خود را وارد کنید",change_password:"تغییر رمز عبور",current_password:"رمز عبور فعلی",new_password:"رمز عبور جدید",confirm_password:"تأیید رمز عبور جدید",current_password_placeholder:"رمز عبور فعلی را وارد کنید",new_password_placeholder:"رمز عبور جدید را وارد کنید",confirm_password_placeholder:"رمز عبور جدید را دوباره وارد کنید",shop_logo:"لوگوی فروشگاه",choose_logo:"انتخاب لوگو",logo_preview:"پیش‌نمایش لوگو",selected_file:"انتخاب شده: ",currency_bhd:"BHD - دینار بحرین",currency_usd:"USD - دلار آمریکا",currency_eur:"EUR - یورو",currency_gbp:"GBP - پوند انگلیس",currency_sar:"SAR - ریال سعودی",shop_name_placeholder:"نام فروشگاه خود را وارد کنید",shop_email:"ایمیل فروشگاه",shop_email_placeholder:"آدرس ایمیل فروشگاه را وارد کنید",vat_registration_number:"شماره ثبت ارزش افزوده",vat_registration_number_placeholder:"شماره ثبت ارزش افزوده خود را وارد کنید",receipt_footer_placeholder:"از کسب‌وکار شما سپاسگزاریم!",bank_details:"جزئیات بانکی",bank_name:"نام بانک",bank_name_placeholder:"نام بانک را وارد کنید",bank_account_name:"نام حساب",bank_account_name_placeholder:"نام حساب را وارد کنید",iban_number:"شماره IBAN",iban_number_placeholder:"شماره IBAN را وارد کنید",account_number:"شماره حساب",account_number_placeholder:"شماره حساب را وارد کنید",swift_code:"کد SWIFT",swift_code_placeholder:"کد SWIFT/BIC را وارد کنید",active:"فعال",inactive:"غیرفعال",edit_branch:"ویرایش شعبه",delete_branch:"حذف شعبه",address:"آدرس:",phone:"تلفن:",branch_name:"نام شعبه",branch_updated:"شعبه به‌روزرسانی شد",branch_created:"شعبه ایجاد شد",branch_deleted:"شعبه حذف شد",branch_required_error:"نام و آدرس شعبه الزامی است",delete_branch_confirm_title:'حذف "{{name}}"؟',delete_confirm_message:"این عمل قابل بازگشت نیست.",delete_branch_error:"حذف شعبه ناموفق بود",archive:"آرشیو",archive_branch:"آرشیو شعبه",archive_branch_confirm_title:'آرشیو "{{name}}"؟',archive_confirm_message:"این شعبه مخفی خواهد شد اما بعداً قابل بازیابی است.",archive_branch_error:"آرشیو شعبه ناموفق بود",unarchive_branch:"خارج از آرشیو شعبه",branch_archived:"شعبه آرشیو شد",branch_unarchived:"شعبه از آرشیو خارج شد",unarchive_branch_error:"خارج کردن شعبه از آرشیو ناموفق بود",show_archived_branches:"شعبه‌های آرشیو شده",hide_archived_branches:"شعبه‌های فعال",delete_category:"حذف دسته‌بندی",category_name:"نام دسته‌بندی",category_placeholder:"دسته‌بندی را وارد کنید",category_added:"دسته‌بندی اضافه شد",category_deleted:"دسته‌بندی حذف شد",category_required_error:"نام دسته‌بندی الزامی است",add_category_error:"افزودن دسته‌بندی ناموفق بود",delete_category_error:"حذف دسته‌بندی ناموفق بود",delete_category_confirm_title:"حذف دسته‌بندی؟",load_error:"بارگذاری تنظیمات ناموفق بود"},Xa={title:"۴۰۴ - صفحه یافت نشد",message:"صفحه‌ای که به دنبال آن هستید وجود ندارد.",go_home:"رفتن به خانه",go_back:"برگشت"},Za={pos_system:"سیستم نقطه فروش",version:"V1.0.0",all_rights_reserved:"تمامی حقوق محفوظ است"},et={search:"جستجو در نام/توضیحات",email:"ایمیل",phone:"شماره تلفن",address:"آدرس",created_before:"ایجاد شده قبل از",created_after:"ایجاد شده بعد از",apply_filters:"اعمال فیلترها",clear_filters:"پاک کردن فیلترها",close:"بستن"},at={common:Ra,sidebar:Ma,login:Da,pos:Ua,checkout:Fa,inventory:Ha,editItem:za,customers:qa,editCustomer:Va,orders:Ka,editOrder:Wa,users:Ga,editUser:Qa,reports:Ja,settings:Ya,notFound:Xa,footer:Za,advanced_search:et};G.use(Q).use(J).init({resources:{en:{translation:Be},ar:{translation:Xe},tl:{translation:ba},ur:{translation:La},fa:{translation:at}},fallbackLng:"en",interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const tt=n.createContext(void 0),rt=({children:e})=>{const[t,r]=n.useState([]),i=(_,s=1)=>{const m=t.find(g=>g.product.itemid===_.itemid),u=m?m.quantity:0;if(u+s>_.stock_quantity){const g=`Cannot add ${s} more items. Only ${_.stock_quantity-u} available in stock.`;throw B.error(g),new Error(g)}r(g=>m?g.map(k=>k.product.itemid===_.itemid?{...k,quantity:k.quantity+s}:k):[...g,{product:_,quantity:s}]);try{const g=s,k=_.name||"Item",C=g>1?`${g} x ${k}`:k;B.success(`${C} added to cart`)}catch(g){console.error("Toast error while adding to cart",g)}},o=(_,s)=>{r(m=>m.map(u=>u.product.itemid===_?{...u,note:s}:u))},d=(_,s)=>{r(m=>m.map(u=>u.product.itemid===_?{...u,overridePrice:typeof s=="number"?s:void 0}:u))},f=_=>{r(s=>s.filter(m=>m.product.itemid!==_))},h=(_,s)=>{if(s<=0)f(_);else{const m=t.find(u=>u.product.itemid===_);if(m&&s>m.product.stock_quantity)throw new Error(`Cannot set quantity above available stock (${m.product.stock_quantity}).`);r(u=>u.map(b=>b.product.itemid===_?{...b,quantity:s}:b))}},l=()=>r([]),v=t.reduce((_,s)=>_+(typeof s.overridePrice=="number"?Number(s.overridePrice):Number(s.product.price))*s.quantity,0);return a.jsx(tt.Provider,{value:{cart:t,addToCart:i,updateItemNote:o,updateItemPrice:d,removeFromCart:f,updateQuantity:h,clearCart:l,total:v},children:e})},ot={mode:"light",colors:{primary:"#6366f1",secondary:"#ec4899",background:"linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fce7f3 100%)",surface:"rgba(255, 255, 255, 0.65)",surface2:"rgba(255, 255, 255, 0.95)",text:"#1e293b",textSecondary:"#64748b",border:"rgba(15, 23, 42, 0.08)",accent:"#8b5cf6",glass:"rgba(255, 255, 255, 0.25)",glassBorder:"rgba(15, 23, 42, 0.12)"},shadows:{small:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",medium:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",large:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",glow:"0 0 20px rgba(99, 102, 241, 0.4)"},gradients:{primary:"linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",secondary:"linear-gradient(135deg, #ec4899 0%, #d946ef 100%)",background:"linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fce7f3 100%)"}},nt={mode:"dark",colors:{primary:"#8B5CF6",secondary:"#EC4899",background:"linear-gradient(135deg, #434343 0%, #1a1a1a 50%, #000000 100%)",surface:"rgba(10, 10, 10, 0.85)",surface2:"rgba(15, 15, 15, 0.95)",text:"#FFFFFF",textSecondary:"#A1A1AA",border:"rgba(255, 255, 255, 0.1)",accent:"#8B5CF6",glass:"rgba(0, 0, 0, 0.7)",glassBorder:"rgba(255, 255, 255, 0.2)"},shadows:{small:"0 6px 10px -4px rgba(0, 0, 0, 0.6)",medium:"0 14px 24px -6px rgba(0, 0, 0, 0.7)",large:"0 24px 40px -12px rgba(0, 0, 0, 0.8)",glow:"0 0 30px rgba(139, 92, 246, 0.3)"},gradients:{primary:"linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",secondary:"linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)",background:"linear-gradient(135deg, #434343 0%, #1a1a1a 50%, #000000 100%)"}},H=n.createContext(void 0),E=({children:e})=>{const[t,r]=n.useState(()=>{const l=localStorage.getItem("theme");return l?l==="system"?"system":l==="dark"?"dark":"light":"light"}),[i,o]=n.useState(()=>t==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches:t==="dark");n.useEffect(()=>{let l=null;const v=_=>o(_.matches);return t==="system"&&typeof window<"u"&&window.matchMedia?(l=window.matchMedia("(prefers-color-scheme: dark)"),o(l.matches),l.addEventListener?l.addEventListener("change",v):l.addListener(v)):o(t==="dark"),()=>{l&&(l.removeEventListener?l.removeEventListener("change",v):l.removeListener(v))}},[t]);const d=i?{...nt,mode:t}:{...ot,mode:t};n.useEffect(()=>{localStorage.setItem("theme",t)},[t]);const f=()=>r(l=>l==="dark"?"light":"dark"),h=l=>r(l);return a.jsx(H.Provider,{value:{theme:d,toggleTheme:f,setMode:h,mode:t,isDark:i},children:a.jsx(X,{theme:d,children:e})})},$="http://localhost:5000";class P extends Error{status;constructor(t,r){super(r),this.name="ApiError",this.status=t}}const A=()=>localStorage.getItem("token"),c=async(e,t={})=>{const r=A(),i={...t.headers};r&&(i.Authorization=`Bearer ${r}`),t.body instanceof FormData||(i["Content-Type"]="application/json");try{const o=await fetch(`${$}${e}`,{...t,headers:i}),d=await o.json();if(!o.ok)throw new P(o.status,d.message||"Request failed");return d}catch(o){throw o instanceof P?o:(console.error("API Request Error:",o),new P(500,o instanceof Error?o.message:"Network error"))}},st={login:async(e,t)=>c("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})}),refresh:async()=>c("/api/auth/refresh",{method:"POST"})},Er={getAll:async e=>{const t=new URLSearchParams;e?.category&&t.append("category",e.category),e?.search&&t.append("search",e.search),e?.includeArchived&&t.append("includeArchived","true"),e?.archivedOnly&&t.append("archivedOnly","true");const r=t.toString();return c(`/api/items${r?`?${r}`:""}`)},getById:async e=>c(`/api/items/${e}`),create:async e=>c("/api/items",{method:"POST",body:e}),update:async(e,t)=>c(`/api/items/${e}`,{method:"PUT",body:t}),delete:async e=>c(`/api/items/${e}`,{method:"DELETE"}),unarchive:async e=>c(`/api/items/${e}/unarchive`,{method:"PUT"}),permanentDelete:async e=>c(`/api/items/${e}/permanent`,{method:"DELETE"})},it={getAll:async()=>c("/api/users"),getById:async e=>c(`/api/users/${e}`),create:async e=>c("/api/users",{method:"POST",body:JSON.stringify(e)}),update:async(e,t)=>c(`/api/users/${e}`,{method:"PUT",body:JSON.stringify(t)}),delete:async e=>c(`/api/users/${e}`,{method:"DELETE"})},Or={getAll:async e=>{const t=new URLSearchParams;e?.archivedOnly&&t.append("archivedOnly","true");const r=t.toString();return c(`/api/customers${r?`?${r}`:""}`)},getById:async e=>c(`/api/customers/${e}`),create:async e=>c("/api/customers",{method:"POST",body:JSON.stringify(e)}),update:async(e,t)=>c(`/api/customers/${e}`,{method:"PUT",body:JSON.stringify(t)}),delete:async e=>c(`/api/customers/${e}`,{method:"DELETE"}),unarchive:async e=>c(`/api/customers/${e}/unarchive`,{method:"PUT"}),permanentDelete:async e=>c(`/api/customers/${e}/permanent`,{method:"DELETE"})},ct={getAll:async()=>c("/api/orders"),getById:async e=>c(`/api/orders/${e}`),create:async e=>c("/api/orders",{method:"POST",body:JSON.stringify(e)}),update:async(e,t)=>c(`/api/orders/${e}`,{method:"PUT",body:JSON.stringify(t)}),delete:async e=>c(`/api/orders/${e}`,{method:"DELETE"}),getReceiptUrl:e=>`${$}/api/orders/${e}/receipt`,getReceiptHtml:async e=>{const t=A();return(await fetch(`${$}/api/orders/${e}/receipt`,{headers:t?{Authorization:`Bearer ${t}`}:{}})).text()},openReceiptInNewTab:async e=>{const t=await c(`/api/orders/${e}/receipt/token`,{method:"POST"});return t.success&&t.data&&window.open(t.data.redirectUrl,"_blank"),!0},createReceiptDownloadToken:async e=>c(`/api/orders/${e}/receipt/token`,{method:"POST"}),getReceiptPdfUrl:e=>`${$}/api/orders/${e}/receipt.pdf`,getReceiptPdfBlob:async e=>{const t=A();return(await fetch(`${$}/api/orders/${e}/receipt.pdf`,{headers:t?{Authorization:`Bearer ${t}`}:{}})).blob()},openReceiptPdfInNewTab:async e=>(window.open(`${$}/api/orders/${e}/receipt.pdf`,"_blank"),!0),downloadReceiptPdf:async(e,t)=>{const r=await ct.getReceiptPdfBlob(e),i=window.URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=t||`receipt-${e}.pdf`,document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(i),document.body.removeChild(o)}},Ar={getSummary:async(e=10)=>c(`/api/reports?threshold=${e}`),getOrdersByDateRange:async(e,t)=>c(`/api/reports/orders?startDate=${encodeURIComponent(e)}&endDate=${encodeURIComponent(t)}`)},z={getSettings:async()=>c("/api/settings"),updateSettings:async e=>e instanceof FormData?c("/api/settings",{method:"PUT",body:e}):c("/api/settings",{method:"PUT",body:JSON.stringify(e)}),getBranches:async e=>{const t=new URLSearchParams;e?.archivedOnly&&t.append("archivedOnly","true");const r=t.toString();return c(`/api/settings/branches${r?`?${r}`:""}`)},createBranch:async e=>c("/api/settings/branches",{method:"POST",body:JSON.stringify(e)}),updateBranch:async(e,t)=>c(`/api/settings/branches/${e}`,{method:"PUT",body:JSON.stringify(t)}),deleteBranch:async e=>c(`/api/settings/branches/${e}`,{method:"DELETE"}),unarchiveBranch:async e=>c(`/api/settings/branches/${e}/unarchive`,{method:"PUT"}),getCategories:async()=>c("/api/settings/categories"),createCategory:async e=>c("/api/settings/categories",{method:"POST",body:JSON.stringify(e)}),deleteCategory:async e=>c(`/api/settings/categories/${e}`,{method:"DELETE"})},q=n.createContext(void 0),lt=({children:e})=>{const[t,r]=n.useState(null),[i,o]=n.useState(null),[d,f]=n.useState(!0),h=async s=>{console.log("loadUserProfile called for:",s);try{const m=await it.getById(s);console.log("User profile response:",m),m.success&&m.data&&r(m.data)}catch(m){console.error("Error loading user profile:",m),localStorage.removeItem("token"),localStorage.removeItem("userId"),o(null),r(null)}};n.useEffect(()=>{let s=!0;return(async()=>{try{console.log("Initializing auth...");const u=localStorage.getItem("token"),b=localStorage.getItem("userId");u&&b?(console.log("Found stored token and user ID"),o(u),await h(b)):console.log("No stored credentials found")}catch(u){console.error("Auth initialization error:",u),localStorage.removeItem("token"),localStorage.removeItem("userId"),o(null),r(null)}finally{s&&(console.log("Setting isLoading to false"),f(!1))}})(),()=>{s=!1}},[]);const _={user:t,token:i,isLoading:d,login:async(s,m)=>{try{f(!0);const u=await st.login(s,m);if(u.success&&u.data){const{user:b,token:g}=u.data;localStorage.setItem("token",g),localStorage.setItem("userId",b.userid),r(b),o(g)}else throw new Error(u.message||"Login failed")}catch(u){throw u instanceof P?u:new P(500,"Login failed")}finally{f(!1)}},logout:()=>{try{localStorage.removeItem("token"),localStorage.removeItem("userId"),r(null),o(null)}catch(s){console.error("Error signing out:",s)}},isAuthenticated:!!i&&!!t};return a.jsx(q.Provider,{value:_,children:e})},j=()=>{const e=n.useContext(q);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e},V=()=>{const e=n.useContext(H);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},dt=()=>{const{user:e}=j(),t=e?.role==="admin",r=e?.role==="cashier";return{isAdmin:t,isCashier:r,canViewReports:t,canViewUsers:t,canManageUsers:t,canDeleteItems:t,canDeleteCustomers:t,canDeleteOrders:t,canViewItems:!0,canManageItems:!0,canViewCustomers:!0,canManageCustomers:!0,canViewOrders:!0,canManageOrders:!0}},_t=p.aside`
  width: ${e=>e.$collapsed?"80px":"250px"};
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-right: ${e=>e.$isRtl?"none":`1px solid ${e.theme.colors.glassBorder}`};
  border-left: ${e=>e.$isRtl?`1px solid ${e.theme.colors.glassBorder}`:"none"};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, left 0.3s ease, right 0.3s ease;
  box-shadow: ${e=>e.theme.shadows.medium};
  position: fixed;
  left: ${e=>e.$isRtl?"auto":"0"};
  right: ${e=>e.$isRtl?"0":"auto"};
  top: 70px;
  height: calc(100vh - 70px);
  z-index: 100;

  /* Mobile styles */
  @media (max-width: 768px) {
    position: fixed;
    left: ${e=>e.$isRtl?"auto":e.$isOpen?"0":"-100%"};
    right: ${e=>e.$isRtl?e.$isOpen?"0":"-100%":"auto"};
    top: 0;
    height: 100vh;
    width: 280px;
    z-index: 1000;
    box-shadow: ${e=>e.theme.shadows.large};
    transition: left 0.3s ease, right 0.3s ease;
  }
`,mt=p.button`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: ${e=>e.$active?e.theme.colors.surface:"transparent"};
  color: ${e=>e.$active?e.theme.colors.accent:e.theme.colors.text};
  border: none;
  border-radius: ${e=>e.$isRtl?"25px 0 0 25px":"0 25px 25px 0"};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${e=>e.$isRtl?"5px 0 5px 15px":"5px 15px 5px 0"};
  font-size: 16px;
  font-weight: ${e=>e.$active?"600":"400"};
  border-left: ${e=>!e.$isRtl&&e.$active?`4px solid ${e.theme.colors.accent}`:"none"};
  border-right: ${e=>e.$isRtl&&e.$active?`4px solid ${e.theme.colors.accent}`:"none"};

  &:hover {
    background: ${e=>e.theme.colors.surface};
    transform: ${e=>e.$isRtl?"translateX(-5px)":"translateX(5px)"};
    box-shadow: ${e=>e.theme.shadows.small};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${e=>e.$isRtl?"0":"15px"};
    margin-left: ${e=>e.$isRtl?"15px":"0"};
    flex-shrink: 0;
  }
`,ut=p.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.glassBorder};
    border-radius: 4px;
  }
`,gt=p.button`
  margin: 15px auto 0 auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
    background: ${e=>e.theme.colors.primary};
    color: #ffffff;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary}66;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,pt=p.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.theme.colors.surface};
`,ht=p.h3`
  margin: 0;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`,bt=p.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(20px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${e=>e.theme.colors.text};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.accent};
    outline-offset: 2px;
  }
`,ft=({navItems:e,activeItem:t,onItemClick:r,collapsed:i=!1,onToggle:o,isMobile:d=!1,isOpen:f=!1,onClose:h,isRtl:l=!1})=>{const{t:v}=S(),_=s=>{r(s),d&&h&&h()};return a.jsxs(a.Fragment,{children:[d&&f&&a.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",zIndex:999},onClick:h}),a.jsxs(_t,{$collapsed:i,$isMobile:d,$isOpen:f,$isRtl:l,children:[d&&a.jsxs(pt,{children:[a.jsx(ht,{children:v("sidebar.menu")}),a.jsx(bt,{onClick:h,children:"×"})]}),a.jsx(ut,{children:e.map(s=>a.jsxs(mt,{$active:t===s.id,$isRtl:l,onClick:()=>_(s.id),children:[s.icon,(!i||d)&&s.label]},s.id))}),!d&&o&&a.jsx(gt,{onClick:o,"aria-label":v(i?"sidebar.expand":"sidebar.collapse"),children:l?i?a.jsx(T,{}):a.jsx(N,{}):i?a.jsx(N,{}):a.jsx(T,{})})]})]})},vt=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",yt=p.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 0 10px;
    /* Removed flex-wrap to keep single row */
  }
`,xt=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* Removed min-width to allow shrinking */

  @media (max-width: 768px) {
    gap: 8px;
    flex: 0 0 auto;
  }
`,wt=p.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`,kt=p.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  box-shadow: ${e=>e.theme.shadows.glow};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,L=p.h2`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};

  @media (max-width: 768px) {
    display: none; /* Hide title on mobile to save space */
  }
`,$t=p.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    /* Removed order and width to keep in flow */
    justify-content: center;
  }
`,It=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto; /* Push to right */

  @media (max-width: 768px) {
    gap: 8px;
    flex: 0 0 auto;
  }
`,R=p.button`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: none;
  background: ${e=>e.theme.colors.glass};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${e=>e.theme.shadows.medium};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  color: ${e=>e.theme.colors.text};

  &:hover { transform: translateY(-3px); }
`,Pt=p.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
`,St=p.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: ${e=>e.theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.large};
  border: 1px solid ${e=>e.theme.colors.glassBorder};
  overflow: hidden;
  min-width: 180px;
  z-index: 1000;
`,M=p.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 14px;
  background: transparent;
  border: none;
  text-align: left;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;

  &:hover { background: ${e=>e.theme.colors.glass}; }
`,Ct=({onMobileMenu:e,isMobile:t,title:r="Point of Sale System"})=>{const{user:i,logout:o}=j(),{toggleTheme:d,isDark:f}=V(),{t:h}=S(),l=F(),[v,_]=n.useState(!1),s=n.useRef(null),[m,u]=n.useState(null);return n.useEffect(()=>{const b=g=>{v&&s.current&&(s.current.contains(g.target)||_(!1))};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[v]),n.useEffect(()=>{(async()=>{try{const g=await z.getSettings();g.success&&g.data&&u(g.data)}catch{}})()},[]),n.useEffect(()=>{const b=()=>{const g=s.current;g&&(t?(g.style.right="8px",g.style.left="auto",g.style.minWidth="160px"):(g.style.right="0px",g.style.left="auto",g.style.minWidth="180px"))};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[t]),a.jsxs(yt,{children:[a.jsxs(xt,{children:[t&&a.jsx(R,{onClick:e,title:h("sidebar.menu"),"aria-label":h("sidebar.menu"),"data-testid":"mobile-menu-button",children:a.jsxs("svg",{width:"20",height:"14",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[a.jsx("rect",{x:"0",y:"0",width:"20",height:"2",rx:"1",fill:"currentColor"}),a.jsx("rect",{x:"0",y:"6",width:"20",height:"2",rx:"1",fill:"currentColor"}),a.jsx("rect",{x:"0",y:"12",width:"20",height:"2",rx:"1",fill:"currentColor"})]})}),a.jsxs(wt,{onClick:()=>l("/"),children:[m?.shop_logo?a.jsx("img",{src:vt(m.shop_logo),alt:"Shop logo",style:{width:48,height:48,borderRadius:10,objectFit:"cover"}}):a.jsx(kt,{children:"POS"}),a.jsx(L,{children:m?.shop_name||r})]})]}),a.jsx($t,{children:a.jsx(L,{style:{fontSize:"1.15rem",margin:0},children:r})}),a.jsxs(It,{children:[a.jsx(R,{onClick:d,title:h("sidebar.settings"),children:f?a.jsx(ae,{}):a.jsx(te,{})}),a.jsxs("div",{style:{position:"relative"},ref:s,children:[a.jsx(Pt,{onClick:()=>_(b=>!b),title:h("sidebar.menu"),children:i?.username?.charAt(0)||"U"}),v&&a.jsxs(St,{role:"menu",children:[a.jsx(M,{onClick:()=>{l("/settings"),_(!1)},children:h("sidebar.settings")}),a.jsxs(M,{onClick:()=>{o(),n.startTransition(()=>{l("/login")})},children:[a.jsx(re,{})," ",h("login.logout","Logout")]})]})]})]})]})},Et=e=>e?e.startsWith("http")?e:`http://localhost:5000${e}`:"",Ot=p.footer`
  background: ${e=>e.theme.colors.surface};
  border-top: 1px solid ${e=>e.theme.colors.glassBorder};
  color: ${e=>e.theme.colors.textSecondary};
  padding: 20px 16px;
  width: 100%;
  box-sizing: border-box;
  margin-left: ${e=>!e.$isRtl&&!e.$isMobile?e.$sidebarCollapsed?"80px":"250px":"0"};
  margin-right: ${e=>e.$isRtl&&!e.$isMobile?e.$sidebarCollapsed?"80px":"250px":"0"};
  width: ${e=>e.$isMobile?"100%":`calc(100% - ${e.$sidebarCollapsed?"80px":"250px"})`};
  transition: margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease;
`,At=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,jt=p.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Bt=p.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  flex-shrink: 0;
`,Tt=p.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,D=p.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.textSecondary};
`,Nt=({sidebarCollapsed:e,isMobile:t})=>{const[r,i]=n.useState(null),{t:o,i18n:d}=S(),f=d.language==="ar";n.useEffect(()=>{(async()=>{try{const _=await z.getSettings();_.success&&_.data&&i(_.data)}catch{}})()},[]);const h=new Date().getFullYear(),l=r?.shop_name||o("sidebar.pos","Point of Sale");return a.jsx(Ot,{$sidebarCollapsed:e,$isMobile:t,$isRtl:f,children:a.jsxs(At,{children:[a.jsxs(jt,{children:[r?.shop_logo?a.jsx("img",{src:Et(r.shop_logo),alt:"logo",style:{width:38,height:38,objectFit:"cover",borderRadius:8}}):a.jsx(Bt,{children:"POS"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600},children:l}),a.jsxs(D,{children:[o("footer.pos_system","POS System")," • ",o("footer.version","V1.0.0")," © ",h]})]})]}),a.jsx(Tt,{children:a.jsxs(D,{style:{marginLeft:12},children:["© ",h," ",l,". ",o("footer.all_rights_reserved","All rights reserved"),"."]})})]})})},Lt=p.div`
  min-height: 100vh;
  background: ${e=>e.theme.gradients.background};
  transition: background 0.3s ease;
  direction: ${e=>e.$isRtl?"rtl":"ltr"};
`,Rt=p.header`
  background: ${e=>e.theme.colors.glass};
  color: ${e=>e.theme.colors.text};
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${e=>e.theme.colors.glassBorder};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`,Mt=p.main`
  margin-left: ${e=>!e.$isRtl&&!e.$isMobile?e.$sidebarCollapsed?"80px":"250px":"0"};
  margin-right: ${e=>e.$isRtl&&!e.$isMobile?e.$sidebarCollapsed?"80px":"250px":"0"};
  padding: 30px;
  transition: margin-left 0.3s ease, margin-right 0.3s ease;
  min-height: calc(100vh - 70px);
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding: 20px 15px;
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,w=({children:e,title:t="Point of Sale System",activePage:r="pos"})=>{const{t:i,i18n:o}=S();V();const{canViewReports:d,canViewUsers:f}=dt(),[h,l]=n.useState(!1),[v,_]=n.useState(!1),[s,m]=n.useState(!1),u=F(),b=o.language==="ar";n.useEffect(()=>{document.documentElement.dir=b?"rtl":"ltr",document.documentElement.lang=o.language},[b,o.language]),n.useEffect(()=>{const I=()=>{_(window.innerWidth<=768)};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);const g=[{id:"pos",label:i("sidebar.pos"),icon:a.jsx(oe,{})},{id:"inventory",label:i("sidebar.inventory"),icon:a.jsx(ne,{})},{id:"customers",label:i("sidebar.customers"),icon:a.jsx(se,{})},{id:"orders",label:i("sidebar.orders"),icon:a.jsx(ie,{})},...d?[{id:"reports",label:i("sidebar.reports"),icon:a.jsx(ce,{})}]:[],...f?[{id:"users",label:i("sidebar.users"),icon:a.jsx(le,{})}]:[],{id:"settings",label:i("sidebar.settings"),icon:a.jsx(de,{})}],k=I=>{u(`/${I}`)},C=()=>{m(!s)},K=()=>{m(!1)};return a.jsxs(Lt,{$isRtl:b,children:[a.jsx(Rt,{children:a.jsx(Ct,{onMobileMenu:C,isMobile:v,title:t})}),a.jsx(ft,{navItems:g,activeItem:r,onItemClick:k,collapsed:h,onToggle:()=>l(!h),isMobile:v,isOpen:s,onClose:K,isRtl:b}),a.jsx(Mt,{$sidebarCollapsed:h,$isMobile:v,$isRtl:b,children:e}),a.jsx(Nt,{sidebarCollapsed:h,isMobile:v})]})},O=Z`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${e=>e.theme.gradients.background};
    background-attachment: fixed;
    min-height: 100vh;
    color: ${e=>e.theme.colors.text};
    transition: background 0.3s ease, color 0.3s ease;
    font-size: 16px;
    line-height: 1.5;

    /* Mobile-first responsive font sizes */
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  /* Use Noto Sans Arabic font for Arabic (RTL) */
  html[dir="rtl"] body {
    font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  button {
    font-family: inherit;
    /* Ensure buttons are touch-friendly */
    min-height: 44px;
    min-width: 44px;

    @media (max-width: 768px) {
      min-height: 48px;
      min-width: 48px;
    }
  }

  input, select, textarea {
    font-family: inherit;
    /* Ensure form elements are touch-friendly */
    min-height: 44px;

    @media (max-width: 768px) {
      min-height: 48px;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.glassBorder};
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.accent};
  }

  /* Glass Utilities */
  .glass-panel {
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${e=>e.theme.colors.glassBorder};
    box-shadow: ${e=>e.theme.shadows.medium};
  }

  .glass-card {
    background: ${e=>e.theme.colors.surface};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${e=>e.theme.colors.glassBorder};
    box-shadow: ${e=>e.theme.shadows.small};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .glass-card:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.large};
    border-color: ${e=>e.theme.colors.accent};
  }

  /* Responsive utilities */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .d-flex {
    display: flex;
  }

  .d-block {
    display: block;
  }

  .d-none {
    display: none;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .m-0 {
    margin: 0;
  }

  .p-0 {
    padding: 0;
  }

  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 1rem; }
  .mb-4 { margin-bottom: 1.5rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 1rem; }
  .mt-4 { margin-top: 1.5rem; }
  .mt-5 { margin-top: 3rem; }

  .pb-1 { padding-bottom: 0.25rem; }
  .pb-2 { padding-bottom: 0.5rem; }
  .pb-3 { padding-bottom: 1rem; }
  .pb-4 { padding-bottom: 1.5rem; }
  .pb-5 { padding-bottom: 3rem; }

  .pt-1 { padding-top: 0.25rem; }
  .pt-2 { padding-top: 0.5rem; }
  .pt-3 { padding-top: 1rem; }
  .pt-4 { padding-top: 1.5rem; }
  .pt-5 { padding-top: 3rem; }

  /* Responsive breakpoints */
  @media (max-width: 1200px) {
    .d-xl-none { display: none !important; }
    .d-xl-block { display: block !important; }
  }

  @media (max-width: 992px) {
    .d-lg-none { display: none !important; }
    .d-lg-block { display: block !important; }
  }

  @media (max-width: 768px) {
    .d-md-none { display: none !important; }
    .d-md-block { display: block !important; }
    .d-md-flex { display: flex !important; }

    .flex-md-column {
      flex-direction: column !important;
    }

    .text-md-center {
      text-align: center !important;
    }
  }

  @media (max-width: 576px) {
    .d-sm-none { display: none !important; }
    .d-sm-block { display: block !important; }
    .d-sm-flex { display: flex !important; }

    .flex-sm-column {
      flex-direction: column !important;
    }

    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (max-width: 480px) {
    .d-xs-none { display: none !important; }
    .d-xs-block { display: block !important; }
    .d-xs-flex { display: flex !important; }

    .flex-xs-column {
      flex-direction: column !important;
    }

    .text-xs-center {
      text-align: center !important;
    }
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.accent};
    outline-offset: 2px;
  }

  /* Prevent zoom on input focus on iOS */
  @media screen and (max-width: 768px) {
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="tel"],
    input[type="password"],
    select,
    textarea {
      font-size: 16px !important;
    }
  }

  /* Print rules - only show the receipt content by id */
  @media print {
    body * {
      visibility: hidden;
    }

    #receipt, #receipt * {
      visibility: visible;
    }

    #receipt {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      box-shadow: none;
      background: white;
    }
  }
`;function Dt(){const{pathname:e}=_e();return n.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const Ut=p.div`
  display: ${e=>e.$inline?"inline-flex":"flex"};
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size?`${e.$size}px`:e.$inline?"20px":"80px"};
  height: ${e=>e.$size?`${e.$size}px`:e.$inline?"20px":"80px"};
`,Ft="https://lottie.host/35ffcf09-c627-4125-b7cf-7402c168d506/ivmaTqWwW0.lottie",Ht=ee`
  to { transform: rotate(360deg); }
`,zt=p.div`
  width: ${e=>e.$size?`${e.$size}px`:"40px"};
  height: ${e=>e.$size?`${e.$size}px`:"40px"};
  border-radius: 50%;
  border: 3px solid rgba(0,0,0,0.08);
  border-top-color: ${e=>e.theme.colors.primary};
  animation: ${Ht} 1s linear infinite;
`,U=({size:e,inline:t,ariaLabel:r="Loading",src:i=Ft})=>{const[o,d]=n.useState(null);return n.useEffect(()=>{let f=!0;return import("@lottiefiles/dotlottie-react").then(l=>{if(!f)return;const v=l&&(l.DotLottieReact||l.default);v&&d(()=>v)}).catch(()=>{}),()=>{f=!1}},[]),a.jsx(Ut,{$inline:t,$size:e,role:"status","aria-label":r,children:o?a.jsx(o,{src:i,autoplay:!0,loop:!0,style:{width:"100%",height:"100%"}}):a.jsx(zt,{$size:e,"aria-hidden":"true"})})},qt=n.lazy(()=>x(()=>import("./LoginPage-oRfUFRIq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),Vt=n.lazy(()=>x(()=>import("./PosPage-DwDa_Jt6.js"),__vite__mapDeps([21,1,2,3,4,5,22,18,19,20,7,8,9,10,11,12,13,14,15,16,17]))),Kt=n.lazy(()=>x(()=>import("./CheckoutPage-D9_bgygr.js"),__vite__mapDeps([23,1,2,3,4,5,22,6,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),Wt=n.lazy(()=>x(()=>import("./InventoryPage-DrfPLVf-.js"),__vite__mapDeps([24,1,2,25,3,4,5,20,6,7,8,26,18,19,9,10,11,12,13,14,15,16,17]))),Gt=n.lazy(()=>x(()=>import("./EditItemPage-KEQKf6eG.js"),__vite__mapDeps([27,1,2,3,4,5,26,6,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),Qt=n.lazy(()=>x(()=>import("./CustomersPage-DtVG2Y2I.js"),__vite__mapDeps([28,1,2,25,3,4,5,20,6,7,8,18,19,9,10,11,12,13,14,15,16,17]))),Jt=n.lazy(()=>x(()=>import("./EditCustomerPage-_mIadzXs.js"),__vite__mapDeps([29,1,2,3,4,5,6,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),Yt=n.lazy(()=>x(()=>import("./OrdersPage-BP_Q9l4n.js"),__vite__mapDeps([30,1,2,25,3,4,5,20,6,7,8,18,19,9,10,11,12,13,14,15,16,17]))),Xt=n.lazy(()=>x(()=>import("./EditOrderPage-BHBZRIh6.js"),__vite__mapDeps([31,1,2,3,4,5,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),Zt=n.lazy(()=>x(()=>import("./ReceiptPage-ErTO-zJa.js"),__vite__mapDeps([32,12,2,13,14,15,16,17,1,3,4,5,20,18,19,7,8,9,10,11]))),er=n.lazy(()=>x(()=>import("./InvoicePage-C-UiW0Ab.js"),__vite__mapDeps([33,12,2,13,14,15,16,17,1,3,4,5,20,18,19,7,8,9,10,11]))),ar=n.lazy(()=>x(()=>import("./QuotationPage-DsyVHt4n.js"),__vite__mapDeps([34,12,2,13,14,15,16,17,1,3,4,5,20,18,19,7,8,9,10,11]))),tr=n.lazy(()=>x(()=>import("./DeliveryPage-reljqvaw.js"),__vite__mapDeps([35,12,2,13,14,15,16,17,1,3,4,5,20,18,19,7,8,9,10,11]))),rr=n.lazy(()=>x(()=>import("./UsersPage-CEryA2gR.js"),__vite__mapDeps([36,1,2,3,4,5,6,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),or=n.lazy(()=>x(()=>import("./EditUserPage-DOLkEEdK.js"),__vite__mapDeps([37,1,2,3,4,5,6,20,18,19,7,8,9,10,11,12,13,14,15,16,17]))),nr=n.lazy(()=>x(()=>import("./SettingsPage-DUHbxiPe.js"),__vite__mapDeps([38,1,2,3,4,5,6,20,18,19,26,7,8,10,11,12,13,14,15,16,17,9]))),sr=n.lazy(()=>x(()=>import("./ReportsPage-DUAv3cvk.js"),__vite__mapDeps([39,12,2,13,14,15,16,17,1,3,4,5,20,18,19,7,8,40,9,10,11]))),ir=n.lazy(()=>x(()=>import("./NotFoundPage-CJWzBTOq.js"),__vite__mapDeps([41,1,2,3,4,5,6,20,7,8,9,10,11])));function cr(){const{isAuthenticated:e,isLoading:t}=j(),{t:r,i18n:i}=S();return n.useEffect(()=>{document.documentElement.dir=i.language==="ar"?"rtl":"ltr",document.documentElement.lang=i.language},[i.language]),t?a.jsxs(E,{children:[a.jsx(O,{}),a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:a.jsx(U,{size:140,ariaLabel:r("common.loading")})})]}):e?a.jsxs(E,{children:[a.jsx(O,{}),a.jsx(n.Suspense,{fallback:a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:a.jsx(U,{size:140,ariaLabel:r("common.loading")})}),children:a.jsxs(ue,{children:[a.jsx(y,{path:"/",element:a.jsx(ge,{to:"/pos",replace:!0})}),a.jsx(y,{path:"/pos",element:a.jsx(w,{activePage:"pos",title:r("sidebar.pos"),children:a.jsx(Vt,{})})}),a.jsx(y,{path:"/checkout",element:a.jsx(Kt,{})}),a.jsx(y,{path:"/inventory",element:a.jsx(w,{activePage:"inventory",title:r("inventory.title"),children:a.jsx(Wt,{})})}),a.jsx(y,{path:"/inventory/edit/:id",element:a.jsx(w,{activePage:"inventory",title:r("editItem.title"),children:a.jsx(Gt,{})})}),a.jsx(y,{path:"/customers",element:a.jsx(w,{activePage:"customers",title:r("customers.title"),children:a.jsx(Qt,{})})}),a.jsx(y,{path:"/customers/edit/:id",element:a.jsx(w,{activePage:"customers",title:r("editCustomer.title"),children:a.jsx(Jt,{})})}),a.jsx(y,{path:"/orders",element:a.jsx(w,{activePage:"orders",title:r("orders.title"),children:a.jsx(Yt,{})})}),a.jsx(y,{path:"/orders/edit/:id",element:a.jsx(w,{activePage:"orders",title:r("editOrder.title"),children:a.jsx(Xt,{})})}),a.jsx(y,{path:"/orders/receipt/:id",element:a.jsx(w,{activePage:"orders",title:r("orders.receipt"),children:a.jsx(Zt,{})})}),a.jsx(y,{path:"/orders/invoice/:id",element:a.jsx(w,{activePage:"orders",title:r("orders.invoice"),children:a.jsx(er,{})})}),a.jsx(y,{path:"/orders/quotation/:id",element:a.jsx(w,{activePage:"orders",title:r("orders.quotation"),children:a.jsx(ar,{})})}),a.jsx(y,{path:"/orders/delivery/:id",element:a.jsx(w,{activePage:"orders",title:r("orders.delivery"),children:a.jsx(tr,{})})}),a.jsx(y,{path:"/users",element:a.jsx(w,{activePage:"users",title:r("users.title"),children:a.jsx(rr,{})})}),a.jsx(y,{path:"/users/edit/:id",element:a.jsx(w,{activePage:"users",title:r("editUser.title_edit"),children:a.jsx(or,{})})}),a.jsx(y,{path:"/settings",element:a.jsx(w,{activePage:"settings",title:r("settings.title"),children:a.jsx(nr,{})})}),a.jsx(y,{path:"/reports",element:a.jsx(w,{activePage:"reports",title:r("reports.title"),children:a.jsx(sr,{})})}),a.jsx(y,{path:"*",element:a.jsx(ir,{})})]})}),a.jsx(Y,{position:"top-right"})]}):a.jsxs(E,{children:[a.jsx(O,{}),a.jsx(qt,{})]})}function lr(){return a.jsxs(me,{children:[a.jsx(Dt,{}),a.jsx(lt,{children:a.jsx(rt,{children:a.jsx(cr,{})})})]})}W.createRoot(document.getElementById("root")).render(a.jsx(lr,{}));export{tt as C,U as L,dt as a,it as b,Or as c,V as d,Er as i,ct as o,Ar as r,z as s,j as u};
