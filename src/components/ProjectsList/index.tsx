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
      {projects.length === 0 && <Table title="Projects" items={[]}></Table>}
    </div>
  );
};

export default ProjectsList;
