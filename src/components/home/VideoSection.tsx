'use client';

import { useState } from "react";
import ButtonTransparent from "@/components/small/ButtonTransparent";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Replace with your actual YouTube video ID
  const youtubeVideoId = "T5IQNIYGOEw"; // Example: Rick Roll video ID 

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  return <>
    <section className="w-full object-center bg-black">
      <div className="w-full bg-black/80 py-10 pb-6 xl:py-[100px] relative xl:pb-8">
        <div className="container">
          <div className="w-full flex flex-col items-end lg:flex-row lg:justify-between">
            <div className="flex flex-col lg:flex-row items-end gap-x-4 justify-start">
              <h2 className="font-cal font-normal text-3xl lg:text-[50px] xl:text-[60px] text-white leading-[110%] mt-3 xl:mt-5 lg:min-w-[50%]">
                Unlock <span className="text-primary">Your Dream</span> <br />{" "}
                Home Today!
              </h2>
              <p className="font-normal text-white text-sm md:text-base lg:text-lg font-golos lg:-ml-32 lg:max-w-[55%]">
                We encourage clients to actively participate in discussions,
                share their ideas, preferences, and feedback.
              </p>
            </div>
            <div className="lg:min-w-[20%]">
              <ButtonTransparent text="Book a Free Consultation" link="#" />
            </div>
          </div>

          <div className="w-full mt-8 md:mt-12 lg:mt-20 relative group">
            {/* Video Placeholder - No Image */}
            <div className={`relative transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl xl:rounded-[25px] aspect-video flex items-center justify-center ${isVideoPlaying ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>

              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Play button */}
              <div
                className="relative z-20 cursor-pointer"
                onClick={handleVideoPlay}
              >
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-full bg-white/20 flex justify-center items-center outline outline-white m-1 p-1 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:outline-primary">
                  <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Label */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-cal text-lg lg:text-xl">Click to Watch Our Story</p>
              </div>
            </div>

            {/* YouTube Video iframe */}
            {isVideoPlaying && (
              <div className="absolute inset-0 z-30 rounded-xl xl:rounded-[25px] overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl xl:rounded-[25px]"
                />

                {/* Close button */}
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-40"
                  aria-label="Close video"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default VideoSection;