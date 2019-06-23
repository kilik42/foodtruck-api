import mongoose from 'mongoose';

import {Router} from 'express';
import foodtruck from '../model.foodtruck';


export default({config, db}) => {
  let api = Router();

  //crud = create read update delete

  //'/v1/foodtruck/add' - create
  api.post('./add', (req, res){
    let newFoodTruck = new FoodTruck();

    newFoodTruck.name = request.body.name;

    newFoodTruck.save(err => {
      if(err){
        res.send(err);
      }
      res.json({message: 'FoodTruck saved successfully'});
    });
  });

  // '/v1/foodtruck' - Read
  api.get('/', (req, res) => {
    foodtruck.find({}, (err, foodtrucks)=>{
      if(err){
        res.send(err);
      }
      res.json(foodtrucks);
    });
  });

// '/v1/foodtruck/:id' -Read 1
api.get('/:id', (req, res)=>{
  foodtrucks.findById(req.params.id, (err, foodtruck)=>{
      if(err){
        res.send(err);
      }
      res.json(foodtruck);
  });
});



  // update    '/v1/foodtruck/:id'- update
api.put('/:id', (req, res)=>{
  foodtruck.findById(req.params.id, (err, foodtruck)=>{
    if(err){
      res.send(err);
    }
    foodtruck.name = req.body.name;
    foodtruck.save(err =>{
      if(err){
        res.send(err);
      }
      res.json({message: "foodtruck info updated"});
    });
  });
});


  //delete '/v1/foodtruck/:id'- Delete
api.delete('/:id', (req, res) => {
  foodtruck.remove({
    _id: req.params.id
  }, (err, foodtruck)=>{
    if(err){
      res.send(err);
    }
    res.json({message: "foodtruck sucessfully saved"});
  });
});







  return api;
}
