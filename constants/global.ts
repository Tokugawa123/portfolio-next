import { RefObject } from 'react';
import {
  SiLinkedin,
  SiGithub,
  // SiInstagram,
  SiSkype,
  SiTelegram,
  SiDiscord,
} from 'react-icons/si';
import { Tlinks } from './typeInterface';
import { scrollIntoView } from 'seamless-scroll-polyfill';

export const listElements = [
  'About Me',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
  'Resume',
];

export const externalLinks: Tlinks = {
  Linkedin: {
    Icon: SiLinkedin,
    url: 'https://www.linkedin.com/',
  },
  GitHub: { Icon: SiGithub, url: 'https://github.com/tokugawa123' },
  Telegram: {
    Icon: SiTelegram,
    url: 'https://t.me/softlight1012',
  },
  Skype: {
    Icon: SiSkype,
    url: 'live:.cid.20e5247827118507',
  },
  Discord: {
    Icon: SiDiscord,
    url: 'sky04545',
  },
  // Instagram: {
  //   Icon: SiInstagram,
  //   url: 'https://www.instagram.com/',
  // },
};

export const scrollToRef = (
  ref: RefObject<HTMLHeadingElement>,
  prefersReducedMotion: boolean
) => {
  if (ref && ref.current) {
    scrollIntoView(ref.current, {
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }
};
