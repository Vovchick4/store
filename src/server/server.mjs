//npm run dev
import express from "express";
import mongoose from "mongoose";
import router from "./router.mjs";
import fileUpload from "express-fileupload";

const port = 4000;
const DB_URL = `mongodb+srv://user:user@cluster0.ezj7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());   
app.use(fileUpload({}));
app.use(express.static('src/images'));
app.use('/api', router); 


async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }); 
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch (error) {
        console.log(error);
    }
}

startApp();