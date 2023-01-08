const express = require("express");
const router = express.Router();

const rides = [
  {
    pickup: { lat: 23, long: 24 },
    carName: "FX",
  },
  {
    pickup: { lat: 23, long: 24 },
    carName: "MEHRAN",
  },
];
router.get("/getRides", (req, res) => {
  //get rides from db
  res.send({ message: "success", data: rides });
});
router.post("/addRide", (req, res) => {
  //add ride into a db
  res.send({ message: "data stored sucessfully", data: rides });
});
router.put("/updateRide", (req, res) => {
  //update ride into a db
  res.send({ message: "data updated sucessfully", data: rides });
});
router.delete("/deleteRide", (req, res) => {
  //delete rides from db
  res.send({ message: "data deleted successfully", data: rides });
});
module.exports = router;
