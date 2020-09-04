const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')
const port = 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.static('./public'))


app.get('/', (req, res) => res.render('index') ) 


app.listen(port,() => console.log(`server on ${port}`))