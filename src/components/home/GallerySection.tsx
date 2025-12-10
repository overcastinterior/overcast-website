'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import gallery01 from "@/../public/images/projects/Apprtment-Project-08.webp";
import gallery02 from "@/../public/images/projects/Drawing-Dining-Project-01.webp";
import gallery03 from "@/../public/images/projects/Drawing-Dining-Project-02.webp";
import gallery04 from "@/../public/images/projects/Family-Bed-Project-07.webp";
import gallery05 from "@/../public/images/projects/Gym-Project-03.webp";
import gallery06 from "@/../public/images/projects/Office-Project-04.webp";
import gallery07 from "@/../public/images/projects/Office-Project-06.webp";
import gallery08 from "@/../public/images/projects/Open-Space-Project-05.webp";

interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Gallery images array - you can expand this with more images
  const galleryImages: GalleryImage[] = [
    { id: 1, src: gallery01, alt: "Modern Interior Design 1" },
    { id: 2, src: gallery02, alt: "Contemporary Living Space 2" },
    { id: 3, src: gallery03, alt: "Elegant Room Design 3" },
    { id: 4, src: gallery04, alt: "Luxury Interior 4" },
    { id: 5, src: gallery05, alt: "Stylish Home Decor 5" },
    { id: 6, src: gallery06, alt: "Beautiful Architecture 6" },
    { id: 7, src: gallery07, alt: "Modern Interior Design 7" },
    { id: 8, src: gallery08, alt: "Contemporary Living Space 8" },
  ];

  const galleryImages2: GalleryImage[] = [
    { id: 1, src: gallery01, alt: "Modern Interior Design 1" },
    { id: 2, src: gallery02, alt: "Contemporary Living Space 2" },
    { id: 3, src: gallery03, alt: "Elegant Room Design 3" },
    { id: 4, src: gallery04, alt: "Luxury Interior 4" },
    { id: 5, src: gallery05, alt: "Stylish Home Decor 5" },
    { id: 6, src: gallery06, alt: "Beautiful Architecture 6" },
    { id: 7, src: gallery07, alt: "Modern Interior Design 7" },
    { id: 8, src: gallery08, alt: "Contemporary Living Space 8" },
  ];

  const openPopup = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };
  return <>
    <section className="w-full py-10 lg:py-20 bg-[#F6F6F6]">
      <div className="container-fluid mx-2 lg:mx-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-cal font-normal text-[90px] lg:text-[160px] xl:text-[200px] text-[#C1C1C1] leading-[70%]">
            Our Creations
          </h2>
        </div>

        {/* Top Slider - Right to Left */}
        <div className="w-full mb-6 lg:mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true, // Right to Left
            }}
            loop={true}
            speed={1000}
            className="gallery-slider-rtl"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={`top-${image.id}`}>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openPopup(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 25vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <span className="text-sm font-medium">View Full Size</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Image Popup/Lightbox */}
      {isPopupOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closePopup}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div
              className="relative animate-scale-in max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                style={{ width: 'auto', height: 'auto' }}
              />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-lg">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </div>

            {/* Navigation hint */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  </>
}

export default GallerySection