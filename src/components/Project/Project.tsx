import 'styles/components/_project.scss';

interface Props {
  project: any;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  return (
    <div className="project">
      <div className="projectInfo">
        <h6 className="projectName">Name</h6>
        <p className="projectName">{project.name}</p>
      </div>
      <div className="projectInfo">
        <h6 className="projectStatus">Status</h6>
        <p className="projectStatus">{project.status}</p>
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
