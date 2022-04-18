import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './Login';
import RegisterForm from './Register';

const AuthForm: React.FC = () => {
  const [register, setRegister] = useState(true);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  if (location?.hash === "#login" || location?.hash == "#login=") {
    return register ? (
      <LoginForm
        register={register}
        setRegister={setRegister}
        visible={visible}
        setVisible={setVisible}
      />
    ) : (
      <RegisterForm
        register={register}
        setRegister={setRegister}
        visible={visible}
        setVisible={setVisible}
      />
    );
  }

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
