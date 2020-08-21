const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TicketSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
