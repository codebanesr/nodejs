const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

// request parameter example
app.get('/user/:id/:name', (req, res)=>{
    res.send(req.params);
    // res.send(req.query)
})

app.listen(3000, ()=>{
    console.log(`Listening on port 3000`);
})



//  goto url
//  http://localhost:3000/user/1/dev?name=shanur&value=100
