const express = require('express')

const router = express.Router();

const app = express();

router.get('/', (req, res) => {
  res.send('hihihihi')

  // 참고) req 객체를 통해 app 객체에 접근 가능
  console.log(req.app.get('port'));
  console.log(res.app.get('port'));
  console.log(app.get('port'));
})



module.exports = router; 