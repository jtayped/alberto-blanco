import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-width grid grid-cols-5 items-end">
      <div className="h-52 col-span-2">
        <Image
          className="object-cover w-full h-full rounded bg-primary/30 shadow-sm"
          src="/gallery/1.jpg"
          width={200}
          height={400}
        />
      </div>
      <article className="col-span-3 -ml-8 pb-4 drop-shadow">
        <h1 className="text-3xl font-extrabold">John Doe</h1>
        <p className="font-semibold mt-1.5 text-sm">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          sed?
        </p>
        <Button size="sm" className="mt-1">
          Contact me
        </Button>
      </article>
    </div>
  );
};

export default Header;
