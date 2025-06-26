import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Images, Calendar } from "lucide-react";

import FrostedCard from "../components/FrostedCard";
import SereneBackground from "../components/SereneBackground";
import {images} from "../assets/images"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function Gallery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://product-gallery.cloudinary.com/latest/all.js';
    script.async = true;
    script.onload = () => {
      initializeGalleries();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeGalleries = () => {
    cloudinary.galleryWidget({
      container: "#gallery-2025-event1",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "2025-event1" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-2023-pypa-retreat",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "23-pypa-retreat" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-ordination-pr-saji",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "ordination-pr-saji" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-40-years-thanksgiving",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "40-years-thanksgiving" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-baptism-aksa-job-niha-ashley",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "baptism-aksa-job-niha-ashley" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-baptism-rebecca-stephanie-hephzibah",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "baptism-rebecca-stephanie-hephzibah" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-archive-2010-to-2021",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "archive-2010-to-2021" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();

    cloudinary.galleryWidget({
      container: "#gallery-before-2010",
      cloudName: "ipcshalom",
      mediaAssets: [{ tag: "archive-before-2010" }],
      layout: "mosaic",
      zoom: true,
      carouselStyle: "indicators",
      carouselLocation: "bottom",
      navigationButtonPosition: "outside",
      aspectRatio: "16:9"
    }).render();
  };

  return (
    <div className="relative">
      <SereneBackground />
      
      <div className="relative z-10 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-16"
        >
        <FrostedCard>
            <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div variants={itemVariants} className="text-center md:text-left md:flex-1">
                <div className="flex justify-center md:justify-start mb-4">
                <Images size={48} className="text-red-600" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-4">
                Church Gallery
                </h1>
                <motion.div variants={fadeInVariants} className="text-gray-700 text-lg">
                <p>
                    Relive the cherished memories and milestones of IPC Shalom through our photo gallery. 
                    From worship services to special events, these images capture the spirit of our community.
                </p>
                </motion.div>
            </motion.div>

            <div className="w-full md:w-1/3 flex justify-end">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl w-full max-w-[400px]">
                <img 
                    src={images.community}
                    alt="Church Community" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-green-600/30"></div>
                </div>
            </div>
            </div>
        </FrostedCard>
        </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            
            <div className="grid md:grid-cols-2 gap-6">
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">2025 Sunday School Anniversary</h3>
                  <div id="gallery-2025-event1" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
              
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Ordination: Pr. Saji</h3>
                  <div id="gallery-ordination-pr-saji" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            
            <div className="grid md:grid-cols-2 gap-6">
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">2023 PYPA Retreat</h3>
                  <div id="gallery-2023-pypa-retreat" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
              
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">40 Years Thanksgiving Service</h3>
                  <div id="gallery-40-years-thanksgiving" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            
            <div className="grid md:grid-cols-2 gap-6">
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Baptism: Aksa, Job, Niha, Ashley</h3>
                  <div id="gallery-baptism-aksa-job-niha-ashley" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
              
              <FrostedCard>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Baptism: Rebecca, Stephanie, Hephzibah</h3>
                  <div id="gallery-baptism-rebecca-stephanie-hephzibah" style={{ width: '100%', minHeight: '300px' }}></div>
                </div>
              </FrostedCard>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <Calendar size={24} />
              Archive
            </h2>
            
            <FrostedCard>
              <div className="p-4">
                <div id="gallery-archive-2010-to-2021" style={{ width: '100%', minHeight: '400px' }}></div>
              </div>
            </FrostedCard>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
          >
            
            <FrostedCard>
              <div className="p-4">
                <div id="gallery-before-2010" style={{ width: '100%', minHeight: '400px' }}></div>
              </div>
            </FrostedCard>
          </motion.section>
        </div>
      </div>
    </div>
  );
}