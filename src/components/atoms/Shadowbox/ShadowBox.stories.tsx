import React from "react"
import { ShadowBox } from "./ShadowBox"
import { Meta } from "@storybook/react/types-6-0"
const meta: Meta = {
  title: "atom/ShadowBox",
  component: ShadowBox,
  parameters: {
    componentSubtitle: "Wrap other objects with a shadowbox to get a uniform looking element.",
  },
}
export default meta

const Template = (args) => <ShadowBox {...args} />

export const Control = Template.bind({})
Control.args = {
  children: "I am a box",
}

export const Sizes = (): JSX.Element => (
  <div className="flex items-center justify-between p-8">
    <ShadowBox size="small">Small</ShadowBox>
    <ShadowBox size="medium">Medium</ShadowBox>
    <ShadowBox size="large">Large</ShadowBox>
  </div>
)

Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "3 sizes are supported.",
  },
}
