import mongoose from 'mongoose'
import Customer from '../models/customer.js'
import Event from '../models/event.js'
import Registration from '../models/registration.js'


function dropCollections() {

  Customer.collection.drop()
    .then(
      ()=>console.log('dropped Customer collection'),
      ()=>console.log('no Customer collection')
    );

  Event.collection.drop()
    .then(
      ()=>console.log('dropped Event collection'),
      ()=>console.log('no Event collection')
    );

  Registration.collection.drop()
    .then(
      ()=>console.log('dropped Registration collection'),
      ()=>console.log('no Registration collection')
    );

  }

  function populateCollections() {

    // This code resets the counter for each collection and creates a few dummy documents
    // Because these methods are asynchronous, the 'then' clauses are changed so they execute
    // in order. This is necessary because the id fields are generated and if the create
    // (insert) methods were invoked asynchronously the ids would not be deterministic.  
    //
    // A more elegant (and complicated solution) would have been to use an array of functions
    // and map/reduce  

    Customer.counterReset('CUSTOMER_ID', 
      () => { Customer.create({ CUSTOMER_NAME: 'John', PASSWORD: 'heyjude',EMAIL: 'john@fabfour.com'}).then(
        () => Customer.create({ CUSTOMER_NAME: 'Paul', PASSWORD: 'heyjude',EMAIL: 'paul@fabfour.com'})).then(
          () => Customer.create({ CUSTOMER_NAME: 'George', PASSWORD: 'heyjude',EMAIL: 'george@fabfour.com'})).then(
            () =>Customer.create({ CUSTOMER_NAME: 'Ringo', PASSWORD: 'heyjude',EMAIL: 'ringo@fabfour.com'}))})
    
    Event.counterReset('EVENT_ID',
      () => {Event.create({EVENT_CODE: 'CNF001', TITLE: 'React World', DESCRIPTION: 'React.js Conference'}).then( 
        () => Event.create({EVENT_CODE: 'KWS002', TITLE: 'Node.js Meetup', DESCRIPTION: 'JavaScript Developer Meetup'})).then(    
        () => Event.create({EVENT_CODE: 'TRN003', TITLE: 'Jenkins 101', DESCRIPTION: 'Jenkins class'}))})   

    Registration.counterReset('REGISTRATION_ID',

      () => {Registration.create({
        EVENT_ID: 1, 
        CUSTOMER_ID: 1, 
        REGISTRATION_DATE: '2023-11-15 00:00:00.0', 
        NOTES: 'please email me the event details'
      }).then(

        () => Registration.create({
          EVENT_ID: 1, 
          CUSTOMER_ID: 2, 
          REGISTRATION_DATE: '2023-11-20 00:00:00.0', 
          NOTES: 'looking for info on local hotels'
        })).then(

          () => Registration.create({
            EVENT_ID: 1, 
            CUSTOMER_ID: 3, 
            REGISTRATION_DATE: '2023-12-4 00:00:00.0', 
            NOTES: 'n/a'
          }))})
  }
 
  export default function init_db() {
    
    mongoose.connect('mongodb://127.0.0.1:27017/project')

    dropCollections()
    populateCollections() 
    
  } 