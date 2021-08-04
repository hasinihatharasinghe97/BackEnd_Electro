const express = require("express");
var router = express.Router();
var userRegisterController = require("../controller/authentication/userRegisterController");
var userProfileController = require("../controller/user/userProfileController");
var unitChargesController = require("../controller/cebengineer/unitChargesController");

var authService = require('../service/authServices');

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// app.post('/sign-up', (req, res) => {
//     console.log(request.body);
//     res.send(request.body);
// })

//user register route
router.route("/sign-up").post(userRegisterController.createUser);

//user login route
router.route("/sign-in").post(userRegisterController.loginUser);

//forgot password route
router.route("/forgot-password").post(userRegisterController.checkEmail);


//user profile update route
router.route("/user-profile/:id").put(authService.validateToken, userProfileController.profileUpdate);

//user profile  route
router.route("/user-profile/:id").get(authService.validateToken, userProfileController.profileGetData);

//unit charges route
router.route("/unit-charges/:id").get(authService.validateToken, unitChargesController.getUnitChargesData);


//unit charges update route
router.route("/unit-charges-update/:id").post(authService.validateToken, unitChargesController.updateUnitChargesData);

//unit charges information route
router.route("/information/:id").get(unitChargesController.getUnitChargesData);

module.exports = router;
