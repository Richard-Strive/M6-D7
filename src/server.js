const express = require("express");
const cors = require("cors");
const service = require("./service");
const server = express();

server.use(cors());
server.use(express.json());

// In questo modo diamo ad ogni elemento di route presente su service una base localhost:port/api/nomedelroute//
// service.use("/api", service);

const PORT = process.env.PORT || 5001;

server.use("/api", service);

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

server.on("error", (error) => {
  console.error(" ❌ Error : server is not running :  " + error);
});
