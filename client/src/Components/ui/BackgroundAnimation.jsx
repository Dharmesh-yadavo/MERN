export const BackgroundAnimation = ({ children }) => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white bg-paper-texture">
      {/* 1. Blurred Gradient Background Elements */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-60 blur-[150px]"
        // Using a custom Tailwind class for a radial/conic gradient
        // or using an arbitrary value utility (bg-[...]) for a complex linear gradient.
      >
        {/* The overall background container for the gradient effect */}
        <div className="absolute top-[-100px] left-[1000px] w-[500px] h-[500px] rounded-full bg-pink-600 opacity-80 animate-fadeIn delay-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[300px] h-[400px] rounded-full bg-orange-500 opacity-80 animate-fadeIn delay-200"></div>
        <div className="absolute right-[-200px] bottom-[-100px] w-[700px] h-[600px] rounded-full bg-cyan-500 opacity-80 animate-fadeIn delay-400"></div>
      </div>
      {/* 2. Main Content Container (z-index ensures it's on top) */}
      <div className="relative z-10 p-4 sm:p-8">{children}</div>
    </div>
  );
};
