const express = require('express')
const app = express()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.use(express.json())
app.get('/hello', async (req, res) => {
  await sleep(100000)
  const {name} = req.query
  res.json({
    message: `Olá, ${name}`
  }).status(200).end()
})

app.listen(5000, () => {
  console.log(`Server is running in: http://localhost:5000`)
})