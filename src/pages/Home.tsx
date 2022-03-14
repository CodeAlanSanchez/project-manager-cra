import 'styles/pages/_home.scss';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const Home: React.FC = () => {
  return (
    <div className={`home`}>
      <div className="hero">
        <h1 className="title">#1 Project Manager</h1>
        <h5>The first for developers!</h5>
        <Link to={'/register'}>
          <Button rounded>Start Now</Button>
        </Link>
      </div>
      <div className="features"></div>
      <div className="goal"></div>
    </div>
  );
};

export default Home;
