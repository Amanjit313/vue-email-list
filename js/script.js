/* 

  - Generare 10 indirizzi email e stamparli in pagina all’interno di una lista

  - Far comparire gli indirizzi email solamente quando sono stati tutti generati

*/

const app = new Vue({

  el: "#app",

  data:{

    email: [],
    myEmails: 10,
    loading: true

  },

  mounted(){
    this.generaEmail()
  },

  methods: {

    generaEmail(){
      for (let i = 0; i < this.myEmails; i++ ){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(res => {
          this.email.push(res.data.response);
          this.loading = false;
          console.log("CARICATO!");
        })
      }
    }

  }

})