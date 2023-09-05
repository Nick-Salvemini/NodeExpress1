const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    const results = await Promise.all(
      req.body.developers.map(async (dev) => {
        const response = await axios.get(`https://api.github.com/users/${dev}`);
        return { name: response.data.name, bio: response.data.bio }
      })
    );
    return res.json(results)
  } catch (error) {
    next(error);
  }
});

app.listen(3000, function () {
  console.log("Server starting on port 3000")
})
