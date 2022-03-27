import Button from 'components/Button/Button';

interface Props {
  properties: any;
  view?: boolean;
  fields?: boolean;
}

const Row: React.FC<Props> = ({ fields, properties, view }: Props) => {
  return (
    <div className={`${fields && 'fields'} row`}>
      {Object.values(properties).map((p: any) => {
        return (
          <div key={p} className="rowItem">
            <p>{p}</p>
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
