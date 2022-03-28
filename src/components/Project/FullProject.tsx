import { createBug, getBugs } from 'actions/bugActions';
import Button from 'components/Button/Button';
import MyDialog from 'components/Dialog';
import MyForm from 'components/Form';
import { Table } from 'components/Table';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';

interface Props {
  project: any;
}

const FullProject: React.FC<Props> = ({ project }: Props) => {
  const dispatch = useAppDispatch();
  const bugKeys = { name: '', description: '', status: '' };
  const inviteKeys = { username: '' };
  const bugs = useAppSelector((state) => state.bugs);
  const [bugForm, setBugForm] = useState({
    ...bugKeys,
  });
  const [loading, setLoading] = useState(true);
  const [inviteForm, setInviteForm] = useState({ ...inviteKeys });
  const [showBug, setShowBug] = useState(true);
  const [visible, setVisible] = useState(false);
  const users = project.members.map((m: any) => m.user);

  const handleSubmit = () => {
    if (showBug) {
      dispatch(createBug(project.id, bugForm));
    } else {
      // dispatch(inviteUser(project.id, userForm));
    }
    dispatch(getBugs(project.id, setLoading));
  };

  useEffect(() => {
    dispatch(getBugs(project.id, setLoading));
  }, []);

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
          {loading ? (
            <h4 style={{ margin: '5rem auto', width: 'fit-content' }}>
              Loading...
            </h4>
          ) : showBug ? (
            <>
              <Table title="Bugs" items={bugs} />
            </>
          ) : (
            <Table title="Members" items={users} />
          )}
        </div>
        {visible ? (
          showBug ? (
            <MyDialog setVisible={() => setVisible((prev) => !prev)}>
              <MyForm
                form={bugForm}
                setForm={setBugForm}
                title="Create Bug"
                keys={{ ...bugKeys }}
                onSubmit={handleSubmit}
              />
            </MyDialog>
          ) : (
            <MyDialog setVisible={() => setVisible((prev) => !prev)}>
              <MyForm
                form={inviteForm}
                setForm={setInviteForm}
                title="Invite User"
                keys={{ ...inviteKeys }}
                onSubmit={handleSubmit}
              />
            </MyDialog>
          )
        ) : (
          ''
        )}
        {showBug ? (
          <Button
            styles={{ margin: '8rem auto' }}
            onClick={() => setVisible((prev) => !prev)}
            rounded
            lg
          >
            Create Bug
          </Button>
        ) : (
          <Button
            styles={{ margin: '8rem auto' }}
            onClick={() => setVisible((prev) => !prev)}
            rounded
            lg
          >
            Invite User
          </Button>
        )}
      </div>
    </section>
  );
};

export default FullProject;
