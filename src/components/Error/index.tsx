import 'styles/components/_error.scss';

interface Props {
  message: string;
  code?: string;
}

const Error: React.FC<Props> = ({ message, code }: Props) => {
  return (
    <div className="error">
      <p>
        {code}: {message}
      </p>
    </div>
  );
};

export default Error;
