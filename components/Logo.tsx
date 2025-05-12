export default function AnimatedText() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <svg
      width="600"
      height="200"
      viewBox="0 0 600 200"
      className="w-full max-w-md"
      aria-label="Animated text that says Al Haya"
    >
      <title>Animated Al Haya Text</title>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <text
        x="80"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "0s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        A
      </text>

      <text
        x="140"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "0.3s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        l
      </text>

      <text
        x="200"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "0.6s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        H
      </text>

      <text
        x="270"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "0.9s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        a
      </text>

      <text
        x="320"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "1.2s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        y
      </text>

      <text
        x="370"
        y="120"
        fontSize="90"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="2"
        className="animated-text"
        style={{
          animationDelay: "1.5s",
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        a
      </text>

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
          animation: drawStroke 3s ease-in-out forwards infinite;
        }
      `}</style>
    </svg>
    </div>
  )
}
