import { Restaurant } from "../models/restaurant.js"

function index (req, res) {
  Restaurant.find({})
  .then(restaurants => {
    res.render('restaurants/index', {
      restaurants: restaurants,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new')
}

function create(req, res) {
  Restaurant.create(req.body)
  .then(restaurant => {
    console.log(req.body)
    res.redirect('/restaurants')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/restaurants')
  })
}

function show (req, res) {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    res.render('restaurants/show', {
      restaurant: restaurant
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/restaurants')
  })
}

function deleteRestaurant (req, res) {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(restaurant => {
    res.redirect('/restaurants')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/restaurants')
  })

}

export {
  index,
  newRestaurant as new,
  create,
  show,
  deleteRestaurant as delete
}