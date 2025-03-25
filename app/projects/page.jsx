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
      'This website was made using Materialize CSS and jquery.',
    link: 'https://saki.naeyan.com/',
    github: '/',
  },
  {
    image: '/work/focus-photography.png',
    category: 'Web Design',
    name: 'Focus Photography',
    description:
      'This is a high fidelity prototype made using Figma for a photography website case study featuring the landing page.',
    link: 'https://www.behance.net/gallery/217649635/Focus-Photography-Web-Design',
    github: '/',
  },
  {
    image: '/work/selections.jpg',
    category: 'Visuals',
    name: 'Selections',
    description:
      'This is practice on layering and masking in our photoshop class.',
    link: '/work/selections.jpg',
    github: '/',
  },
  {
    image: '/work/scribbles.png',
    category: 'Web Development',
    name: 'Scribbles',
    description:
      'This is a practice site using MERN (Mongo DB, ExpressJs, React, NodeJs).',
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
      'This is a basic portfolio I made a few years back using bootstrap and custom css.',
    link: 'https://naeyan.com/',
    github: '/',
  },
  {
    image: '/work/husbando.png',
    category: 'Web Development',
    name: 'Anime Husbando',
    description:
      'This website shows the top husbandos in the anime community. The tools used to build this is ajax.',
    link: 'https://nsaberon1.dmitstudent.ca/dmit2503/ajax_saberon/saberon-demo.html',
    github: '/',
  },
  {
    image: '/work/anime-ipsum.png',
    category: 'Web Development',
    name: 'Anime Ipsum',
    description:
      'This is an ipsum generator featuring famouse anime characters and their lines.',
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
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
