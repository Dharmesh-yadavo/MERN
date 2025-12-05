export default function SpinningBG() {
  return (
    <div className="relative w-full h-full y-20">
      {/* Blur wrapper */}
      <div
        className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          blur-[1000px]
        "
      >
        {/* Mask container */}
        <div
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            scale-[0.7]
            rounded-full overflow-hidden 
            w-[100vw] min-w-[1000px] h-[100vh]
          "
        >
          {/* Spinning gradient */}
          <div
            className="
              absolute top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2
              w-[100vw] h-[100vw]
              animate-spinGradient
              [background:conic-gradient(from_0deg,#737373,#fda5feb3,#525252)]
            "
          ></div>
        </div>
      </div>
    </div>
  );
}
