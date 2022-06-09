import React from "react";
import Lottie from "react-lottie";
import DonutBounce from "../lotties/donutBounce.json";

function LottieBox() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DonutBounce,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default LottieBox;
