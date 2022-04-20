import { getBug, updateBug } from 'actions/bugActions';
import Button from 'components/Button/Button';
import Error from 'components/Error';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateBugForm from './UpdateBugForm';

interface Props {}

const Bug: React.FC<Props> = () => {
  const bug = useAppSelector((state) => state.bugs);
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: '',
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isNaN(Number(id))) {
      dispatch(getBug(parseInt(id!), setLoading));
    }
  }, []);

  useEffect(() => {
    setForm({
      name: bug.name,
      description: bug.description,
      status: bug.status,
    });
  }, [bug]);

  if (isNaN(Number(id))) {
    return <Error error={{ field: 'id', message: 'invalid id' }}></Error>;
  }

  const handleUpdate = () => {
    dispatch(updateBug(bug.id, form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdate();
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div
      className="bug"
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        minHeight: '100vh',
        padding: '10vh 0 0',
      }}
    >
      <h3
        style={{
          textAlign: 'center',
          display: 'inline',
          marginBottom: '3rem',
          fontWeight: 300,
        }}
      >
        Bug
      </h3>
      {/* Ignore class names */}
      <div className="project" style={{ marginInline: 'auto' }}>
        <div className="projectInfo">
          <h6 className="projectName">Name</h6>
          <p className="projectName">{bug.name}</p>
        </div>
        <div className="projectInfo priority">
          <h6 className="projectPriority">Status</h6>
          <p className="projectPriority">{bug.status}</p>
        </div>
        <div className="projectInfo">
          <h6 className="projectDescription">Description</h6>
          <p className="projectDescription">{bug.description}</p>
        </div>
        <div className="projectInfo">
          <h6 className="projectOwner">Id</h6>
          <p className="projectOwner">{bug.id}</p>
        </div>
      </div>
      <UpdateBugForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Bug;
