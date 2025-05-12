export default function AnimatedText() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <svg
  width="800"
  height="200"
  viewBox="0 0 800 200"
  className="w-full max-w-3xl"
  aria-label="Animated text that says Rukn Al Haya"
>
  <title>Animated Rukn Al Haya Text</title>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#06b6d4" />
      <stop offset="100%" stopColor="#3b82f6" />
    </linearGradient>
  </defs>

  {[
    "R", "u", "k", "n", "", "A", "l", "H", "a", "y", "a"
  ].map((char, index) => (
    char !== " " && (
      <text
        key={index}
        x={80 + index * 60}
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: `${index * 0.2}s`,
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        {char}
      </text>
    )
  ))}

  <style jsx>{`
    @keyframes drawStroke {
      0% {
        stroke-dashoffset: 500;
        fill-opacity: 0;
      }
      70% {
        fill-opacity: 0;
        stroke-dashoffset: 0;
      }
      100% {
        fill-opacity: 0.3;
        stroke-dashoffset: 0;
      }
    }

    .animated-text {
      animation: drawStroke 2s ease-in-out forwards;
    }
  `}</style>
</svg>
    </div>
  )
}
