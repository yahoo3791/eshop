"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[62],{2062:function(t,e,i){i.r(e),i.d(e,{default:function(){return G}});var s=i(3396),a=i(7139),o=i(9242);const n=(0,s._)("div",{class:"loadingio-spinner-interwind-il303leqtya"},[(0,s._)("div",{class:"ldio-k17d8xi3rys"},[(0,s._)("div",null,[(0,s._)("div",null,[(0,s._)("div",null,[(0,s._)("div")])]),(0,s._)("div",null,[(0,s._)("div",null,[(0,s._)("div")])])])])],-1),r={class:"bg-dark"},d={class:"container pt-utility"},l={class:"row"},c=(0,s.uE)('<div class="col-12"><nav aria-label="breadcrumb"><ol class="breadcrumb py-2 px-1 p-md-2 breadcrumb-style tracking-wider"><li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">首頁</a></li><li class="breadcrumb-item breadcrumb-item-none">我的收藏</li></ol></nav></div>',1),u=(0,s._)("h1",{class:"title-01"}," 目前無收藏商品",-1),p=(0,s.Uk)("前往商城"),m={class:"px-0 px-md-0 d-flex flex-wrap justify-content-end justify-content-md-center align-items-center mt-3"},v={for:"sort",class:"text-white pe-2 pb-md-2 d-inline-block"},h=(0,s.Uk)("顯示方法 "),g={class:"bg-white tracking-wide font-medium d-inline-block",style:{"max-width":"300px","border-radius":"5px"}},f=(0,s._)("option",{selected:"selected",disabled:"disabled",style:{display:"none"},value:""},"選擇顯示方法 ",-1),b=(0,s._)("option",{value:"熱銷商品"},"熱銷商品",-1),w=(0,s._)("option",{value:"價格排序低到高"},"價格排序低到高",-1),_=(0,s._)("option",{value:"價格排序高到低"},"價格排序高到低",-1),x=[f,b,w,_],k=(0,s._)("div",{class:"spinner-border text-light",role:"status",style:{width:"3rem",height:"3rem"}},[(0,s._)("span",{class:"visually-hidden"},"Loading...")],-1),D=[k],y={class:"row d-flex flex-wrap align-items-center"},C=["onClick","onKeydown"],L={key:0,class:"badge bg-danger position-absolute",style:{"z-index":"5",top:"5%",left:"5%"}},F={key:1,class:"badge bg-dark opacity-50 position-absolute",style:{"z-index":"5",top:"5%",left:"5%"}},N={class:"product-item position-relative"},O=(0,s._)("div",{class:"w-100 productNotes-container position-absolute bottom-0 start-50"},[(0,s._)("i",{class:"productNotes-icon d-block bi bi-info-square text-4xl position-relative top-50 start-50 text-center"})],-1),T=["onClick","onKeydown"],E={class:"product-content pt-1"},B={class:"product-content-h5 text-base font-medium tracking-wide"},K={class:"d-flex justify-content-between"},U=(0,s.Uk)("/ "),W={class:"product-p"},q=["onClick","onKeydown","disabled"],z=(0,s.Uk)(" 加入購物車 ");function M(t,e,i,f,b,w){const _=(0,s.up)("Navbar"),k=(0,s.up)("loading"),M=(0,s.up)("w-button"),S=(0,s.up)("router-link"),Z=(0,s.up)("w-image"),$=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(_),(0,s.Wm)(k,{active:b.isLoading,"onUpdate:active":e[0]||(e[0]=t=>b.isLoading=t)},{default:(0,s.w5)((()=>[n])),_:1},8,["active"]),(0,s._)("div",r,[(0,s._)("div",d,[(0,s._)("div",l,[c,(0,s._)("div",{class:(0,a.C_)(["col-12 d-n text-center",{"d-block":0==this.favoriteData.length}]),style:{padding:"20vh 0"}},[u,(0,s.Wm)(S,{to:"/user/products",class:"text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{class:"mt-5 w-btn"},{default:(0,s.w5)((()=>[p])),_:1})])),_:1})],2),(0,s._)("div",{class:(0,a.C_)(["col-12 col-md-3",{"d-none":this.favoriteData.length<=1}])},[(0,s._)("div",m,[(0,s._)("label",v,[h,(0,s._)("div",g,[(0,s._)("select",{name:"sort",id:"sort",class:"text-black tracking-wide font-medium px-4 py-1 border-0",onChange:e[1]||(e[1]=t=>w.onChange(t))},x,32)])])])],2),0!==this.favoriteData.length?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,a.C_)(["col-12 text-center pt-5",{"d-none":b.productLoading}])},D,2)):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)(["col-12 col-md-9 text-white mt-3",{"d-none":0==this.favoriteData.length}])},[(0,s._)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.filterData,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-6 col-md-6 col-lg-4 mb-5",key:i},[(0,s._)("div",{class:"text-white product-content-container mx-auto cursor-pointer position-relative",onClick:(0,o.iM)((e=>w.more(t.id,e,i)),["prevent"]),onKeydown:e=>w.more(t.id,e,i)},[t.num<=5&&t.num>=1?((0,s.wg)(),(0,s.iD)("span",L,"HOT")):0===t.num?((0,s.wg)(),(0,s.iD)("span",F,"SOLD OUT")):(0,s.kq)("",!0),(0,s._)("div",N,[(0,s.Wm)(Z,{src:t.imageUrl,class:"position-relative w-100 h-100 product-img",alt:"雜誌圖片"},null,8,["src"]),O,(0,s._)("div",{onClick:(0,o.iM)((e=>w.addFav(t,i)),["stop"]),onKeydown:e=>w.addFav(t,i),class:"fav position-absolute end-0 top-0"},[(0,s._)("i",{class:(0,a.C_)(["bi fs-1 mx-2",b.favoriteData.includes(t.id)?"bi-heart-fill":"bi-heart"])},null,2)],40,T)]),(0,s._)("div",E,[(0,s._)("h5",B,(0,a.zw)(t.title),1),(0,s._)("div",K,[(0,s._)("p",null,[(0,s._)("del",null,"$"+(0,a.zw)(t.origin_price),1),U,(0,s._)("span",W,"優惠價$"+(0,a.zw)(t.price),1)])]),t.num>=1?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,a.C_)([{"opacity-75":!0===this.isLoading},"w-btn-product mt-2"]),onClick:(0,o.iM)((e=>w.addCart(t,e)),["stop"]),onKeydown:e=>w.addCart(t,e),disabled:!0===this.isLoading},[(0,s._)("div",{onClick:e[2]||(e[2]=(0,o.iM)((()=>{}),["stop"])),class:"d-none spinner-border spinner-border-sm",role:"status"}),z],42,q)):((0,s.wg)(),(0,s.iD)("div",{key:1,class:"w-btn-product mt-2 opacity-50",onClick:e[3]||(e[3]=(0,o.iM)((()=>{}),["stop"]))}," 已售完 "))])],40,C)])))),128))])],2)])])]),(0,s.Wm)($)],64)}var S=i(5191),Z=i(7043),$=i(3752),P=i.n($),j=i(5147),H=i.n(j),I=i(5820),J={data(){return{favoriteData:[],products:[],filterData:[],isLoading:!1,productLoading:!0}},components:{Navbar:S.Z,Footer:Z.Z,Loading:P()},methods:{getData(){const t="https://vue3-course-api.hexschool.io/api/dessertsweet/products/all";this.productLoading=!1,this.axios.get(t).then((t=>{this.products=t.data.products,t.data.success&&(this.productLoading=!0,this.getFavoriteData())}))},updateFav(){this.favoriteData=JSON.parse(localStorage.getItem("fav"))||[]},getFavoriteData(){this.filterData=this.products.filter((t=>this.favoriteData.includes(t.id)))},addCart(t,e){e.target.childNodes[0].classList.remove("d-none");const i={product_id:t.id,qty:1},s="https://vue3-course-api.hexschool.io/api/dessertsweet/cart";this.isLoading=!0,this.axios.post(s,{data:i}).then((t=>{if(this.isLoading=!1,e.target.childNodes[0].classList.add("d-none"),t.data.success){I.Z.emit("updateCartsNum");const t=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",H().stopTimer),t.addEventListener("mouseleave",H().resumeTimer)}});t.fire({icon:"success",title:"成功加入購物車"})}else{const t=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",H().stopTimer),t.addEventListener("mouseleave",H().resumeTimer)}});t.fire({icon:"error",title:"加入購物車失敗"})}}))},more(t){const e=`https://vue3-course-api.hexschool.io/api/dessertsweet/product/${t}`;this.axios.get(e).then((()=>{this.$router.push(`/user/product/${t}`)}))},addFav(t){if(this.favoriteData.includes(t.id)){this.favoriteData.splice(this.favoriteData.indexOf(t.id),1);const e=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",H().stopTimer),t.addEventListener("mouseleave",H().resumeTimer)}});e.fire({icon:"success",title:"成功移除收藏"})}else{this.favoriteData.push(t.id);const e=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",H().stopTimer),t.addEventListener("mouseleave",H().resumeTimer)}});e.fire({icon:"success",title:"成功加入收藏"})}localStorage.setItem("fav",JSON.stringify(this.favoriteData)),I.Z.emit("updateNum"),this.getFavoriteData()},onChange(t){const{value:e}=t.target;"價格排序低到高"===e&&this.filterData.length>1?this.filterData.sort(((t,e)=>t.price-e.price)):"價格排序高到低"===e&&this.filterData.length>1?this.filterData.sort(((t,e)=>e.price-t.price)):"熱銷商品"===e&&this.products.length>1&&this.filterData.sort(((t,e)=>t.num-e.num))}},created(){},mounted(){this.getData(),this.updateFav(),this.getFavoriteData()}},Y=i(89);const A=(0,Y.Z)(J,[["render",M]]);var G=A}}]);
//# sourceMappingURL=62.8456ca41.js.map