const app = new Vue({
    el: '#app',
  
   data: {
       users: ["lorem", "ipsum", "dolor", "sit", "amet"],

       users2: [{
           id: 567,
           name: "lorem",
           profession: "developer"
       }, {
           id: 568,
           name: "ipsum",
           profession: "devops"
       },
       {
           id: 569,
           name: "dolor",
           profession: "admin"
       },
       {
           id: 570,
           name: "sit",
           profession: "python developer"
       }]
   }
})