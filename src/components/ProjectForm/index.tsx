import { createProject } from 'actions/projectActions';
import Button from 'components/Button/Button';
import MyInput from 'components/Input';
import { useAppDispatch } from 'hooks';
import { FormEvent, useState } from 'react';

interface Props {
  onSubmit: Function;
}

const ProjectForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createProject(form));
    onSubmit();
  };

  return (
    <div className="dialog">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="form"
      >
        <h5 className="heading">Create Project</h5>
        <MyInput
          name="name"
          label="Name"
          placeholder="Name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <MyInput
          name="description"
          label="Description"
          placeholder="Description"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <div className="actions">
          <Button type="submit" styles={{ margin: '0 0 20px' }} rounded sm>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
