import React from 'react';

import WatchVideo from '@/containers/WatchVideo';
import Partners from '@/containers/Partners';
import EcoSystem from '@/containers/EcoSystem';
import HowItWorks from '@/containers/HowItWorks';
import Tokenomics from '@/containers/Tokenomics';
import Teams from '@/containers/Teams';
import GetApp from '@/containers/GetApp';
import Footer from '@/containers/Footer';
import Roadmap from '@/containers/Roadmap';
import Welcome from '@/containers/Welcome';
import FirefoxSportBacker from '@/containers/FirefoxSportBacker';
import Investors from '@/containers/Investors';

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <WatchVideo />
      <FirefoxSportBacker />
      <Investors />
      <Partners />
      <EcoSystem />
      <HowItWorks />
      <Roadmap />
      <Tokenomics />
      <Teams />
      <GetApp />
      <Footer />
      {/* <Workouts />
      <AppPreview />
      <GamePlay />
      <Systems />
      <Roadmap />
      <Teams />
      <ProjectBackers />
      <ProjectCommunities />
      <Documents />
      <Join />
      <HotTopic /> */}
    </div>
  );
};

export default Home;
