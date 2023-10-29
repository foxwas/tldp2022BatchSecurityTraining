import Customer from '../models/customer.js'
import registrationRouter from '../routes/registration-routes.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  }, 

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: ( event ) => {
    return {
      id: event.EVENT_ID,
      code: event.EVENT_CODE,
      title: event.TITLE,
      description: event.DESCRIPTION
    }
  }, 

  cleanEvents: ( events ) => {
    var results = []
    for( const e in events) {
      results.push(dataCleaner.cleanEvent(events[e]))
    }
    return results
  },

  cleanRegistration: ( registration ) => {
    return {
      id: registration.REGISTRATION_ID,
      event_id: registration.EVENT_ID,
      customer_id: registration.CUSTOMER_ID,
      registration_date: registration.REGISTRATION_DATE,
      notes: registration.NOTES
    }
  }, 

  cleanRegistrations: ( registrations ) => {
    var results = []
    for( const r in registrations) {
      results.push(dataCleaner.cleanRegistration(registrations[r]))
    }
    return results
  } 



}

export default dataCleaner