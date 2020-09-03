const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')

const app = express()

app.get("/",(req,res) => res.send(`Hey I'm here`))

const port = 3000


app.listen(port,() => console.log(`server on ${port}`))