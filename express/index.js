const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());

// Make the server listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.post("/register", async (req, res) => {
  try {
    const jsonData = req.body;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      jsonData
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making Axios  post request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const data = req.body;
    axios.post("http://localhost:8000/api/login", data);
    // res.json(response.data);
  } catch (error) {
    console.error("Error making Axios  post request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
