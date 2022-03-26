import Button from 'components/Button/Button';
import MyDialog from 'components/Dialog';
import MyForm from 'components/Form';
import { Table } from 'components/Table';
import { useState } from 'react';

interface Props {
  project: any;
}

const FullProject: React.FC<Props> = ({ project }: Props) => {
  const [showBug, setShowBug] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {};

  return (
    <section className="projectPage">
      <div className="projectThing">
        {/* <div className="projectTabs">
          <ul>
            <li>Issues</li>
            <li>Members</li>
          </ul>
        </div> */}
        <div className="projectContent">
          {showBug ? (
            <Table items={project.bugs} />
          ) : (
            <Table items={project.members} />
          )}
        </div>
        {visible && (
          <MyDialog setVisible={() => setVisible((prev) => !prev)}></MyDialog>
        )}
        <Button onClick={() => setVisible((prev) => !prev)} rounded sm>
          Create Bug
        </Button>
        <MyForm
          title="Create Bug"
          keys={['name', 'description', 'status']}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default FullProject;
