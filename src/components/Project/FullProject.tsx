import { createBug, getBugs } from 'actions/bugActions';
import { sendInvite } from 'actions/inviteActions';
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
  const bugKeys = { name: '', description: '' };
  const inviteKeys = { usernameId: -1 };
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
      dispatch(sendInvite(project.id, inviteForm.usernameId));
    }
  };

  useEffect(() => {
    dispatch(getBugs(project.id, setLoading));
  }, [dispatch, project.id]);

  return (
    <section className="projectPage">
      <div className="projectThing">
        <h1
          style={{ margin: '5rem auto', width: 'fit-content', fontWeight: 300 }}
        >
          Project
        </h1>
        <div className="projectInfo">
          <div className="infoItem projectName">
            <p>Name</p>
            <h5>{project.name}</h5>
          </div>
          <div className="infoItem projectDescription">
            <p>Description</p>
            <h5>{project.description}</h5>
          </div>
          <div className="infoItem projectId">
            <p>Id</p>
            <h5>{project.id}</h5>
          </div>
          <div className="infoItem projectStatus">
            <p>Status</p>
            <h5>{project.status}</h5>
          </div>
        </div>
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
              <Table title="Bugs" items={bugs} view sublink="bug" />
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
