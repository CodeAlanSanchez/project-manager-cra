import { signIn } from 'actions/authActions';
import Button from 'components/Button/Button';
import MyInput from 'components/Input';
import { useAppDispatch } from 'hooks';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  register: Boolean;
  setRegister: Function;
  visible: Boolean;
  setVisible: Function;
}

const LoginForm: React.FC<Props> = ({
  register,
  setRegister,
  visible,
  setVisible,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
    navigate(0);
  };

  const handleGuest = () => {
    dispatch(signIn({ identifier: 'guest', password: 'guest' }));
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="form"
    >
      <h5 className="heading">Log In</h5>
      <MyInput
        name="identifier"
        label="Email or username"
        required
        placeholder="Email or username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, identifier: e.target.value })
        }
      />
      <Button
        onClick={() => setVisible((prev: Boolean) => !prev)}
        type="button"
        styles={{ marginBottom: '10px' }}
        link
      >
        {visible ? 'Hide' : 'Show'} password
      </Button>
      <MyInput
        name="username"
        label="Password"
        type={visible ? 'text' : 'password'}
        required
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <div className="actions">
        <Button type="submit" styles={{ margin: '0 0 20px' }} rounded sm>
          Log In
        </Button>
        <Button
          onClick={() => handleGuest()}
          styles={{ margin: '0 0 20px' }}
          type="button"
          rounded
          outline
          sm
        >
          Continue as Guest
        </Button>
        <Button
          onClick={() => setRegister(!register)}
          styles={{ width: '250px', textAlign: 'left' }}
          sm
          link
        >
          Don't have an account? Click here to register.
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
