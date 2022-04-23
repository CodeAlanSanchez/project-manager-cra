const About: React.FC = () => {
  return (
    <div className="about">
      <div className="info">
        <p>
          Hello, <br />
          <br /> this is a project managing web application where you can keep
          track of your projects. You can add bugs and invite members to your
          project.
        </p>
        <div
          style={{
            margin: '5rem auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '10rem',
          }}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG40.png&f=1&nofb=1"
            alt="Github logo"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CodeAlanSanchez/project-manager-cra"
          >
            Github
          </a>
        </div>
        <hr />
        <h3 className="title">Technologies Used</h3>
      </div>
      <div className="techs">
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1"
            alt="React logo"
          />
          <h3 className="techTitle">React</h3>
        </div>
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Ftypescript-1174965.png&f=1&nofb=1"
            alt="TypeScript logo"
          />
          <h3 className="techTitle">TypeScript</h3>
        </div>
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fnodejs-icon-logo-png-transparent.png&f=1&nofb=1"
            alt="NodeJs logo"
          />
          <h3 className="techTitle">NodeJs</h3>
        </div>
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.IEgGsRwougUKXE26RKJVagHaHo%26pid%3DApi&f=1"
            alt="PostgreSQL logo"
          />
          <h3 className="techTitle">PostgreSQL</h3>
        </div>
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jqueryscript.net%2Fimages%2Fcollective%2Fsass-svg.png&f=1&nofb=1"
            alt="SCSS logo"
          />
          <h3 className="techTitle">SCSS</h3>
        </div>
        <div className="tech">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1"
            alt="Redux logo"
          />
          <h3 className="techTitle">Redux</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
