"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiChevronRight, FiInfo } from "react-icons/fi";
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
          animate={{ scale: isHovered ? 1.15 : 1.35 }}
        >
          <Image
            className="object-cover w-full h-full"
            src={data.image}
            width={200}
            height={400}
            alt="Imagen del servicio"
          />
        </motion.div>

        <div className="relative w-full h-full flex flex-col justify-end p-4">
          <div className="flex items-end gap-7">
            <motion.div
              initial={{ opacity: 0, x: -75 }}
              animate={isInView && { opacity: 1, x: 0 }}
            >
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-sm text-white/60">{data.description}</p>
            </motion.div>
            <motion.div initial={{ y: 100 }} animate={isInView && { y: 0 }}>
              <Button variant="default" className="w-10 h-10 p-2 text-white">
                <FiChevronRight size={25} />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Service;
