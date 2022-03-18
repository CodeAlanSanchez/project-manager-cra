import 'styles/components/_input.scss';

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange: Function;
}

const MyInput: React.FC<Props> = ({
  name,
  placeholder,
  label,
  required,
  onChange,
}: Props) => {
  return (
    <>
      {label ? (
        <label className={`label ${required ? 'required' : ''}`} htmlFor={name}>
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
    </>
  );
};

export default MyInput;
