import {ReactNode} from 'react';
import OnBoard from '../../assets/svgs/OnboardingImg.svg';

export type Slide = {
  id: string;
  Image: ReactNode;
  title: string;
  redTitle: string;
  text: string;
  thirdText?: string;
};

export const Slides: Slide[] = [
  {
    id: '1',
    Image: OnBoard,
    title: 'Match with riders that',
    redTitle: 'always deliver',
    text: 'Lorem ipsum dolor sit amet consectetur. Diam eget in tellus varius faucibus semper ',
  },
  {
    id: '2',
    Image: OnBoard,
    title: 'because we care',
    redTitle: 'Best rates ',
    text: 'Lorem ipsum dolor sit amet consectetur. Diam eget in tellus varius faucibus semper ',
  },
  {
    id: '3',
    Image: OnBoard,
    title: 'Book your deliveries',
    redTitle: 'in advance',
    text: 'Lorem ipsum dolor sit amet consectetur.  Diam eget in tellus varius faucibus semper ',
  },
  {
    id: '4',
    Image: OnBoard,
    title: 'Get started with',
    redTitle: 'Messenger',
    text: 'Lorem ipsum dolor sit amet consectetur. Diam eget in tellus varius faucibus semper ',
    thirdText: 'today',
  },
];
