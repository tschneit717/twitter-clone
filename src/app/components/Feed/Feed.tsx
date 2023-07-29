import { Tweet } from "../Tweet";
import { FeedProps } from "./Feed.interface";

const Feed = ({ tweets }: FeedProps) => {
  return (
    <div className="flex flex-col gap-4">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}

export default Feed;