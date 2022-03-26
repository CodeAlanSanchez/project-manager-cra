import Button from 'components/Button/Button';
import MyInput from 'components/Input';
import { FormEvent, useState } from 'react';

interface Props {
  title: string;
  keys: Array<any>;
  onSubmit: Function;
}

const MyForm: React.FC<Props> = ({ title, keys, onSubmit }: Props) => {
  const [form, setForm] = useState({
    ...keys,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form className="myForm" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="heading">{title}</h5>
        {keys.map((k) => (
          <MyInput
            key={k}
            name={k}
            label={k}
            placeholder={k}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, [`${k}`]: e.target.value })
            }
          ></MyInput>
        ))}
        <Button type="submit" styles={{ margin: '0 0 2rem' }} rounded sm>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MyForm;
