const app = new Vue({
    el: '#app',
    data: {
        lesson: "Event and method",
        counter: 0
    },
    methods: {
        increamentCounter() {
            this.counter += 1;
            console.log(this.counter);
            if (this.counter == 10)
                alert("Counter is at 10");
        }
    }
})