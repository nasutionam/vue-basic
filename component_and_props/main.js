Vue.component("comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div>
            <div class="card-body">
                <p>{{ comment.username }}</p>
                <p>{{ comment.content }}</p>


            </div>
            <hr>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        comments: [
            { username: "alice1", content:"first comment"},
            { username: "alice2", content:"first comment"},
            { username: "alice3", content:"first comment"},
            { username: "alice4", content:"first comment"},
            { username: "alice5", content:"first comment"},

        ]
    }
})