import Event from '../models/event.js'
import dataCleaner from '../utilities/data-cleaner.js'

const eventController = {

  // GET /api/events
  getAllEvents: function(req, res) {
    Event.find({}, '', function(err, events){
      if(err|| !events || events.length == 0 ) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanEvents(events))
      }
    }) 
  },

  // GET /api/events/:event_id
  getEventById: function(req, res) {
    Event.findOne({'EVENT_ID': req.params.event_id}, '', function(err, event){
      if(err || ! event) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanEvent(event))
      }
    })
  },

  // POST /api/events
  postEvent: function (req, res) {
    Event.create({ EVENT_CODE: req.body.code, TITLE: req.body.title, DESCRIPTION: req.body.description}).then(
      (e) => { 
        res.location(`/api/events/${e.EVENT_ID}`)
        res.sendStatus(201)
      }, // OK
      () => res.sendStatus(500) // Error
    )
  },

  // DELETE /api/events/:event_id
  deleteEventByID: function (req, res) {
    Event.deleteOne({'EVENT_ID': req.params.event_id}, function(err){
      if(err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  }

} 

export default eventController
