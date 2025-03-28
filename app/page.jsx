// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Hobbies from '@/components/Hobbies';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Hobbies /> 
      <Cta />
    </main>
  );
}
