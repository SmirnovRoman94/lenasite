(window.webpackJsonp=window.webpackJsonp||[]).push([[43,7],{310:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("f69e280e",content,!0,{sourceMap:!1})},365:function(e,t,r){"use strict";r(310)},366:function(e,t,r){var n=r(45)(!1);n.push([e.i,".newPrice_form{width:50%;margin:0 auto}.newPost_button{margin:0 auto;width:100%;display:flex;justify-content:space-around}",""]),e.exports=n},375:function(e,t,r){"use strict";r.r(t);r(47),r(36),r(48),r(12),r(61),r(37),r(62);var n=r(26);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{priceEdit:{type:Object,required:!1}},data:function(){return{price:this.priceEdit?o({},this.priceEdit):{title:"",price:"",headerDown:"",opportunitiesHeader:"",opportunities:"",quantity:1}}},methods:{addNewPrice:function(){this.$emit("newPrice",this.price)},cancel:function(){this.$router.push("/admin/prices")}}},d=(r(365),r(3)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("form",{staticClass:"newPrice_form",on:{submit:function(e){e.preventDefault()}}},[r("AppInput",{staticClass:"newPost_input",attrs:{placeholder:"Name price"},model:{value:e.price.title,callback:function(t){e.$set(e.price,"title",t)},expression:"price.title"}},[e._v("Name price")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Price"},model:{value:e.price.price,callback:function(t){e.$set(e.price,"price",t)},expression:"price.price"}},[e._v("Price")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Header Down"},model:{value:e.price.headerDown,callback:function(t){e.$set(e.price,"headerDown",t)},expression:"price.headerDown"}},[e._v("Header Down")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Преимущества"},model:{value:e.price.opportunitiesHeader,callback:function(t){e.$set(e.price,"opportunitiesHeader",t)},expression:"price.opportunitiesHeader"}},[e._v("Преимущества")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Описание преимуществ"},model:{value:e.price.opportunities,callback:function(t){e.$set(e.price,"opportunities",t)},expression:"price.opportunities"}},[e._v("Описание преимуществ")]),e._v(" "),r("div",{staticClass:"newPost_button"},[r("button",{staticClass:"btn btnPrimary",on:{click:e.addNewPrice}},[e._v("Save")]),e._v(" "),r("button",{staticClass:"btn btnDanger",on:{click:e.cancel}},[e._v("Cancel")])])],1)])}),[],!1,null,null,null);t.default=component.exports},424:function(e,t,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("f8d89e30",content,!0,{sourceMap:!1})},471:function(e,t,r){"use strict";r(424)},472:function(e,t,r){var n=r(45)(!1);n.push([e.i,".newpost{padding-top:150px;font-size:25px;text-align:center;font-style:italic}",""]),e.exports=n},514:function(e,t,r){"use strict";r.r(t);var n={layout:"admin",components:{newPrice:r(375).default},methods:{newPriseAdmin:function(e){var t=this;this.$store.dispatch("addPrice",e).then((function(){t.$router.push("/admin/prices")}))}}},c=(r(471),r(3)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h1",{staticClass:"newpost"},[e._v("Новый price")]),e._v(" "),r("newPrice",{on:{newPrice:e.newPriseAdmin}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);