const express = require("express");
const port = 1056;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let students = [
    { id: 1, name: "John", age: 20, city: "New York", gender: "Male", email: "john@example.com" },
    { id: 2, name: "Jane", age: 22, city: "Los Angeles", gender: "Female", email: "jane@example.com" },
    { id: 3, name: "Bob", age: 21, city: "Chicago", gender: "Male", email: "bob@example.com" }
];

app.get("/", (req, res) => {
    res.render("index", { students });
});

app.post("/addData", (req, res) => {
    req.body.id = students.length + 1;
    req.body.city = req.body.city;
    req.body.gender = req.body.gender;
    req.body.email = req.body.email;
    students.push(req.body);
    res.redirect("/");
});



app.get("/editData", (req, res) => {
    let data = students.find((item) => item.id == req.query.id);
    res.render("edit", { data });
});

app.post("/updateData", (req, res) => {
    students.map((e,i) => {
        if (item.id == req.body.id) {
            item.city = req.body.city;
            item.gender = req.body.gender;
            item.email = req.body.email;
        } else {
            item
        }
    })
    
    res.redirect("/");
});


app.get("/deleteData", (req, res) => {
    console.log(req.query);
    let studentData = students.filter((item) => item.id != req.query.id);
    students = studentData;
    res.redirect("/");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : " + port);
});


