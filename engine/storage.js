const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

// // Create storage engine
//
// const {MONGO_URI} = require('../config')
// const GridFsStorage = require('multer-gridfs-storage')
// const crypto = require('crypto')
//
// const storage = new GridFsStorage({
//     url: MONGO_URI,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err)
//                 }
//                 const filename = file.originalname
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads',
//                 }
//                 resolve(fileInfo)
//             })
//         })
//     },
// })

module.exports = storage