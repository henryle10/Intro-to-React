const db_name = "jokes_api";
const express = require("express");
const port = 8000;

require("./config/mongoose.config")(db_name);

const app = express();

app.use(express.json());

require("./routes/jokes.routes")(app);

app.listen(port, () => {
    console.log(`Listening for request on port ${port} to respond to.`);
});
