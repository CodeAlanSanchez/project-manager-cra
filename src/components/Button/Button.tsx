import { MouseEventHandler, ReactNode } from 'react';

import 'styles/components/_buttons.scss';

interface Props {
  onClick?: MouseEventHandler;
  classes?: string;
  styles?: React.CSSProperties;
  rounded?: boolean;
  link?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  children?: ReactNode;
  outline?: boolean;
  danger?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({
  onClick,
  classes,
  rounded,
  link,
  sm,
  lg,
  xl,
  styles,
  children,
  outline,
  danger,
  type,
}: Props) => {
  return (
    <button
      className={`btn primary white ${sm && 'sm'} ${lg && 'lg'} ${xl && 'xl'} ${
        classes && classes
      } ${rounded && 'rounded'} ${link && 'link'} ${outline && 'outline'} ${
        danger && 'danger'
      }`}
      type={type}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
