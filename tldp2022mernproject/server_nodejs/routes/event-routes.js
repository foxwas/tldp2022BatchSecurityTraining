import express from 'express'
import eventController from '../controllers/event-controller.js'
var eventRouter = express.Router()

eventRouter.get('/', function(req, res) {
  eventController.getAllEvents(req, res)
})

eventRouter.get('/:event_id', function(req, res) {
  eventController.getEventById(req, res)
})

eventRouter.post('/', function(req, res) {
  eventController.postEvent(req, res)
})

eventRouter.delete('/:event_id', function(req, res) {
  eventController.deleteEventByID(req, res)
})

export default eventRouter