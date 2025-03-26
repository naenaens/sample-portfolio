'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/saki.png',
    category: 'Web Development',
    name: 'Saki Anime',
    description:
      'This website was made using Materialize CSS and jquery as a project for our Advanced Web Concepts. We were told to use minimal custom CSS as much as possible. The design and code was made by me.',
    link: 'https://saki.naeyan.com/',
    github: '/',
  },
  {
    image: '/work/focus-photography.png',
    category: 'Web Design',
    name: 'Focus Photography',
    description:
      'This is a high fidelity prototype project for our Web Usability class made using Figma. This was for a photography website case study featuring the landing page. All of the design was made by me based on the given case study.',
    link: 'https://www.behance.net/gallery/217649635/Focus-Photography-Web-Design',
    github: '/',
  },
  {
    image: '/work/selections.jpg',
    category: 'Visuals',
    name: 'Selections',
    description:
      'This is practice on layering and masking in our Adobe Photoshop class. The initial design was provided by the instructor and we were tasked to recreate it.',
    link: '/work/selections.jpg',
    github: '/',
  },
  {
    image: '/work/cebu.png',
    category: 'Visuals',
    name: 'Cebu Island',
    description:
      'A brochure about Cebu Island which was also a project for our Illustrator class. All of the design was made by me.',
    link: '/work/cebu.pdf',
    github: '/',
  },
  {
    image: '/work/bootstrap.png',
    category: 'Web Development',
    name: 'Homestead hub',
    description:
      'This is a practice assignment for implementing Bootstrap CSS. The design was given by the instructor but the coding implementation was done by me.',
    link: 'https://the-homestead-hub-naenaens.netlify.app/',
    github: '/',
  },
  {
    image: '/work/etudes.png',
    category: 'Web Development',
    name: 'Etudes',
    description:
      'This is a practice assignment for implementing custom CSS selectors. The design was given by the instructor but the coding implementation was done by me.',
    link: 'https://advanced-css-selectors-assignment.netlify.app/',
    github: '/',
  },
  {
    image: '/work/illustrator-guide.png',
    category: 'Visuals',
    name: 'Illustrator for Otakus',
    description:
      'This is an Illustrator guide which features information about using the pen tool, gradients, shapes and 3D illustrations. The concept and design was made by me',
    link: '/work/illustrator-otakus.pdf',
    github: '/',
  },
  {
    image: '/work/multi-user.png',
    category: 'Web Development',
    name: 'Music Gallery',
    description:
      'This is a practice assignment incorporating advanced web concepts to create a Multi-user blog. All of the content was made by me and the images were sourced from pexels.',
    link: 'https://nsaberon1.dmitstudent.ca/dmit2503/music-gallery/',
    github: '/',
  },
  {
    image: '/work/mothers-day-card.png',
    category: 'Visuals',
    name: 'Mother\'s Day Card',
    description:
      'This project is about making a consistent design and brand for a special occassion which was done during our Visual Communications class. All of the design was made by me.',
    link: '/work/mothers-day-card.pdf',
    github: '/',
  },
  {
    image: '/work/scribbles.png',
    category: 'Web Development',
    name: 'Scribbles',
    description:
      'This is a practice site using MERN (Mongo DB, ExpressJs, React, NodeJs). This is my E-commerce website capstone when I joined a coding bootcamp way back 2022',
    link: 'https://scribbles.vercel.app/',
    github: '/',
  },
  {
    image: '/work/ideal-workstation.jpg',
    category: 'Visuals',
    name: 'Ideal Workstation',
    description:
      'This is a design of my ideal workstation made using photoshop as an assignment for our photoshop class.',
    link: '/work/ideal-workstation.jpg',
    github: '/',
  },
  {
    image: '/work/low-fidelity.png',
    category: 'Web Design',
    name: 'Focus Photography Low-Fidelity',
    description:
      'This is a low-fidelity prototype made using Figma for a photography website case study featuring the user dashboard.',
    link: 'https://www.behance.net/gallery/217650039/Focus-Photography-Low-fidelity-prototype',
    github: '/',
  },
  {
    image: '/work/old-portfolio.png',
    category: 'Web Development',
    name: 'Basic Portfolio',
    description:
      'This is a basic portfolio I made a few years back using HTML, Bootstrap and some custom CSS.',
    link: 'https://naeyan.com/',
    github: '/',
  },
  {
    image: '/work/husbando.png',
    category: 'Web Development',
    name: 'Anime Husbando',
    description:
      'This website shows the top husbandos in the anime community. The tools used to build this is AJAX and PHP.',
    link: 'https://nsaberon1.dmitstudent.ca/dmit2503/ajax_saberon/saberon-demo.html',
    github: '/',
  },
  {
    image: '/work/anime-ipsum.png',
    category: 'Web Development',
    name: 'Anime Ipsum',
    description:
      'This is an ipsum generator featuring famouse anime characters and their lines. This was made using HTML, CSS and Javascript.',
    link: 'https://anime-ipsum-kei.netlify.app/',
    github: '/',
  }
];

// New categories: All Projects, Web Development, Web Design, Visuals
const uniqueCategories = ['All Projects', 'Web Development', 'Web Design', 'Visuals'];

const Projects = () => {
  const [category, setCategory] = useState('All Projects');

  const filteredProjects = projectData.filter((project) => {
    // If category is 'All Projects', return all projects, else filter by category
    return category === 'All Projects' ? project : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs value={category} onValueChange={setCategory} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none justify-center'>
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <div className="flex flex-col h-full">
                  <ProjectCard project={project} />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
