const express = require('express')
const mongoose = require('mongoose')
const {PORT,MONGO_URI} = require('./config')
const multer = require('multer')



const app = express()

// Middleware
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage})

app.use(express.json())

// Routes
app.use('/users',require('./routes/users'))
app.use('/food',require('./routes/food'))
app.use('/auth',require('./routes/auth'))


// Start server

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})

    // DB Connection
    mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

    const db = mongoose.connection
    db.on('error', ()=> console.log('Connection Error'));
    db.once('open', () => {
        console.log('DB connected...')
    });

// Image Upload
app.post('/image',upload.single("img"),(req,res,next)=>{
    console.log(req.file)
    console.log(req.body)
    next()
    res.json({msg:req.file+Date.now()})
})



