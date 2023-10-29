import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const registrationSchema = new Schema({
  REGISTRATION_ID: Number,
  EVENT_ID: Number, 
  CUSTOMER_ID: Number,
  REGISTRATION_DATE: Date,
  NOTES: String
})

registrationSchema.plugin(sequence, {inc_field: 'REGISTRATION_ID'})

const Registration = model('Registration', registrationSchema )
export default Registration