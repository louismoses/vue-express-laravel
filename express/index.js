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

app.get("/makeRequest", async (req, res) => {
  try {
    // Make a GET request to an external API (replace the URL with your desired API)
    const response = await axios.get("http://127.0.0.1:8000/api/hello");

    // Send the response from the external API as the response from your server
    res.json(response.data);
  } catch (error) {
    console.error("Error making Axios request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
    const jsonData = req.body;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/login",
      jsonData
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making Axios  post request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
