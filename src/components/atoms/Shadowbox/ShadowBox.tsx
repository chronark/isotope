import React from "react"

type Size = "small" | "medium" | "large"

export interface ShadowBox {
  // Optionally pass in more classes. These will be applied to the internal div, not the box itself.
  className?: string

  // Choose between predefined sizes. This ensures a uniform looking ui.
  size?: Size
}

/**
 * Wrap a component inside a `ShadowBox` to give it a distinct shadow without having to worry
 * about spacing etc. yourself.
 */
export const ShadowBox: React.FC<ShadowBox> = ({ children, className, size }) => {
  const getPaddingFrom = (size?: Size): string => {
    switch (size) {
      case "small":
        return "p-4"
      case "medium":
        return "p-8"
      case "large":
        return "p-12"
      default:
        return "p-8"
    }
  }

  return (
    <div className={`${getPaddingFrom(size)} bg-white rounded shadow-2xl`}>
      <div className={className}>{children}</div>
    </div>
  )
}
