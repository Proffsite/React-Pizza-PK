import React from 'react'

import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
       
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="146" r="126" /> 
    <rect x="0" y="321" rx="0" ry="0" width="280" height="19" /> 
    <rect x="0" y="352" rx="0" ry="0" width="280" height="19" /> 
    <rect x="0" y="383" rx="0" ry="0" width="280" height="19" /> 
    <rect x="0" y="414" rx="0" ry="0" width="280" height="19" />
  </ContentLoader>
  );
    
}

export default LoadingBlock
