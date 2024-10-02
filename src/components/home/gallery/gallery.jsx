import gallery from "@/constants/gallery";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImageComponent = ({ isInView, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={isInView ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
      className="w-full h-full"
    >
      <Image
        className="w-full h-full object-cover object-center shadow"
        {...props}
      />
    </motion.div>
  );
};

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4, once: true });

  return (
    <div className="px-width" ref={sectionRef}>
      <div className="max-w-md">
        <h2 className="text-xl md:text-3xl font-semibold">Galería</h2>
        <p className="text-sm md:text-md text-muted-foreground md:mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima dolores quia cumque amet ducimus.
        </p>
      </div>
      <ul className="grid md:grid-cols-2 gap-3 mt-4 md:mt-6">
        <div className="grid grid-cols-2 gap-3 md:h-[320px]">
          <div className="grid grid-rows-2 gap-3 h-[320px] md:h-auto">
            <ImageComponent
              src={gallery[0]}
              width={200}
              height={200}
              isInView={isInView}
              alt="Imagen de Alberto Blanco 1"
            />
            <ImageComponent
              src={gallery[1]}
              width={200}
              height={200}
              isInView={isInView}
              alt="Imagen de Alberto Blanco 2"
            />
          </div>
          <ImageComponent
            src={gallery[2]}
            width={200}
            height={500}
            isInView={isInView}
            alt="Imagen de Alberto Blanco 3"
          />
        </div>
        <div className="max-h-60 md:max-h-max">
          <ImageComponent
            src={gallery[3]}
            width={200}
            height={500}
            isInView={isInView}
            alt="Imagen de Alberto Blanco 4"
          />
        </div>
      </ul>
    </div>
  );
};

export default Gallery;
