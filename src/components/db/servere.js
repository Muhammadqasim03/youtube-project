const express = require('express')
const path =require('path')
const app = express()
const port = 3001


app.use(express.static(path.join(__dirname,"components")))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('./',(req ,res)=>{
  res.send('about')
 
}
)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})