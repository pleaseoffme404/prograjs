const express = require("express")

let bodyParser=require('body-parser')
let app=express()

//crud create,read,update, delete
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
// en public esta todo el front
app.use(express.static('public'))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const port = 5000;

app.listen(port,()=>{
    console.log('Server listening on port '+port)
    console.log('http://localhost:'+port)
})
