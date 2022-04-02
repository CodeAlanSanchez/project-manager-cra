import { getProjects } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import AddButton from 'components/Button/AddButton';
import Dialog from 'components/Dialog';
import Error from 'components/Error';
import ProjectForm from 'components/ProjectForm';
<<<<<<< HEAD
import ProjectsList from 'components/ProjectsList';
=======
import ProjectsList from 'components/Projects';
>>>>>>> dbcb4ac71ae67473f7e499edaff206fb79e58525
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import 'styles/pages/_projects.scss';

const Projects: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const projects = useAppSelector((state) => state.projects);

  const error = useAppSelector((state) => state.projectsError);
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProjects(setLoading));
  }, [dispatch, auth]);

  const handleClose = () => {
    setShowDialog(false);
  };

  if (error?.field === 'authentication' && !auth.email) {
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
      {showDialog && (
        <Dialog setVisible={setShowDialog}>
          <ProjectForm onSubmit={handleClose} />
        </Dialog>
      )}
      {loading ? (
        <h2 style={{ fontWeight: 300, margin: '0 auto', textAlign: 'center' }}>
          Loading...
        </h2>
      ) : (
        <ProjectsList projects={projects} />
      )}
      <div className="floatButton">
        <AddButton sm onClick={() => setShowDialog((prev) => !prev)} />
      </div>
    </div>
  );
};

export default Projects;
