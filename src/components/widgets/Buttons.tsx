// src/components/Button.tsx
import React from 'react';
import styles from '../../styles/widgets/Buttons.css';

interface ButtonProps {
  onClick: () => void; //value must
  children?: React.ReactNode;
  
  primary?:string; 

  label?: string; //?,if value,
  disabled?: boolean;

}
const disablebk = false;
const Button: React.FC<ButtonProps> = ({ onClick, children,primary }) => {
  return (

    <div> {primary}
        <button onClick={onClick} className={styles.btn} disabled={disablebk}>
      {children} 
    </button>
    </div>
  );
};

export default Button;
