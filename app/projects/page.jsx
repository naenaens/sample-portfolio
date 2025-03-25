'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'Web Design',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Web Development',
    name: 'Solstice Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Web Development',
    name: 'Lumina Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Web Design',
    name: 'Evolve Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Web Development',
    name: 'Ignite Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Web Design',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Web Development',
    name: 'Serenity Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Web Design',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Web Development',
    name: 'Zenith Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Visuals',
    name: 'Creative Vision',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Visuals',
    name: 'Artistry in Motion',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
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
