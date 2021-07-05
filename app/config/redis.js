let redis = require("redis"),
//   client = redis.createClient();

// client.on("error", (error) => {
//   console.log(error);
// });
var client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME,
  {auth_pass: process.env.REDISCACHEKEY, tls: {servername: process.env.REDISCACHEHOSTNAME}});

module.exports = client;