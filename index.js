const express = require('express');
const port = 8000;
const app = express();

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
    }
    else{
        console.log('Server is running successfully at port number ',port);
    }
});