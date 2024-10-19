import React, { ReactNode } from 'react';
import '../../styles/containers/flexContainer_a.css'; // Import the CSS file

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column'; // Flex direction (optional)
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; // Flex wrapping behavior (optional)
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'; // Justify content (optional)
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch'; // Align items (optional)
  gap?: string;  // Gap between items (optional)
  className?: string; // Additional CSS class (optional)
}

const ReusableFlex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  wrap = 'wrap',
  justify = 'flex-start',
  align = 'stretch',
  gap = '1rem',

  // custome style_class add through it....
  className = '',
}) => {
  return (
    <div
      className={`flex-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default ReusableFlex;
