const http = require("http")
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const router = express.Router()

app.use(bodyParser.urlencoded({extended: false}))

router.get("/", (req, res, next) => {
    res.send("Hello")
})

router.get("/products", (req, res, next) => {
    res.send("Prods")
})

app.use((req, res, next) => {
    res.status(404).send("Page not found!")
})


const server = http.createServer(app)
server.listen("2020", () => {
    console.log("Listening on port 2020");
    
});

module.exports = router;