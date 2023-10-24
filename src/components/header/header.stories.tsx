import type {Meta, StoryFn} from '@storybook/react';

import {Header} from './header';

// Learn how to write stories:
// https://web.docs.shopify.io/docs/guides/storybook/how-to-write-story-files
const meta: Meta = {
  component: Header,
  parameters: {
    
  },
};

export default meta;

// 👇 We create a "template" of how args map to rendering
const Template: StoryFn = (args) => <Header {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});

// Story args
// Learn more: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {

};
