<template>
  <b-form-group :label="group_label">
    <div :style="_style">
      <b-form-radio v-for="(item,index) in candidates"
                    :key="index"
                    :name="group_id+'1'"
                    :value="item"
                    v-model="selected"
                    @change="tSelect"
                    :style="_cStyle"
      >
        {{item}}
      </b-form-radio>
    </div>
  </b-form-group>
</template>
<script>
  export default {
    props:['value','group_label','_style','candidates','group_id','_cStyle'],
    data(){
      return{
        selected:this.value
      }
    },
    methods:{
      handleInput(){

      },
      tSelect(event){
        //this.selected=event
        console.log('child',event)
        this.$emit('input',event)

      }
    }
  }
</script>
