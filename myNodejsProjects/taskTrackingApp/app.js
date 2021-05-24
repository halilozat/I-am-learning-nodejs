const express = require('express')
const mongoose = require('mongoose')
const app = express()

//statik dosyalarımızı kullanabilmek için (public klasöründeki) middleware oluşturuyoruz.
app.use(express.static('public'))

// ejs ile view engineleri kullanıyoruz
app.set('view engine', 'ejs')

const dbURI = 