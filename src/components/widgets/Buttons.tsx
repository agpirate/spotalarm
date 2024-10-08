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

    <div>
        <button onClick={onClick} className={`${styles.button} ${styles[primary ?? '']}`} disabled={disablebk}>
      {children} 
    </button>
    </div>
  );
};

export default Button;
