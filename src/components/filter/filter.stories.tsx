// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from './filter';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Filter> = {
  component: Filter,
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const filter_tablet: Story = {
  args: {
   type :'featured'
  },
}