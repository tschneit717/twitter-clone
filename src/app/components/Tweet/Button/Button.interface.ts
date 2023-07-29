import { ICONS_TYPES } from "../../Icons/Icons.interface";

export interface TweetButtonProps {
  text?: string,
  icon?: ICONS_TYPES,
  onClick?: () => void
}