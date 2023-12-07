import React from 'react'

import Lottie from "lottie-react";
import loadingLottie from "../animation/animation.json";

const Animation = () => {
  return (
        <Lottie animationData={loadingLottie} />
  )
}

export default Animation