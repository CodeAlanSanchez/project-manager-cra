import { signIn, signUp } from 'actions/authActions';
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

  const handleGuest = () => {
    dispatch(signIn({ identifier: 'guest', password: 'guest' }));
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="form"
    >
      <h5 className="heading">Register</h5>
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
      <div className="actions">
        <Button type="submit" styles={{ margin: '20px 0' }} rounded sm>
          Register
        </Button>
        <Button
          onClick={() => handleGuest()}
          styles={{ margin: '20px 0' }}
          type="button"
          rounded
          outline
          sm
        >
          Continue as Guest
        </Button>
      </div>
      <Button
        onClick={() => setRegister(!register)}
        styles={{ width: '250px', textAlign: 'left' }}
        sm
        link
      >
        Already registered? Click here to sign in.
      </Button>
    </form>
  );
};

export default RegisterForm;
