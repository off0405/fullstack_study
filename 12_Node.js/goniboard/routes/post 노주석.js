// const express = require('express')
// const { ObjectId } = require('mongodb')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const { S3Client } = require('@aws-sdk/client-s3')

// const { isLoggedIn } = require('../middlewares/index') // 미들웨어 장착을 위한 등록 -> /write에서 확인해
// const { client } = require('../database')
// const db = client.db('board');


// const router = express.Router()

// // multer, S3, aws-sdk 설정 (feat. .env)
// const s3 = new S3Client({
//   credentials: { // 신용 증명이 되는
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY
//   },
//   region: 'ap-northeast-2'
// })


// // S3 클라이언트
// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: 'goniboard',
//     key(req, file, cb) {
//       cb(null, `original/${Date.now()}_${file.originalname}`)
//     }
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 }
// })


// // /post/write
// router.get('/write', (req, res) => {
//   res.render('write')
// })


// router.post('/write', upload.single('img'), async (req, res, next) => {
//   try {
//     const title = req.body.title
//     const content = req.body.content
//     if (!title) {
//       res.json({
//         flag: false,
//         message: '제목을 입력하세요'
//       })
//     } else {
//       await db.collection('post').insertOne({ title, conttent })
//       res.json({
//         flag: true,
//         message: '등록 성공'
//       })
//     }
//   } catch (err) {
//     err.status = 500;
//     next(err)
//   }
// })


// // post/detail
// router.get('/detail/:id', async (req, res, next) => {
//   try {
//     const post = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) })
//     if (!post) {
//       const error = new Error('안된다')
//       error.status = 404;
//       next(error)
//     }

//     res.render('detail', { post })

//   } catch (err) {
//     err.message = '잘못된 url'
//     err.status = 400;
//     next(err)
//   }
// })


// // post/edit
// router.get('edit/:id', async (req, res, next) => {
//   try {
//     const post = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) })

//     if (!post) {
//       const error = new Error('데이터 없음')
//       error.status = 404;
//       next(error)
//     }

//     res.render('edit', { post })

//   } catch (error) {
//     err.message = '잘못된 url 입니다.'
//     err.status = 400;
//     next(err)
//   }
// })

// router.patch('/:id', async (req, res) => {
//   try {
//     const title = req.body.title
//     const content = req.body.content

//     await db.collection('post').updateOne({
//       _id: new ObjectId(req.params.id)
//     }, {
//       $set: { title, content }
//     })

//     res.json({
//       flag: true,
//       message: '수정 성공'
//     })

//   } catch (err) {
//     res.json({
//       flag: false,
//       message: '수정 실패'
//     })
//   }
// })


// // delete
// router.delete('/:id', async (req, res, next) => {
//   try {
//     await db.collection('post').deleteOne({ _id: new ObjectId(req.params.id) })
//     res.json({
//       flag: true,
//       message: '삭제 성공'
//     })

//   } catch (err) {
//     res.status(500).json({
//       flag: false,
//       message: '삭제 실패'
//     })
//   }
// })


// // 페이지네이션 구현
// // 페이지 번호는 쿼리 스트링 또는 URL 파라미터 사용
// router.get('/', async (req, res) => {
//   const posts = await db.collection('post').find({}).skip((req.query.page - 1) * 5).limit(5).toArray()
// })

// const totalCount = await db.collection('post').countDocuments({})
// const postsPerPage = 5
// const numOfPage = Math.ceil(totalCount / postsPerPage)
// const currentPage = req.query.page || 1

// res.render('list', { posts, numOfPage, currentPage })


// // /post/search
// router.get('/search', async (req, res) => {
//   const { keyword } = req.query
//   const currentPage = req.query.page || 1
//   const postsPerPage = 3

//   const query = {
//     $search: {
//       index: 'title_index',
//       text: {
//         query: keyword,
//         path: 'title'
//       }
//     }
//   }

//   const posts = await db.collection('posts').aggregate([
//     query,
//     { $skip: (currentPage - 1) * postsPerPage }
//     { $limit: postsPerPage }
//   ]).toArray()

//   const result = await db.collection('post').aggregate([
//     query,
//     { $count: "searchCount" }
//   ]).toArray()

//   const totalCount = result[0].searchCount
//   const numOfPage = Math.ceil(totalCount / postsPerPage)

//   res.render('search', { posts, numOfPage, currentPage, keyword })


// })

// module.exports = router;

