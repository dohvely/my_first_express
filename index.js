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

function handleHome(req, res) {
  res.send('hello')
}

app.get('/', handleHome)
app.listen(PORT, handleListening)
