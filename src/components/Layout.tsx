import type { ReactNode } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-warm-white pattern-blueprint">
      <header className="fixed top-0 left-0 right-0 z-30 bg-warm-white/90 backdrop-blur-md border-b border-warm-gray/30">
        <div className="container mx-auto px-6 py-4 md:pl-28">
          <Logo />
        </div>
      </header>
      
      <Navigation />
      
      <main className="pt-24 md:pl-20">
        {children}
      </main>
    </div>
  );
};
