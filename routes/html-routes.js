const path = require("path");
const db = require("../models");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/confirmed", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/confirmContact.html"));
    })

    app.post("/api/contactMe", (req, res) => {
        db.contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        .then(data => {
            res.json(data)
        })
        .catch((err) => {
            res.status(401).json(err)
        });
    });
};