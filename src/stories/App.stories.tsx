import type {Meta, StoryFn} from '@storybook/react';
import {App} from "../App";

export default {
  title: 'Example/App',
  component: App,
} satisfies Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App/>
export const Primary = Template.bind({})
