// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Panel } from './panel';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Panel> = {
  component: Panel,
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Panel_doc: Story = {
  args: {
   data :{ "id": 1,
   "company": "Photosnap",
   "logo": "./images/photosnap.svg",
   "new": true,
   "featured": true,
   "position": "Senior Frontend Developer",
   "role": "Frontend",
   "level": "Senior",
   "postedAt": "1d ago",
   "contract": "Full Time",
   "location": "USA Only",
   "languages": ["HTML", "CSS", "JavaScript"],
   "tools": ["React", "Sass"]}
  },
}