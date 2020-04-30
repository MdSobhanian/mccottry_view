<template>
  <b-form-group :label="group_label">
    <div :style="_style">
      <div v-for="(item,index) in candidates">
        <b-checkbox
          :key="index"
          :name="group_id+'1'"
          :value="item"
          v-model="temp[index]"
          @input="tSelect(index)"
          :style="_cStyle"
        >
          {{item}}
        </b-checkbox>
      </div>

      <!--<b-checkbox-group
        :options="candidates"
        v-model="selected"
        @change="tSelect"
      >

      </b-checkbox-group>-->

    </div>
  </b-form-group>
</template>
<script>
  export default {
    props:['value','group_label','_style','candidates','group_id','_cStyle'],
    data(){
      return{
        selected:['Travel to Wuhan'],temp:Array(this.candidates.length)
      }
    },
    created() {
      console.log('valuse',this.value)
      if (this.value===undefined)return
      this.selected=JSON.parse(this.value)
      this.candidates.forEach((c_item,c_index)=>{
        //console.log(c_item,c_index)
        this.temp[c_index]=this.selected.includes(c_item)?c_item:false

      })
      console.log(this.temp)
    },
    methods:{
      handleInput(){

      },
      tSelect(index){
        //this.selected=event

        let index1=this.selected.findIndex(s_item=>s_item==this.candidates[index])
        //console.log(this.temp[index],index1)
        if (this.temp[index] && index1==-1){
          this.selected.push(this.temp[index])
        }else if (this.temp[index]===false && index1>-1){
          this.selected.splice(index1,1)
          //console.log('deleted')
        }
        //console.log('t multi',this.selected)
        this.$emit('input',JSON.stringify(this.selected))

      }
    }
  }
</script>
