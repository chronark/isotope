import React from "react"
import { Clickable, ClickableProps } from "./Clickable"

export interface LinkProps extends ClickableProps {
  href: string
}
/**
 * A link with button style.
 */
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} className="focus:outline-none">
      <Clickable {...props} />
    </a>
  )
}
