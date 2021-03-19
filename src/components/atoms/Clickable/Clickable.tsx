import React from "react"

type ClickableType = "primary" | "secondary" | "success" | "alert"
type Alignment = "start" | "center" | "end"
type Size = "small" | "medium" | "large"

type Width = 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 40
type Height = 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 40

export interface ClickableProps {
  label?: React.ReactChild
  type: ClickableType
  align?: Alignment
  loading?: boolean
  width?: Width
  height?: Height
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  size?: Size
}

/**
 * Clickable is meant to be wrapped by an `a` or `button` and takes care of styling only.
 *
 * When you only want to have a single icon displyed, simply omit `label` and set your icon either as `prefix` or `suffix`
 */
export const Clickable: React.FC<ClickableProps> = ({
  label,
  type = "primary",
  align = "center",
  loading,
  width,
  height,
  prefix,
  suffix,
  size,
}) => {
  return (
    <div
      className={`relative flex rounded-sm bg-black text-gray-50 items-center justify-${align} space-x-2 rounded-sm ${paddingX(
        width,
        size,
      )} ${paddingY(height, size)}`}
    >
      {loading ? (
        <span className="flex top-0 animate-pulse right-0 absolute h-3 w-3">
          <span className="   inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      ) : null}
      {prefix ? <span className="w-6 h-6">{prefix}</span> : null}
      {label ? <span>{label}</span> : null}
      {suffix ? <span className="w-6 h-6">{suffix}</span> : null}
    </div>
  )
}

const paddingX = (width: number, size: Size): string => {
  if (width) {
    return `w-${width}`
  }

  switch (size) {
    case "small":
      return "px-2"
    case "medium":
      return "px-4"
    case "large":
      return "px-8"
    default:
      return "px-4"
  }
}

const paddingY = (height: number, size: Size): string => {
  if (height) {
    return `h-${height}`
  }

  switch (size) {
    case "small":
      return "py-1"
    case "medium":
      return "py-2"
    case "large":
      return "py-4"
    default:
      return "py-2"
  }
}
