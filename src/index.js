const express = require('express');
const app = express();

//middlewares
app.use(express.json());
//app.use(express.urlencoded(extended: false)) -> pegar dados de um formulário

//routes
app.use(require('../routes/routes'));


app.listen(3005) //escutar prota
console.log('Abrindo o servidor');
