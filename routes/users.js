const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("users list")
})

router.get('/new', (req, res) => {
    res.send("new user form")
})

router.post('/', (req, res) => {
    res.send("create user")
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{name: "Paul"} , {name: "Pierre"}]
//Lorsque la route contient le paramètre id, on execute la fonction a la reception de la requête, et on envoie la réponse à l'appel de la fonction next()
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router