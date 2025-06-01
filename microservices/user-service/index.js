const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.listen(5002, () => console.log("User service running on port 5002"));
