import { Row } from './Row';

interface Props {
  items: any[];
  title?: any;
}

const Table: React.FC<Props> = ({ title, items }: Props) => {
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
      {title && <h4 className="tableHeading">{title}</h4>}
      <div className="table">
        <Row fields properties={Object.keys(items[0])} />
        {items.map((i) => {
          return <Row key={i.id} properties={i} />;
        })}
      </div>
    </>
  );
};

export default Table;
