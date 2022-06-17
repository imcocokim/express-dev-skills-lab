import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

router.get('/', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.get('/:id', restaurantsCtrl.show)
router.post('/', restaurantsCtrl.create)

export {
  router
}