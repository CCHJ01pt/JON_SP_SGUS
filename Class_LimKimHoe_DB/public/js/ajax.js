
// let's configure a HQ for our guy in the field to contact us later
// this means that.. .if someone wants to contact this channel...
// the URL is http://localhost:4040/linkdata
// and the method he needs to reach us.. must be done through POST
// NOT get, NOT delete, NOT put

function f1() {
   // not going to detonate straight away..
   // console.log('pow!!');

   // we want to contact HQ
   // and see what instructions to get
   // make a call to HQ... .but we will not wait for HQ to respond..
   // we continue to do something else.. while the call is still ongoing..

   // demo that our jquery is working
   //$('#demo').html('testing...');

   $.ajax({
      // where to send the request
      url: 'http://localhost:4040/linkdata',
      // defines the type of request
      type: 'POST',
      // defines the type of data the server will respond in
      dataType: 'json',
      // if success run function
      success: function (data, textStatus, xhr) {
         console.log(data);

         $('#demo').html('...' + data.secret);

         // define outputRow
         let outputRow = '';
         // add 1 to i for every data.row available
         for (var i = 0; i < data.rows.length; i++) {

            let package = data.rows[i];
            // console.log(package.id);
            // console.log(package.name);
            // console.log(package.country);


            // add what outputRow will display
            outputRow += `
               <div id='data'>
                  <div>ID: ${package.id}</div>
                  <div>name: ${package.name}</div>
                  <div>country: ${package.country}</div>
               </div>
            `;
         }
         // define where output goes to
         $('#demo').html(outputRow);
      },
      // If error, show error
      error: function (xhr, textStatus, errorThrown) {
         console.log('eror.....');
         console.log(xhr);
         console.log(textStatus);
         console.log(errorThrown);
      }
   });
}

// function for searchData passing value of search
function searchData(search) {
   // object data_package.keyword = value of search
   let data_package = {
      'keyword' : search
   };
   $.ajax({
      // send request to
      url: 'http://localhost:4040/search',
      // defines the type of request
      type: 'POST',
      // stringify data_package and send to server
      data: JSON.stringify(data_package),
      // defines the type of content to be sent to server
      contentType : 'application/json',
      // defines the type of data the server will respond with
      dataType: 'json',
      // if success run function
      success: function (data, textStatus, xhr) {
         console.log(data);
         // set html of document.getElementId('demo')
         // ... Spread syntax:
         // -- allows expressions to expand in places of multi arg or ele
         $('#demo').html('...' + data.secret);

         let outputRow = '';
         // loop data.row
         for (var i = 0; i < data.rows.length; i++) {
            let package = data.rows[i];
            // console.log(package.id);
            // console.log(package.name);
            // console.log(package.country);

            // add what outputRow will display
            outputRow += `
               <div id='data'>
                  <div>ID: ${package.id}</div>
                  <div>name: ${package.name}</div>
                  <div>country: ${package.country}</div>
               </div>
            `;
         }
         // where to display outputRow
         $('#demo').html(outputRow);
      },
      // If error, show error
      error: function (xhr, textStatus, errorThrown) {
         console.log('eror.....');
         console.log(xhr);
         console.log(textStatus);
         console.log(errorThrown);
      }
   });
}