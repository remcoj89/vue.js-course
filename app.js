const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Remco',
      lastName: 'Jonk',
      url: 'https://www.remcojonk.me',
      raw_url: `<a href="https://google.com" target="_blank">Raw HTML Link</a>`
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
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
