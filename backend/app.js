require('dotenv').config();

//Express Hello World Ex: https://expressjs.com/en/starter/hello-world.html
// must rerun to refresh changes 
const express = require('express'); // importing express
var request = require('request'); //npm i request --save
const app = express();
const port = 5000; // change from 3000 5000 as 3000 is where react is ran
// start with node app.js

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

//K
// console.log(process.env);
const myKey= process.env.WEATHERSTACK_KEY // dot env currently not working  ---> youtube vid : https://www.youtube.com/watch?v=HRBNeERE5PU 
//https://www.youtube.com/watch?v=17UVejOw3zA
app.get("/getWeathertoronto", (req, res)=>{
  request("http://api.weatherstack.com/current?access_key="+String(myKey)+"&query='New York'", 
  function(error, response, body){
    if(!error && response.statusCode == 200){
      
      var parsedBody = JSON.parse(body);
      var temp = parsedBody["current"]["temperature"];
      res.send({ temp });
      // res.send(body);

      
    }
  }
  );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//https://www.youtube.com/watch?v=kJA9rDX7azM&t=481s