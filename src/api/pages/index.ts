import { db } from '../client';
import { getDatabase, onValue, ref } from "firebase/database";

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, tweets: any[]} }> {

  const database = getDatabase();
  const tweetsRef = ref(database);
  let tweets: any[] = [];
  onValue(tweetsRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    tweets = data
  });
  

  return {
    props: {
      title: "Muskrat",
      tweets: tweets
    }
  }
}
