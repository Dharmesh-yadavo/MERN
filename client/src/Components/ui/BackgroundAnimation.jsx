export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Pink Blob */}
      <div className="blob absolute top-[-200px] right-[150px] w-[500px] h-[400px] bg-pink-400 "></div>

      {/* Teal Blob */}
      <div className="blob absolute bottom-[-100px] right-[300px] w-[450px] h-[450px] bg-orange-500 animation-delay-4000  "></div>

      {/* Orange Blob */}
      <div className="blob absolute right-[-150px] bottom-[200px] w-[300px] h-[300px] bg-teal-500 animation-delay-2000 "></div>
    </div>
  );
};
