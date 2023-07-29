import { LikesIcon, RepliesIcon, RetweetsIcon, ShareIcon } from "../../Icons";
import { ICONS_TYPES } from "../../Icons/Icons.interface";
import { TweetButtonProps } from "./Button.interface";


const TweetButton = ({ text, icon, onClick } : TweetButtonProps) => {
  const renderIcon = () => {
    switch (icon) {
      case ICONS_TYPES.RETWEET:
        return <RetweetsIcon/>
      case ICONS_TYPES.LIKES:
        return <LikesIcon/>
      case ICONS_TYPES.REPLIES:
        return <RepliesIcon/>
      case ICONS_TYPES.SHARE:
        return <ShareIcon/>
    }
  }
  return (
    <button className="flex flex-row items-center gap-3" onClick={onClick}>
      {icon && renderIcon()}
      {text}
    </button>
  )
}

export default TweetButton;