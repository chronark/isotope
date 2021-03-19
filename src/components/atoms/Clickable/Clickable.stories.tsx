import React from "react"
import { Clickable } from "./Clickable"
import { Meta } from "@storybook/react/types-6-0"
const meta: Meta = {
  title: "atoms/Clickable",
  component: Clickable,
  parameters: {
    componentSubtitle: "Wrap this inside an `a` or `button`",
  },
}
export default meta

const wrapper = (args) => (
  <div className="flex items-center justify-center">
    <Clickable {...args} />
  </div>
)

export const Control = wrapper.bind({})
Control.args = {
  label: "Button",
  type: "primary",
  align: "center",
}
