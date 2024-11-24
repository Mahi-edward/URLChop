import express from "express";
import Url from "../models/urlModel.js";


const router = express.Router();

// Get the URL Id
router.get("/:urlId", async (req, res) => {
  const { urlId = "" } = req.params;

  try {
    // check if the give URL Id is valid
    let url = await Url.findOne({ urlId: urlId });

    // throw error if url not found
    if (!url) {
      return res.status(404).json(`Given ${urlId} Url Id Is Not Found `);
    }

    const updateObj = { $inc: { clicks: 1 } };

    // Update the URL clicks count
    await Url.updateOne({ urlId: urlId }, { ...updateObj }, { new: true });

    // redirect to the original url page
    return res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json("Server Error");
    console.log(error.message);
  }
});

export default router;
