import mongoose from "mongoose"

const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: String,
  visit: Boolean
})

const Restaurant = mongoose.model('Restaurant', todoSchema)

export {
  Restaurant
}