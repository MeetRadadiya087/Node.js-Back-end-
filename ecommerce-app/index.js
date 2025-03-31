const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const app = express();
const db = require("./config/database");

console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

const PORT = process.env.PORT || 2475;
const SESSION_SECRET = process.env.SESSION_SECRET || "defaultSecret"; // Fallback

app.use(
    session({
        name: "local",
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 10 }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", require("./routes/authRoutes"));
app.use("/category", require("./routes/categoryRoutes"));
app.use("/product", require("./routes/productRoutes"));

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error starting server:", err);
    } else {
        console.log(`🚀 Server started on port: ${PORT}`);
    }
});
