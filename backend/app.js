require('dotenv').config();

//Express Hello World Ex: https://expressjs.com/en/starter/hello-world.html
// must rerun to refresh changes 
const express = require('express'); // importing express
var request = require('request'); //npm i request --save
var http = require("http");//http request
const app = express();
const port = 5000; // change from 3000 5000 as 3000 is where react is ran

const clientID = process.env.SPOTIFY_CLIENT_ID; // client ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET; // client secret
const redirectURI= process.env.SPOTIFY_REDIRECT_URI;

//checkout scopes 

// start with node app.js

//-->start weather app ex: 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

http.createServer(function(_request, response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888); // got to local host here 

//
// console.log(process.env);
// const myKey= process.env.WEATHERSTACK_KEY 
// //https://www.youtube.com/watch?v=17UVejOw3zA
// app.get("/getWeathertoronto", (req, res)=>{
//   request("http://api.weatherstack.com/current?access_key="+String(myKey)+"&query='New York'", 
//   function(error, response, body){
//     if(!error && response.statusCode == 200){
      
//       var parsedBody = JSON.parse(body);
//       var temp = parsedBody["current"]["temperature"];
//       res.send({ temp });
//       // res.send(body);

      
//     }
//   }
//   );
// });

//-----> end of weather app example 







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//https://www.youtube.com/watch?v=kJA9rDX7azM&t=481s