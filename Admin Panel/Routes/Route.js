const express = require('express');
const route = express.Router();
const ctrl = require('../Controllers/Control');
const upload = require('../Middlewares/Multer');

route.get('/', ctrl.dashboard);
route.get('/addAdminPage', ctrl.addAdminPage);
route.get('/viewAdminPage', upload, ctrl.viewAdminPage);
route.post('/addAdmin', upload, ctrl.addAdmin);
route.get('/updateData', upload, ctrl.updateData);

module.exports = route;