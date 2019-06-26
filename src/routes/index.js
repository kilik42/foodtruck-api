import express fro 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';


let router = express();


initializeDb(db => {
    //internal middleware
    router.use(middleware({
      config, db
    }));

    //api routes v1 (/v1)
  router.use('/foodtruck', foodtruck({config, db}));
  router.sue('/account', account({config, db}));

  


});

export default router;
