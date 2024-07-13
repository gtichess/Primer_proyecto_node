const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')
const uploadRouters = require('./app/routes/upload')
//for parsing json
app.use(

    bodyParser.json({
        limit: '20mb'
    })
)
//for parsing application/x-www-form-urlencoded-
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(userRouters)
app.use(itemsRouters)
app.use(uploadRouters)
/*app.get('/',(req,res)=>{
    res.send({
        data: 'Hola Mundo de la chingada madre!'
    })
})
    */
app.listen(port, () => {
    console.log(`La aplicación está en línea. Port: ${port}`)
})
initDB