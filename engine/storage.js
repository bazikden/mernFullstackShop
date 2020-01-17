const GridFsStorage = require('multer-gridfs-storage')
const config = require('../config')

const storage = new GridFsStorage({
    url:config.MORGO_URI,
})