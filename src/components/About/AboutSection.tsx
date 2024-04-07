import React, {useEffect, useState} from 'react';
import './AboutSection.scss';
import angular from '../../assets/icons/Angular-Light.svg'
import bitBucket from '../../assets/icons/BitBucket-Light.svg'
import bootstrap from '../../assets/icons/Bootstrap.svg'
import css from '../../assets/icons/CSS.svg'
import cypress from '../../assets/icons/Cypress-Light.svg'
import docker from '../../assets/icons/Docker.svg'
import github from '../../assets/icons/Github-Dark.svg'
import html from '../../assets/icons/Htmx-Light.svg'
import javascript from '../../assets/icons/JavaScript.svg'
import linkedIn from '../../assets/icons/LinkedIn.svg'
import nodeJs from '../../assets/icons/NodeJS-Dark.svg'
import npm from '../../assets/icons/Npm-Dark.svg'
import postman from '../../assets/icons/Postman.svg'
import sass from '../../assets/icons/Sass.svg'
import react from '../../assets/icons/React-Dark.svg'



const quadSword = require('../../assets/gifs/general-grievous.webp');
const myImage = require('../../assets/images/myImage.jpg')
const skills = [
    {image: angular, desciption:"angular"},
    {image: bitBucket , description: "bitbucket"},
    {image: bootstrap, description: "bootstrap"},
    {image: css, description: "css"},
    {image: cypress, description: "cypress"},
    {image: docker, description: "docker"},
    {image: github, description: "github"},
    {image: html, description: "html"},
    {image: javascript, description: "javascript"},
    {image: nodeJs, description: "nodeJs"},
    {image: npm, description: "node package manager"},
    {image: postman, description: "postman"},
    {image: sass, description: "sass"},
    {image: react, description: "react"},
]
const AboutSection: React.FC = () => {
    const [generalKenobi, setGeneralKenobi] = useState(false)
    const handleGeneralKenobi = () => {
        setGeneralKenobi(!generalKenobi)
        setTimeout(()=>{
            setGeneralKenobi(false);
        }, 2100)
    }
    useEffect(()=> {            
        console.log(generalKenobi)
    }, [generalKenobi])
  return (
    <section className="about-section">
        { generalKenobi ?
         <div className='gif-container'>
            <img src={quadSword} alt="General Grievous gif" className='gif' />
         </div> : 
         <></> }
        <div className="about-content row">
            <div className='info-container'>
                <h2 onClick={handleGeneralKenobi} onKeyDown={handleGeneralKenobi} className="section-title">Hello there!</h2>
                <p className="description">
                I'm Robert, a frontend developer based in Poland, specializing in Angular and React frameworks. With a passion for crafting beautiful and intuitive user interfaces, I thrive on bringing digital experiences to life through code. I am passionate about leveraging technology to solve real-world problems and enhance user experiences. With a strong focus on continuous learning and growth, I am committed to staying updated with emerging trends and technologies in frontend development. Let's connect and discuss how I can contribute to your next project!
                </p>
                <div>
                    <h4> Here are some technologies I worked with</h4>
                <div className='skills-list'>
                    {skills.map(skill =>{
                        return (
                        <img 
                        key={skill.desciption}
                        className='skills-list-item'
                        src={skill.image}
                        alt={skill.desciption}
                        style={{ width: '60px', height: '60px' }}
                        />)
                    })}
                </div>
                </div>
                
                <img className='image-container' src={myImage} alt=" of me" />
            </div>
      </div>
    </section>
  );
};

export default AboutSection;
