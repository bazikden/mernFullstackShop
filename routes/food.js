const express = require('express')
const router = express.Router()
const Food = require('../models/Food')
const auth = require('../middleware/auth')

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

router.post('/',auth,(req,res)=>{
    const {name} = req.body
    if(!req.headers['content-type'] || req.headers['content-type'] !== 'application/json'){
        return res.status(400).json({msg:"Content-Type Needed"})
    }
    const newItem = new Food({name})
    newItem.save()
        .then( ()=>res.status(201).json(newItem))
        .catch( err => res.status(400).json(err))

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