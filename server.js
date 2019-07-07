const app = require('./app').app
const port = require('./config').port


app.listen(port, _ => console.log(`Estoy corriendo en el puerto ${port}`))
