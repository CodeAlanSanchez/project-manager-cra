import { logout } from 'actions/authActions';
import { getInvites } from 'actions/inviteActions';
import Button from 'components/Button/Button';
import { Table } from 'components/Table';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';

const FullAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const invites = useAppSelector((state) => state.invites);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    const shortDate = new Date(auth.createdAt).toLocaleDateString('en-US');
    setDate(shortDate);

    dispatch(getInvites(setLoading));
  }, [auth]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fullAccount">
      <h1 className="accountHeading">Account</h1>
      <div className="accountGrid">
        <div className="email">
          <p className="infoHeading">Email</p>
          <h5 className="info">{auth.email}</h5>
        </div>
        <div className="username">
          <p className="infoHeading">Username</p>
          <h5 className="info">{auth.username}</h5>
        </div>
        <div className="joined">
          <p className="infoHeading">Joined</p>
          <h5 className="info">{date}</h5>
        </div>
      </div>
      <Button rounded onClick={handleLogout}>
        Log Out
      </Button>
      {!loading ? (
        <Table title="Project Invites" items={invites} view />
      ) : (
        <>
          <h4 className="tableHeading">Project Invites</h4>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default FullAccount;