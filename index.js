const express = require('express')
const app = express();
const connect = require('./components/config/db')
const urlModel = require('./components/models/Url.model')
const shortId = require('shortid')
const valid = require('valid-url')


// app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.post('/shortUrl', async(req, res) => {
    console.log(req.body)
    if (valid.isUri(req.body.full)) {
        let x = await urlModel.create({ full: req.body.full });
        res.send({ sort: `http://localhost:2323/${x.short}` })

    } else {
        res.status(400).send('Not a valid url')
    }

})
app.get('/:shortUrl', async(req, res) => {

    const short = await urlModel.findOne({ short: req.params.shortUrl })

    if (short == null) return res.status(404);
    short.save();
    // res.send(short)
    res.redirect(short.full)
})

app.listen(2323, () => {

    try {
        console.log('server is started');

        connect();
    } catch (err) {
        console.log(err.message)
    }
})