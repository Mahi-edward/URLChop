import mongoose from "mongoose";

// URL Schema for document, model definition
const UrlSchema = new mongoose.Schema({
  urlId: { type: String, required: true },
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  clicks: { type: Number, required: true, default: 0 },
  date: { type: String, date: () => Date.now() },
});

//URL Model
export default mongoose.model("Url", UrlSchema);
