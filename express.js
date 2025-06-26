const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const fileName = req.query.fileName;
    const data = await fs.readFileSync(fileName, 'utf-8');
    
  return res.json({
    data: data
  })
})




app.listen(port, () => {
  console.log(`Hello from feature branch`) // feature conflict
  const fileName = req.query.fileName;
    // const data = await fs.readFileSync(fileName, 'utf-8');
  // conflict from feature
})
