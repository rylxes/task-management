const routes = require("next-routes")();
module.exports = routes;
routes
    .add({name: 'index', page: 'index'})
    .add("post", "/posts/:id");
