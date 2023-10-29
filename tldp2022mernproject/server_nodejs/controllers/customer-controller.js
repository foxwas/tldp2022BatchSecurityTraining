import Customer from '../models/customer.js'
import dataCleaner from '../utilities/data-cleaner.js'

const customerController = {
  
  // GET /api/customers/
  getAllCustomers: function(req, res) {
    Customer.find({}, '', function(err, customers){
      if(err|| !customers || customers.length == 0 ) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomers(customers))
      }
    }) 
  }, 

  // GET /api/customers/:customer_id
  getCustomerByID: function(req, res) {
    Customer.findOne({'CUSTOMER_ID': req.params.customer_id}, '', function(err, customer){
      if(err || ! customer) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomer(customer))
      }
    })
  },

  // POST /api/customers/
  postCustomer: function(req, res) {
    Customer.create({ CUSTOMER_NAME: req.body.name, PASSWORD: req.body.password, EMAIL: req.body.email}).then(
      (c) => { 
        res.location(`/api/customers/${c.CUSTOMER_ID}`)
        res.sendStatus(201)
      }, // OK
      () => res.sendStatus(500) // Error
    )
  },

  // GET /api/customers/byname/:customer_name
  getCustomerByName: function(req, res) {
    Customer.findOne({'CUSTOMER_NAME': req.params.customer_name}, '', function(err, customer){
      if(err || ! customer) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomer(customer))
      }
    })
  },

  // DELETE /api/customers/:customer_id
  deleteCustomerByID: function(req, res) {
    Customer.deleteOne({'CUSTOMER_ID': req.params.customer_id}, function(err){
      if(err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  }

} 

export default customerController
