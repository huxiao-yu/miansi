(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bc83969"],{"3e51":function(t,a,l){"use strict";l.r(a);var i=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"container"},[l("div",{staticClass:"title"},[t._v("第一个问题")]),l("div",{staticClass:"content"},[l("div",{staticClass:"form"},[l("div",{staticClass:"form-input"},[l("h1",{staticStyle:{"margin-bottom":"10px"}},[t._v("编辑框")]),l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"文本内容:"}},[l("el-input",{model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),l("div",{staticStyle:{display:"flex"}},[l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"文本颜色:"}},[l("el-input",{model:{value:t.form.color,callback:function(a){t.$set(t.form,"color",a)},expression:"form.color"}})],1),l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"背景色:"}},[l("el-input",{model:{value:t.form.bg,callback:function(a){t.$set(t.form,"bg",a)},expression:"form.bg"}})],1)],1),l("div",{staticStyle:{display:"flex"}},[l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"字体:"}},[l("el-select",{model:{value:t.form.family,callback:function(a){t.$set(t.form,"family",a)},expression:"form.family"}},t._l(t.familyData,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"字号:"}},[l("el-select",{model:{value:t.form.size,callback:function(a){t.$set(t.form,"size",a)},expression:"form.size"}},t._l(t.sizeData,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),l("el-form-item",{attrs:{label:"位置:"}},[l("div",{staticStyle:{display:"flex"}},[l("div",{staticClass:"low",staticStyle:{display:"flex","margin-right":"20px"}},[l("div",{staticClass:"low-box",staticStyle:{"padding-left":"5px"},on:{click:function(a){return t.btn(1)}}},[l("div",{staticClass:"hen",staticStyle:{width:"10px","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"6px","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px","margin-top":"4px"}})]),l("div",{staticClass:"low-box",on:{click:function(a){return t.btn(2)}}},[l("div",{staticClass:"hen",staticStyle:{width:"10px",margin:"0 auto","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"14px",margin:"0 auto","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"0 auto","margin-top":"4px"}})]),l("div",{staticClass:"low-box",staticStyle:{"padding-right":"5px"},on:{click:function(a){return t.btn(3)}}},[l("div",{staticClass:"hen",staticStyle:{width:"18px",float:"right","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"14px",float:"right","margin-top":"4px"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px",float:"right","margin-top":"4px"}})])]),l("div",{staticClass:"low",staticStyle:{display:"flex"}},[l("div",{staticClass:"low-box",on:{click:function(a){return t.button(1)}}},[l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"3px auto"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"0 auto"}})]),l("div",{staticClass:"low-box",on:{click:function(a){return t.button(2)}}},[l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"3px auto","margin-top":"9px"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"0 auto"}})]),l("div",{staticClass:"low-box",on:{click:function(a){return t.button(3)}}},[l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"3px auto","margin-top":"14px"}}),l("div",{staticClass:"hen",staticStyle:{width:"16px",margin:"0 auto"}})])])])])],1)],1)]),l("div",{staticClass:"form"},[l("div",{staticClass:"form-input"},[l("h1",{staticStyle:{"margin-bottom":"10px"}},[t._v("实时预览窗")]),l("div",{staticClass:"box",style:"background:"+t.form.bg+";color:"+t.form.color+";text-align:"+t.form.row+";display:table-cell;vertical-align:"+t.form.height+";font-family:"+t.form.family+";font-size:"+t.form.size},[t._v("\n\t\t\t\t\t"+t._s(t.form.name)+"\n\t\t\t\t")])])])])])},e=[],s={data:function(){return{sizeData:[{value:"10px",label:"10px"},{value:"12px",label:"12px"},{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"20px",label:"20px"},{value:"24px",label:"24px"},{value:"36px",label:"36px"}],familyData:[{value:"微软雅黑",label:"微软雅黑"},{value:"宋体",label:"宋体"},{value:"楷体",label:"楷体"},{value:"黑体",label:"黑体"},{value:"隶书",label:"隶书"},{value:"arial",label:"arial"}],form:{name:"我是中国人",bg:"#333",color:"#fff",row:"center",height:"middle",family:"微软雅黑",size:"16px"}}},methods:{onSubmit:function(){console.log("submit!")},btn:function(t){this.form.row=1==t?"left":2==t?"center":"right"},button:function(t){this.form.height=1==t?"top":2==t?"middle":"bottom"}}},o=s,n=(l("650a"),l("2877")),c=Object(n["a"])(o,i,e,!1,null,"3ff74032",null);a["default"]=c.exports},"650a":function(t,a,l){"use strict";var i=l("fbdf"),e=l.n(i);e.a},fbdf:function(t,a,l){}}]);