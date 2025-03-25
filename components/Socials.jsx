'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill className="social-icon" />,
  },
  {
    path: '/',
    name: <RiGithubFill className="social-icon" />,
  },
  {
    path: '/',
    name: <RiFacebookFill className="social-icon" />,
  },
  {
    path: '/',
    name: <RiInstagramFill className="social-icon" />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles} social-icon-wrapper`}>
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
