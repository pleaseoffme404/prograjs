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
    let capital = parseFloat(req.body.depos);  
    let meses = parseInt(req.body.meses);  

    if (isNaN(capital) || capital <= 0 || isNaN(meses) || meses <= 0) {
        return res.send("Por favor, ingrese valores válidos para la inversión y los meses.");
    }

    let tasaInteres = 0.02;

    let montoFinal = capital * Math.pow(1 + tasaInteres, meses);
    let ganancia = montoFinal - capital;

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
        <h1>Resultado de tu Inversión</h1>
        <p>Tu ganancia después de ${meses} mes(es) es de <strong>$${ganancia.toFixed(2)}</strong>.</p>
        <p>Total después de ${meses} mes(es): <strong>$${montoFinal.toFixed(2)}</strong>.</p>
        <br>
        <a href="/">Volver a intentar</a>
        </div></div></center>
    `);
});

app.listen(5000,()=>{
    console.log('Servidor escuchando en el puerto 5000')
})