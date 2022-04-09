//node src\server\server.mjs - command to run server(npm run dev)       file imported as module es - mjs
console.log('i am working')

import express from "express";
import mongoose from "mongoose";
import router from "./router.mjs";
import fileUpload from "express-fileupload";

const port = 4000;
const DB_URL = `mongodb+srv://user:user@cluster0.ezj7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());   // щоб еспресс міг перетворити json формат
app.use(fileUpload({}));
app.use(express.static('src/images'));
app.use('/api', router);  //реєстрація router


async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }); // підключаємо бд
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch (error) {
        console.log(error);
    }
}

startApp();