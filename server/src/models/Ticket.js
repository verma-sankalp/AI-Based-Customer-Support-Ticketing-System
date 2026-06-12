const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, default: "uncategorized" },
    priority: { type: String, enum: ["low", "medium", "high", "urgent"], default: "medium" },
    status: { type: String, enum: ["open", "in_progress", "waiting", "resolved", "closed"], default: "open" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    slaDueAt: { type: Date },
    firstResponseAt: { type: Date },
    resolvedAt: { type: Date },
    sentimentScore: { type: Number, default: 0 },
    aiConfidence: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
