const passport = require("passport");
const middleware = require("../../middlewares/main");
const FeedbackController = require("../../controllers/feedback_controller");

module.exports = function (router) {
  /** Get all feedbacks */
  router.get(
    "/feedback/",
    passport.authenticate("jwt", { session: false }),
    FeedbackController.getAll
  );

  /** Get feedback by userId */
  router.get(
    "/feedback/user/:id",
    passport.authenticate("jwt", { session: false }),
    FeedbackController.getByUserId
  );

  /** Post feedback*/
  router.post(
    "/feedback",
    passport.authenticate("jwt", { session: false }),
    FeedbackController.create
  );
};
