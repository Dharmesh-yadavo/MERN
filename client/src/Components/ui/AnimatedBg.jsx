export default function AnimatedBg({ children }) {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Background Image */}
      <div
        className="
          absolute inset-0 bg-cover bg-center opacity-90 
          
        "
        style={{
          backgroundImage: "url('/images/gray-bg.webp')",
        }}
      />
      {/* {/* Overlay Tint (optional, like Marrow) */}
      <div className="absolute animate-halfCircleUp  inset-0 bg-black/40"></div>

      {/* Foreground content */}
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
