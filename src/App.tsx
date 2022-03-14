import Layout from 'components/Layout/Layout';
import { Home } from 'pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" element={<Home />} />
      </Layout>
    </Router>
  );
};

export default App;
