import { me } from 'actions/authActions';
import FullAccount from 'components/Account';
import AuthForm from 'components/AuthForm';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import 'styles/pages/_account.scss';

const Account: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className="account">
      {!auth.email && <AuthForm />} {auth.email && <FullAccount />}
    </div>
  );
};

export default Account;
