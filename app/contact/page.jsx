'use client';

import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-purple-600 dark:text-yellow-400 text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-purple-600 dark:bg-yellow-400'></span>
              Hey there! 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's go!</h1>
            <p className='subtitle max-w-[400px]'>
              Ready to build your site? Send me a message and let's talk!
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-purple-600 dark:text-yellow-400' />
              <div>ninaclairesaberon@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-purple-600 dark:text-yellow-400' />
              <div>Edmonton, Alberta, Canada</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-purple-600 dark:text-yellow-400' />
              <div>+780-709-5784</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
