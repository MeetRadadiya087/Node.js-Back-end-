const express = require("express");
const port = 1001;
const app = express();
const db = require("./config/db");
const schema = require("./model/firstSchema");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    await schema.find({}).then((movies) => {
        res.render("index", { movies: movies });
    });
});




app.post("/addData", (req, res, next) => {
    schema.create(req.body)
        .then(() => res.render("/"))
        .catch(next);
});


app.get("/deleteData", (req, res, next) => {
    schema.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/"))
        .catch(next);
});


app.get("/editData", (req, res, next) => {
    schema.findById(req.query.id)
        .then(singalData => res.render("edit", { singalData }))
        .catch(next);
});


app.post("/updateData", (req, res, next) => {
    schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => res.redirect("/"))
        .catch(next);
});


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Something went wrong!");
});


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : " + port);
});
