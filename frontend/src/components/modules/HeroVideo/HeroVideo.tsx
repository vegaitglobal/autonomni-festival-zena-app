import { useState, useRef, Suspense } from 'react';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { VideoOverlay } from './VideoOverlay';
import './HeroVideo.scss';
import React from 'react';
import { HeroVideoSkeleton } from './HeroVideoSkeleton';

interface HeroVideoProps {
	data: HeroVideoComponent;
}

export const HeroVideo = ({ data }: HeroVideoProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	function getYouTubeVideoId(url: string): string | null {
		try {
			const urlObj = new URL(url);
			const hostname = urlObj.hostname.replace('www.', '').replace('m.', '');

			if (hostname === 'youtube.com') {
				if (urlObj.pathname === '/watch') {
					return urlObj.searchParams.get('v');
				}
				const pathMatch = urlObj.pathname.match(/^\/(embed|shorts)\/([a-zA-Z0-9_-]{11})/);
				if (pathMatch) {
					return pathMatch[2];
				}
			} else if (hostname === 'youtu.be') {
				const pathMatch = urlObj.pathname.match(/^\/([a-zA-Z0-9_-]{11})/);
				if (pathMatch) {
					return pathMatch[1];
				}
			}

			return null;

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			return null;
		}
	}

	if (data.url && !data.video) {
		const tag = document.createElement('script');
		tag.id = 'iframe-hero-video';
		tag.src = 'https://www.youtube.com/iframe_api';
		const [firstScriptTag] = document?.getElementsByTagName('script');
		firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

		window.onPlayerStateChange = (event) => {
			if (event.data === 0) {
				handleVideoEnded();
			}
		};

		window.onYouTubeIframeAPIReady = () => {
			// @ts-expect-error YT is defined by the YouTube API script
			new window.YT.Player('youtube', {
				width: 1280,
				height: 720,
				videoId: getYouTubeVideoId(data.url),
				playerVars: {
					rel: 0,
					controls: 0,
					modestbranding: 1,
					frameborder: 0,
				},
				events: {
					onStateChange: window.onPlayerStateChange,
				},
			});
		};
	}

	const togglePlayIFrame = () => {
		const element = document.getElementById('youtube');
		const func = isPlaying ? 'pauseVideo' : 'playVideo';

		(element as HTMLIFrameElement)?.contentWindow?.postMessage(
			`{"event":"command","func":"${func}","args":""}`, '*'
		);

		setIsPlaying(!isPlaying);
	};

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVideoClick = () => {
		togglePlay();
	};

	const handleVideoEnded = () => {
		setIsPlaying(false);
	};

  return (
	<Suspense fallback={<HeroVideoSkeleton />}>
		<div className="hero-video">
			<div className="hero-video__container">
				{ data.video &&
					<div onClick={handleVideoClick}>
						<video
							ref={videoRef}
							className="hero-video__video"
							src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${data.video.url}`}
							onEnded={handleVideoEnded}
							preload="metadata"
							playsInline
						>
							Vaš browser ne podržava video element.
						</video>
						<VideoOverlay isPlaying={isPlaying}/>
					</div>
				}
				{ data.url && !data.video &&
					<div onClick={togglePlayIFrame}>
						<div id="youtube" className="hero-video__video"/>
						<VideoOverlay isPlaying={isPlaying}/>
					</div>
				}
			</div>
		</div>
	</Suspense>
  );
};
