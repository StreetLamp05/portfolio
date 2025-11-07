'use client'

import { useState, useEffect } from 'react';

// @ts-ignore
const GlitchText = ({ children, className = ""}) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 100)
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${className}`}>
            <span className="relative z-10">{children}</span>
            {isGlitching && (
            <>
              <span className="absolute top-0 left-0 text-red-500 opacity-70" style={{ transform: 'translate(-2px, -2px)' }}>
                {children}
              </span>
                        <span className="absolute top-0 left-0 text-orange-500 opacity-70" style={{ transform: 'translate(2px, 2px)' }}>
                {children}
              </span>
            </>
            )}

        </div>
    );
}; // GlitchText

export default GlitchText;