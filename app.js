const http = require('http'); // to import any other module

http.createServer(function(request,response){ //creating server && callback function
    //request-access all data 
    //response- whatever we r trying to send 
    const jsonData = {name : "Aakriti" , age : 20 }
    response.write("<h1> Hello I am HTML response</h1>")
    response.write('Hello String response \n');
    response.write(JSON.stringify(jsonData));
    response.end();
})
.listen(4000); // port number-for every server-diff for diff server

// Everytime we update the response we need to restart the server again.


//express
// const express = require('express');

// const app = express(); //creating instance

// app.get("/",function(req, res){

//     res.send("HEllo World"); //automatically ends the request
// })
// app.listen(3002);