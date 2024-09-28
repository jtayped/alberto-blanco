import services from "@/constants/services";
import React from "react";
import Service from "./service";

const Services = () => {
  return (
    <div className="px-width">
      <h2 className="text-xl font-semibold">Services</h2>
      <ul className="grid gap-5 mt-4">
        {services.map((s) => (
          <li key={s.title}>
            <Service data={s} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
