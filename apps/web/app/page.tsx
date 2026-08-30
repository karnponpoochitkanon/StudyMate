import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StudyBuddy from '@/components/StudyBuddy';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-navy">
      <Navbar />
      <Hero />
      <StudyBuddy />
    </div>
  );
}
