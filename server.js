const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// aqui vmos a configurar dist para servir los archivos de la app
app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get(/.*/, function (req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`App is listening on port: ${port}`);