import React, { ReactNode } from 'react';
import '../../styles/containers/gridContainer_a.css'; // Import the CSS file

interface GridProps {
  children: ReactNode;
  columnsStyle ?:string,
  columns?: number; // Number of columns (optional)
  gap?: string;     // Gap between grid items (optional)
  minItemWidth?: string;  // Minimum width of grid items (optional)
  className?: string; // Additional CSS class (optional)
}

const ReusableGrid: React.FC<GridProps> = ({
  children,
  columns = 3,          // item_width ; gives as (auto-fit/fill or #'s) with min-item-width(must) or wrap
  columnsStyle = 'auto-fit',// item_width ; gives as (auto-fit/fill or #'s) with min-item-width(must) or wrap
  gap = '1rem',         // Default gap
  minItemWidth = '250px', // Default minimum width of grid items
  className = '',
}) => {
  return (
    <div
      className={`grid-container ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnsStyle}, minmax(${minItemWidth}, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default ReusableGrid;
