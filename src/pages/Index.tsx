
import { Suspense, lazy } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Questions from '@/components/sections/Questions';
import AICoaching from '@/components/sections/AICoaching';
import Analysis from '@/components/sections/Analysis';
import Footer from '@/components/layout/Footer';

// Lazy load the 3D scene component to improve initial loading performance
const Scene3D = lazy(() => import('@/components/3d/Scene3D'));

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg-light">
      <Navbar />

      <Suspense fallback={<div className="canvas-container"></div>}>
        <Scene3D />
      </Suspense>

      <Hero />
      <Features />
      <Questions />
      <AICoaching />
      <Analysis />
      <Footer />
    </div>
  );
};

export default Index;
