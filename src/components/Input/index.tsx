import 'styles/components/_input.scss';

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  onChange: Function;
}

const MyInput: React.FC<Props> = ({
  name,
  placeholder,
  label,
  onChange,
}: Props) => {
  return (
    <div>
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        className="input"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default MyInput;
