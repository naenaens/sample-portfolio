import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

// import {
//   RiBriefcase4Fill,
//   RiTeamFill,
//   RiTodoFill,
//   RiArrowDownSLine,
// } from 'react-icons/ri';

// components
import DevImg from './DevImg';
// import Badge from './Badge';
// import Socials from './Socials';

const Hero = () => {
  return (
    <section className='pt-2 h-auto bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none mb-16'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col xl:flex-row justify-around gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left mt-10'>
            <div className='text-sm uppercase font-semibold mb-4 text-amber-500 tracking-[4px]'>
              Web Developer | Web Designer
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Nina Saberon</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0 text-fuchsia-700'>
              I am a Web Designer and Web Developer.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            {/* <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            /> */}
          </div>
          
          {/* image (no background) */}
          <div className='flex justify-center xl:flex mb-8 mt-10'>
            <DevImg
              containerStyles='w-[350px] h-[450px] bg-no-repeat relative bg-bottom rounded-lg '
              imgSrc='/hero/developer.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
