import React from "react";

const Fanvue = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-foreground"
    >
      <path d="M69.8013 521H258.574V520.341L226.892 482.144V220.033H347.68V204.886H192.57C150.327 204.886 116.664 183.811 116.664 141.663C116.664 100.173 149.667 75.1471 191.909 75.1471H214.351V154.834H284.316L349 60H191.909C141.746 60 101.483 92.27 101.483 141.663V204.886H50V220.033H101.483V482.144L69.8013 520.341V521Z" />
    </svg>
  );
};

export default Fanvue;
