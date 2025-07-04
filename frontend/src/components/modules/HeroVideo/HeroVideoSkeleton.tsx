export const HeroVideoSkeleton = ({ aspectRatio = '16/9' }: { aspectRatio?: string }) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingBottom: `calc(100% / (${aspectRatio}))`,
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
        `}
      </style>
    </div>
  );
};