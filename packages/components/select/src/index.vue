<template>
  <el-select
        v-model="modelValueSet"
        @change="handleChange"
        clearable
        filterable
        v-bind="$attrs"
        v-on="$listeners"
      >
        <el-option v-for="item in dataList" :key="item[getParams.value]" :label="item[getParams.label]" :value="item[getParams.value]" />
  </el-select>
</template>
<script>
export default {
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
  
}
</script>