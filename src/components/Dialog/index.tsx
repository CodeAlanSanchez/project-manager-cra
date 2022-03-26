import Button from 'components/Button/Button';
import { ReactNode, useEffect, useRef } from 'react';
import 'styles/components/_dialog.scss';

interface Props {
  children?: ReactNode;
  setVisible: Function;
}

const MyDialog: React.FC<Props> = ({ children, setVisible }: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    if (dialogRef.current) {
      dialogRef.current.focus();
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <div className="dialog" ref={dialogRef}>
      <div className="children">{children}</div>
      <Button
        styles={{
          position: 'fixed',
          // margin: '0 0 0 min(40%, 40rem)',
          top: '10rem',
          left: 'min(40%, 60rem)',
          width: '7.5rem',
          height: '7.5rem',
          background: '#00000020',
          color: '#ffffff',
        }}
        classes="close"
        onClick={handleClose}
        rounded
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -10 480 480">
          <path
            style={{ fill: '#ffffff' }}
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default MyDialog;
