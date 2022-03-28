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
          <div
            key={p + '__' + Math.random() * 100000000000000}
            className="rowItem"
          >
            <p>{p}</p>
          </div>
        );
      })}
      {view && !fields && (
        <a href={`/projects/${properties.id}`} className="rowItem">
          <Button link>View&nbsp;{'>'}</Button>
        </a>
      )}
      {view && fields && <div></div>}
    </div>
  );
};

export default Row;
