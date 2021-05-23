const dns = require('dns'); // network name <--> addresses

// dns.lookup('pluralsight.com', (err, address) => {
//    console.log(address);
// });

// dns.resolve4('pluralsight.com', (err, address) => {
//    console.log(address);
// });

// dns.resolveMx('pluralsight.com', (err, address) => {
//    console.log(address);
// });

dns.reverse('34.212.224.191', (err, hostnames) => {
   console.log(hostnames);
});