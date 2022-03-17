import { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';

const AuthForm: React.FC = () => {
  const [register, setRegister] = useState(true);
  const [visible, setVisible] = useState(false);
  return register ? (
    <RegisterForm setRegister={setRegister} setVisible={setVisible} />
  ) : (
    <LoginForm setRegister={setRegister} setVisible={setVisible} />
  );
};

export default AuthForm;
