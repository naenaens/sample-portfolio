import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'chat' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} 
              hover:text-purple-800 dark:hover:text-yellow-400`} // Hover color in light mode: purple, dark mode: yellow
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles} 
                  bg-purple-800 dark:bg-yellow-400`} // Active state underline color in light mode: purple, dark mode: yellow
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
