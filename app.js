var app = new Vue({
    el: '#app',
    data: {
      textHTML: `<h1>Contador con Vue JS</h1>`,
      value: 0
    }, 
    methods: {
      aumentar() {
        this.value += 1;
      },
      disminuir() {
        if(this.value != 0) {
          this.value -= 1;
        }
      }
    }, 
    computed: {
      potencia() {
        return Math.pow(this.value,2); 
      },
      raiz() {
        //Se trunca a dos decimales en el caso que sea decimal el resultado
        return Math.floor(Math.sqrt(this.value)*100)/100;
      }
    } 
  })

