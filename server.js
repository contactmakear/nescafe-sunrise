
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('views'))
app.use(express.static('assets'))
app.use(express.static('assets1'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
  console.log(`NaN is listening on ${port}`)
})