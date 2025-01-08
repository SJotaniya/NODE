const express = require('express');
const route = express.Router();
const ctrl = require('../Controllers/Control');

route.get('/', ctrl.dashboard);
route.get('/addAdminPage', ctrl.addAdminPage);
route.get('/viewAdminPage', ctrl.viewAdminPage);
route.post('/addAdmin', ctrl.addAdmin);

module.exports = route;