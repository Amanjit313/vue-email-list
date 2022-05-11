/* 

  - Generare 10 indirizzi email e stamparli in pagina all’interno di una lista

*/

const app = new Vue({

  el: "#app",

  data:{

    email: ""

  },

  mounted(){
    this.generaEmail()
  },

  methods: {

    generaEmail(){
      for (let i = 0; i < 10; i++ ){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(res => {
          this.email += " | " + res.data.response;
        })
      }
    }

  }

})