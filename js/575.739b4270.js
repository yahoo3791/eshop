"use strict";(self["webpackChunkeshop"]=self["webpackChunkeshop"]||[]).push([[575],{9575:function(e,t,o){o.r(t),o.d(t,{default:function(){return ge}});var a=o(3396),s=o(7139);const n={class:"container pt-utility"},l={class:"text-end"},d={class:"row"},i={key:0,class:"col-12"},p=(0,a._)("h2",{class:"text-black text-center",style:{padding:"30vh 0"}},"尚未新增優惠卷。",-1),u=[p],c={key:1,class:"col-12"},m={class:"table mt-4"},r=(0,a._)("thead",null,[(0,a._)("tr",{class:"font-medium tracking-wider"},[(0,a._)("th",null,"名稱"),(0,a._)("th",{class:"d-none d-md-table-cell"},"折扣百分比"),(0,a._)("th",null,"到期日"),(0,a._)("th",{class:"d-none d-md-table-cell"},"是否啟用"),(0,a._)("th",null,"編輯")])],-1),h={class:"d-none d-md-table-cell"},b={class:"d-none d-md-table-cell"},_={key:0,class:"text-success"},C={key:1,class:"text-muted"},g={class:"p-0"},v={class:"btn-group"},y=["onClick"],w=["onClick"];function k(e,t,o,p,k,x){const f=(0,a.up)("loading"),D=(0,a.up)("couponModal"),M=(0,a.up)("deleteModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:k.isLoading},null,8,["active"]),(0,a._)("div",null,[(0,a._)("div",n,[(0,a._)("div",l,[(0,a._)("button",{class:"btn btn-outline-primary",onClick:t[0]||(t[0]=e=>x.openCoupon(!0))},"新增優惠卷")]),(0,a._)("div",d,[0===this.getCoupons.length?((0,a.wg)(),(0,a.iD)("div",i,u)):((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("table",m,[r,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.getCoupons,(t=>((0,a.wg)(),(0,a.iD)("tbody",{key:t.id},[(0,a._)("tr",null,[(0,a._)("td",null,(0,s.zw)(t.title),1),(0,a._)("td",h,(0,s.zw)(t.percent),1),(0,a._)("td",null,(0,s.zw)(e.$filters.date(t.due_date)),1),(0,a._)("td",b,[1===t.is_enabled?((0,a.wg)(),(0,a.iD)("span",_,"啟用")):((0,a.wg)(),(0,a.iD)("span",C,"未起用"))]),(0,a._)("td",g,[(0,a._)("div",v,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>x.openCoupon(!1,t)},"編輯",8,y),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>x.openDeleteModal(t)},"刪除",8,w)])])])])))),128))])]))])])]),(0,a.Wm)(D,{ref:"couponModal",coupon:this.tempCoupon,onSaveCoupon:x.couponData},null,8,["coupon","onSaveCoupon"]),(0,a.Wm)(M,{ref:"deleteModal","delete-item":this.deleteCoupon,onDeleteCoupon:x.deleteItem},null,8,["delete-item","onDeleteCoupon"])],64)}var x=o(9242);const f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog"},M={class:"modal-content text-black"},L=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠卷"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},$={class:"coupon_title mb-3"},I={for:"title"},V=(0,a.Uk)("優惠卷名稱 "),Z={class:"coupon_isEnabled mb-3"},z={for:"is_enabled"},S=(0,a.Uk)("是否啟用 "),j={class:"coupon_percent mb-3"},H={for:"percent"},N=(0,a.Uk)("折扣百分比 "),W={class:"coupon_dueDate mb-3"},Y={for:"due_date"},E=(0,a.Uk)("到期日 "),K={class:"coupon_code mb-3"},T={for:"code"},q=(0,a.Uk)("折扣代碼 "),A={class:"modal-footer"},B=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function F(e,t,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",D,[(0,a._)("div",M,[L,(0,a._)("div",U,[(0,a._)("div",$,[(0,a._)("label",I,[V,(0,a.wy)((0,a._)("input",{type:"text",name:"title",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.tempCoupon.title=e)},null,512),[[x.nr,n.tempCoupon.title]])])]),(0,a._)("div",Z,[(0,a._)("label",z,[S,(0,a.wy)((0,a._)("input",{type:"checkbox",name:"is_enabled",id:"is_enabled","onUpdate:modelValue":t[1]||(t[1]=e=>n.tempCoupon.is_enabled=e)},null,512),[[x.e8,n.tempCoupon.is_enabled]])])]),(0,a._)("div",j,[(0,a._)("label",H,[N,(0,a.wy)((0,a._)("input",{type:"number",name:"percent",id:"percent","onUpdate:modelValue":t[2]||(t[2]=e=>n.tempCoupon.percent=e)},null,512),[[x.nr,n.tempCoupon.percent]])])]),(0,a._)("div",W,[(0,a._)("label",Y,[E,(0,a.wy)((0,a._)("input",{type:"date",name:"due_date",id:"due_date","onUpdate:modelValue":t[3]||(t[3]=e=>n.tempCoupon.due_date=e)},null,512),[[x.nr,n.tempCoupon.due_date]])])]),(0,a._)("div",K,[(0,a._)("label",T,[q,(0,a.wy)((0,a._)("input",{type:"text",name:"code",id:"code","onUpdate:modelValue":t[4]||(t[4]=e=>n.tempCoupon.code=e)},null,512),[[x.nr,n.tempCoupon.code]])])])]),(0,a._)("div",A,[B,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>l.saveCoupon&&l.saveCoupon(...e))},"儲存")])])])],512)}var G=o(1339),J={data(){return{modal:{},tempCoupon:{}}},props:["coupon"],mixins:[G.Z],methods:{saveCoupon(){this.$emit("saveCoupon",this.tempCoupon),this.modal.hide()}},watch:{coupon(){this.tempCoupon=this.coupon}}},O=o(89);const P=(0,O.Z)(J,[["render",F]]);var Q=P;const R={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},X={class:"modal-dialog"},ee={class:"modal-content text-black"},te=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除警告"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),oe={class:"modal-body"},ae=(0,a.Uk)(" 確定要刪除"),se={class:"text-red"},ne=(0,a.Uk)("優惠碼"),le=(0,a._)("br",null,null,-1),de=(0,a.Uk)(" 刪除後無法復原 "),ie={class:"modal-footer"},pe=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function ue(e,t,o,n,l,d){return(0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("div",X,[(0,a._)("div",ee,[te,(0,a._)("div",oe,[ae,(0,a._)("span",se,(0,s.zw)(this.deleteItem.code),1),ne,le,de]),(0,a._)("div",ie,[pe,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>d.deleteCoupon&&d.deleteCoupon(...e))},"確定刪除")])])])],512)}var ce={data(){return{modal:{}}},mixins:[G.Z],mounted(){},methods:{deleteCoupon(){this.$emit("deleteCoupon",this.deleteItem.id)}},props:["deleteItem"]};const me=(0,O.Z)(ce,[["render",ue]]);var re=me,he=o(3752),be=o.n(he),_e={data(){return{tempCoupon:{},pagination:{},getCoupons:{},isNew:!1,deleteCoupon:{},isLoading:!1}},inject:["emitter"],methods:{openCoupon(e,t){this.$refs.couponModal.modalShow(),this.tempCoupon=!0===e?{}:{...t},this.isNew=e},couponData(e){this.tempCoupon=e,this.tempCoupon.due_date=new Date(this.tempCoupon.due_date).getTime()/1e3,!0===this.tempCoupon.is_enabled?this.tempCoupon.is_enabled=1:this.tempCoupon.is_enabled=0;let t="https://vue3-course-api.hexschool.io/api/dessertsweet/admin/coupon",o="post";!1===this.isNew&&(t=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/coupon/${this.tempCoupon.id}`,o="put"),this.isLoading=!0,this.axios[o](t,{data:this.tempCoupon}).then((e=>{this.isLoading=!1,e.data.success?(this.updateData(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})}))},updateData(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/coupons?page=${e}`;this.axios.get(t).then((e=>{this.isLoading=!1,this.getCoupons=e.data.coupons,this.pagination=e.data.pagination}))},openDeleteModal(e){this.$refs.deleteModal.modalShow(),this.deleteCoupon=e},deleteItem(e){this.$refs.deleteModal.modalHide(),this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/dessertsweet/admin/coupon/${e}`;this.isLoading=!1,this.axios.delete(t).then((e=>{e.data.success?(this.updateData(),this.emitter.emit("push-message",{style:"success",title:"刪除成功"})):this.emitter.emit("push-message",{style:"danger",title:"刪除失敗",content:e.data.message.join("、")})}))}},components:{couponModal:Q,deleteModal:re,Loading:be()},mounted(){this.updateData()}};const Ce=(0,O.Z)(_e,[["render",k]]);var ge=Ce}}]);
//# sourceMappingURL=575.739b4270.js.map