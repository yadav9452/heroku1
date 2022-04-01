const express = require("express");

const app = express();
const connect=require("./config/db");
const userController=require("./controllers/user.controllers");
const movieController=require("./controllers/film.controllers");

app.use(express.json());
app.use("/users",userController);
app.use("/movie",movieController);

const PORT = process.env.PORT ||5000;

app.listen(PORT, async () => {
    try {
        await connect();
    } catch (err) {
        console.log("Something went wrong.... try again");
    }
    console.log(`Listening on Port ${PORT}`);
});








