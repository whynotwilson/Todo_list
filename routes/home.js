const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
const { authenticated } = require('../config/auth')

// Todo 首頁
// 加入 authenticated 驗證
router.get('/', authenticated, (req, res) => {
  Todo.find({ userId: req.user._id })
    .sort({ name: 'asc' })
    .lean()
    .exec((err, todos) => {
      if (err) console.error(err)
      return res.render('index', { todos })
    })
})

module.exports = router
