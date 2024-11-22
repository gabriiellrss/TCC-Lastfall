
const VideoComponent = () => {
  return (
    <div className="bg-black position-relative pt-5 w-100 h-50">
      <video
        loop
        muted
        autoPlay
        className="d-block w-100"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%) , linear-gradient(to bottom, transparent 0%, black 30%)',
          maskImage: 'linear-gradient(to top, transparent 0%, black 30%) , linear-gradient(to bottom, transparent 0%, black 30%)',
          WebkitMaskComposite: 'destination-in',
          maskComposite: 'intersect',
        }}
      >
        <source src="./src/assets/Night City 8 Bit Live Wallpaper.mp4" type="video/mp4" />
      </video>

      {/* O código comentado do fundo pode ser ativado descomentando a próxima div */}
      {/* 
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, transparent, rgba(0,0,0,0.5), black)',
          pointerEvents: 'none', // permite clicar no vídeo sem interferência
        }}
      ></div>
      */}
    </div>
  );
};

export default VideoComponent;
