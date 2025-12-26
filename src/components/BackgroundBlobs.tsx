const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Animated Blobs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
};

export default BackgroundBlobs;
