const express = require('express');
const routes = express.Router();
const myRouter = require('../controller/controller');

routes.get('/', myRouter.defaultCon);
routes.post('/addvolunter', myRouter.addVolunter);
routes.get('/editVolunterRou/:id', myRouter.editVolunter);
routes.post('/updateVolunter', myRouter.updateVolunter);
routes.get('/deleteVolunter/:id',myRouter.deletVoluter)

module.exports = routes;
