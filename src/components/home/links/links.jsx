import links from "@/constants/links";
import React from "react";
import Link from "./link";

const Links = () => {
  return (
    <div className="px-width">
      <ul className="grid md:grid-cols-2 gap-3">
        {links.map((l, i) => (
          <li key={l.text}>
            <Link data={l} idx={i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
