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
  const users = project.members.map((m: any) => m.user);

  const handleSubmit = () => {
    dispatch(createBug(project.id, form));
  };

  return (
    <section className="projectPage">
      <div className="projectThing">
        <div className="projectContent">
          <div className="actions">
            <Button onClick={() => setShowBug(true)} link>
              Bugs
            </Button>
            <Button
              onClick={() => {
                setShowBug(false);
              }}
              link
            >
              Members
            </Button>
          </div>
          {showBug ? (
            <Table title="Bugs" items={project.bugs} />
          ) : (
            <Table title="Members" items={users} />
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
        <Button
          styles={{ margin: '8rem auto' }}
          onClick={() => setVisible((prev) => !prev)}
          rounded
          lg
        >
          Create Bug
        </Button>
      </div>
    </section>
  );
};

export default FullProject;
