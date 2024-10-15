// Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode; // For passing in icon components
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
background-color: ${(props) =>props.variant ? 'var(--primary-color)' : 'var(--secondary-color)'};
color: ${(props) => (props.disabled ? '#c0c0c0' : 'white')};
  padding: 10px 20px;
  background-color: var(--text-color);
    color: var(--background-color);
  border: none;
  border-radius: 5px;
   font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'medium' ? '18px' : '14px'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.variant ? '#3700b3' : '#018786'};
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false
}) => {
  return (
    <StyledButton
    label={label}
    variant={variant}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      size={size}
    >
    {icon && <span className="icon">{icon}</span>}
    {label && <span>{label}</span>}
      {label}
    </StyledButton>
  );
};

export default Button;



/*
// App.tsx
import React from 'react';
import Button from './Button';

const App: React.FC = () => {
  return (
    <div>
      <Button label="Primary Button" primary onClick={() => alert('Primary Button clicked!')}
      />
      <Button label="Secondary Button" onClick={() => alert('Secondary Button clicked!')}
      />
      <Button label="Disabled Button" disabled onClick={() => {}} />
    </div>
  );
};
export default App;
*/