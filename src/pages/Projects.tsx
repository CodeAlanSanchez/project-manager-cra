import { getProjects } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import Error from 'components/Error';
import { Project } from 'components/Project';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import 'styles/pages/_projects.scss';

const Projects: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);
  const error = useAppSelector((state) => state.projectsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (error) {
    return (
      <div className="projects">
        <Error error={error} />
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="projects">
      {projects ? (
        projects.map((p: any) => <Project key={p.id} project={p} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Projects;
