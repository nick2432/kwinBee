const router = require("express").Router();
const {
  createlog,
  getLogsByLevel,
  getLogsByMessage,
  getLogsByResourceId,
  getLogsByTimestamp,
  getLogsByTraceId,
  getLogsBySpanId,
  getLogsByCommit,
  getLogsByParentResourceId,
} = require("../controller/log");

router.route("/addlog").post(createlog);
router.route("/getLogsByLevel").get(getLogsByLevel);
router.route("/getLogsByMessage").get(getLogsByMessage);
router.route("/getLogsByResourceId").get(getLogsByResourceId);
router.route("/getLogsByTimestamp").get(getLogsByTimestamp);
router.route("/getLogsByTraceId").get(getLogsByTraceId);
router.route("/getLogsBySpanId").get(getLogsBySpanId);
router.route("/getLogsByCommit").get(getLogsByCommit);
router.route("/getLogsByParentResourceId").get(getLogsByParentResourceId);

module.exports = router;