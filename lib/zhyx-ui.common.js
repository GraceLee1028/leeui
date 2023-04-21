/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Download": function() { return /* reexport */ download; },
  "Select": function() { return /* reexport */ components_select; },
  "default": function() { return /* binding */ entry_lib; },
  "fileUtil": function() { return /* reexport */ file; },
  "install": function() { return /* reexport */ install; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/components/select/src/index.vue?vue&type=template&id=5b4dc576&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('el-select',_vm._g(_vm._b({attrs:{"clearable":"","filterable":""},on:{"change":_vm.handleChange},model:{value:(_vm.modelValueSet),callback:function ($$v) {_vm.modelValueSet=$$v},expression:"modelValueSet"}},'el-select',_vm.$attrs,false),_vm.$listeners),_vm._l((_vm.dataList),function(item){return _c('el-option',{key:item[_vm.getParams.value],attrs:{"label":item[_vm.getParams.label],"value":item[_vm.getParams.value]}})}),1)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/components/select/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name:'ZhyxSelect',
  model:{
    prop:'modelValue',
    event:'update:modelValue'
  },
  props:{
    isSetDefault: {//设置默认值
      type:Boolean,
      default: false
    }, 
    modelValue:{//值
      type:[String,undefined],
      default: ''
    },
    label:{//名称
      type:String,
      default:''
    },
    params:{
      type:Object,
      default(){
        return {}
      }
    },
    url:{//请求地址
      type:String,
      default:''
    },
    method:{
      type:String,
      default:'get'
    },
    list:{//数据
      type:Array,
      default(){
        return [
          {label:'选项1',value:'1'},
          {label:'选项2',value:'2'}
        ]
      }
    }
  },
  created(){
    // console.log('select created')
    this.getData()
  },
  activated() {
    // console.log('select activated')
    !this.isRequest&&this.getData()
  },
  computed:{
    modelValueSet:{
      get(){
        return this.modelValue
      },
      set(newVal){
        this.$emit('update:modelValue',newVal)
      }
    },
    getParams(){//配置数据的参数属性名
      return Object.assign({label:'label',value:'value'},this.params)
    },
    getList(){
      return this.list;
    }
  },
  data(){
    return {
      dataList:[],
      isRequest:false,
    }
  },
  watch:{
    url(){
      this.getData();
    }
  },
  methods:{
    getData(){
      this.isRequest = true;
      const p = new Promise(resolve=>{
        if(this.url){
          this.$http({
            url: this.url,
            method:this.method,
          }).then(({data}) => {
            this.dataList = data.data||[];
            resolve()
          }).catch(()=>{
            this.dataList=[]
          }).finally(()=>{
            resolve()
          })
        }else{
          this.dataList = this.getList;
          resolve()
        }
      })
      p.then(()=>{
        if(this.isSetDefault){
          const item = this.dataList.length>0?this.dataList[0]:null;
          this.modelValueSet = item?item[this.getParams.value]:''
          const label =  item?item[this.getParams.label]:''
          this.$nextTick(() => {
            this.$emit('update:label',label)
            this.$emit('change',[item])
          })
          this.isRequest = false;
        }
      })
      
    },
    handleChange(val){
      let selectedItems = this.dataList.filter(item=>item[this.getParams.value]===val)
      let names = ''
      if(selectedItems.length>1){
        names = selectedItems.map(item=>item[this.getParams.label]).join(',')
      }else if(selectedItems.length>0){
        let item = selectedItems[0]
        names = item[this.getParams.label]
      }
      this.$emit('update:label',names)
      this.$emit('change',selectedItems)
    }
  }
  
});

;// CONCATENATED MODULE: ./packages/components/select/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/components/select/src/index.vue





/* normalize component */
;
var component = normalizeComponent(
  select_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var select_src = (component.exports);
;// CONCATENATED MODULE: ./packages/components/select/index.js
// 按需引入

select_src.install = function(Vue){
  Vue.component(select_src.name,select_src)
}
/* harmony default export */ var components_select = (select_src);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/components/download/src/index.vue?vue&type=template&id=7c8e2379&
var srcvue_type_template_id_7c8e2379_render = function render(){var _vm=this,_c=_vm._self._c;return _c('el-button',_vm._g(_vm._b({staticClass:"zhyx-download",on:{"click":function($event){return _vm.download()}}},'el-button',_vm.$attrs,false),_vm.$listeners),[_vm._t("default",function(){return [_vm._v("下载")]})],2)
}
var srcvue_type_template_id_7c8e2379_staticRenderFns = []


;// CONCATENATED MODULE: ./packages/mixins/url.mixin.js
/* harmony default export */ var url_mixin = ({
  props:{
    url:{//请求地址
      type:String,
      default:''
    },
    method:{
      type:String,
      default:'get'
    },
  }
});
;// CONCATENATED MODULE: ./packages/utils/file.js

  function downloadFile(content,name){
    const blob = new Blob([content]);
    const link = document.createElement('a');
    link.download = name;
    link.style.display = 'none';
    const src = URL.createObjectURL(blob,{type:'application/octet-stream'});
    link.href = src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(src);
  }
  /* harmony default export */ var file = ({
    downloadFile
  });
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/components/download/src/index.vue?vue&type=script&lang=js&



/* harmony default export */ var download_srcvue_type_script_lang_js_ = ({
  name:'ZhyxDownload',
  mixins:[url_mixin],
  props:{
    method:{
      type:String,
      default:'post'
    },
    responseType:{
      type:String,
      default:'blob'
    }
  },
  computed:{
  },
  data(){
    return {
    }
  },
  methods:{
    download(){
      if(this.url){
        this.$http({
            url: this.url,
            method: this.method||'post',
            responseType:this.responseType||'blob'
        }).then(({data,fileName}) => {
            const content = data;
            downloadFile(content,fileName)
        })
      }else{
        console.log('接口地址为空')
      }
    }
  }
  
});

;// CONCATENATED MODULE: ./packages/components/download/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_download_srcvue_type_script_lang_js_ = (download_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./packages/components/download/src/index.vue





/* normalize component */
;
var src_component = normalizeComponent(
  components_download_srcvue_type_script_lang_js_,
  srcvue_type_template_id_7c8e2379_render,
  srcvue_type_template_id_7c8e2379_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var download_src = (src_component.exports);
;// CONCATENATED MODULE: ./packages/components/download/index.js
// 按需引入

download_src.install = function(Vue){
  Vue.component(download_src.name,download_src)
}
/* harmony default export */ var download = (download_src);
;// CONCATENATED MODULE: ./packages/index.js



const components = [
  components_select,
  download
]
function install(Vue){
  // 判断是否安装
  if (install.installed) return
  // 遍历 components 数组，来进行全局注册
  components.map(component => {
      Vue.component(component.name, component)
  })
}
//直接引入vue依赖文件时，执行
if(typeof window!==undefined&&window.Vue){
  install(window.Vue)
}
/* harmony default export */ var packages_0 = (install);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=zhyx-ui.common.js.map