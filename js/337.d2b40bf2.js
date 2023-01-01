"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[337],{9848:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(3396),s=a(9242),i=a(7139);const d={"aria-label":"Page navigation example"},o={class:"pagination justify-content-center"},n=(0,l._)("li",{class:"page-item"},[(0,l._)("a",{class:"page-link text-secondary",href:"#","aria-label":"Previous"},[(0,l._)("span",{"aria-hidden":"true"},"«")])],-1),c=["onClick"],r=(0,l._)("li",{class:"page-item"},[(0,l._)("a",{class:"page-link text-secondary",href:"#","aria-label":"Next"},[(0,l._)("span",{"aria-hidden":"true"},"»")])],-1);function m(e,t,a,m,p,u){return(0,l.wg)(),(0,l.iD)("nav",d,[(0,l._)("ul",o,[n,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{class:"page-item",key:t},[(0,l._)("a",{class:"page-link text-secondary",href:"#",onClick:(0,s.iM)((t=>u.updatePage(e)),["prevent"])},(0,i.zw)(e),9,c)])))),128)),r])])}var p={props:["pages"],methods:{updatePage(e){this.$emit("update-page",e)}}},u=a(89);const h=(0,u.Z)(p,[["render",m]]);var g=h},4337:function(e,t,a){a.r(t),a.d(t,{default:function(){return Te}});var l=a(3396),s=a(7139);const i={class:"container pt-utility",style:{height:"100vh"}},d={class:"row"},o={class:"col-12 px-0 px-md-2"},n={class:"text-end"},c={key:0,class:"col-12"},r=(0,l._)("h2",{class:"text-black text-center",style:{padding:"30vh 0"}},"尚未新增商品。",-1),m=[r],p={key:1,class:"col-12 px-0 px-md-2"},u={class:"table mt-4 text-nowrap",style:{"table-layout":"fixed"}},h=(0,l._)("thead",null,[(0,l._)("tr",{class:"font-medium tracking-wider"},[(0,l._)("th",null,"品名"),(0,l._)("th",{class:"d-none d-md-table-cell"},"分類"),(0,l._)("th",{class:"d-none d-md-table-cell"},"原價"),(0,l._)("th",null,"售價"),(0,l._)("th",null,"上線"),(0,l._)("th",{width:"95"},"編輯")])],-1),g={style:{overflow:"hidden","text-overflow":"ellipsis"}},b={class:"d-none d-md-table-cell"},_={class:"d-none d-md-table-cell"},f={key:0,class:"text-success"},w={key:1,class:"text-success"},v={class:"p-0"},y={class:"btn-group"},k=["onClick"],x=["onClick"],D={key:0,class:"row",style:{"padding-top":"calc(100vh-20vh)"}},U={class:"col-12 position-fixed bottom-0 start-50 translate-middle-x"};function M(e,t,a,r,M,L){const P=(0,l.up)("loading"),C=(0,l.up)("pagination"),$=(0,l.up)("productModal"),I=(0,l.up)("deleteModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l.Wm)(P,{active:M.isLoading,"onUpdate:active":t[0]||(t[0]=e=>M.isLoading=e)},null,8,["active"]),(0,l._)("div",d,[(0,l._)("div",o,[(0,l._)("div",n,[(0,l._)("button",{onClick:t[1]||(t[1]=e=>L.openModal(!0)),type:"button",class:"btn btn-outline-primary","data-bs-target":"#exampleModal"}," 新增 ")])]),0===this.Data.length?((0,l.wg)(),(0,l.iD)("div",c,m)):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("table",u,[h,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.Data,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",g,(0,s.zw)(t.title),1),(0,l._)("td",b,(0,s.zw)(t.category),1),(0,l._)("td",_,(0,s.zw)(e.$filters.currency(t.origin_price)),1),(0,l._)("td",null,(0,s.zw)(t.price),1),(0,l._)("td",null,[1===t.is_enabled?((0,l.wg)(),(0,l.iD)("span",f,"啟用 ")):((0,l.wg)(),(0,l.iD)("span",w,"未啟用 "))]),(0,l._)("td",v,[(0,l._)("div",y,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>L.openModal(!1,t)},"編輯",8,k),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>L.openDeleteModal(t)},"刪除",8,x)])])])))),128))])])]))]),0!==this.Data.length?((0,l.wg)(),(0,l.iD)("div",D,[(0,l._)("div",U,[(0,l.Wm)(C,{pages:M.Pagination,onUpdatePage:L.getData},null,8,["pages","onUpdatePage"])])])):(0,l.kq)("",!0)]),(0,l.Wm)($,{ref:"productModal",product:M.tempProduct,onAdd:L.UpdateData,"is-new":M.isNew},null,8,["product","onAdd","is-new"]),(0,l.Wm)(I,{ref:"deleteModal",delete:M.deleteItem,onDeleteItem:L.deleteProduct},null,8,["delete","onDeleteItem"])],64)}var L=a(3752),P=a.n(L),C=a(9242);const $={class:"container"},I={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog modal-xl"},Z={class:"modal-content"},N={class:"modal-header bg-dark text-white"},z={class:"modal-title",id:"exampleModalLabel"},F={key:0},j={key:1},H=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body text-black"},Y={class:"row"},A={class:"col-12"},K={class:"mb-3"},S={for:"image",class:"form-label w-100 font-medium tracking-wider"},q=(0,l.Uk)(" 輸入圖片網址 "),O={class:"mb-3"},B={for:"customFile",class:"form-label w-100 font-medium tracking-wider"},E=(0,l.Uk)("或 上傳圖片 "),G=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),J=(0,l._)("img",{class:"img-fluid",alt:""},null,-1),Q={class:"col-12"},R={class:"mb-3"},T={for:"title",class:"form-label w-100 font-medium tracking-wider"},X=(0,l.Uk)("標題 "),ee={class:"row gx-2"},te={class:"mb-3 col-md-6"},ae={for:"category",class:"form-label w-100 font-medium tracking-wider"},le=(0,l.Uk)("分類 "),se={class:"mb-3 col-md-6"},ie={for:"num",class:"form-label w-100 font-medium tracking-wider"},de=(0,l.Uk)("數量 "),oe={class:"mb-3 col-md-6"},ne={for:"price",class:"form-label w-100 font-medium tracking-wider"},ce=(0,l.Uk)("單位 "),re={class:"row gx-2"},me={class:"mb-3 col-md-6"},pe={for:"origin_price",class:"form-label w-100 font-medium tracking-wider"},ue=(0,l.Uk)("原價 "),he={class:"mb-3 col-md-6"},ge={for:"price",class:"form-label w-100 font-medium tracking-wider"},be=(0,l.Uk)("售價 "),_e=(0,l._)("hr",null,null,-1),fe={class:"mb-3"},we={for:"description",class:"form-label w-100 font-medium tracking-wider"},ve=(0,l.Uk)("產品描述 "),ye={class:"mb-3"},ke={for:"content",class:"form-label w-100 font-medium tracking-wider"},xe=(0,l.Uk)("說明內容 "),De={class:"mb-3"},Ue={class:"text-end"},Me={class:"form-check-label font-medium tracking-wider",for:"is_enabled"},Le=(0,l.Uk)(" 是否啟用 "),Pe={class:"modal-footer"},Ce=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function $e(e,t,a,s,i,d){const o=(0,l.up)("loading");return(0,l.wg)(),(0,l.iD)("div",$,[(0,l.Wm)(o,{active:i.isLoading,"onUpdate:active":t[0]||(t[0]=e=>i.isLoading=e)},null,8,["active"]),(0,l._)("div",I,[(0,l._)("div",V,[(0,l._)("div",Z,[(0,l._)("div",N,[(0,l._)("h5",z,[!0===this.isNew?((0,l.wg)(),(0,l.iD)("span",F,"新增產品")):((0,l.wg)(),(0,l.iD)("span",j,"編輯產品"))]),H]),(0,l._)("div",W,[(0,l._)("div",Y,[(0,l._)("div",A,[(0,l._)("div",K,[(0,l._)("label",S,[q,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.data.imageUrl=e),type:"text",class:"form-control",id:"image",name:"image",placeholder:"請輸入圖片連結"},null,512),[[C.nr,i.data.imageUrl]])])]),(0,l._)("div",O,[(0,l._)("label",B,[E,G,(0,l._)("input",{ref:"fileInput",onChange:t[2]||(t[2]=(...e)=>d.uploadFile&&d.uploadFile(...e)),type:"file",id:"customFile",class:"form-control"},null,544)])]),J]),(0,l._)("div",Q,[(0,l._)("div",R,[(0,l._)("label",T,[X,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.data.title=e),type:"text",class:"form-control",id:"title",placeholder:"請輸入標題"},null,512),[[C.nr,i.data.title]])])]),(0,l._)("div",ee,[(0,l._)("div",te,[(0,l._)("label",ae,[le,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.data.category=e),type:"text",class:"form-control",id:"category",placeholder:"請輸入分類"},null,512),[[C.nr,i.data.category]])])]),(0,l._)("div",se,[(0,l._)("label",ie,[de,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.data.num=e),type:"number",class:"form-control",id:"num",placeholder:"請輸入數量"},null,512),[[C.nr,i.data.num]])])]),(0,l._)("div",oe,[(0,l._)("label",ne,[ce,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.data.unit=e),type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位"},null,512),[[C.nr,i.data.unit]])])])]),(0,l._)("div",re,[(0,l._)("div",me,[(0,l._)("label",pe,[ue,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>i.data.origin_price=e),type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價"},null,512),[[C.nr,i.data.origin_price]])])]),(0,l._)("div",he,[(0,l._)("label",ge,[be,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>i.data.price=e),type:"number",class:"form-control",id:"price",placeholder:"請輸入售價"},null,512),[[C.nr,i.data.price]])])])]),_e,(0,l._)("div",fe,[(0,l._)("label",we,[ve,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>i.data.description=e),type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述"},null,512),[[C.nr,i.data.description]])])]),(0,l._)("div",ye,[(0,l._)("label",ke,[xe,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>i.data.content=e),type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容"},null,512),[[C.nr,i.data.content]])])]),(0,l._)("div",De,[(0,l._)("div",Ue,[(0,l._)("label",Me,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>i.data.is_enabled=e),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled",name:"is_enabled"},null,512),[[C.e8,i.data.is_enabled]]),Le])])])])])]),(0,l._)("div",Pe,[Ce,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=(...e)=>d.add&&d.add(...e))},"確認")])])])],512)])}var Ie=a(1339),Ve={props:{product:{type:Object,default(){return{}}},isNew:null},watch:{product(){this.data=this.product}},components:{Loading:P()},data(){return{modal:{},data:{},isLoading:!1}},methods:{add(){this.$emit("add",this.data)},uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const a="https://vue3-course-api.hexschool.io/api/dessertsweet/admin/upload";this.isLoading=!0,this.axios.post(a,t).then((e=>{this.isLoading=!1,e.data.success&&(this.data.imageUrl=e.data.imageUrl)}))}},mixins:[Ie.Z]},Ze=a(89);const Ne=(0,Ze.Z)(Ve,[["render",$e]]);var ze=Ne;const Fe={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},je={class:"modal-dialog"},He={class:"modal-content text-black"},We=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title text-danger",id:"exampleModalLabel"},"刪除警告"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ye={class:"modal-body"},Ae=(0,l.Uk)(" 確定要刪除"),Ke={class:"text-red"},Se={class:"modal-footer"},qe=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Oe(e,t,a,i,d,o){return(0,l.wg)(),(0,l.iD)("div",Fe,[(0,l._)("div",je,[(0,l._)("div",He,[We,(0,l._)("div",Ye,[Ae,(0,l._)("span",Ke,(0,s.zw)(this.delete.title),1)]),(0,l._)("div",Se,[qe,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>o.deleteItem())},"確定刪除")])])])],512)}var Be={data(){return{modal:{}}},props:["delete"],methods:{deleteItem(){this.$emit("deleteItem")}},mixins:[Ie.Z]};const Ee=(0,Ze.Z)(Be,[["render",Oe]]);var Ge=Ee,Je=a(9848),Qe={data(){return{Data:{},tempProduct:{},isNew:!1,deleteItem:{},isLoading:!1,Pagination:{}}},components:{productModal:ze,deleteModal:Ge,Loading:P(),pagination:Je.Z},inject:["emitter"],methods:{getData(e=1){const t=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/products?page=${e}`;this.isLoading=!0,this.axios.get(t).then((e=>{console.log(e),this.isLoading=!1,this.Data=e.data.products,this.Pagination=e.data.pagination}))},UpdateData(e){this.tempProduct=e;let t="https://vue3-course-api.hexschool.io/api/dessertsweet/admin/product",a="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/product/${e.id}`,a="put"),this.isLoading=!0,this.axios[a](t,{data:this.tempProduct}).then((e=>{this.isLoading=!1,this.$refs.productModal.modalHide(),this.tempProduct={},e.data.success?(this.getData(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})}))},openModal(e,t){this.tempProduct=e?{}:{...t},this.$refs.productModal.modalShow(),this.isNew=e},openDeleteModal(e){this.$refs.deleteModal.modalShow(),this.deleteItem=e},deleteProduct(){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/product/${this.deleteItem.id}`;this.isLoading=!1,this.axios.delete(e).then((e=>{this.$refs.deleteModal.modalHide(),e.data.success?(this.getData(),this.emitter.emit("push-message",{style:"success",title:"刪除成功"})):this.emitter.emit("push-message",{style:"danger",title:"刪除失敗",content:e.data.message.join("、")})}))}},created(){this.getData()}};const Re=(0,Ze.Z)(Qe,[["render",M]]);var Te=Re}}]);
//# sourceMappingURL=337.d2b40bf2.js.map