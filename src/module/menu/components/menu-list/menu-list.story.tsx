import type { Meta, StoryFn } from "@storybook/react";
import {MenuList} from "@app/module/menu/components/menu-list/menu-list";

export default {
  title: "Menu/Menu list",
  component: MenuList,
} satisfies Meta<typeof MenuList>;

const Template: StoryFn<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});
