const express = require('express')
const mongoose = require('mongoose')
const {PORT,MORGO_URI} = require('./config')

const app = express()

// Middleware

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
    mongoose.connect(MORGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

    const db = mongoose.connection
    db.on('error', ()=> console.log('Connection Error'));
    db.once('open', () => {
        console.log('DB connected...')
    });

