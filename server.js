const express = require('express')
const app = express()

app.get('/', logger, (req, res) => {
    console.log("Here")
    res.status(500).json({message: "error"})
})

//Le middleware logger est appelé pour toutes les routes après app.use(logger), il peut aussi être appelé individuellement comme sur la route get '/'
//On peut aussi mettre des middleware dans les fichier route (users.js), en appelant router.use(logger), il s'applique à toutes les routes de users.js
app.use(logger)

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)