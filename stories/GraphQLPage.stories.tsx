import "../styles/globals.css";
import "../styles/Home.module.css";
import GraphQLPage from "../pages/graphql-page";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NextPage } from "next";

export default {
  title: "Pages/GraphQLPage",
  component: GraphQLPage,
} as ComponentMeta<typeof GraphQLPage>;

export const Template: ComponentStory<typeof GraphQLPage> = (args) => <GraphQLPage {...args} />;

// export const Primary = Template.bind({});
