import 'styles/components/_error.scss';
import ErrorResult from 'types/error';

interface Props {
  error: ErrorResult;
}

const Error: React.FC<Props> = ({ error }: Props) => {
  return (
    <div className="error">
      <p>
        {error.code}: {error.message}
      </p>
    </div>
  );
};

export default Error;
