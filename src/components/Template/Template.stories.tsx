import React from "react"
import { Template } from "./Template"
import { Meta } from "@storybook/react/types-6-0"
const meta: Meta = {
  title: "Template",
  component: Template,
  parameters: {
    componentSubtitle: "Wrap other objects with a shadowbox to get a uniform looking element.",
  },
}
export default meta

const wrapper = (args) => <Template {...args} />

export const Control = wrapper.bind({})
Control.args = {}
