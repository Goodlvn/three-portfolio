const path = require("path");

module.exports = (app) => {

    app.get("/", (req, res) => {
        if(req.user) {
                res.redirect("/members");
        }

        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

}