var port = process.env.PORT || 3000;
require('harp').server(__dirname, { port: port });
console.log("Harp is running on port %s", port);
