const express = require('express')
const router = express.Router()
const Kitchen = require('../models/Kitchen')
const auth = require('../middleware/auth')
const multer = require('multer')
const storage = require('../engine/storage')
const upload = multer({storage})
const fs = require('fs')

// Method   GET
// Descr    Get All Items
// Acsess   Public

router.get('/:id', (req, res) => {
    const options = {
        page: req.params.id,
        limit: 2,
        sort:{date:-1}
    }


    Kitchen.paginate({}, options)
        .then(items => res.json(items))
        .catch(err => res.status(400).json({msg: err}))
})

// Method   POST
// Descr    Post Item
// Acsess   Private

router.post('/', upload.single("img"),  (req, res, next) => {

    const {name, category, price} = req.body

    if (!req.headers['content-type']) {
        return res.status(400).json({msg: "Content-Type Needed"})
    }

    // Validation
    if(!req.file || !name || !category ){
        return  res.status(400).json({msg:"Enter All Fields"})
    }


    const newItem = new Kitchen({
        name,
        category,
        img: {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype
        },
        price
    })

    newItem.save()
        .then(() => res.status(201).json(newItem))
        .catch(err => res.status(400).json({msg: "Failed", err}))

})


// Method   DELETE
// Descr    Delete Item
// Acsess   Private

router.delete('/:id', auth, (req, res) => {
    Kitchen.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({msg: 'Deleted'})))
        .catch(() => res.status(404).json({msg: "There is no such item"}))
})


module.exports = router