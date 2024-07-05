import type { Meta, StoryFn } from "@storybook/react";
import { FooterLink } from "@app/common/components/footer-link/footer-link";

export default {
  title: "Common/Footer link",
  component: FooterLink,
} satisfies Meta<typeof FooterLink>;

const Template: StoryFn<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);
export const View = Template.bind({});

View.args={
    href: "tel:+3803339900",
    children: "044 223 33 23"
}