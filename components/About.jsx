import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Nina Saberon',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+780-709-5784',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'ninaclairesaberon@email.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'January Baby',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'DMIT Web Design and Web Development',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Edmonton, Alberta, Canada',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Northern Alberta Institute of Technology',
        qualification: 'Digital Media and IT - Web Design and Web Development',
        years: '2023 - 2025',
      },
      {
        university: 'University of San Carlos, Philippines',
        qualification: 'Bachelor of Science in Psychology',
        years: '2011 - 2016',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Alberta Blue Cross',
        role: 'Full Stack Web Developer',
        years: 'September 2024 - Present',
      },
      {
        company: 'Alberta Blue Cross',
        role: 'UI Developer, Summer Student',
        years: 'May - August 2024',
      },
      {
        company: 'Accenture Inc.,',
        role: 'Associate Software Engineer - QA',
        years: '2022 - 2023',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, PHP',
      },
      {
        name: 'CMS, Wordpress, Joomla',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        name: 'VSCode | Sublime',
      },
      {
        name: 'Github | Gitlab',
      },
      {
        name: 'Postman, Mongodb',
      },
      {
        name: 'Figma',
      },
      {
        name: 'Adobe Photoshop | Adobe Illustrator',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto text-white' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto text-white'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto text-white' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 text-purple-800 dark:text-amber-400'>
                      Curiosity. Design. Art
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0 text-black dark:text-white'>
                      I design, create, and modernize user experiences.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0 text-black dark:text-white'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-purple-800 dark:text-amber-400'>
                        Language Skill
                      </div>
                      <div className='border-b border-border'></div>
                      <div>English, Cebuano, Tagalog, Japanese (a little lol)</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left text-purple-800 dark:text-amber-400'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-purple-800 dark:text-amber-400'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-purple-800 dark:bg-amber-400 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-purple-800 dark:text-amber-400'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-purple-800 dark:bg-amber-400 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2 '>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8 text-purple-800 dark:text-amber-400'>
                      What I Use To Build
                    </h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2 text-purple-800 dark:text-amber-400'>
                        Skills
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 text-black dark:text-white'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2 text-purple-800 dark:text-amber-400'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'tools').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 text-black dark:text-white'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
