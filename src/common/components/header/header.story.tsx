import type {Meta, StoryFn} from '@storybook/react';
import {Header} from "../header/header";

export default {
    title: 'Common/Header',
    component: Header,
} satisfies Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header/>
export const View = Template.bind({})
