import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='stroke-white hover:stroke-yellow-400 transition-all text-[20px] dark:stroke-white dark:hover:stroke-yellow-400' // stroke white for both modes
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Nina Saberon 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
