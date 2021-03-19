import React from "react"
import { ShadowBox } from "./ShadowBox"
import { Meta } from "@storybook/react/types-6-0"
export default {
  title: "atom/ShadowBox",
  component: ShadowBox,
  subComponents: { ShadowBox },
} as Meta

const Template = (args) => <ShadowBox {...args} />

export const Control = Template.bind({})
Control.args = {
  children: "I am a box",
}

export const Small = Template.bind({})
Small.args = {
  children: "I am a small box",
  size: "small",
}
export const Medium = Template.bind({})
Medium.args = {
  children: "I am a medium box",
  size: "medium",
}

export const Large = Template.bind({})
Large.args = {
  children: "I am a large box",
  size: "large",
}
