import { getProjects } from 'actions/projectActions';
import { Project } from 'components/Project';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import 'styles/pages/_projects.scss';

const Projects: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div className="projects">
      {projects.map((p: any) => (
        <Project key={p.id} project={p} />
      ))}
    </div>
  );
};

export default Projects;
