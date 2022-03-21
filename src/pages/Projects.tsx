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
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const projects = useAppSelector((state) => state.projects);
  const error = useAppSelector((state) => state.projectsError);

  useEffect(() => {
    dispatch(getProjects(setLoading));
  }, [dispatch]);

  const handleClose = () => {
    setShowDialog(false);
  };

  if (error?.field === 'authentication') {
    return (
      <div className="projects">
        <div className="content">
          <Error error={error} />
          <AuthForm />
        </div>
      </div>
    );
  }

  return (
    <div className="projects">
      {/* {console.log(projects)} */}
      {showDialog ? (
        <Dialog setVisible={setShowDialog}>
          <ProjectForm onSubmit={handleClose} />
        </Dialog>
      ) : (
        ''
      )}
      <div className="content">
        {error?.field && <Error error={error} />}
        {loading && <div>Loading...</div>}

        {projects.length > 0 ? (
          projects.map((p: any) => <Project key={p.id} project={p} />)
        ) : (
          <h5>You have no projects, create one to get started!</h5>
        )}
        {projects.length}
        <Button sm rounded onClick={() => setShowDialog((prev) => !prev)}>
          New Project
        </Button>
      </div>
    </div>
  );
};

export default Projects;
