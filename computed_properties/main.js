const app = new Vue({
    el: '#app',
    data: {
        first_name: "Jhon",
        last_name: "Dhoe"
    },
    computed: {
        getRandomComputed() {
            return Math.random();
        },
        fullName() {
            return `${ this.first_name } ${ this.last_name }`
        },
        reversedfullName() {
            first = this.first_name.split('').reverse().join('');
            last = this.last_name.split('').reverse().join('');

            return `${ first } ${ last }`
        }
    },
  
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
})