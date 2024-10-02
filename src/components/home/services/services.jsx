import services from "@/constants/services";
import React from "react";
import Service from "./service";

const Services = () => {
  return (
    <div className="px-width">
      <div className="max-w-md">
        <h2 className="text-xl md:text-3xl font-semibold">Servicios</h2>
        <p className="text-sm md:text-md text-muted-foreground md:mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut unde,
          officia vitae soluta voluptate tenetur?
        </p>
      </div>
      <ul className="grid md:grid-cols-2 gap-3 mt-4 md:mt-6">
        {services.map((s, i) => (
          <li key={i}>
            <Service data={s} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
