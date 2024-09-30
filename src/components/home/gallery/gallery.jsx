import gallery from "@/constants/gallery";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImageComponent = ({ isInView, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={isInView ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.75 }}
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
      <div>
        <h2 className="text-xl font-semibold">Galería</h2>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima dolores quia cumque amet ducimus.
        </p>
      </div>
      <ul className="grid md:grid-cols-2 gap-3 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid grid-rows-2 gap-3 h-[320px]">
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
            height={200}
            isInView={isInView}
            alt="Imagen de Alberto Blanco 3"
          />
        </div>
        <ImageComponent
          src={gallery[3]}
          width={200}
          height={200}
          isInView={isInView}
          alt="Imagen de Alberto Blanco 4"
        />
      </ul>
    </div>
  );
};

export default Gallery;
