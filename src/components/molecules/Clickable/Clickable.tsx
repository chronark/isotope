import React from "react"
import { Spinner } from "../../atoms/spinner/Spinner"
type Type = "primary" | "secondary" | "alert"
type Justify = "start" | "center" | "end" | "between" | "around"
type Size = "small" | "medium" | "large" | "auto"

export interface ClickableProps {
  label?: React.ReactChild
  type: Type
  justify?: Justify
  loading?: boolean
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
  justify = "center",
  loading,
  prefix,
  suffix,
  size = "medium",
}) => {
  return (
    <div
      className={`transition duration-500 relative flex rounded-sm items-center ${shadow(size)} ${colors(
        type,
      )}  justify-${justify} ${spacing(size)} ${dimensions(size)}`}
    >
      {loading ? (
        <span className="w-4 h-4 text-emerald-400">
          <Spinner />
        </span>
      ) : (
        <>
          {prefix ? <span className={iconSize(size)}>{prefix}</span> : null}
          {label ? <span className={text(size)}>{label}</span> : null}
          {suffix ? <span className={iconSize(size)}>{suffix}</span> : null}
        </>
      )}
    </div>
  )
}

const colors = (type: Type): string => {
  const common = ""

  const options: Record<Type, string> = {
    primary:
      "bg-gradient-to-tr from-black to-gray-800 text-gray-50 hover:from-gray-100 hover:to-white hover:text-black",
    secondary: "bg-transparent border border-gray-100 text-gray-900 hover:border-gray-400 hover:text-black",
    alert: "bg-gradient-to-tr from-red-600 to-red-500 text-white hover:to-red-400",
  }

  return [common, options[type]].join(" ")
}

const spacing = (size: Size): string => {
  const options: Record<Size, string> = {
    small: "gap-x-1",
    medium: "gap-x-2",
    large: "gap-x-3",
    auto: "gap-x-2",
  }
  return options[size]
}

const iconSize = (size: Size): string => {
  const options: Record<Size, string> = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    auto: "w-5 h-5",
  }
  return options[size]
}

const text = (size: Size): string => {
  const options: Record<Size, string> = {
    small: "text-sm",
    medium: "text-medium",
    large: "text-medium font-medium",
    auto: "text-medium",
  }
  return options[size]
}
const shadow = (size: Size): string => {
  return {
    small: "shadow-sm hover:shadow-md",
    medium: "shadow-md hover:shadow-lg",
    large: "shadow-xl hover:shadow-2xl",
  }[size]
}

const dimensions = (size: Size): string => {
  const options: Record<Size, string> = {
    small: "w-20 h-6",
    medium: "w-32 h-8",
    large: "w-40 h-10",
    auto: "p-2",
  }

  return options[size]
}
