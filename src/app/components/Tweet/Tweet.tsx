import Image from "next/image"
import { TweetProps } from "./Tweet.interface"
import { TweetButton } from "./Button"
import { ICONS_TYPES } from "../Icons/Icons.interface"
import { formatNumber } from "@/app/utils"

const callback = () => {}

const Tweet = ({ name, imageURL, handle, message, date, likes, retweets, replies }: TweetProps) => {
  return (
    <div className="background-black border rounded-2xl border-white flex row gap-3 p-3">
      <Image className="rounded-full w-12 h-12" src={imageURL} alt={name} width="48" height="48"/>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <span className="font-bold">{name}</span>
          <span className="text-slate-400">
            {handle} • {date} 
          </span>
        </div>
        <div className="tweet__body">
          {message}
        </div>
        <div className="flex flex-row justify-between">
          <TweetButton icon={ICONS_TYPES.RETWEET} text={formatNumber(retweets)} />
          <TweetButton icon={ICONS_TYPES.REPLIES} text={formatNumber(replies)} />
          <TweetButton icon={ICONS_TYPES.LIKES} text={formatNumber(likes)} />
          <TweetButton icon={ICONS_TYPES.SHARE} />
        </div>
      </div>
    </div>
  )
}

export default Tweet