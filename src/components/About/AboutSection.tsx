import React from 'react';
import './AboutSection.scss';
import codeImage1 from '../../assets/images/4380747.jpg';
// import codeImage2 from './images/code2.jpg';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content" style={{ backgroundImage: `url(${codeImage1})`}}>
        <h2 className="section-title">About Me</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus diam id metus dignissim commodo. Vestibulum fermentum est ut
          viverra ultrices.
        </p>
        <div className="image-grid">
          {/* <img src={codeImage1} sizes='sm' alt="Coding 1" className="code-image" /> */}
          {/* <img src={codeImage2} alt="Coding 2" className="code-image" /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
