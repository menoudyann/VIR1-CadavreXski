//app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.SERVER_PORT || 1234;
const { router } = require("./routes")


app.use(cors());
app.set('view engine', 'ejs');
app.use("/assets",express.static(__dirname + "/assets"));
app.use(express.json())
app.use("/api/v1", router)

app.get("/", (req, res) => {
  res.redirect("/api/v1/phrases")
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT )
})

module.exports = {
  app
}
