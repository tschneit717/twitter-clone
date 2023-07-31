import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../client";
export const createTweet = async (userId: string, text: string) => {
  await setDoc(doc(db, "tweets", "tweet"), {
    text,
    createdAt: new Date(),
    likes: 0,
    retweets: 0,
    replies: 0
  });
}