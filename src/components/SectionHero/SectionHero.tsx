import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/background.jpg";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (

    
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      {/* <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Le tremiti come non le avete mai viste
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
          <ButtonPrimary>Start your search</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div> */}

        <img className="w-full" src={imagePng} alt="hero" />

        {/* <div className="flex-grow">
        <video autoPlay={true} loop={true}>
          <source src="https://player.vimeo.com/external/176277723.hd.mp4?s=9eb4ad96f20973877ff433d12751cd792c5a905d&amp;profile_id=174" type="video/mp4"/>

        </video>
        </div> */}

      <div style={{position: 'relative', alignItems: 'center'}} className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
