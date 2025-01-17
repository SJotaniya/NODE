const express = require('express');
const route = express.Router();
const ctrl = require('../Controllers/PageController');
const upload = require('../Middlewares/Multer');

route.get('/', ctrl.loginPage);
route.post('/login',ctrl.login);
route.get('/dashboard', ctrl.dashboard);
route.get('/addAdminPage', ctrl.addAdminPage);
route.get('/viewAdminPage', ctrl.viewAdminPage);
route.post('/addAdmin', upload, ctrl.addAdmin);
route.get('/editData', upload, ctrl.editData);
route.post('/updateData', upload, ctrl.updateData);
route.get('/deleteAdmin', upload, ctrl.deleteAdmin);
route.get('/logout', ctrl.logout);

module.exports = route;
