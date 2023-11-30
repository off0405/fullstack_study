const exrpess = require('express')
const Comment = require('../schemas/comment')

const router = exrpess.Router()

router.post('/', async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})




module.exports = router
