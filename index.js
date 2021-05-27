/**
 * sample 코딩
 * package.json 에서 npm start script를 `node index.js` 로 수정 후 5000포트로 구동하는 테스트를 할 수 있다.
 */
const express = require('express')
const app = express()
const PORT = 5000

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`)
}
app.listen(PORT, handleListening)

/**
 * Home
 */
app.get('/', (req, res) => {
  res.send('hello')
})

/**
 * Sample
 */
app.post('/sample', (req, res) => {
  
  console.log('/sample !!!')
  console.dir(req)

  try {
    res.json('{ code: "AAA" }')
  } catch(e) {
    console.log('/sample error!!!')
  }

})