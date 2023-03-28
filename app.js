const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Remco',
      lastName: 'Jonk'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
}).mount('#app')

// setTimeout(() => {
// vm.firstName = 'Kate'
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Kate'
//     }
//   }
// }).mount('#app2')
