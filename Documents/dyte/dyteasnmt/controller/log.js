const Log = require("../models/log");

exports.createlog = async (req, res) => {
  try {
    // Assuming you have the necessary data in req.body
    const {
      level,
      message,
      resourceId,
      timestamp,
      traceId,
      spanId,
      commit,
      metadata,
    } = req.body;
    // Create a new log using the Log model
    const newLogData = {
      level,
      message,
      resourceId,
      timestamp,
      traceId,
      spanId,
      commit,
      metadata,
    };

    const log = await Log.create(newLogData);

    // Assuming you have a User model with a 'posts' array
    // and you want to associate the log with a user
    // Replace 'user' with your actual User model
    // and adjust the association logic accordingly
    // user.posts.push(log._id);
    // await user.save();

    res.status(201).json({
      success: true,
      message: "Log created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getLogsByLevel = async (req, res) => {
  try {
    const level = req.query.level.trim();
    const logs = await Log.find({ level: level });
    console.log('Logs:', logs);

    if (logs.length > 0) {
      res.status(200).json({
        success: true,
        data: logs,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No logs found for the specified level.',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getLogsByField = async (req, res, fieldName) => {
  try {
    const value = req.body[fieldName];

    const query = {};
    query[fieldName] = value;

    const logs = await Log.find(query);

    if (logs.length > 0) {
      res.status(200).json({
        success: true,
        data: logs,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No logs found for the specified ${fieldName}.`,
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getLogsByMessage = async (req, res) => {
  await getLogsByField(req, res, 'message');
};

exports.getLogsByResourceId = async (req, res) => {
  await getLogsByField(req, res, 'resourceId');
};

exports.getLogsByTimestamp = async (req, res) => {
  await getLogsByField(req, res, 'timestamp');
};

exports.getLogsByTraceId = async (req, res) => {
  await getLogsByField(req, res, 'traceId');
};

exports.getLogsBySpanId = async (req, res) => {
  await getLogsByField(req, res, 'spanId');
};

exports.getLogsByCommit = async (req, res) => {
  await getLogsByField(req, res, 'commit');
};

exports.getLogsByParentResourceId = async (req, res) => {
  await getLogsByField(req, res, 'parentResourceId');
};
