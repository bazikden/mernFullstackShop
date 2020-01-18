const express = require('express')
const router = express.Router()
const Food = require('../models/Food')
const auth = require('../middleware/auth')
const multer = require('multer')
const storage = require('../engine/storage')
const upload = multer({storage})
const fs = require('fs')

// Method   GET
// Descr    Get All Items
// Acsess   Public

router.get('/',(req,res)=>{
    Food.find()
        .sort({date:-1})
        .then(items => res.json(items))
        .catch(err => res.status(400).json({msg:err}))
})

// Method   POST
// Descr    Post Item
// Acsess   Private

router.post('/',upload.single("img"),(req,res,next)=>{
    console.log(req.file)
    console.log(req.body)
    const {name,category} = req.body

    if(!req.headers['content-type'] ){
        return res.status(400).json({msg:"Content-Type Needed"})
    }


    const newItem = new Food({
        name,
        category,
        img:{
            data:fs.readFileSync(req.file.path),
            contentType:req.file.mimetype
        }
        })

    newItem.save()
        .then(()=>res.status(201).json(newItem))
        .catch( err => res.status(400).json({msg:"Failed",err}))

})



// Method   DELETE
// Descr    Delete Item
// Acsess   Private

router.delete('/:id',auth,(req,res)=>{
    Food.findById(req.params.id)
        .then( item => item.remove()
            .then(()=>res.json({msg:'Deleted'})))
        .catch(()=>res.status(404).json({msg:"There is no such item"}))
})


module.exports = router