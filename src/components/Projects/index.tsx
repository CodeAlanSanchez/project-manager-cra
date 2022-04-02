import { Table } from 'components/Table';

interface Props {
  projects: any[];
}

const ProjectsList: React.FC<Props> = ({ projects }: Props) => {
  return (
    <div className="content">
      {projects.length > 0 && (
        <Table
          view
          title="Projects"
          items={projects.map((p: any) => {
            delete p.members;
            return p;
          })}
        />
      )}
    </div>
  );
};

export default ProjectsList;
