import Layout from 'components/Layout/Layout';
import { Home, Projects } from 'pages';
import Account from 'pages/Account';
import ProjectPage from 'pages/ProjectPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
