import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/FeaturesHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesWorld from "../partials/FeaturesWorld";
import News from "../partials/News";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black border-8">
      {/*  Site header 
      <Header />
*/}
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections 
        
        <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta />
*/}
        <div className="justify-center">
          <HeroHome />
        </div>
      </main>

      {/*  Site footer 
      <Footer />*/}
    </div>
  );
}

export default Home;
