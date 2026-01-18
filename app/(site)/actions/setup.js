"use server"
import { NextResponse } from "next/server"
import mongoose from "mongoose"
const MONGODB_URI = 'mongodb://127.0.0.1:27017/CMS';
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully to local database.');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};
connectDB()
const commentSchema = new mongoose.Schema({
    commenter:{
        type: String, 
    },
    comment: {
        type: String, 
    },
    createdAt: {
        type: Date, 
    }
});

const articleSchema = new mongoose.Schema({
  title: String,
  slug:String,
  category: String,
  content: String,
  author: String,
  publish_date: String, 
  tags: String,
  comments: [commentSchema] 
},
)
const statsSchema= new mongoose.Schema({
  total:Number,
  PV:Number,
  Engage:Number,
})
const settingSchema=new mongoose.Schema({
  theme:String,
})

export const collectionArticles = mongoose.models.Article || mongoose.model('Article', articleSchema);
export const collectionStats = mongoose.models.Stats || mongoose.model('Stats', statsSchema);
export const collectionSetting = mongoose.models.Setting || mongoose.model('Setting', settingSchema);
