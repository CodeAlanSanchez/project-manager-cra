import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  onClick: MouseEventHandler;
  classes: string;
  styles: React.CSSProperties;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  onClick,
  classes,
  styles,
  children,
}: Props) => {
  return (
    <button className={`btn ${classes}`} style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
