import 'styles/pages/_home.scss';
import Button from 'components/Button/Button';

const Home: React.FC = () => {
  return (
    <div className={`home`}>
      {/* Hero */}
      <section className="hero">
        <div className="description">
          <h1 className="title">#1 Project Manager</h1>
          <h5>The first for developers!</h5>
          <a href="/account">
            <Button rounded>Start Now</Button>
          </a>
        </div>
        <div className="imageContainer">
          <img src="/collaboration.png" alt="collaboration" />
        </div>
      </section>
      <hr />
      {/* Features */}
      <section className="features">
        <h2>Feature</h2>
        <div className="items">
          <div className="item">
            <h5>Track Bugs</h5>
            <p>
              Create, assign, complete. <br />
              It&apos;s as simple as that!
            </p>
          </div>
          <div className="item">
            <h5>Set Goals</h5>
            <p>
              Add deadlines, create events, <br />
              and finish on time!
            </p>
          </div>
          <div className="item">
            <h5>Finish</h5>
            <p>
              Finish current tasks then <br />
              update everyone.
              <br />
            </p>
          </div>
        </div>
      </section>
      <hr />
      {/* Goals */}
      <section className="goal">
        <h2>Focus</h2>
        <p>
          Don&apos;t worry about managing your project. Focus on getting work
          done. Sign up and start now!
        </p>
      </section>
    </div>
  );
};

export default Home;
