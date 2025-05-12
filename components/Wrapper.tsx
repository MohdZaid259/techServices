'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType('navigation');
    const navType = (navigationEntries[0] as PerformanceNavigationTiming)?.type;

    if (navType === 'reload' || navType === 'navigate') {
      const timer = setTimeout(() => {
        setShowLogo(false);
      }, 2900);
      return () => clearTimeout(timer);
    } else {
      setShowLogo(false);
    }
  }, []);

  return showLogo ? (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full bg-slate-900">
      <Logo />
    </div>
  ) : (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {children}
    </div>
  );
}
