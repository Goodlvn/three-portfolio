const express = require("express");


const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

require("./routes/html-routes.js")(app);



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT: http://localhost:" + PORT);
    });
});