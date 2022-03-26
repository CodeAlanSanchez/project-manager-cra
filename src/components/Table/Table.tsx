import 'styles/components/_table.scss';
import { Row } from './Row';

interface Props {
  items: Array<any>;
}

const Table: React.FC<Props> = ({ items }: Props) => {
  return (
    <div className="table">
      {items.length === 0 && <h6>No Items Found...</h6>}
      <div className="spacer" style={{ margin: '25px 0' }} />
      {items.map((i) => (
        <Row properties={{ ...i }} />
      ))}
    </div>
  );
};

export default Table;
