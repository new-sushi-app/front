import type { Meta, StoryFn } from "@storybook/react";
import {MenuList} from "@app/module/menu/components/menu-list/menu-list";
import sushiMenu from "@app/mocks/sushi.json";

export default {
  title: "Menu/Menu list",
  component: MenuList,
} satisfies Meta<typeof MenuList>;

const Template: StoryFn<typeof MenuList> = (args) => <MenuList{...args} />;

export const View = Template.bind({});
View.args={
  items: sushiMenu
}