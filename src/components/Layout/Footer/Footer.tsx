import 'styles/components/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div>
          <p className="heading">HERE</p>
          <a href="/register" className="link">
            Register
          </a>
          <a href="/login" className="link">
            Login
          </a>
          <a href="/home" className="link">
            Home
          </a>
          <a href="/about-us" className="link">
            About
          </a>
          <a href="/projects" className="link">
            Projects
          </a>
        </div>
        <div>
          <p className="heading">ME</p>
          <a href="https://www.alansanchez.dev" className="link">
            Portfolio
          </a>
          <a href="https://www.github.com/CodeAlanSanchez" className="link">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
