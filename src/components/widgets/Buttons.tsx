// src/components/Button.tsx
import React from 'react';
import styles from '../../styles/widgets/Button.module.css';

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
    <button onClick={onClick} className={styles.btn} disabled={disablebk}>
      {children} {primary}
    </button>
  );
};

export default Button;
