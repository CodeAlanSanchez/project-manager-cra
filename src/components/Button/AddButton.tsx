import { MouseEventHandler } from 'react';

import 'styles/components/_buttons.scss';

interface Props {
  onClick?: MouseEventHandler;
  classes?: string;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
}

const AddButton: React.FC<Props> = ({
  onClick,
  classes,
  sm,
  lg,
  xl,
}: Props) => {
  return (
    <button className={`btn primary add ${sm && 'sm'} ${lg && 'lg'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
      </svg>
    </button>
  );
};

export default AddButton;
