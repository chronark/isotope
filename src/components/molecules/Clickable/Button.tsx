import React, { useCallback, useState } from "react"
import { Clickable, ClickableProps } from "./Clickable"

export interface ButtonClicks extends ClickableProps {
  onClickSync: () => void
  onClickAsync: () => void
}
/**
 * A button to perform onClickEvents
 *
 * When you only want to have a single icon displyed, simply omit `label` and set your icon either as `prefix` or `suffix`
 */
export const Button: React.FC<ButtonClicks> = (props) => {
  const [isLoading, setLoading] = useState(false)

  const handleClick = useCallback(async () => {
    if (props.onClickSync) {
      props.onClickSync()
    } else {
      setLoading(true)
      await props.onClickAsync()
      setLoading(false)
    }
  }, [props.onClickSync, props.onClickAsync])

  return (
    <button onClick={handleClick} className="focus:outline-none">
      <Clickable loading={isLoading} {...props} />
    </button>
  )
}
