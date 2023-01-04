const js = require("json-server");
const server = js.create();

const router = js.router("db.json");
const middlware = js.defaults();
const port = 8800;

server.use(middlware);
server.use(router);

server.listen(port);
