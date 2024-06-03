const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.json());

app.get('/', (req, res) => {
  res.send("server working")})


// Set the port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
