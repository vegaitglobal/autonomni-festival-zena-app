import { useState, useRef } from 'react';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import './HeroVideo.scss';

interface HeroVideoProps {
	data: HeroVideoComponent;
}

export const HeroVideo = ({ data }: HeroVideoProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

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
		<section className="hero-video">
			<div className="hero-video__container">
				<video
					ref={videoRef}
					className="hero-video__video"
					src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${data.video.url}`}
					onClick={handleVideoClick}
					onEnded={handleVideoEnded}
					preload="metadata"
					playsInline
				>
					Vaš browser ne podržava video element.
				</video>

				<div
					className={`hero-video__overlay ${
						isPlaying ? 'hero-video__overlay--playing' : ''
					}`}
				>
					<button
						className="hero-video__play-button"
						onClick={togglePlay}
						aria-label={isPlaying ? 'Pauziraj video' : 'Reprodukuj video'}
					>
						{isPlaying ? (
							<svg
								className="hero-video__icon"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
							</svg>
						) : (
							<svg
								className="hero-video__icon"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M8 5v14l11-7z" />
							</svg>
						)}
					</button>
				</div>
			</div>
		</section>
	);
};
