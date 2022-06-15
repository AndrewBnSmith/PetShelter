const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/belt_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected to full MERN DB"))
.catch(err => console.log("error:", err))