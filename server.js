const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config();



const routes = require("./routes/ToDoRoutes");


const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("MongoDB connected..."))
.catch((err) => console.log(err));


app.use("/api", routes);






app.listen(PORT, ()=> console.log(`Listing at ${PORT}`));