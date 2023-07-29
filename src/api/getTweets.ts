import { doc, getDoc } from "firebase/firestore";
import { db } from "./client";
export const getTweets = async (userId?: string) => {
  const tweetsCol = doc(db, 'tweets');
  console.log(tweetsCol);
  return await getDoc(tweetsCol);
};

