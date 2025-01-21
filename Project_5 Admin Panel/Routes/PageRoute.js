const express = require('express');
const route = express.Router();
const ctrl = require('../Controllers/PageController');
const upload = require('../Middlewares/Multer');
const passport = require("../Middlewares/Passport")

route.get('/', ctrl.loginPage);
route.post('/login',
    passport.authenticate('local',{failureRedirect : '/'}),
    ctrl.login
);route.get('/dashboard',passport.checkAuth, ctrl.dashboard);
route.get('/addAdminPage',passport.checkAuth, ctrl.addAdminPage);
route.get('/viewAdminPage',passport.checkAuth, ctrl.viewAdminPage);
route.post('/addAdmin',passport.checkAuth, upload, ctrl.addAdmin);
route.get('/editData',passport.checkAuth, upload, ctrl.editData);
route.post('/updateData',passport.checkAuth, upload, ctrl.updateData);
route.get('/deleteAdmin',passport.checkAuth, upload, ctrl.deleteAdmin);
route.get('/logout',passport.checkAuth, ctrl.logout);

module.exports = route;
