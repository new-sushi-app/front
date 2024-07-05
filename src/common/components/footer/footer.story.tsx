import type {Meta, StoryFn} from '@storybook/react';
import {Footer} from "@app/common/components/footer/footer";

export default {
    title: 'Common/Footer',
    component: Footer,
} satisfies Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer/>
export const View = Template.bind({})
