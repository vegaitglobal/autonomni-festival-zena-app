import { useState, useRef, Suspense, useEffect, useCallback } from 'react';
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
	const [isYouTubeReady, setIsYouTubeReady] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const playerRef = useRef<any>(null);
	const containerRef = useRef<HTMLDivElement>(null);

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
		} catch (error) {
			return null;
		}
	}

	const initializeYouTubePlayer = useCallback(() => {
		if (!containerRef.current || !window.YT?.Player || !data.url) return;

		const videoId = getYouTubeVideoId(data.url);
		if (!videoId) return;


		if (playerRef.current?.destroy) {
			playerRef.current.destroy();
		}

		playerRef.current = new window.YT.Player(containerRef.current as HTMLElement, {
			width: 1280,
			height: 720,
			videoId: videoId,
			playerVars: {
				rel: 0,
				controls: 0,
				modestbranding: 1,
			},
			events: {
				onReady: () => {
					setIsYouTubeReady(true);
				},
				onStateChange: (event: any) => {
					if (event.data === 0) {
						setIsPlaying(false);
					}
				},
			},
		});
	}, [data.url]);

	const loadYouTubeAPI = useCallback(() => {
		if (window.YT) {
			initializeYouTubePlayer();
			return;
		}

		if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
			return;
		}

		const script = document.createElement('script');
		script.src = 'https://www.youtube.com/iframe_api';
		script.async = true;

		(window as any).onYouTubeIframeAPIReady = initializeYouTubePlayer;

		document.head.appendChild(script);
	}, [initializeYouTubePlayer]);

	useEffect(() => {
		if (data.url && !data.video) {
			loadYouTubeAPI();
		}

		return () => {
			if (playerRef.current?.destroy) {
				playerRef.current.destroy();
				playerRef.current = null;
			}
		};
	}, [data.url, data.video, loadYouTubeAPI]);

	const toggleYouTubeVideo = () => {
		if (!playerRef.current || !isYouTubeReady) return;

		try {
			if (isPlaying) {
				playerRef.current.pauseVideo();
			} else {
				playerRef.current.playVideo();
			}
			setIsPlaying(!isPlaying);
		} catch (error) {
			console.error('YouTube player error:', error);
		}
	};

	const toggleRegularVideo = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVideoEnded = () => {
		setIsPlaying(false);
	};

	return (
		<Suspense fallback={<HeroVideoSkeleton />}>
			<div className="hero-video">
				<div className="hero-video__container">
					{data.video && (
						<div onClick={toggleRegularVideo}>
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
							<VideoOverlay isPlaying={isPlaying} />
						</div>
					)}
					{data.url && !data.video && (
						<div onClick={toggleYouTubeVideo}>
							<div
								ref={containerRef}
								id="youtube"
								className="hero-video__video"
							/>
							<VideoOverlay isPlaying={isPlaying} />
						</div>
					)}
				</div>
			</div>
		</Suspense>
	);
};
