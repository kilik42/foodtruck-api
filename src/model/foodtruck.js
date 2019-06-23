import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;

let FoodtruckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foodType:{
    type: String,
    required: true
  },
  avgCost: Number,
  geometry: {
    type: {type: String, default: 'Point'},
    
  }
});

module.exports = mongoose.model('FoodTruck', FoodtruckSchema);
