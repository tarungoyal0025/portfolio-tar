import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './CSS/Skills.css';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Thoriq AS - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i className="devicon-cplusplus-plain colored" title="C++"></i>
              <i className="devicon-c-plain colored" title="C"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tailwindcss-plain colored"
                title="Tailwind"
              ></i>

              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-express-original-wordmark colored"
                title="Express JS"
              ></i>
              <i
                className="devicon-materialui-plain colored"
                title="Material UI"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">

              <i
                class="devicon-git-plain colored"
                title="Git"
              ></i>
              <i
                class="devicon-github-original colored"
                title="Git Hub"
              ></i>
              <i
                class="devicon-vscode-plain colored"
                title="Vs Code"
              ></i>
              <i
                class="devicon-nodejs-plain-wordmark colored"
                title="Netlify"
              ></i>

             
              
              
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
            <i
                className="devicon-mysql-plain-wordmark colored"
                title="MySQL"
              ></i>
              <i
                className="devicon-mongodb-plain-wordmark colored"
                title="Mongodb"
              ></i>
             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
