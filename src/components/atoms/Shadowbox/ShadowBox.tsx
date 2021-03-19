import React from 'react';


type Size = "small" | "medium" | "large"

export interface ShadowBox {
  className?: string
  size?: Size
}


const getPaddingFrom = (size?: Size ) : string => {
  switch (size) {
    case "small":
      return "p-4"
    case "medium":
      return "p-8"
    case "large":
    return "p-16"
    default:
      return "p-8"
  }
}


export const ShadowBox: React.FC<ShadowBox> = ({ children, className, size }) => (
  <div className={`${getPaddingFrom(size)} bg-white rounded shadow-2xl`}>
    <div className={className}>{children}</div>
  </div>
)