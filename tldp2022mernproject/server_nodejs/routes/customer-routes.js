import express from 'express'
var customerRouter = express.Router()
import customerController from '../controllers/customer-controller.js'

customerRouter.get('/', function(req, res) {
  customerController.getAllCustomers(req, res)
})

customerRouter.get('/:customer_id', function(req, res) {
  customerController.getCustomerByID(req, res)
})

customerRouter.post('/', function(req, res) {
  customerController.postCustomer(req, res)
})

customerRouter.get('/byname/:customer_name', function(req, res) {
  customerController.getCustomerByName(req, res)
})

customerRouter.delete('/:customer_id', function(req, res) {
  customerController.deleteCustomerByID(req, res)
})

export default customerRouter