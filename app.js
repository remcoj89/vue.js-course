const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Remco',
      middleName: '',
      lastName: 'Jonk',
      url: 'https://www.remcojonk.me',
      age: 20,
      isPurple: false,
      isBlue: false,
      selectedColor: '',
      circle: "circle",
      size: 150,
      mode: 1,
      items: ["pizza", "lasgna", "Spagethi"],
      itemsObjects: [{restaurant: "La Baracca"}, {restaurant: "La Fabrica"}]
    }
  },
  methods: {
    increment() {
      this.age++
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    }
  },
  computed: {
    fullName() {
      console.log("updated fullName")
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    circle_classes() {
      return { blue: this.isBlue, purple: this.isPurple }
    },
    circleSize() {
      return  {width: this.size + 'px', height: this.size + `px`, lineHeight: this.size + 'px'}
    },
    transform() {
     return { transform: 'rotate(30deg)' }
    }
  },
  watch: {

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
