const {asClass, createContainer, asFunction, asValue} = require('awilix');

//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/enviroments');

//controllers
const { UserController } = require('../api/controllers');

//business
const { UserBusiness } = require("../business");

//routes
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');

//services
const { UserService } = require("../services");

//repositories
const  { UserRepository } = require("../data-access/repositories");

//data access
const db = require ("../data-access/entities");

//container
const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    UserController :asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton()
  });


module.exports = container;
