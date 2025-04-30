const express = require("express");

const router = express.Router();

const webRoutes = (app) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    });
    router.get("/hoidanit", (req, res) => {
        res.send("I have a problem with my code!");
    });
    router.get("/abc", (req, res) => {
        res.send("hello abc!");
    });
    app.use("/", router);
};
export default webRoutes;
