// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
server.use(cors({
    origin: '*', // 本地測試可用，正式請指定網域
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
server.use(middlewares)
server.db = router.db;
server.use(auth);
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
