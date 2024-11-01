const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ 
    Training: {
      message: "Hello Training" 
    },
    Hiking: {
      message: "Hello Hiking" 
    },
    Glasses: {
      message: "Hello Glasses" 
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});