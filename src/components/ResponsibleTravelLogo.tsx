import React from 'react';

interface ResponsibleTravelLogoProps {
  className?: string;
  color?: string;
}

export const ResponsibleTravelLogo: React.FC<ResponsibleTravelLogoProps> = ({
  className = "h-14 w-auto",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 310 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Responsible Travel Logo"
    >
      {/* 5 Tree / Mountain Triangles Icon on top left */}
      <g transform="translate(2, 4)">
        {/* Top row: 2 Triangles */}
        <path d="M 12 2 L 20 18 L 4 18 Z" />
        <path d="M 28 2 L 36 18 L 20 18 Z" />
        
        {/* Bottom row: 3 Triangles */}
        <path d="M 4 20 L 12 36 L -4 36 Z" transform="translate(4,0)" />
        <path d="M 20 20 L 28 36 L 12 36 Z" transform="translate(4,0)" />
        <path d="M 36 20 L 44 36 L 28 36 Z" transform="translate(4,0)" />
      </g>

      {/* Top text: RESPONSIBLE */}
      <text
        x="62"
        y="30"
        fill={color}
        fontSize="28"
        fontWeight="800"
        letterSpacing="3.5"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      >
        RESPONSIBLE
      </text>

      {/* Bottom text: TRAVEL - Large handwritten brush style */}
      <text
        x="0"
        y="95"
        fill={color}
        fontSize="74"
        fontWeight="900"
        letterSpacing="3.5"
        fontFamily="'Playfair Display', Georgia, serif"
      >
        TRAVEL
      </text>
    </svg>
  );
};
