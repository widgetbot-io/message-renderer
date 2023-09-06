import { createRef, useEffect } from "react";
import lottie from "lottie-web";
import React from "react";

interface Props {
  data: string;
  width: number;
  height: number;
}

function Lottie({ data, width, height }: Props) {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      animationData: JSON.parse(data),
      renderer: "canvas",
    });
  }, []);

  return <div style={{ width, height }} ref={ref} />;
}

export default Lottie;
