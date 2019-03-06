import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/photos';


// import Vue from "vue";
// Vue.http
// .post("data.json", data)
// .then(response => {
// console.log(response);
// });

// Vue.http
// .get("data.json")
// .then(response => {
// console.log(response);

// })
// .catch(error => {
// console.log(error);
// });


  var al = new Vue({
  AlbumId :{}
    ,ID : {}
    ,Title : {}
    ,Url : {}
    ,TBU : {}


   

     })



 Vue.component  ('all',{
 props:[al]

 })