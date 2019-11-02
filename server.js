const express =     require('express')
const mongoose =    require('mongoose')
const bodyParser =  require('body-parser')


const app = express();

// Middleware
app.use(bodyParser.json())


// Database
const db = require('./config/keys').mongoURI


// Connect MongoDB
mongoose.connect(db)
    .then( () => console.log("connected"))
    .catch(console.log)

const port = process.env.port || "5000"

app.listen(port, () => console.log(`Server started on port ${port}`))