import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { buildYoutubeURL } from '../services/utils';

type Props = {
    videoId: string,
}

function Player({videoId}: Props) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
      }
    const openInNewTab = () => {
        window.open(buildYoutubeURL(videoId))
    }
  return (
    <YouTube 
        videoId={videoId}
        opts={{
            height: '480',
            width: '720',
            playerVars: {
                autoplay: 1
            }
        }}
        onReady={onPlayerReady}
        onError={openInNewTab}
    />
  )
}

export default Player