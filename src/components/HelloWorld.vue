<template>
  <div style="margin-bottom: 100px">
    <div v-for="(item,index) in formDataList" :key="index"
          >
      <h1 style="margin: 20px;border-bottom: solid 1px gray">Form {{index+1}}</h1>
      <tForm  :formData="item" v-model="formDataList[index]" >
      </tForm>
    </div>
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
      formDataList:[
      ],
      msg:'testing'
    }
  },
  created() {
    this.read()
    this.sockets.subscribe('createdForm', (data) => {
      this.read();
      console.log('createdForm',data)
      //this.market = data;
    });
  },
  methods:{

    read(){
      window.axios.get('http://3.15.187.108:3000/getformData').then(({data})=>{
        this.formDataList=data.data
        //console.log(data)
      })
    },
    updatedForm(){
        console.log(this.formDataList)
        window.axios.post('http://3.15.187.108:3000/submitForm',this.formDataList).then(({data})=>{
          console.log(data)

        })
    }
  }
}
</script>
