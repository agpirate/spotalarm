import React, { ReactNode } from 'react';
import '../../styles/containers/scrollContainer_flex.css'; // Import the CSS file

interface FlexScrollContainerProps {
  children: ReactNode;
  height?: string;  // Height of the scroll container (optional)
  width?: string;   // Width of the scroll container (optional)
  scrollDirection?: 'vertical' | 'horizontal' | 'both'; // Scroll direction (optional)
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around'; // Flexbox alignment (optional)
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end'; // Flexbox alignment (optional)
  className?: string; // Additional CSS class (optional)
}
interface OverflowStyle {
    overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible';
    overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
  }
const ReusableFlexScrollContainer: React.FC<FlexScrollContainerProps> = ({
  children,
  height = '400px',
  width = '100%',
  scrollDirection = 'vertical',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  className = '',
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
      className={`flex-scroll-container ${className}`}
      style={{
        height,
        width,
        display: 'flex',
        flexDirection: scrollDirection === 'horizontal' ? 'row' : 'column',
        justifyContent,
        alignItems,
        ...getOverflowStyle(),
      }}
    >
      {children}
    </div>
  );
};

export default ReusableFlexScrollContainer;
