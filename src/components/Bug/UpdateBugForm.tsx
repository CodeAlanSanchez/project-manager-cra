import Button from 'components/Button/Button';

interface Props {
  form: any;
  setForm: Function;
  handleSubmit: Function;
}

const UpdateBugForm: React.FC<Props> = ({
  form,
  setForm,
  handleSubmit,
}: Props) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <label className={`label`} htmlFor="name">
        Name
      </label>
      <input
        className="input"
        value={form.name}
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <label className={`label`} htmlFor="description">
        Description
      </label>
      <input
        className="input"
        value={form.description}
        type="tel"
        name="description"
        placeholder="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, description: e.target.value })
        }
      />
      <label className={`label`} htmlFor="status">
        Status
      </label>
      <select
        value={form.status}
        className="input"
        name="Status"
        id="status"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="open">Open</option>
        <option value="started">Started</option>
        <option value="closed">Closed</option>
      </select>
      <Button rounded type="submit">
        Update Bug
      </Button>
    </form>
  );
};

export default UpdateBugForm;
