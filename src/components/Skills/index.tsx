import React from 'react';
import { Container } from './styles';

const Skills: React.FC = () => {
  return (
    <Container>
      <header className="page-header">
        <h1 className="title">Skills</h1>
      </header>

      <section className="skills">
        
        <div className="front-end" id="skill">
          <h1 className="skill-title">Front-end</h1>
          <div className="react" id="skill-id" />
          <div className="angular" id="skill-id" />
          <div className="typescript" id="skill-id" />
          <div className="javascript" id="skill-id" />
        </div>

        <div className="back-end" id="skill">
          <h1 className="skill-title">Back-end</h1>
          <div className="nodejs" id="skill-id" />
          <div className="nestjs" id="skill-id" />
          <div className="typescript" id="skill-id" />
        </div>

        <div className="ui-library" id="skill">
          <h1 className="skill-title">UI Library</h1>
          <div className="ant-design" id="skill-id" />
          <div className="material-ui" id="skill-id" />
          <div className="bootstrap" id="skill-id" />
        </div>

        <div className="custom-ui" id="skill">
          <h1 className="skill-title">Custom UI</h1>
          <div className="styled-components" id="skill-id" />
          <div className="sass" id="skill-id" />
        </div>

        <div className="database" id="skill">
          <h1 className="skill-title">Database</h1>
          <div className="mongodb" id="skill-id" />
          <div className="mysql" id="skill-id" />
          <div className="postgresql" id="skill-id" />
        </div>

        <div className="DevOps" id="skill">
          <h1 className="skill-title">DevOps</h1>
          <div className="docker" id="skill-id" />
        </div>
      </section>
    </Container>
  );
};

export default Skills;
