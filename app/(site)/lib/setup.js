import mongoose from "mongoose";

// Use a global variable to store the connection state
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  // 1. If we have an existing connection, use it
  if (cached.conn) return cached.conn;

  // 2. If we aren't connecting yet, start the process
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.DB_URL, opts).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    });
  }

  // 3. Wait for the promise and cache the connection
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

// ... keep your Schemas and Models below ...

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
