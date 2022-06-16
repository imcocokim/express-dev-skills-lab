import { restaurants } from "../data/restaurant-data.js"

function index (req, res) {
  res.render('restaurants/index', {
    restaurants: restaurants
  })
}

export {
  index
}