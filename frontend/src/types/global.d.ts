export {};

declare global {
	interface Window {
		onPlayerStateChange: (event: YT.OnStateChangeEvent) => void;
		onYouTubeIframeAPIReady: () => void;
		YT: typeof YT;
	}
}
