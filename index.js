const js = require("json-server");
const db = require("./db.json");
const server = js.create();

const router = js.router(db);
const middlware = js.defaults();
const port = 8800;

server.use(middlware);
server.use(router);

server.listen(port, () => console.log("running server"));
