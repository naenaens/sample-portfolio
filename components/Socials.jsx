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
    path: 'https://www.linkedin.com/in/naenaens/',
    name: <RiLinkedinFill className="social-icon" />,
  },
  {
    path: 'https://github.com/naenaens',
    name: <RiGithubFill className="social-icon" />,
  },
  {
    path: 'https://www.instagram.com/naenaens/',
    name: <RiInstagramFill className="social-icon" />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
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
