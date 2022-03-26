import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';

interface Props {
  project: any;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  const [priority, setPriority] = useState(['', '']);

  useEffect(() => {
    if (project.status === 1) {
      setPriority(['low', 'On Track']);
    } else if (project.status === 2) {
      setPriority(['medium', '']);
    } else if (project.status === 3) {
      setPriority(['high', 'Behind Schedule']);
    }
  }, []);

  return (
    <div className="project">
      <div className="projectInfo">
        <h6 className="projectName">Name</h6>
        <p className="projectName">{project.name}</p>
      </div>
      <div className="projectInfo priority">
        <h6 className="projectPriority">Priority</h6>
        <p className={`${priority[0]} projectPriority`}>{priority[1]}</p>
      </div>
      <div className="projectInfo">
        <h6 className="projectDescription">Description</h6>
        <p className="projectDescription">{project.description}</p>
      </div>
      <div className="projectInfo">
        <h6 className="projectOwner">Owner</h6>
        <p className="projectOwner">{project.description}</p>
      </div>
      <div className="projectInfo view">
        <a href={`/projects/${project.id}`}>
          <Button link>
            View&nbsp;{'>'}
            {/* <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
              </svg>
            </div> */}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Project;
