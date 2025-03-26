import { Paintbrush, Globe, Music } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <Paintbrush size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description: 'Designing desktop and mobile user interfaces using Figma.',
  },
  {
    icon: <Globe size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      'Creating stunning websites through different coding stacks like React, NextJs, or PHP frameworks.',
  },
  {
    icon: <Music size={72} strokeWidth={0.8} />,
    title: 'Social Media Management',
    description: 'Creates and updates content of your Social Media Accounts.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36 mt-24 xl:mt-24'>
      <div className='container mx-auto mt-24 xl:mt-24'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative border border-yellow-500 dark:border-transparent'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
