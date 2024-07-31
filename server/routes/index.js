const express = require('express')
var router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const userModel = require('../models/user.js');
passport.use(new localStrategy(userModel.authenticate()));

// router.get("/profile",isLoggedIn, async function (req, res) {
//     res.use("http://localhost:5173/profile");
// });
// router.get("/profile", isLoggedIn, async function (req, res) {
//     let user = await userModel
//       .findOne({ username: req.session.passport.user })
//     res.send("profile");
// });

router.post("/register", function (req, res) {
    console.log('Register request received:', req.body);

    // Create a new user instance
    const user = new userModel({
      email: req.body.email,
      username: req.body.username,
    });

    // Register the user using passport-local-mongoose
    userModel.register(user, req.body.password, function(err, registeredUser) {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).send('Error registering user');
        }

        // Authenticate the user after registration
        passport.authenticate("local")(req, res, function () {
            res.redirect("http://localhost:5173/profile");
        });
    });
});



router.post(
"/login",
passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "http://localhost:5173/auth",
}),
function (req, res) {}
);

router.get("/logout", function (req, res) {
req.logout(function (err) {
    if (err) {
    return next(err);
    }
    res.redirect("http://localhost:5173/auth");
});
});

function isLoggedIn(req, res, next) {
if (req.isAuthenticated()) {
    return next();
} else {
    res.redirect("http://localhost:5173/auth");
}
}
router.get('/check-auth', isLoggedIn, (req, res) => {
    res.status(200).json({ message: 'Authenticated', user: req.user });
});
  
module.exports = router;

