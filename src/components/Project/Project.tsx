interface Props {
  project: any;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  return (
    <div className="project">
      <h4>{project.name}</h4>
      <h6>{project.status}</h6>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
