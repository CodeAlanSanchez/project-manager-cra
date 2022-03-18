import { signUp } from 'actions/authActions';
import Button from 'components/Button/Button';
import MyInput from 'components/Input';
import { useAppDispatch } from 'hooks';
import React, { FormEvent, useState } from 'react';
import 'styles/components/_form.scss';

interface Props {
  register: Boolean;
  setRegister: Function;
  setVisible: Function;
}

const RegisterForm: React.FC<Props> = ({
  register,
  setRegister,
  setVisible,
}: Props) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp(form));
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="form"
    >
      <MyInput
        name="name"
        label="Name"
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <MyInput
        name="email"
        label="Email"
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <MyInput
        name="username"
        label="Username"
        placeholder="Username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, username: e.target.value })
        }
      />
      <MyInput
        name="username"
        label="Password"
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <MyInput
        name="password_confirmation"
        label="Confirm Password"
        placeholder="Confirm Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, password_confirmation: e.target.value })
        }
      />
      <Button type="submit" styles={{ margin: '20px 0' }} rounded sm>
        Register
      </Button>
      <Button
        onClick={() => setRegister(!register)}
        styles={{ maxWidth: '250px', textAlign: 'left' }}
        sm
        link
      >
        Already registered? Click here to sign in.
      </Button>
    </form>
  );
};

export default RegisterForm;
