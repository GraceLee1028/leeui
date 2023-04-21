<template>
  <el-button class="zhyx-download" @click="download()" v-bind="$attrs" v-on="$listeners"><slot>下载</slot></el-button>
</template>
<script>
import UrlMixin from '../../../mixins/url.mixin'
import {downloadFile} from '../../../utils/file'
export default {
  name:'ZhyxDownload',
  mixins:[UrlMixin],
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
  
}
</script>