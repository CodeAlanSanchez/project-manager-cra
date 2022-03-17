import 'styles/components/_error.scss';
import { ErrorResponse } from 'types/error';

interface Props {
  error: ErrorResponse;
}

const Error: React.FC<Props> = ({ error }: Props) => {
  return (
    <div className="error">
      <h6>{error.field} error</h6>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
