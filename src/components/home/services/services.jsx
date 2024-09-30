import services from "@/constants/services";
import React from "react";
import Service from "./service";

const Services = () => {
  return (
    <div className="px-width">
      <div>
        <h2 className="text-xl font-semibold">Services</h2>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut unde,
          officia vitae soluta voluptate tenetur?
        </p>
      </div>
      <ul className="grid md:grid-cols-2 gap-3 mt-4">
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
