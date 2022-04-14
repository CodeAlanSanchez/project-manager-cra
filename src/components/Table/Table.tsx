import { Row } from './Row';

interface Props {
  items: any[];
  title?: any;
  view?: boolean;
  left?: boolean;
  sublink?: string;
}

const Table: React.FC<Props> = ({
  sublink = '',
  left,
  view,
  title,
  items,
}: Props) => {
  if (items.length === 0) {
    return (
      <>
        {title && <h1 className={`tableHeading ${left && 'left'}`}>{title}</h1>}
        <h6
          style={{
            width: '100%',
            marginBottom: '5rem',
            textAlign: left ? 'left' : 'center',
            fontWeight: 400,
          }}
        >
          No Items Found...
        </h6>
      </>
    );
  }
  return (
    <>
      {title && <h1 className={`tableHeading ${left && 'left'}`}>{title}</h1>}
      <div className="table">
        <Row view={view} fields properties={Object.keys(items[0])} />
        {items.map((i) => (
          <Row sublink={sublink} view={view} key={i.id} properties={i} />
        ))}
      </div>
    </>
  );
};

export default Table;
