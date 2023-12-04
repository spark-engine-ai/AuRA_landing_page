import React from 'react';
import VideoBackground from './VideoBackground';
import Logo from './Logo';
import ButtonRow from './ButtonRow';
import Info from './info';
import GridSection from './GridSection';

const Main: React.FC = () => {
  return (
    <div>
      <VideoBackground />
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <Logo />
        <h2 className="text-3xl font-bold mt-2">AuRA</h2>
        <p className="mt-2">Automated React Architecture</p>
        <ButtonRow />
      </div>
      <Info />
      <GridSection title="Supported frameworks" gridLayout="2x6" />
    </div>
  );
};
export default Main;
