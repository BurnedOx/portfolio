import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Container from './container/Container';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

function Landing(props) {
  const aboutRef = React.createRef();
  const servicesRef = React.createRef();
  const projectsRef = React.createRef();
  const contactRef = React.createRef();

  const goto = (name) => {
    switch (name) {
      case "About":
        aboutRef.current.scrollIntoView();
        break;
      case "Services":
        servicesRef.current.scrollIntoView();
        break;
      case "Projects":
        projectsRef.current.scrollIntoView();
        break;
      case "Contact":
        contactRef.current.scrollIntoView();
        break;
      default:
        return;
    };
  };

  return (
    <div>
      <Header goTo={goto} />
      <Banner />
      <Container>
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Container>
    </div>
  );
}

export default Landing;
