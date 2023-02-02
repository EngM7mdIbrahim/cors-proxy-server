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
  let headers = req.headers;
  delete headers.host;
  console.log("Request Body:", data);
  axios({
    method: method,
    url: apiUrl,
    headers,
    data: qs.stringify(data),
  })
    .then((apiRes) => {
      console.log("Response Body: ", apiRes.data);
      res.json(apiRes.data);
    })
    .catch((error) => {
      console.log(
        "Error: ",
        error.response ? error.response.data : error.message
      );
      res
        .status(error.response ? error.response.status : 500 )
        .send(error.response ? error.response.data : error.message);
    });
});

app.listen(4000, () => {
  console.log("Proxy server listening on port 4000");
});
