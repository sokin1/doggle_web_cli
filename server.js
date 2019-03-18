import express from 'express'
const app = express()
const port = 3030

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log('listening...'))