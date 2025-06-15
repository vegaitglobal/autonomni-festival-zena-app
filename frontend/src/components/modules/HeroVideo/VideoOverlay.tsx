interface VideoOverlayProps {
    isPlaying: boolean;
}

export const VideoOverlay = ({ isPlaying }: VideoOverlayProps) => {
    return (
        <div
            className={`hero-video__overlay ${
                isPlaying ? 'hero-video__overlay--playing' : ''
            }`}
        >
            <button
                className="hero-video__play-button"
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
    )
}