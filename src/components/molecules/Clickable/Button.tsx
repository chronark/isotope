import React from "react"
import { Clickable, ClickableProps } from "./Clickable"

export interface ButtonProps extends ClickableProps {
  onClick: () => void
}
/**
 * A button to perform synchronous actions.
 */
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="focus:outline-none">
      <Clickable {...props} />
    </button>
  )
}
