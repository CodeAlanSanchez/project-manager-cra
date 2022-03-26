import 'styles/components/_table.scss';
import { Row } from './Row';

interface Props {
  items: Array<any>;
}

const Table: React.FC<Props> = ({ items }: Props) => {
  return (
    <div className="table">
      {items.map((i) => (
        <Row properties={{ ...i }} />
      ))}
    </div>
  );
};

export default Table;
