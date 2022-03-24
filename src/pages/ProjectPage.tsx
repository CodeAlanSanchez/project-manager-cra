import { getProject } from 'actions/projectActions';
import AuthForm from 'components/AuthForm';
import Error from 'components/Error';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const ProjectPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const project = useAppSelector((state) => state.projects[0]);
  const error = useAppSelector((state) => state.projectsError);

  useEffect(() => {
    dispatch(getProject(parseInt(id!), setLoading));
  }, [dispatch]);

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
    <div className="projectPage">
      {error?.field && <Error error={error} />}
      {project && (
        <>
          <h1>{project.name}</h1>
          <h1>{project.description}</h1>
          <h1>{project.owner}</h1>
          <h1>{project.status}</h1>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
