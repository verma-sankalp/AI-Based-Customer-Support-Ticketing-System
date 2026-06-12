const mongoose = require("mongoose");

const slaSchema = new mongoose.Schema(
  {
    ticketId: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true },
    firstResponseDueAt: { type: Date, required: true },
    resolutionDueAt: { type: Date, required: true },
    isBreached: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SLA", slaSchema);
