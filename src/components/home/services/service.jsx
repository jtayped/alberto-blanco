import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiChevronRight, FiInfo } from "react-icons/fi";

const Service = ({ data }) => {
  return (
    <div className="relative w-full h-56 rounded overflow-hidden text-background">
      <Image
        src={data.image}
        width={200}
        height={400}
        className="object-cover absolute w-full h-full -z-10 brightness-50"
      />
      <div className="w-full h-full flex flex-col justify-between text-background p-4">
        <div className="flex items-center gap-2 text-xs text-background/50">
          {data.tag && (
            <>
              <FiInfo />
              <p>{data.tag}</p>
            </>
          )}
        </div>

        <div className="flex items-end gap-7">
          <div>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-sm text-muted-foreground">{data.description}</p>
          </div>
          <Button variant="default" className="w-10 h-10 p-2">
            <FiChevronRight size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
