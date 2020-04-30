<template>
  <div>
    <div style="display: flex; padding: 5px 20px 0 20px; border: none" class="box"
      v-for="(item,index) in t_model"
    >
      <label>Name:</label>
      <b-form-input  size="md" v-model="item.formPatName" @input="tInput"></b-form-input>
      <label>Phone:</label>
      <b-form-input  size="md" v-model="item.formPatNumber" @input="tInput"></b-form-input>
    </div>
    <b-button size="sm"  variant="success" v-on:click="addItem" style="width: 70px; font-weight: bold; margin-top: 20px; margin-left: 20px; float: left">+ADD</b-button>
  </div>
</template>
<script>
  export default {
    props:['value'],
    data(){
      return{
        t_model:[]
      }
    },
    created() {
      console.log(this.value)
      if (this.value==undefined){
        this.t_model.push({formPatName:'',formPatNumber:''})
      }else{
        this.t_model=JSON.parse(this.value)
      }
    },
    methods:{
      tInput(){
        //let index=this.t_model.findIndex(item=>item.name==='' && item.phone==='')
        //console.log(this.t_model,index)
        this.$emit('input',JSON.stringify(this.t_model))
      },
      addItem(){
        this.t_model.push({formPatName:'',formPatNumber:''})
      }
    }
  }
</script>
