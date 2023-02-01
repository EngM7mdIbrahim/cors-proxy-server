const express = require("express");
const axios = require("axios");
const cors = require("cors");
const qs = require("qs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.all("/proxy", (req, res) => {
  const apiUrl = req.query.url;
  const method = req.method;
  const data = req.body;
  console.log("Data:", data);
  axios({
    method: method,
    url: apiUrl,
    data: qs.stringify(data),
  })
    .then((apiRes) => {
      res.json(apiRes.data);
    })
    .catch((error) => {
      res.status(500).send(error.response.data);
    });
});

app.listen(4000, () => {
  console.log("Proxy server listening on port 4000");
});
