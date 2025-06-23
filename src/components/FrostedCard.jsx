export default function FrostedCard({ children, className = "" }) {
  return (
    <div className={`bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-md ${className}`}>
      {children}
    </div>
  );
}
