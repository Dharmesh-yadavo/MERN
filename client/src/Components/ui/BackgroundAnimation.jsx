export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Pink Blob */}
      <div className="blob absolute top-[-100px] left-[1000px] w-[600px] h-[600px] bg-pink-600 animate-spinGradient"></div>

      {/* Teal Blob */}
      <div className="blob absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-600 animate-spinGradient "></div>

      {/* Orange Blob */}
      <div className="blob absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-orange-600 animate-spinGradient "></div>
    </div>
  );
};
