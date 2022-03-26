import { createBug } from 'actions/bugActions';
import Button from 'components/Button/Button';
import MyDialog from 'components/Dialog';
import MyForm from 'components/Form';
import { Table } from 'components/Table';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';

interface Props {
  project: any;
}

const FullProject: React.FC<Props> = ({ project }: Props) => {
  const dispatch = useAppDispatch();
  const keys = { name: '', description: '', status: '' };
  const [form, setForm] = useState({
    ...keys,
  });
  const [showBug, setShowBug] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    dispatch(createBug(project.id, form));
  };

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
          <MyDialog setVisible={() => setVisible((prev) => !prev)}>
            <MyForm
            form={form}
              setForm={setForm}
              title="Create Bug"
              keys={{ ...keys }}
              onSubmit={handleSubmit}
            />
          </MyDialog>
        )}
        <Button onClick={() => setVisible((prev) => !prev)} rounded lg>
          Create Bug
        </Button>
      </div>
    </section>
  );
};

export default FullProject;
