import { useEffect, useState } from 'react';
import 'styles/components/_project.scss';

interface Props {
  project: any;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (project.status === 1) {
      setPriority('low');
    } else if (project.status === 2) {
      setPriority('medium');
    } else if (project.status === 3) {
      setPriority('high');
    }
  }, []);

  return (
    <div className="project">
      <div className="projectInfo">
        <h6 className="projectName">Name</h6>
        <p className="projectName">{project.name}</p>
      </div>
      <div className="projectInfo priority" >
        <h6 className="projectPriority">Priority</h6>
        <p className={`${priority} projectPriority`}>{priority}</p>
      </div>
      <div className="projectInfo">
        <h6 className="projectDescription">Description</h6>
        <p className="projectDescription">{project.description}</p>
      </div>
      <div className="projectInfo">
        <h6 className="projectOwner">Owner</h6>
        <p className="projectOwner">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
