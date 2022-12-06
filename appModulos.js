const express = require('express');
const hbs = require('hbs');
const app = express();

// Utiliza dontev https://www.npmjs.com/package/dotenv Recuerda crear el archivo .env
require('dotenv').config()
const port = process.env.PORT;

// Para que todo el css y las imagenes se mantenga
app.use(express.static('public'))

// https://www.npmjs.com/package/hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

// Los datos que necesito y llamo en las redirecciones
const datos = {
  nombre: "Diego Rincón",
  titulo: "Tropical Detox"
}
// Empiezo a llamar los archivos
app.get('/', function (req, res) {
  res.render('index', datos)
})
// Redirreciona a la pagina frutas
app.get('/productosFrutas', function (req, res) {
  res.render('productosFrutas', datos)
})
// Redirreciona a la pagina verdes
app.get('/productosVerdes', function (req, res) {
  res.render('productosVerdes', datos)
})
// Redirreciona a la pagina carrito
app.get('/carrito', function (req, res) {
  res.render('carrito', datos)
})
// Redirreciona a la pagina nosotros
app.get('/nosotros', function (req, res) {
  res.render('nosotros', datos)
})
// Redirreciona a la pagina personalizados
app.get('/personalizados', function (req, res) {
  res.render('personalizados', datos)
})
// Cualquier pagina no encontrada
app.get('*', function (req, res) {
  res.render('noFound', datos)
})
app.listen(port)