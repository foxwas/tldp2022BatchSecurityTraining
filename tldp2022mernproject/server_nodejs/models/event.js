import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const eventSchema = new Schema({
  EVENT_ID: Number,
  EVENT_CODE: String,
  TITLE: String,
  DESCRIPTION: String
})

eventSchema.plugin(sequence, {inc_field: 'EVENT_ID'})

const Event = model('Event', eventSchema )
export default Event