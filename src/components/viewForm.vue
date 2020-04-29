<template>
  <div style="margin-bottom: 100px">
    <tForm  :formData="formDataList" v-model="formDataList" />
    <div style="position: fixed;right:10px;bottom: 10px">
      <b-button variant="success" @click="updatedForm">update</b-button>
    </div>

  </div>
</template>
<script>
  import tForm from "./tForm";
  export default {
    name: 'HelloWorld',
    components:{
      tForm
    },
    data () {
      return {
        formDataList:this.$route.params,
        msg:'testing',

      }
    },
    created() {
      console.log('params',this.$route.params)
    },
    methods:{
      updatedForm(){
        console.log(this.formDataList)
        window.axios.post('http://3.15.187.108:3000/submitForm',[this.formDataList]).then(({data})=>{
          console.log(data)

        })
      }
    }
  }
</script>
<style>
  .table th, .table td{
    padding: 0!important;
  }
</style>
