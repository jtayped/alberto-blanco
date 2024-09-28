import React from "react";

const Link = ({ data }) => {
  return (
    <div className="relative flex items-center gap-2 p-4 text-sm border pl-5 rounded bg-black/5">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-primary/90 rounded-full" />
      {data.icon}
      <p>{data.text}</p>{" "}
      {data.secondaryText && (
        <>
          · <p className="text-muted-foreground">{data.secondaryText}</p>
        </>
      )}
    </div>
  );
};

export default Link;
