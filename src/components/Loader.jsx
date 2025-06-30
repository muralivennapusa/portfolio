import React, { useEffect } from 'react';
import './loader.css';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="loader">
      <svg> {/* Your SVG animation */} </svg>
    </div>
  );
}
