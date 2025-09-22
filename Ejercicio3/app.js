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



app.post("/calcular", (req, res) => {
    let totalcompra = parseFloat(req.body.depos);  
     if (isNaN(totalcompra) || totalcompra <= 0 ) {
        return res.send("Por favor, ingrese valores válidos para la inversión y los meses.");
    }
    const descuento = 0.15
    let descuentodinero = totalcompra * descuento
    let total = totalcompra - descuentodinero
    res.send(`

    <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

html{
background-color: rgb(105, 202, 202);
margin: 0;
padding: 0;
align-content: center;

}

.calc{
    border-radius: 20px;
    background-color: rgb(179, 179, 179);
    align-content: center;
    height: 50%;
  margin-top: 4%;
    text-align: center;
width: 40%;
}
.calctext{
    font-family: "Raleway", sans-serif;
font-optical-sizing: auto;
overflow-y: hidden;
padding: 15px;
}
a{
text-decoration:none;
transition color 0.3s ease-in-out}
a:hover{
color:aqua;
}
        </style>
        <center><div class="calc">
        <div class="calctext">
        <h1>Resultado de tu Descuento</h1>
        <p>Tu descuento del 15% sobre el total de tu compra equivale a <strong>$${descuentodinero.toFixed(2)}</strong></p>
        <p>Total a pagar con el descuento aplicado es: <strong>$${total.toFixed(2)}</strong>.</p>
        <br>
        <a href="/">Volver a intentar</a>
        </div></div></center>
    `);
});
const port = 5000;

app.listen(port,()=>{
    console.log('Server listening on port '+port)
    console.log('http://localhost:'+port)
})
