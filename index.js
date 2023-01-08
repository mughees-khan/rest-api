const express = require("express");
const app = express();
//API ki dukan khula rakhmma ka tareeqa
//process.env.PORT = deployment hosting(live) port
//3000 = local port

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on localhost:3000");
});
app.use("/", require("./routes/index.js"));

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
