"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiChevronRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Service = ({ data }) => {
  const [isHovered, setHovered] = useState(false);

  const container = useRef(null);
  const isInView = useInView(container, { amount: "all", once: true });

  return (
    <Link href={data.href} aria-label={`Enlace a "${data.title}"`}>
      <motion.div
        ref={container}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative w-full h-56 overflow-hidden text-white bg-gradient-to-bl from-transparent to-black/80 to-90% rounded"
      >
        <motion.div
          className="absolute w-full h-full -z-10"
          animate={{ scale: isHovered ? 1.15 : 1.25 }}
        >
          <Image
            className="object-cover w-full h-full"
            src={data.image}
            width={200}
            height={400}
            alt="Imagen del servicio"
          />
        </motion.div>

        <div className="relative w-full h-full flex justify-between items-end gap-10 p-4">
          <div className="h-full flex flex-col justify-between max-w-sm">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={isInView && { y: 0, opacity: 1 }}
              className="text-lg font-extrabold"
            >
              {data.title}
            </motion.h3>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={isInView && { y: 0, opacity: 1 }}
              className="text-sm text-white/80"
            >
              {data.description}
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 100 }}
            animate={isInView && { y: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button variant="default" className="w-10 h-10 p-2 text-white">
              <FiChevronRight size={25} />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Service;
