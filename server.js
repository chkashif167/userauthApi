const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

const server = http.createServer(app);
dotenv.config({
  path: ".env"
});
//server.listen(port);

server.listen(port, err => {
  if (err) {
    console.log(err); // TODO: improve the error handling
    process.exit(1);
  }

  console.log(
    `CORS-enabled web server is now running in ${process.env.JWT_KEY} `
  );
});
