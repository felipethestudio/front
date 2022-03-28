import "../styles/globals.css";
import "../styles/Home.module.css";
import Home from "../pages/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NextPage } from "next";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

// export const Primary = Template.bind({});
