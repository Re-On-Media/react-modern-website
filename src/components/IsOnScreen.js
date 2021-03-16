import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const IsOnScreen = ({ children }) => {
  const [ref, inView] = useInView();

  return <div ref={ref}>{inView && children}</div>;
};

export default IsOnScreen;
