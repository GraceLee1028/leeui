<template>
  <div>
    <!-- <zhyx-select v-model=""></zhyx-select> -->
    <zhyx-select v-model="value" :label.sync="label" :params="{value:'value',label:'name'}"></zhyx-select>
    <zhyx-download type="primary" plain></zhyx-download>
  </div>
</template>
<script>

export default {
    name: "App",
    data() {
        return {
          value:'',
          label:''

        };
    },
}
</script>
<style scoped>
</style>