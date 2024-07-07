import type { Meta, StoryFn } from "@storybook/react";
import {MenuItem} from "@app/module/menu/components/menu-item/menu-item";

export default {
  title: "Menu/Menu Item",
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/sushi/yamamoto.jpeg",
  weight: 330,
  title: "Sushi fun",
  ingredients: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  price: 350,
};
