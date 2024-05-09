import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', (req, res) => {
    res.send('Hello world!')
})

app.get('/users/:uid', (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
})

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('Hello world!')
})

app.delete('/users/:uid', (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
})

app.put('/users/:uid', (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send('Hello world!')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`)
})