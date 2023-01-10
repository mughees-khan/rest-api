const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
//API ki dukan khula rakhmma ka tareeqa
//process.env.PORT = deployment hosting(live) port
//3000 = local port

dotenv.config();

//connect to db

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

//import routes
const productRoutes = require("./routes/product");

//route middleware
app.use("/api/products", productRoutes);
app.listen(4000, () => {
  console.log("server is running on localhost:4000");
});
app.use("/", require("./routes/index.js"));

//middlewares
app.use(express.json());
app.use(cors());

//app.use('post',(req,res)=>{
//get data from db
//res.send([
//      {
//            "userId":1,
//            "id":1,
//            "title":"hhhhhhh"
//            "body":"jjjjjjjjjjjjjjjjjjjjjj"
//        },
//        {
//            "userId":1,
//            "id":1,
//            "title":"hhhhhhh"
//            "body":"jjjjjjjjjjjjjjjjjjjjjj"
//        }
//    ])
//})
