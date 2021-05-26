function f2() {
   // extract the value from the input box

   // version : Javascript
   let search = document.getElementById('search-data').value;

   // version : Jquery
   // let search = $("#search-data").val();

   console.log(search);

   // pass value of search in to searchData
   // searchData function in ajax.js
   searchData(search);
}