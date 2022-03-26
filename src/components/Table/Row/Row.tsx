import Button from 'components/Button/Button';

interface Props {
  properties: Array<any>;
  view?: boolean;
}

const Row: React.FC<Props> = ({ properties, view }: Props) => {
  return (
    <div className="row">
      {properties.map((p) => (
        <div className="rowItem">{p}</div>
      ))}
      {view && (
        <div className="rowItem">
          <Button link>View&nbsp;{'>'}</Button>
        </div>
      )}
    </div>
  );
};

export default Row;
