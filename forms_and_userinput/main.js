const app = new Vue({
    el: '#app',
    data: {
        color: 'green',
        text: '',
        checked: true,
        city: '',
        comment: null,
        comments: [],
        errors: null
    },

    methods: {
        onSubmit() {
            if (this.comment !== null) {
                let new_comment = this.comment;
                this.comments.push(new_comment);
                this.comment = null;
            }
            else {
                alert("tidak boleh kosong")
            }   
        }
    }
    
})