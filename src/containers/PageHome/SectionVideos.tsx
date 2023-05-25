import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import NcPlayIcon2 from "shared/NcPlayIcon2/NcPlayIcon2";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "hXzdd0QXf_o",
    title: "Escursioni alle isole Tremiti a bordo di Verga Nautic Jet",
    thumbnail:
      "https://globaluserfiles.com/media/5543_7e4d69c02471b93abc2d7ee7bae000e4de145c25.png/v1/s/dji-0036.webp",
  },
  {
    id: "D_rgjCTFO8Y",
    title: "Pio e Amedeo ospiti con Verga Nautic jet",
    thumbnail:
      "https://images.pexels.com/photos/131423/pexels-photo-131423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 "
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  const renderSubVideo = (video: VideoType, index: number) => {
    if (index === currentVideo) return null;
    return (
      <div
        className="group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9 will-change-transform"
        onClick={() => {
          setCurrentVideo(index);
          !isPlay && setIsPlay(true);
        }}
        title={video.title}
        key={String(index)}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <NcPlayIcon2 />
        </div>
        <NcImage
          containerClassName="absolute inset-0 w-full h-full"
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform"
          src={video.thumbnail}
          title={video.title}
          alt={video.title}
        />
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="La nostra compagnia di escursioni in barca ti porta alla scoperta di posti incantevoli e paesaggi mozzafiato. Ammirare la costa a bordo della nostra barca è un’esperienza indimenticabile"
      >
        Costa Garganica: tra mare cristallino e natura selvaggia
      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
        <div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          {videos.map(renderSubVideo)}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
