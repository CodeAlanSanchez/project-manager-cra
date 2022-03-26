import Button from 'components/Button/Button';
import MyInput from 'components/Input';
import React, { FormEvent, useState } from 'react';

interface Props {
  form: any;
  setForm: Function;
  title: string;
  keys: object;
  onSubmit: Function;
}

const MyForm: React.FC<Props> = ({
  form,
  setForm,
  title,
  keys,
  onSubmit,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form className="myForm" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="heading">{title}</h5>
        {Object.keys(keys).map((k: any) => {
          return (
            <MyInput
              key={k}
              name={k}
              label={k}
              placeholder={k}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            ></MyInput>
          );
        })}
        <Button type="submit" styles={{ margin: '0 0 2rem' }} rounded sm>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MyForm;
