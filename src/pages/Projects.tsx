import { clearProjectsError, getProjects } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import AddButton from 'components/Button/AddButton';
import Dialog from 'components/Dialog';
import Error from 'components/Error';
import ProjectForm from 'components/ProjectForm';
import { Table } from 'components/Table';
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

  const clearErrors = () => {
    dispatch(clearProjectsError());
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
      {showDialog && (
        <Dialog setVisible={setShowDialog}>
          <ProjectForm onSubmit={handleClose} />
        </Dialog>
      )}
      <div className="content">
        {error?.field && <Error error={error} />}
        {loading && <h4>Loading...</h4>}
        {projects.length && (
          <>
            <Table
              view
              title="Projects"
              items={projects.map((p: any) => {
                delete p.members;
                return p;
              })}
            />
            <div className="floatButton">
              <AddButton sm onClick={() => setShowDialog((prev) => !prev)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
