import { getProjects } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import Error from 'components/Error';
import { Project } from 'components/Project';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import 'styles/pages/_projects.scss';

const Projects: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);
  const [loading, setLoading] = useState(true);
  const error = useAppSelector((state) => state.projectsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects(setLoading));
  }, [dispatch]);

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
      {loading ? (
        <div>Loading...</div>
      ) : projects.length > 0 ? (
        projects.map((p: any) => <Project key={p.id} project={p} />)
      ) : (
        <div>You have no projects, create one to get started!</div>
      )}
    </div>
  );
};

export default Projects;
