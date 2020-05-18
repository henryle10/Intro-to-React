const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokesController.getAll);
    app.get("/api/jokes/:id", jokesController.getOne);
    // app.get("/api/jokes/random", jokesController.random);
    app.post("/api/jokes/new", jokesController.create);
    app.put("/api/jokes/update/:id", jokesController.update);
    app.delete("/api/jokes/:id", jokesController.delete);
};
