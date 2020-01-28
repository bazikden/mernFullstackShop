const express = require('express')
const router = express.Router()
const Food = require('../models/Food')
const auth = require('../middleware/auth')
const multer = require('multer')
const storage = require('../engine/storage')
const upload = multer({storage})
const fs = require('fs')
const mongoosePaginate = require('mongoose-paginate')


// Method   GET
// Descr    Get All Items
// Acsess   Public

router.get('/:id',(req,res)=>{
    const options = {
        page: req.params.id,
        limit: 4
    }


    Food.paginate({},options)
        .then(items => res.json(items))
        .catch(err => res.status(400).json({msg:err}))
})

// Method   POST
// Descr    Post Item
// Acsess   Private

router.post('/',upload.single("img"),auth,(req,res,next)=>{
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