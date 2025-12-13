import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  textbookSidebar: [
    {
      type: 'doc',
      id: 'preface',
      label: 'Preface',
    },
    {
      type: 'category',
      label: 'Chapters',
      items: [
        {
          type: 'doc',
          id: 'ch1-introduction',
          label: 'Chapter 1: Introduction to Physical AI',
        },
        {
          type: 'doc',
          id: 'ch2-ros2',
          label: 'Chapter 2: ROS 2',
        },
        {
          type: 'doc',
          id: 'ch3-digital-twins',
          label: 'Chapter 3: Digital Twins',
        },
        {
          type: 'doc',
          id: 'ch4-nvidia-isaac',
          label: 'Chapter 4: NVIDIA Isaac',
        },
        {
          type: 'doc',
          id: 'ch5-vla',
          label: 'Chapter 5: Vision-Language-Action (VLA) Models',
        },
        {
          type: 'doc',
          id: 'ch6-humanoid',
          label: 'Chapter 6: Humanoid Development',
        },
        {
          type: 'doc',
          id: 'ch7-conversational',
          label: 'Chapter 7: Conversational Robotics',
        },
        {
          type: 'doc',
          id: 'ch8-capstone',
          label: 'Chapter 8: Capstone Project',
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        {
          type: 'doc',
          id: 'weekly-breakdown',
          label: 'Weekly Breakdown',
        },
        {
          type: 'doc',
          id: 'assessments',
          label: 'Assessments',
        },
        {
          type: 'doc',
          id: 'hardware-requirements',
          label: 'Hardware Requirements',
        },
      ],
    },
  ],
};

export default sidebars;
