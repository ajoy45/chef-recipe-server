
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())
 const data=require('./data/data.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data',(req,res)=>{
    res.send(data)
})
app.get('/data/:id', (req, res) => {
    const id =parseInt( req.params.id);
    const selectedNews = data.find(n => n.id === id);
    res.send(selectedNews)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})