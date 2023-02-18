import express from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { errorWrapper } from "../../helpers/errorWrapper.js";
import {
  getByCategoryController,
  getByIdController,
  addToFavoriteController,
  getFavoritesController,
  removeFromFavoritesController,
  addNoticeController,
  removeNoticeController,
  getUserNoticesController,
  getNotices,
} from "../../controllers/notices/index.js";
import { validateNoticeBody } from "../../middlewares/validateNoticeBody.js";

const router = new express.Router();

router.get("/", errorWrapper(getNotices));
router.get("/user", authMiddleware, errorWrapper(getUserNoticesController));

router.get("/category/:categoryName", errorWrapper(getByCategoryController));
router.post(
  "/category/:categoryName",
  [authMiddleware, validateNoticeBody],
  errorWrapper(addNoticeController)
);

router.get("/:noticeId", errorWrapper(getByIdController));
router.delete(
  "/:noticeId",
  authMiddleware,
  errorWrapper(removeNoticeController)
);

router.post(
  "/favorites/:noticeId",
  authMiddleware,
  errorWrapper(addToFavoriteController)
);
router.get("/favorites", authMiddleware, errorWrapper(getFavoritesController));
router.delete(
  "/favorites/:noticeId",
  authMiddleware,
  errorWrapper(removeFromFavoritesController)
);

export default router;
