import express from "express";
import { nanoid } from "nanoid";
import { validateURL } from "../utils/utils.js";
import Url from "../models/urlModel.js";

const router = express.Router();

// create a new URL Shortner
router.post("/", async (req, res) => {
  // destrcuture the Url
  const { originalUrl } = req.body;

  // throw error url not present
  if (!originalUrl) return res.status(400).json("Invalid request");

  // check given URL is valid
  if (!validateURL(originalUrl)) {
    return res.status(400).json("Invalid original url");
  }

  try {
    let url = await Url.findOne({ originalUrl: originalUrl });

    // if URL already present send the object
    if (url) return res.status(200).json(url);

    // Create a new URL object with Short Url
    const base = process.env.BASE_URL;
    const urlId = nanoid();
    const shortUrl = `${base}/${urlId}`;

    url = new Url({
      urlId: urlId,
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      date: new Date(),
    });

    await url.save();

    res.status(201).json(url);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

export default router;
