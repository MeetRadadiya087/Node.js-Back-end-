const express = require("express");
const port = 1008;

const app = express();

const db = require("./config/db")
const schema = require("./model/firstSchema")

app.set("view engine", "ejs");
app.use(express.urlencoded());


app.get("/", async (req, res) => {
    await schema.find({}).then((students) => {
        res.render("index", { students });
    })
});


app.post("/addData", async (req, res) => {
    await schema.create(req.body).then(() => {
        res.redirect("/")
    })
})


app.get("/deleteData", async (req, res) => {
    // console.log(req.query.id);
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/");
    })
});


app.get("/editData", async (req, res) => {
    let singalData = await schema.findById(req.query.id);
    res.render("edit", { singalData });
    
});




app.post("/updateData", async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/");
    })
});



app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : " + port);
});




