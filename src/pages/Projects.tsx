import { getProjects } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import Button from 'components/Button/Button';
import Dialog from 'components/Dialog';
import Error from 'components/Error';
import { Project } from 'components/Project';
import ProjectForm from 'components/ProjectForm';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import 'styles/pages/_projects.scss';

const Projects: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const error = useAppSelector((state) => state.projectsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects(setLoading));
  }, [dispatch]);

  const handleClose = () => {
    setShowDialog(false);
  };

  if (error?.field) {
    return (
      <div className="projects">
        <Error error={error} />
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="projects">
      {showDialog ? (
        <Dialog setVisible={setShowDialog}>
          <ProjectForm onSubmit={handleClose} />
        </Dialog>
      ) : (
        ''
      )}
      <div className="content">
        {loading ? (
          <div>Loading...</div>
        ) : projects.length > 0 ? (
          projects.map((p: any) => <Project key={p.id} project={p} />)
        ) : (
          <div>You have no projects, create one to get started!</div>
        )}
        <Button sm rounded onClick={() => setShowDialog((prev) => !prev)}>
          New Project
        </Button>
        <h1>{showDialog ? 'true' : 'false'}</h1>
      </div>
    </div>
  );
};

export default Projects;
