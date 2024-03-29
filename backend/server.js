const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
  origin: ["https://netflix-clone-pi-sandy.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}))


app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vivekthakur6259:vivek123456@netflix.vk0lp2y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.get("/",(req, res) => {
  res.send("Hello! API ");
});

app.listen(5000, () => {
  console.log("server started at 5000");
});
