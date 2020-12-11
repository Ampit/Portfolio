import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

import node from '../../images/node.png';
import js from '../../images/js1.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <div className="wrap">
                  <div className="wrap__cube">
                    <div className="cube cube__front">
                      <img className="cube__img" src={redux} alt="front" />
                    </div>
                    <div className="cube cube__right">
                      <img className="cube__img" src={js} alt="right" />
                    </div>
                    <div className="cube cube__left">
                      <img className="cube__img" src={node} alt="left" />
                    </div>
                    <div className="cube cube__back">
                      <img className="cube__img" src={react} alt="back" />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                {paragraphTwo && '<p className="about-wrapper__info-text">'}
                {paragraphTwo}
                {paragraphTwo && '</p>'}
                {paragraphThree && '<p className="about-wrapper__info-text">'}
                {paragraphThree}
                {paragraphThree && '</p>'}
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
