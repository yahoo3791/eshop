"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[46],{7959:function(t,e,s){s.r(e),s.d(e,{default:function(){return Q}});var i=s(3396),o=s(7139),a=s(9242),n=s.p+"img/productBanner.686edc4a.png";const r=(0,i._)("div",{class:"loadingio-spinner-interwind-il303leqtya"},[(0,i._)("div",{class:"ldio-k17d8xi3rys"},[(0,i._)("div",null,[(0,i._)("div",null,[(0,i._)("div",null,[(0,i._)("div")])]),(0,i._)("div",null,[(0,i._)("div",null,[(0,i._)("div")])])])])],-1),d={class:"container-fluid pt-utility"},c={class:"row"},l=(0,i.uE)('<div class="col-12 col-md-9 mx-auto p-0"><div class="position-relative"><img src="'+n+'" class="w-100 productBanner" style="object-fit:cover;border-radius:5px;" alt="全部商品圖片"><div class="position-absolute top-50 translate-middle-y" style="right:20%;"><h2 class="text-3xl font-medium tracking-widest">全部甜點</h2></div></div></div>',1),p={class:"col-12 col-md-9 mx-auto p-0"},u={class:"ps-3 px-md-0 d-flex flex-wrap justify-content-end align-items-center my-3"},m={for:"sort",class:"text-white tracking-wide font-medium pe-2 pe-md-0 pb-md-1 d-inline-block"},h=(0,i.Uk)("顯示方法 "),v={class:"bg-white d-inline-block",style:{"max-width":"300px","border-radius":"5px"}},g=(0,i._)("option",{selected:"selected",disabled:"disabled",style:{display:"none"},value:""},"選擇顯示方法 ",-1),f=(0,i._)("option",{value:"熱銷商品"},"熱銷商品",-1),w=(0,i._)("option",{value:"價格排序低到高"},"價格排序低到高",-1),x=(0,i._)("option",{value:"價格排序高到低"},"價格排序高到低",-1),_=[g,f,w,x],b=(0,i._)("div",{class:"spinner-border text-light",role:"status",style:{width:"3rem",height:"3rem"}},[(0,i._)("span",{class:"visually-hidden"},"Loading...")],-1),y=[b],k={class:"col-12 col-md-9 mx-auto"},C={class:"row"},L=["onClick","onKeydown"],T={key:0,class:"badge bg-danger position-absolute",style:{"z-index":"5",top:"5%",left:"5%"}},D={key:1,class:"badge bg-dark opacity-50 position-absolute",style:{"z-index":"5",top:"5%",left:"5%"}},N={class:"product-item position-relative"},E=(0,i._)("div",{class:"w-100 productNotes-container position-absolute bottom-0 start-50"},[(0,i._)("i",{class:"productNotes-icon d-block bi bi-info-square text-4xl position-relative top-50 start-50 text-center"})],-1),O=["onClick","onKeydown"],B={class:"product-content pt-1"},K={class:"product-content-h5 text-base font-medium tracking-wide"},F={class:"d-block d-md-flex justify-content-md-between"},M=(0,i.Uk)("/ "),S={class:"product-p"},q=["onClick","onKeydown","disabled"],H=(0,i.Uk)(" 加入購物車 ");function I(t,e,s,n,g,f){const w=(0,i.up)("loading"),x=(0,i.up)("Navbar"),b=(0,i.up)("w-image"),I=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(w,{active:g.isLoading,"onUpdate:active":e[0]||(e[0]=t=>g.isLoading=t)},{default:(0,i.w5)((()=>[r])),_:1},8,["active"]),(0,i.Wm)(x),(0,i._)("div",d,[(0,i._)("div",c,[l,(0,i._)("div",p,[(0,i._)("div",u,[(0,i._)("label",m,[h,(0,i._)("div",v,[(0,i._)("select",{name:"sort",id:"sort",class:"text-black tracking-wide font-medium px-4 py-1 border-0",onChange:e[1]||(e[1]=t=>f.onChange(t))},_,32)])])])]),(0,i._)("div",{class:(0,o.C_)(["col-12 text-center pt-5",{"d-none":g.productLoading}])},y,2),(0,i._)("div",k,[(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.products,((t,s)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-6 col-md-6 col-lg-4 col-xl-3 mb-5",key:s},[(0,i._)("div",{class:"text-white product-content-container mx-auto cursor-pointer position-relative",onClick:(0,a.iM)((e=>f.more(t.id,e,s)),["prevent"]),onKeydown:e=>f.more(t.id,e,s)},[t.num<=5&&t.num>=1?((0,i.wg)(),(0,i.iD)("span",T,"HOT")):0===t.num?((0,i.wg)(),(0,i.iD)("span",D,"SOLD OUT")):(0,i.kq)("",!0),(0,i._)("div",N,[(0,i.Wm)(b,{src:t.imageUrl,class:"position-relative w-100 h-100 product-img",alt:"雜誌圖片"},null,8,["src"]),E,(0,i._)("div",{class:"fav position-absolute end-0 top-0",onClick:(0,a.iM)((e=>f.addFav(t,s)),["stop"]),onKeydown:e=>f.addFav(t,s)},[(0,i._)("i",{class:(0,o.C_)(["bi fs-1 mx-2",g.favoriteData.includes(t.id)?"bi-heart-fill":"bi-heart"])},null,2)],40,O)]),(0,i._)("div",B,[(0,i._)("h5",K,(0,o.zw)(t.title),1),(0,i._)("div",F,[(0,i._)("p",null,[(0,i._)("del",null,(0,o.zw)(t.origin_price)+"$",1),M,(0,i._)("span",S,"優惠價"+(0,o.zw)(t.price)+"$",1)])]),t.num>=1?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,o.C_)([{"opacity-75":!0===this.isLoading},"w-btn-product mt-2 w-100"]),onClick:(0,a.iM)((e=>f.addCart(t,e)),["stop"]),onKeydown:e=>f.addCart(t,e),disabled:!0===this.isLoading},[(0,i._)("div",{onClick:e[2]||(e[2]=(0,a.iM)((()=>{}),["stop"])),class:"d-none spinner-border spinner-border-sm",role:"status"}),H],42,q)):((0,i.wg)(),(0,i.iD)("div",{key:1,class:"w-btn-product w-100 mt-2 opacity-50",onClick:e[3]||(e[3]=(0,a.iM)((()=>{}),["stop"]))}," 已售完 "))])],40,L)])))),128))])])])]),(0,i._)("div",{class:(0,o.C_)([{scrollIconMoveIn:!t.scrollIcon},"scrollTop-container position-fixed text-center end-0 bottom-0 cursor-pointer m-3"]),ref:"scrollTop"},[(0,i._)("div",{onClick:e[4]||(e[4]=(0,a.iM)(((...e)=>t.scrollToTop&&t.scrollToTop(...e)),["prevent"])),onKeydown:e[5]||(e[5]=(...e)=>t.scrollToTop&&t.scrollToTop(...e)),class:"scrollTop-btn d-block"},null,32)],2),(0,i.Wm)(I)],64)}var U=s(5191),Z=s(7043),z=s(3752),$=s.n(z),P=s(5147),W=s.n(P),j=s(5820),J=s(8286),Y={data(){return{products:{},isLoading:!1,cartsNum:0,carts:{},favoriteData:[],history:[],productLoading:!0,pagination:{}}},components:{Navbar:U.Z,Footer:Z.Z,Loading:$()},mixins:[J.Z],methods:{getData(){const t="https://vue3-course-api.hexschool.io/api/dessertsweet/products/all";this.productLoading=!1,this.axios.get(t).then((t=>{this.pagination=t.data.pagination,this.products=t.data.products,this.productLoading=!0}))},more(t){const e=`https://vue3-course-api.hexschool.io/api/dessertsweet/product/${t}`;this.axios.get(e).then((e=>{e.data.success&&this.$router.push(`/user/product/${t}`)})),this.productHistory(t)},productHistory(t){this.history.push(t),this.history=localStorage.setItem("setHistory",JSON.stringify(this.history))},addCart(t,e){e.target.childNodes[0].classList.remove("d-none");const s={product_id:t.id,qty:1},i="https://vue3-course-api.hexschool.io/api/dessertsweet/cart";this.isLoading=!0,this.axios.post(i,{data:s}).then((t=>{if(this.isLoading=!1,e.target.childNodes[0].classList.add("d-none"),t.data.success){const t=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",W().stopTimer),t.addEventListener("mouseleave",W().resumeTimer)}});t.fire({icon:"success",title:"成功加入購物車"})}else{const t=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",W().stopTimer),t.addEventListener("mouseleave",W().resumeTimer)}});t.fire({icon:"error",title:"加入購物車失敗"})}})),this.axios.get(i).then((t=>{const{carts:e}=t.data.data;if(t.data.success){let t=1;e.forEach((e=>{t+=e.qty})),this.cartsNum=t}this.getCarts()})),this.renderCarts(),j.Z.emit("updateCartsNum")},getCarts(){if(!this.cartsNum){const t="https://vue3-course-api.hexschool.io/api/dessertsweet/cart";this.axios.get(t).then((t=>{const{carts:e}=t.data.data;let s=0;e.forEach((t=>{s+=t.qty,this.cartsNum=s}))}))}},renderCarts(){const t="https://vue3-course-api.hexschool.io/api/dessertsweet/cart";this.axios.get(t).then((t=>{this.carts=t.data.data.carts}))},onChange(t){const{value:e}=t.target;"價格排序低到高"===e&&this.products.length>1?this.products.sort(((t,e)=>t.price-e.price)):"價格排序高到低"===e&&this.products.length>1?this.products.sort(((t,e)=>e.price-t.price)):"熱銷商品"===e&&this.products.length>1&&this.products.sort(((t,e)=>t.num-e.num))},addFav(t){if(this.favoriteData.includes(t.id)){this.favoriteData.splice(this.favoriteData.indexOf(t.id),1);const e=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",W().stopTimer),t.addEventListener("mouseleave",W().resumeTimer)}});e.fire({icon:"success",title:"成功移除收藏"})}else{this.favoriteData.push(t.id);const e=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",W().stopTimer),t.addEventListener("mouseleave",W().resumeTimer)}});e.fire({icon:"success",title:"成功加入收藏"})}localStorage.setItem("fav",JSON.stringify(this.favoriteData)),j.Z.emit("updateNum")},updateFav(){this.favoriteData=JSON.parse(localStorage.getItem("fav"))||[]}},watch:{cartsNum:{handler(){this.renderCarts()},immediate:!0}},mounted(){this.getData(),this.updateFav()}},A=s(89);const G=(0,A.Z)(Y,[["render",I]]);var Q=G}}]);
//# sourceMappingURL=46.fd53365c.js.map