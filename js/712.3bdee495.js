"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[712],{8712:function(e,t,s){s.r(t),s.d(t,{default:function(){return ne}});var o=s(3396),a=s(9242),l=s(7139);const i={class:"pt-5"},r={class:"container pt-utility"},n={class:"row text-white flex-column-reverse flex-md-row"},d={class:"col-12 col-md-6"},c=(0,o._)("div",{class:"d-flex justify-content-between align-items-center pb-3 mb-3",style:{"border-bottom":"1px solid #404040"}},[(0,o._)("h1",{class:"mb-0 tracking-widest font-bold text-3xl"},"訂購人資訊")],-1),m={class:"py-3 position-relative"},u=(0,o._)("h3",{class:"d-block formData-label tracking-wide text-lg",for:"name"},"*聯絡人姓名",-1),p=(0,o._)("br",null,null,-1),b={class:"py-3 position-relative"},f=(0,o._)("h3",{class:"tracking-wide text-lg"},"*性別",-1),w=(0,o._)("p",{class:"text-white"},"男",-1),g=(0,o._)("p",{class:"text-white"},"女",-1),x={class:"py-3 position-relative"},h=(0,o._)("h3",{class:"d-block formData-label tracking-widest text-lg",for:"email"}," *聯絡人信箱",-1),_=(0,o._)("br",null,null,-1),v={class:"py-3 position-relative"},k=(0,o._)("h3",{class:"d-block formData-label tracking-widest text-lg",for:"phone"},"*聯絡人手機",-1),y=(0,o._)("br",null,null,-1),D={class:"py-3 position-relative"},V=(0,o._)("h3",{class:"d-block formData-label tracking-widest text-lg",for:"address"},"*收件人地址",-1),W=(0,o._)("br",null,null,-1),C={class:"py-3 position-relative"},U={ref:"formMessage",class:"d-block formData-label tracking-wide text-lg",for:"adress"},E=(0,o.Uk)("備註"),B=(0,o._)("span",{class:"text-lg tracking-wide opacity-75"},null,-1),L=(0,o._)("div",{class:"py-3 position-relative"},[(0,o._)("label",{for:"payment",class:"d-block text-lg"},[(0,o.Uk)("*付款方式 "),(0,o._)("select",{name:"payment",id:"payment",class:"carts-input text-white w-100 border-0 border-bottom p-2 text-center text-lg",style:{"text-align-last":"center"}},[(0,o._)("option",{value:"信用卡",name:"payment"},"信用卡"),(0,o._)("option",{value:"超商取貨付款",name:"payment"},"超商取貨付款")])])],-1),T={class:"text-end mb-5 mt-3 d-block d-md-none"},$=(0,o._)("p",{class:"text-white text-xl"},"我已確認資料無誤",-1),z=(0,o.Uk)("付款 "),F={class:"col-12 col-md-5 offset-md-1"},q=(0,o._)("h4",{class:"tracking-widest font-bold text-3xl pb-3",style:{"border-bottom":"1px solid #404040"}},"商品資訊",-1),O=["src"],P={class:"text-2xl d-flex flex-column justify-content-between ps-3"},j={class:"tracking-wide font-semibold"},M={class:"leading-7 tracking-wider text-lg"},N={class:"leading-7 tracking-wider text-lg"},Z={class:"leading-7 d-block tracking-wider text-xl"},H={class:"text-white text-end tracking-widest font-semibold text-xl"},I={class:""},S={class:"col-12 pt-2 pb-3 text-red text-end tracking-widest font-semibold text-base"},Y={class:"input-group mb-5 input-group-sm ms-auto w-100"},K={for:"coupon",class:"d-block form-control rounded-0"},A={class:"input-group-append"},G=["disabled"],J={class:"text-end mb-5 d-none d-md-block"},Q=(0,o._)("p",{class:"text-white text-xl"},"我已確認資料無誤",-1),R=(0,o.Uk)("付款 ");function X(e,t,s,X,ee,te){const se=(0,o.up)("Navbar"),oe=(0,o.up)("Field"),ae=(0,o.up)("ErrorMessage"),le=(0,o.up)("w-radio"),ie=(0,o.up)("w-checkbox"),re=(0,o.up)("w-flex"),ne=(0,o.up)("w-button"),de=(0,o.up)("Form"),ce=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(se),(0,o._)("div",i,[(0,o._)("div",r,[(0,o._)("div",n,[(0,o._)("div",d,[c,(0,o.Wm)(de,{onSubmit:te.submit},{default:(0,o.w5)((()=>[(0,o._)("div",m,[u,(0,o.Wm)(oe,{id:"name",modelValue:this.formData.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>this.formData.user.name=e),name:"姓名",rules:"required",type:"text",class:"carts-input w-100 p-2 border-0 border-bottom text-white",placeholder:"請輸入姓名"},null,8,["modelValue"]),p,(0,o.Wm)(ae,{style:{color:"#ff4343"},class:"ps-2 position-absolute text-xs",name:"姓名"})]),(0,o._)("div",b,[f,(0,o.Wm)(le,{class:"ps-2",color:"white",value:"male",name:"gendor",id:"gendor",modelValue:ee.gendor,"onUpdate:modelValue":t[1]||(t[1]=e=>ee.gendor=e)},{default:(0,o.w5)((()=>[w])),_:1},8,["modelValue"]),(0,o.Wm)(le,{class:"ps-3",color:"white",value:"female",name:"gendor",id:"gendor",modelValue:ee.gendor,"onUpdate:modelValue":t[2]||(t[2]=e=>ee.gendor=e)},{default:(0,o.w5)((()=>[g])),_:1},8,["modelValue"])]),(0,o._)("div",x,[h,(0,o.Wm)(oe,{id:"email",modelValue:ee.formData.user.email,"onUpdate:modelValue":t[3]||(t[3]=e=>ee.formData.user.email=e),name:"信箱",rules:"required|email",type:"email",class:"carts-input w-100 p-2 border-0 border-bottom text-white",placeholder:"請輸入電子信箱"},null,8,["modelValue"]),_,(0,o.Wm)(ae,{style:{color:"#ff4343"},class:"ps-2 position-absolute text-xs",name:"信箱"})]),(0,o._)("div",v,[k,(0,o.Wm)(oe,{id:"phone",modelValue:ee.formData.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>ee.formData.user.tel=e),name:"手機",rules:"required",type:"tel",class:"carts-input w-100 p-2 border-0 border-bottom text-white",placeholder:"請輸入手機號碼"},null,8,["modelValue"]),y,(0,o.Wm)(ae,{style:{color:"#ff4343"},class:"ps-2 position-absolute text-xs",name:"手機"})]),(0,o._)("div",D,[V,(0,o.Wm)(oe,{id:"address",modelValue:ee.formData.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>ee.formData.user.address=e),name:"地址",rules:"required",type:"address",class:"carts-input w-100 p-2 border-0 border-bottom text-white",placeholder:"請輸入完整地址"},null,8,["modelValue"]),W,(0,o.Wm)(ae,{style:{color:"#ff4343"},class:"ps-2 position-absolute text-xs",name:"地址"})]),(0,o._)("div",C,[(0,o._)("label",U,[E,B,(0,o.wy)((0,o._)("input",{id:"message","onUpdate:modelValue":t[6]||(t[6]=e=>ee.formData.message=e),name:"留言",class:"carts-input w-100 p-2 border-0 border-bottom text-white",maxlength:"100",placeholder:"留下疑問或需求"},null,512),[[a.nr,ee.formData.message]])],512)]),L,(0,o._)("div",T,[(0,o.Wm)(re,{class:"align-center tracking-wide"},{default:(0,o.w5)((()=>[(0,o.Wm)(ie,{class:"ms-auto mb-5",color:"grey",modelValue:ee.selection1,"onUpdate:modelValue":t[7]||(t[7]=e=>ee.selection1=e)},{default:(0,o.w5)((()=>[$])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(ne,{class:"ms-2 w-btn",onClick:t[8]||(t[8]=e=>te.submit())},{default:(0,o.w5)((()=>[z])),_:1})])])),_:1},8,["onSubmit"])]),(0,o._)("div",F,[q,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(ee.cartsData.carts,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"payCart-item border-bottom d-flex py-3",key:t},[(0,o._)("img",{src:e.product.imageUrl,class:"d-block",alt:"cartImage"},null,8,O),(0,o._)("div",P,[(0,o._)("p",j,(0,l.zw)(e.product.title)+" ("+(0,l.zw)(e.product.unit)+")",1),(0,o._)("p",M,"單價"+(0,l.zw)(e.product.price)+"$",1),(0,o._)("p",N,"數量"+(0,l.zw)(e.qty),1),(0,o._)("p",Z,"金額"+(0,l.zw)(e.total)+"$",1)])])))),128)),(0,o._)("div",H,[(0,o._)("div",{class:(0,l.C_)({"d-none":ee.coupon})},"總金額"+(0,l.zw)(ee.cartsData.total)+"$ ",3),(0,o._)("div",I,[(0,o._)("del",{class:(0,l.C_)({"d-none":!ee.coupon}),style:{"text-decoration-color":"red"}},"總金額"+(0,l.zw)(ee.cartsData.total)+"$",3)]),(0,o._)("div",S,[(0,o._)("p",{class:(0,l.C_)({"d-none":!ee.coupon})}," 折扣價"+(0,l.zw)(Math.round(e.$filters.currency(ee.cartsData.final_total)))+"$ ",3)])]),(0,o._)("div",Y,[(0,o._)("label",K,[(0,o.wy)((0,o._)("input",{id:"coupon",name:"coupon",type:"text",ref:"codeValue","onUpdate:modelValue":t[9]||(t[9]=e=>ee.codeValue=e),class:"tracking-widest border-0 w-100",placeholder:"請輸入優惠碼"},null,512),[[a.nr,ee.codeValue]])]),(0,o._)("div",A,[(0,o._)("button",{onClick:t[10]||(t[10]=e=>te.useCoupon()),class:"btn btn-outline-secondary tracking-widest rounded-0",type:"button",disabled:ee.coupon}," 套用優惠碼 ",8,G)])]),(0,o._)("div",J,[(0,o.Wm)(re,{class:"align-center tracking-wide"},{default:(0,o.w5)((()=>[(0,o.Wm)(ie,{class:"ms-auto mb-5",color:"grey",modelValue:ee.selection1,"onUpdate:modelValue":t[11]||(t[11]=e=>ee.selection1=e)},{default:(0,o.w5)((()=>[Q])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(ne,{class:"ms-2 w-btn",onClick:t[12]||(t[12]=e=>te.submit())},{default:(0,o.w5)((()=>[R])),_:1})])])])])]),(0,o.Wm)(ce)],64)}var ee=s(5191),te=s(7043),se=s(5708),oe=s(5147),ae=s.n(oe),le={data(){return{cartsData:{},selection1:!1,formData:{user:{name:"",email:"",tel:"",address:""},message:""},codeValue:"",coupon:!1,gendor:""}},components:{Navbar:ee.Z,Footer:te.Z,Field:se.gN,Form:se.l0,ErrorMessage:se.Bc},methods:{submit(){if(""===this.formData.user.name||""===this.formData.user.email||""===this.formData.user.tel||""===this.formData.user.address){const e=ae().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",ae().stopTimer),e.addEventListener("mouseleave",ae().resumeTimer)}});e.fire({icon:"info",title:"資料未完整填寫"})}else{if(!0!==this.gendor){const e=ae().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",ae().stopTimer),e.addEventListener("mouseleave",ae().resumeTimer)}});return void e.fire({icon:"info",title:'請填寫性別欄位 <i class="bi bi-emoji-smile-fill"></i>'})}if(!1===this.selection1){const e=ae().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",ae().stopTimer),e.addEventListener("mouseleave",ae().resumeTimer)}});return void e.fire({icon:"info",title:'確認資訊完成後<br>記得勾選確認欄位 <i class="bi bi-emoji-smile-fill"></i>'})}}const e="https://vue3-course-api.hexschool.io/api/dessertsweet/order";this.axios.post(e,{data:this.formData}).then((e=>{console.log(e);const{orderId:t}=e.data;e.data.success?this.$router.push(`/user/checkout/${t}`):console.log("error")}))},getData(){const e="https://vue3-course-api.hexschool.io/api/dessertsweet/cart";this.axios.get(e).then((e=>{this.cartsData=e.data.data}))},useCoupon(){const e={code:this.codeValue},t="https://vue3-course-api.hexschool.io/api/dessertsweet/coupon";this.axios.post(t,{data:e}).then((e=>{if(this.getData(),e.data.success){this.coupon=!0,this.$refs.codeValue.disabled=!0;const e=ae().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",ae().stopTimer),e.addEventListener("mouseleave",ae().resumeTimer)}});e.fire({icon:"success",title:"使用優惠卷成功"})}else{const e=ae().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",ae().stopTimer),e.addEventListener("mouseleave",ae().resumeTimer)}});e.fire({icon:"error",title:"使用優惠卷異常"})}}))}},mounted(){this.getData()}},ie=s(89);const re=(0,ie.Z)(le,[["render",X]]);var ne=re}}]);
//# sourceMappingURL=712.3bdee495.js.map