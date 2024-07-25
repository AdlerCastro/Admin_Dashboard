import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./type";

export default {
    title: "Components/Atoms/Button",
    component: Button,
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: {
        children: "Lorem ipsum"
    }
}