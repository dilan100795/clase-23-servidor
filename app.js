let express = require('express')
let path = require('path')
let app = express() //fuincion de alto nivel porque es lo primero que se ejecuta en neustro proyecto
let port = 3001
let dirname = path.join(__dirname)


app.get('/', (reg,res)=> res.send('Bienvenidos a nuestra pagina'))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contacto.html')))

app.listen(port, () => console.log(`Servidor levantado con exito en el puerto http://localhost:3001/${port}\n${dirname}`))


 
