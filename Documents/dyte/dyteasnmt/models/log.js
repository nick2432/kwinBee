const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    resourceId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    traceId: {
        type: String,
        required: true,
    },
    spanId: {
        type: String,
        required: true,
    },
    commit: {
        type: String,
        required: true,
    },
  metadata: [
    {
      parentResourceId: {
        type: String,
        required: true,
      },
    },
  ],
});

logSchema.index({ level: 1 });
logSchema.index({ message: 1 });
logSchema.index({ resourceId: 1 });
module.exports = mongoose.model("log", logSchema);