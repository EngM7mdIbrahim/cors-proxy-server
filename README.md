# Proxy Server

A simple proxy server that can handle both JSON and form URL-encoded request bodies and pass the requests to a specified API while bypassing CORS policies.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/proxy-server.git
```

2. Install the required packages

```
npm install
```

## Usage

1. Start the proxy server

```
npm start
```

2. Make a request to the proxy server

Here's an example of a client-side request using axios:

```javascript
const axios = require("axios");
const qs = require("qs");

axios({
  method: "POST",
  url: "http://your-proxy-server.com/proxy?url=https://api.linkedin.com/v2/me",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: qs.stringify({
    message: "Hello from the client side!",
  }),
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, a POST request is made to http://your-proxy-server.com/proxy with a query string url parameter set to https://api.linkedin.com/v2/me. The request body includes a message in form URL-encoded format, which is stringified using the qs library. The response from the server will be logged to the console.

Make sure to replace 'http://your-proxy-server.com/proxy' with the actual URL of your proxy server.

## Built With

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Axios](https://github.com/axios/axios) - Promise-based HTTP client for the browser and Node.js
- [qs](https://github.com/ljharb/qs) - A querystring parser with nesting support
- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware

## Contributing

Feel free to contribute to this project by submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
