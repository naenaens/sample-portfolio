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
      'I built this website using Materialize CSS and jQuery for our Advanced Web Concepts project. We were encouraged to keep custom CSS to a minimum, allowing the framework to shine. Everything from the design to the code was crafted by me!',
    link: 'https://saki.naeyan.com/',
    github: '/',
  },
  {
    image: '/work/focus-photography.png',
    category: 'Web Design',
    name: 'Focus Photography',
    description:
      'This high-fidelity prototype was created for our Web Usability class using Figma. It’s a case study for a photography website, showcasing the landing page. All the design work was done by me, based on the provided case study',
    link: 'https://www.behance.net/gallery/217649635/Focus-Photography-Web-Design',
    github: '/',
  },
  {
    image: '/work/selections.jpg',
    category: 'Visuals',
    name: 'Selections',
    description:
      'This project is a practice in layering and masking from our Adobe Photoshop class. The initial design was provided by the instructor, and our task was to recreate it while applying these techniques.',
    link: '/work/selections.jpg',
    github: '/',
  },
  {
    image: '/work/cebu.png',
    category: 'Visuals',
    name: 'Cebu Island',
    description:
      'This brochure about Cebu Island was a project for our Illustrator class. I designed everything from scratch, including elements like the whale, coconut, mountains, waterfall, and even the hanging rice, all created using the Pen Tool.',
    link: '/work/cebu.pdf',
    github: '/',
  },
  {
    image: '/work/bootstrap.png',
    category: 'Web Development',
    name: 'Homestead hub',
    description:
      'This is a practice assignment for implementing Bootstrap CSS. While the design was provided by the instructor, the coding implementation was done entirely by me.',
    link: 'https://the-homestead-hub-naenaens.netlify.app/',
    github: '/',
  },
  {
    image: '/work/etudes.png',
    category: 'Web Development',
    name: 'Etudes',
    description:
      'This practice assignment focuses on implementing custom CSS selectors. While the design was provided by the instructor, I handled the coding implementation myself.',
    link: 'https://advanced-css-selectors-assignment.netlify.app/',
    github: '/',
  },
  {
    image: '/work/illustrator-guide.png',
    category: 'Visuals',
    name: 'Illustrator for Otakus',
    description:
      'This guide, created using Illustrator, covers key techniques such as the Pen Tool, gradients, shapes, and 3D illustrations. The concept and design were all made by me',
    link: '/work/illustrator-otakus.pdf',
    github: '/',
  },
  {
    image: '/work/multi-user.png',
    category: 'Web Development',
    name: 'Music Gallery',
    description:
      'This practice assignment involved incorporating advanced web concepts to create a multi-user blog. All of the content was created by me, and the images were sourced from Pexels.',
    link: 'https://nsaberon1.dmitstudent.ca/dmit2503/music-gallery/',
    github: '/',
  },
  {
    image: '/work/mothers-day-card.png',
    category: 'Visuals',
    name: 'Mother\'s Day Card',
    description:
      'This project focuses on creating a consistent design and brand for a special occasion, completed during our Visual Communications class. All of the design work was done by me.',
    link: '/work/mothers-day-card.pdf',
    github: '/',
  },
  {
    image: '/work/scribbles.png',
    category: 'Web Development',
    name: 'Scribbles',
    description:
      'This is a practice site built using the MERN stack (MongoDB, Express.js, React, Node.js). It served as my e-commerce website capstone project during the coding bootcamp I attended in 2022.',
    link: 'https://scribbles.vercel.app/',
    github: '/',
  },
  {
    image: '/work/ideal-workstation.jpg',
    category: 'Visuals',
    name: 'Ideal Workstation',
    description:
      'This design of my ideal workstation was created using Photoshop for an assignment in our Photoshop class. I had a great time bringing my vision to life, experimenting with different elements and techniques to create a functional and visually appealing workspace.',
    link: '/work/ideal-workstation.jpg',
    github: '/',
  },
  {
    image: '/work/low-fidelity.png',
    category: 'Web Design',
    name: 'Focus Photography Low-Fidelity',
    description:
      'This is a low-fidelity prototype created using Figma for a photography website case study, focusing on the user dashboard. The design was based on the provided case study, and all the design work was done by me.',
    link: 'https://www.behance.net/gallery/217650039/Focus-Photography-Low-fidelity-prototype',
    github: '/',
  },
  {
    image: '/work/old-portfolio.png',
    category: 'Web Development',
    name: 'Basic Portfolio',
    description:
      'This is a basic portfolio I created a few years ago using HTML, Bootstrap, and some custom CSS. It was my first portfolio project during the bootcamp I attended in 2022.',
    link: 'https://naeyan.com/',
    github: '/',
  },
  {
    image: '/work/husbando.png',
    category: 'Web Development',
    name: 'Anime Husbando',
    description:
      'This website showcases the top husbandos in the anime community. I had a blast building it using AJAX and PHP, combining my love for anime with coding. It was a fun project where I got to explore interactive features and bring some of my favorite characters to life through the website.',
    link: 'https://nsaberon1.dmitstudent.ca/dmit2503/ajax_saberon/saberon-demo.html',
    github: '/',
  },
  {
    image: '/work/anime-ipsum.png',
    category: 'Web Development',
    name: 'Anime Ipsum',
    description:
      'This is an Ipsum generator featuring famous anime characters and their iconic lines. Made using HTML, CSS, and JavaScript, this side project was a lot of fun to work on. I enjoyed combining my passion for anime with coding to create something playful and unique.',
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
