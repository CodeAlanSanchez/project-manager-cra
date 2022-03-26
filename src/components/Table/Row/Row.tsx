import Button from 'components/Button/Button';

interface Props {
  properties: any;
  view?: boolean;
}

const Row: React.FC<Props> = ({ properties, view }: Props) => {
  return (
    <div className="row">
      {Object.values(properties).map((p: any) => {
        return (
          <div key={p.id} className="rowItem">
            {p}
          </div>
        );
      })}
      {view && (
        <div className="rowItem">
          <Button link>View&nbsp;{'>'}</Button>
        </div>
      )}
    </div>
  );
};

export default Row;
