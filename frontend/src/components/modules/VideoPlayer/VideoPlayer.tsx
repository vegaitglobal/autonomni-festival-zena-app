// components/VideoPlayer.tsx

import { HeroVideoTypes } from '@/types/components/HeroVideo';
import React from 'react';

interface HeroVideoProps {
	data: HeroVideoTypes;
}

export const VideoPlayer = ({ data }: HeroVideoProps) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  };

  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };

  console.log('data: ' + data.url)

  return (
    <div style={containerStyle}>
      <iframe
        src={data.url}
        style={iframeStyle}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-presentation"
      ></iframe>
    </div>
  );
};