import { motion } from "framer-motion";

export default function FixedBackgroundSection({ imageUrl, children, darken = 0.3 }) {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="fixed-bg h-screen w-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0
        }}
      ></div>
      <div 
        className="relative z-10"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${darken})`
        }}
      >
        {children}
      </div>
    </div>
  );
}