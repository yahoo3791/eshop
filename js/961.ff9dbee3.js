"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[961],{7961:function(e,t,s){s.r(t),s.d(t,{default:function(){return X}});var r=s(3396),i=s(9242),l=s(7139);const a=(0,r._)("div",{class:"loadingio-spinner-interwind-il303leqtya"},[(0,r._)("div",{class:"ldio-k17d8xi3rys"},[(0,r._)("div",null,[(0,r._)("div",null,[(0,r._)("div",null,[(0,r._)("div")])]),(0,r._)("div",null,[(0,r._)("div",null,[(0,r._)("div")])])])])],-1),d={class:"bg-dark"},o={class:"container"},c={class:"row"},n={class:"col-10 col-md-6 mx-auto text-white text-center",style:{"padding-top":"20vh","padding-bottom":"10vh"}},p=(0,r._)("h1",{class:"title-01"},"查詢訂單",-1),u={class:"d-flex py-3"},_={class:"row"},b={class:"col-10 col-md-6 mx-auto"},h=(0,r._)("h3",{class:"tracking-widest font-bold text-3xl pb-3 mt-5",style:{"border-bottom":"1px solid #404040"}},"訂購人資訊",-1),g={class:"row"},w={class:"col-12 text-white mb-5 d-flex"},m=(0,r.uE)('<div class="text-base tracking-widest text-lg"><p class="py-1">聯絡人姓名</p><p class="py-1">聯絡人信箱</p><p class="py-1">聯絡人手機</p><p class="py-1">收件人地址</p></div>',1),v={class:"ps-3 tracking-widest text-lg"},x={class:"py-1"},y={class:"py-1"},k={class:"py-1"},f={class:"py-1"},z={class:"row"},N=(0,r._)("h3",{class:"tracking-widest font-bold text-3xl pb-3 mt-3",style:{"border-bottom":"1px solid #404040"}},"商品資訊",-1),D={class:"col-12 text-white mb-5"},L=["src"],U={class:"text-sm d-flex flex-column justify-content-between ps-3"},C={class:"text-2xl"},O={class:"leading-7 tracking-wider text-lg"},$=(0,r._)("i",{class:"bi bi-x"},null,-1),q={class:"leading-7 d-block tracking-wider text-xl"},K=(0,r._)("i",{class:"bi bi-currency-dollar"},null,-1),W={class:"row"},Z=(0,r._)("h3",{class:"tracking-widest font-bold text-3xl pb-3 mt-3",style:{"border-bottom":"1px solid #404040"}},"付款資訊",-1),E={class:"col-12 tracking-widest text-lg"},F={class:"py-1"},H=(0,r.Uk)("訂單編號:"),Y=(0,r._)("br",null,null,-1),j={class:"py-1"},I={key:0,class:"py-1"},M={key:1,class:"py-1"};function V(e,t,s,V,A,B){const G=(0,r.up)("loading"),J=(0,r.up)("Navbar"),P=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(G,{active:A.isLoading,"onUpdate:active":t[0]||(t[0]=e=>A.isLoading=e)},{default:(0,r.w5)((()=>[a])),_:1},8,["active"]),(0,r.Wm)(J),(0,r._)("div",d,[(0,r._)("div",o,[(0,r._)("div",c,[(0,r._)("div",n,[p,(0,r._)("div",u,[(0,r.wy)((0,r._)("input",{id:"message",name:"留言",class:"carts-input p-2 border-0 border-bottom text-white tracking-wider",maxlength:"100",placeholder:"輸入您的訂單編號",style:{width:"80%"},"onUpdate:modelValue":t[1]||(t[1]=e=>A.orderNumber=e),onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>B.search&&B.search(...e)),["enter"]))},null,544),[[i.nr,A.orderNumber]]),(0,r._)("i",{class:"bi bi-search cursor-pointer d-block p-2 order-search",onClick:t[3]||(t[3]=(...e)=>B.search&&B.search(...e)),onKeydown:t[4]||(t[4]=(...e)=>B.search&&B.search(...e))},null,32)])])])]),(0,r._)("div",{class:(0,l.C_)(["container text-white",{"d-none":!A.getOrder}]),style:{"padding-bottom":"20vh","padding-top":"10vh"}},[(0,r._)("div",_,[(0,r._)("div",b,[h,(0,r._)("div",g,[(0,r._)("div",w,[m,(0,r._)("div",v,[(0,r._)("p",x,(0,l.zw)(A.user.name),1),(0,r._)("p",y,(0,l.zw)(A.user.email),1),(0,r._)("p",k,(0,l.zw)(A.user.tel),1),(0,r._)("p",f,(0,l.zw)(A.user.address),1)])])]),(0,r._)("div",z,[N,(0,r._)("div",D,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(A.order.products,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"payCart-item border-bottom d-flex py-3",key:t},[(0,r._)("img",{src:e.product.imageUrl,class:"d-block",style:{"max-width":"100px"},alt:"cartImage"},null,8,L),(0,r._)("div",U,[(0,r._)("p",C,(0,l.zw)(e.product.title),1),(0,r._)("p",O,[$,(0,r.Uk)((0,l.zw)(e.qty),1)]),(0,r._)("p",q,[(0,r.Uk)((0,l.zw)(e.total),1),K])])])))),128))])]),(0,r._)("div",W,[Z,(0,r._)("div",E,[(0,r._)("p",null,"訂單時間: "+(0,l.zw)(e.$filters.date(A.order.create_at)),1),(0,r._)("p",F,[H,Y,(0,r.Uk)((0,l.zw)(A.order.id),1)]),(0,r._)("p",j,"金額 "+(0,l.zw)(Math.round(e.$filters.currency(A.order.total)))+"$",1),!0===A.order.is_paid?((0,r.wg)(),(0,r.iD)("p",I,"付款完成")):!1===A.order.is_paid?((0,r.wg)(),(0,r.iD)("p",M,"尚未付款")):(0,r.kq)("",!0)])])])])],2)]),(0,r.Wm)(P)],64)}var A=s(5191),B=s(7043),G=s(3752),J=s.n(G),P=s(5147),Q=s.n(P),R={data(){return{isLoading:!1,orderNumber:"",order:{},user:{},getOrder:!1}},components:{Navbar:A.Z,Footer:B.Z,Loading:J()},methods:{search(){const e=this.orderNumber,t=`https://vue3-course-api.hexschool.io/api/dessertsweet/order/${e}`;if(this.isLoading=!0,""===this.orderNumber)return Q().fire({icon:"error",title:"找不到您的訂單"}),void(this.isLoading=!1);this.axios.get(t).then((e=>{this.isLoading=!1,this.orderNumber="",console.log(e.data),null===e.data.order?Q().fire({icon:"error",title:"訂單編號錯誤",text:"如有需要請聯絡客服人員,感謝您!",footer:"辦公室地址:台北市信義區市府路101號<br>客服電話:(02)1010101<br>客服時間:週一至週五上午07:00~下午17:00<br>Email:DessertOfficer010@gmail.com"}):(this.getOrder=!0,this.order=e.data.order,this.user=e.data.order.user)}))}}},S=s(89);const T=(0,S.Z)(R,[["render",V]]);var X=T}}]);
//# sourceMappingURL=961.ff9dbee3.js.map