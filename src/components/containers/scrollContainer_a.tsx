import React, { ReactNode } from 'react';
import '../../styles/containers/scrollContainer_a.css'; // Import the CSS file

interface ScrollContainerProps {
  children: ReactNode;
  height?: string;  // Height of the scroll container (optional)
  width?: string;   // Width of the scroll container (optional)
  scrollDirection?: 'vertical' | 'horizontal' | 'both'; // Scroll direction (optional)
  className?: string; // Additional CSS class (optional)
  padding?: string;  // Padding inside the container (optional)
}
interface OverflowStyle {
    overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible';
    overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
  }
const ReusableScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  height = '400px',         // Default height
  width = '100%',           // Default width
  scrollDirection = 'vertical', // Default scroll direction (vertical)
  className = '',
  padding = '0',            // Default padding
}) => {
  const getOverflowStyle = (): OverflowStyle => {
    switch (scrollDirection) {
      case 'horizontal':
        return { overflowX: 'auto', overflowY: 'hidden' };
      case 'both':
        return { overflowX: 'auto', overflowY: 'auto' };
      default:
        return { overflowY: 'auto', overflowX: 'hidden' };
    }
  };

  return (
    <div
      className={`scroll-container ${className}`}
      style={{
        height,
        width,
        padding,
         ...getOverflowStyle(),// Optional: Customize scrollbar
        scrollbarWidth: 'thin', // Optional: For Firefox
        msOverflowStyle: '-ms-autohiding-scrollbar', // Optional: For IE/Edge
      }}
    >
      {children}
    </div>
  );
};

export default ReusableScrollContainer;
