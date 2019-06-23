import mongoose from 'mongoose';

import {Router} from 'express';
import foodtruck from '../model.foodtruck';
import Review from '../model/review';

export default({config, db}) => {
  let api = Router();

  //crud = create read update delete

  //'/v1/foodtruck/add' - create
  api.post('./add', (req, res){
    let newFoodTruck = new FoodTruck();
    newFoodTruck.name = request.body.name;
    newFoodTruck.foodtype = req.body.foodtype;
    newFoodTruck.avgcost = req.body.avgcost;
    newFoodTruck.geometry.coordinates = req.body.geometry.coordinates;

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


// add review for a specific food truck id
// '/v1/foodtruck/reviews/add/:id'
api.post('/reviews/add/:id', (req, res)=>{
  FoodTruck.findById(req.params.id, (err, foodtruck)=>{
    if(err){
      res.send(err);
    }
    let newReview = new Review();

    newReview.title = req.body.title;
    newReview.text = req.body.text;
    newReview.foodtruck = foodtruck._id
    newReview.save(err, review) =>{
      if(err){
        res.send(err);
      }
      foodtruck.reviews.push(newReview);
      foodtruck.save(err => {
        if(err){
          res.send(err);
        }
        res.json({message: 'Food truck review saved!'});
      });
    });


  });
});



  return api;
}
