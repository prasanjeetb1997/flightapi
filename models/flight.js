import mongoose from 'mongoose';
const { Schema } = mongoose;

const flightSchema = new Schema({
  name: String,
  source: String,
  destination: String,
  date: String,
  price: Number
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight