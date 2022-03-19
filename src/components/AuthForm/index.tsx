import { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';

const AuthForm: React.FC = () => {
  const [register, setRegister] = useState(true);
  const [visible, setVisible] = useState(false);
  return register ? (
    <RegisterForm
      register={register}
      setRegister={setRegister}
      visible={visible}
      setVisible={setVisible}
    />
  ) : (
    <LoginForm
      register={register}
      setRegister={setRegister}
      visible={visible}
      setVisible={setVisible}
    />
  );
};

export default AuthForm;
