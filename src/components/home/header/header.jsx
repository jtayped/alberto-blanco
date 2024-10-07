import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-width flex items-end">
      <div className="h-52 md:h-64 aspect-phone">
        <motion.img
          className="object-cover w-full h-full shadow-sm brightness-75 dark:brightness-[60%]"
          src="/gallery/1.webp"
          layoutId="main-img"
          alt="Alberto Blanco"
        />
      </div>
      <motion.article
        className="-ml-8 pb-4 drop-shadow-sm"
        initial={{ x: -35, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold">Alberto Blanco</h1>
        <p className="font-semibold mt-1.5 text-sm md:text-lg">
          Adult male performer
        </p>
        {/* Further Description
          <p className="text-sm md:text-md text-muted-foreground mt-0.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            sed?
          </p>
        */}
        <Button size="sm" className="mt-1" asChild>
          <Link href="mailto:contacttodoit1@gmail.com">Contact me</Link>
        </Button>
      </motion.article>
    </div>
  );
};

export default Header;
