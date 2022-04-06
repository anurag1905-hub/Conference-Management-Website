const express = require('express');
const port = 8000;
const app = express();

// use express Router
app.use('/',require('./routes'));

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
    }
    else{
        console.log('Server is running successfully at port number ',port);
    }
});