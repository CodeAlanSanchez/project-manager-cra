import { Row } from './Row';

interface Props {
  items: any[];
  title?: any;
  view?: boolean;
}

const Table: React.FC<Props> = ({ view, title, items }: Props) => {
  if (items.length === 0) {
    return (
      <>
        {title && <h4 className="tableHeading">{title}</h4>}
        <p style={{ margin: '2.5rem auto', width: 'fit-content' }}>
          No Items Found...
        </p>
      </>
    );
  }
  return (
    <>
      {title && <h1 className="tableHeading">{title}</h1>}
      <div className="table">
        <Row view={view} fields properties={Object.keys(items[0])} />
        {items.map((i) => (
          <Row view={view} key={i.id} properties={i} />
        ))}
      </div>
    </>
  );
};

export default Table;
