const express = require('express');
const port = 1056;
const app = express();
const db = require('./config/db');
const adminRoute = require('./routes/adminRoute');
const managerRoute = require('./routes/managerRoute');
const employeeRoute = require('./routes/employeeRoute');

const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());   
app.use('/uploads', express.static('uploads')); 

app.use("/admin", adminRoute);
app.use("/manager", managerRoute);
app.use("/employee", employeeRoute);

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : " + port);
});


