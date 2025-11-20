import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CinematicWrapper: React.FC<WrapperProps> = ({ children, className }) => {
  // wrapper is intentionally background-free so global CinematicBG shows through
  return (
    <section className={`relative z-10 ${className || ""}`}>
      {children}
    </section>
  );
};

export default CinematicWrapper;
