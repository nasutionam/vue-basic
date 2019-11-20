// Comment list component
Vue.component("comment-list", {
    props: {
        comments: {
            type: Array,
            required: true,
        }
    },
    data: function() {
        return {
            new_comment: null,
            comment_author: null,
            error: null
        }
    },
    methods: {
        submitComment() {
            if (this.new_comment && this.comment_author)
            {
                this.$emit('submit-comment', {username: this.comment_author,
                    content: this.new_comment});
                this.comment_author = null;
                this.new_comment = null;

                if(this.error) {
                    this.error = null;
                }

            } else {
                 this.error = "please fill out both fields";
            }
        }
    },
    template: `
        <div class="container">
            <div class="row>
                <div class="col-md-12">
                    <div class="mt-2">
                        <single-comment v-for="(comment, index) in comments" :comment="comment" :key="index">

                        </single-comment>

                        <hr>
                        <h3>{{ error }}</h3>

                        <form @submit.prevent="submitComment"> 
                            <div class="form-group">
                                <label>Your Username</label>
                                <input class="form-control"
                                        id="commentAuthor"
                                        type="text"
                                        v-model="comment_author">
                            </div>
                            <div class="form-group">
                                <label>Add a comment</label>
                                <textarea class="form-control"
                                        id="commentText"
                                        rows="3"
                                        cols="40"
                                        v-model="new_comment"
                                ></textarea>
                            </div>

                            <button type="submit" class="btn btn-danger">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    `

})


// Single comment component
Vue.component("single-comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div class="mb-2">

            <div class="card">
                <div class="card-header">
                    <p>Published by: {{ comment.username }}</p>
                </div>
                <div class="card-body">
                    <p>{{ comment.content }}</p>
                </div>
            </div>

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
    },
    methods: {
        addNewComment(new_comment) {
            this.comments.push(new_comment)
        }
    }

})