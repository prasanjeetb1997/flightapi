import express from "express";
import router from "./routes/main.js";
import mongoose from "mongoose"

const app = express()
const port = 4000


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)






//mongoose connection config.
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/airlines');
}

main()
    .then(() => { console.log("Connected to database 'airlines'") })
    .catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Flight app listening on port ${port}`)
})