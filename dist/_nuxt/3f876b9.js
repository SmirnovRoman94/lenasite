(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{311:function(e,t,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("3fff57c7",content,!0,{sourceMap:!1})},367:function(e,t,r){"use strict";r(311)},368:function(e,t,r){var c=r(45)(!1);c.push([e.i,".newServices_form{width:50%;margin:0 auto}.newPost_button{margin:0 auto;width:100%;display:flex;justify-content:space-around}",""]),e.exports=c},374:function(e,t,r){"use strict";r.r(t);r(47),r(36),r(48),r(12),r(61),r(37),r(62);var c=r(26);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{serviceEdit:{type:Object,required:!1}},data:function(){return{service:this.serviceEdit?o({},this.serviceEdit):{title:"",descr:"",img:""}}},methods:{addNewService:function(){this.$emit("newService",this.service)},cancel:function(){this.$router.push("/admin/services")}}},v=(r(367),r(3)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("form",{staticClass:"newServices_form",on:{submit:function(e){e.preventDefault()}}},[r("AppInput",{staticClass:"newPost_input",attrs:{placeholder:"Name service"},model:{value:e.service.title,callback:function(t){e.$set(e.service,"title",t)},expression:"service.title"}},[e._v("Name services")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Description"},model:{value:e.service.descr,callback:function(t){e.$set(e.service,"descr",t)},expression:"service.descr"}},[e._v("Description")]),e._v(" "),r("AppInput",{attrs:{placeholder:"Image link"},model:{value:e.service.img,callback:function(t){e.$set(e.service,"img",t)},expression:"service.img"}},[e._v("Image Link")]),e._v(" "),r("div",{staticClass:"newPost_button"},[r("button",{staticClass:"btn btnPrimary",on:{click:e.addNewService}},[e._v("Save")]),e._v(" "),r("button",{staticClass:"btn btnDanger",on:{click:e.cancel}},[e._v("Cancel")])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);