import gallery from "@/constants/gallery";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-width">
      <h2 className="text-xl font-semibold">Gallery</h2>
      <ul className="grid gap-3 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid grid-rows-2 gap-3">
            <div>
              <Image
                src={gallery[0]}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
            <div>
              <Image
                src={gallery[1]}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
          </div>
          <div>
            <Image
              src={gallery[2]}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded shadow"
            />
          </div>
        </div>
        <div>
          <Image
            src={gallery[3]}
            width={200}
            height={200}
            className="w-full h-full object-cover rounded shadow"
          />
        </div>
      </ul>
    </div>
  );
};

export default Gallery;
