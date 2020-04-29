<template>
  <div style="margin-bottom: 100px">
    <!--<div v-for="(item,index) in formDataList" :key="index"
          >
      <h1 style="margin: 20px;border-bottom: solid 1px gray">Form {{index+1}}</h1>
      <tForm  :formData="item" v-model="formDataList[index]" >
      </tForm>
    </div>-->
    <b-container style="margin-top: 20px">
      <b-table striped hover :items="formDataList" :fields="fields" bordered style="">
        <template v-slot:cell(no)="data">
          {{data.index+1}}
        </template>
        <template v-slot:cell(action)="data">
          <button @click="gotoViewForm(data.item)"><b-icon icon="eye-fill"></b-icon></button>


        </template>
      </b-table>
    </b-container>
    <!--<div style="position: fixed;right:10px;bottom: 10px">
      <b-button variant="success" @click="updatedForm">update</b-button>
    </div>-->

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
      msg:'testing',
      fields: [
        {
          key: 'no',
          label: 'No',
          sortable: false
        },
        {
          key: 'formPatNUmber',
          label: 'Form ID ',
          sortable: true
        },
        {
          key: 'formPatName',
          label: 'Name',
          sortable: true
        },
        {
          key: 'formAge',
          label: 'Age',
          sortable: true
        },
        {
          key: 'formStatus',
          label: 'Status',
          sortable: true
        },
        {
          key: 'formSymptomsPresent',
          label: 'Symptoms',
          sortable: true
        },
        {
          key: 'formStatusDate',
          label: 'Created',
          sortable: true
        },
        {
          key: 'formStatusReportDate',
          label: 'Sent to CDC',
          sortable: true
        },
        {
          key: 'formPatNumber',
          label:'Phone',
          sortable: true
        },
        {
          key: 'action',
          label:'Action',
          sortable: false
        },
       ],
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
    },
    gotoViewForm(item){
      this.$router.push({name:'viewForm',params:item})
    }
  }
}
</script>
<style>
  .table th, .table td{
    padding: 0!important;
  }
</style>
