import { setSuccessResponse } from "../../helpers/setResponse.js";
import { Notice } from "../../models/noticeModel.js";
// import { NoticeSell } from "../../models/noticeSellModel.js";

export const addNoticeController = async (req, res) => {
  const categoryName = req.params.categoryName;
  const body = req.body;

  const data = await Notice.create({ ...body, category: categoryName });

  res.json(setSuccessResponse(200, data));
};
