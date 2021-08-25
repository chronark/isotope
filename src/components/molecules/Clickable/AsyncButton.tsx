import React, { useCallback, useState } from "react"
import { Clickable, ClickableProps } from "./Clickable"

export interface AsyncButtonProps extends ClickableProps {
  onClick: () => Promise<void>
}
/**
 * A button to perform async actions.
 *
 * A loading animation is displayed while the promise resolves.
 */
export const AsyncButton: React.FC<AsyncButtonProps> = (props) => {
  const [isLoading, setLoading] = useState(false)

  const handleClick = useCallback(async () => {
    setLoading(true)
    await props.onClick()
    setLoading(false)
  }, [props.onClick])

  return (
    <button onClick={handleClick} className="focus:outline-none">
      <Clickable loading={isLoading} {...props} />
    </button>
  )
}
