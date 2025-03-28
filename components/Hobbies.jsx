'use client';

import Image from 'next/image';
import { useState } from 'react';
import ReactModalImage from 'react-modal-image'; // Importing react-modal-image

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/work/twilight-time.jpg', // Image from the public folder
    name: 'Twilight Band',
    job: '1950s Songs and Doo-Wop Singer',
    review:
      'Outside of tech, I am a singer. I am one of the singers in the Twilight Band, where we bring the magic of 1950s songs and Doo-Wop back to life! Recently, we were honored to be accepted into the Arts Touring Alliance of Alberta’s Alberta Showcase Program, allowing us to share our music with even more people. Join us on our musical journey!',
  },
  {
    avatar: '/work/koro-filipino.jpg', // Image from the public folder
    name: 'Koro Filipino',
    job: 'Showchoir Member',
    review:
      'I have always been a choir member since I was little. Being a part of Koro Filipino is an absolute thrill! As a talented showchoir in Edmonton, we come together to perform a wide range of songs, from classics to contemporary hits. Our diverse and dynamic performances are sure to captivate and entertain!',
  },
  {
    avatar: '/work/divine-friends.jpg', // Image from the public folder
    name: 'Divine Friends Choir',
    job: 'Choir Member',
    review:
      'I also serve at the church! As a member of Divine Friends Choir, I have the privilege of serving at St. Therese Church every Sunday. We also share our music at St. Maria Goretti Church in Devon and Corpus Christi once a month. Our choir brings harmony, hope, and joy to all who listen! It is my vow to be able to serve the Lord through music.',
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto text-2xl sm:text-3xl lg:text-4xl'>
          Tech by Day,<br></br> Tunes on the Side
        </h2>
        <p className='text-center mb-12 px-20'>
          While I build in the world of tech during the day, I still find time to enjoy my passion behind the scenes. From singing in a showchoir to performing in bands, I bring creativity to life beyond the screen.
        </p>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-full'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 rounded-lg h-full'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex flex-col items-center gap-x-4'>
                      {/* image */}
                      <div className='w-48 h-48 rounded-lg overflow-hidden mb-6 relative'>
                        <ReactModalImage
                          small={person.avatar} // small image (thumbnail)
                          large={person.avatar} // large image (modal view)
                          alt='Avatar'
                          className='cursor-pointer object-cover w-full h-full'
                        />
                      </div>
                      {/* name */}
                      <div className='flex flex-col items-center'>
                        <CardTitle>{person.name}</CardTitle>
                        <p className='text-sm'>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
