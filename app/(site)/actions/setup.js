import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DB_URL, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

const commentSchema = new mongoose.Schema({
  commenter: String,
  comment: String,
  createdAt: Date,
});

const articleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  category: String,
  content: String,
  author: String,
  publish_date: String,
  tags: String,
  comments: [commentSchema],
});

const statsSchema = new mongoose.Schema({
  total: Number,
  PV: Number,
  Engage: Number,
});

const settingSchema = new mongoose.Schema({
  theme: String,
});

export const collectionArticles =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export const collectionStats =
  mongoose.models.Stats || mongoose.model("Stats", statsSchema);

export const collectionSetting =
  mongoose.models.Setting || mongoose.model("Setting", settingSchema);
