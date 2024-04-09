import React, { useState} from 'react';
import './AboutSection.scss';
import angular from '../../assets/icons/Angular-Light.svg'
import bitBucket from '../../assets/icons/BitBucket-Light.svg'
import bootstrap from '../../assets/icons/Bootstrap.svg'
import css from '../../assets/icons/CSS.svg'
import cypress from '../../assets/icons/Cypress-Light.svg'
import docker from '../../assets/icons/Docker.svg'
import github from '../../assets/icons/Github-Dark.svg'
import html from '../../assets/icons/Htmx-Light.svg'
import instagram from '../../assets/icons/Instagram.svg'
import javascript from '../../assets/icons/JavaScript.svg'
import linkedIn from '../../assets/icons/LinkedIn.svg'
import nodeJs from '../../assets/icons/NodeJS-Dark.svg'
import npm from '../../assets/icons/Npm-Dark.svg'
import postman from '../../assets/icons/Postman.svg'
import sass from '../../assets/icons/Sass.svg'
import react from '../../assets/icons/React-Dark.svg'
import { Link } from 'react-router-dom';


type Skill = { image: string; description: string; };

const quadSword = require('../../assets/gifs/general-grievous.webp');
const myImage = require('../../assets/images/myImage.jpg')
const skills: Skill[] = [
    {image: angular, description:"angular"},
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
];
const links = [
    {image: linkedIn, description: "linkedIn", href:"https://www.linkedin.com/in/robert-rudnicki-a565011a2/", className: "linked-in"},
    {image: instagram, description: 'instagram', href:"https://www.instagram.com/rrrudnicki/", className: 'instagram'}
]
const skills1 = (skills.slice(0, skills.length/2) as Skill[])
const skills2 = (skills.slice(skills.length/2 ) as Skill[])

const AboutSection: React.FC = () => {
    const [generalKenobi, setGeneralKenobi] = useState(false)
    const handleGeneralKenobi = () => {
        setGeneralKenobi(!generalKenobi)
        setTimeout(()=>{
            setGeneralKenobi(false);
        }, 2100)
    }
  return (
    <section id='about' className="about-section">
        { generalKenobi ?
         <div className='gif-container'>
            <img src={quadSword} alt="General Grievous gif" className='gif' />
         </div> : 
         <></> }
        <div className="about-content row">
            <div className='skills-items-1'>
       
            </div>
            <div className='info-container'>
                <div>             
                    {skills1.map(skill =>{
                        return (
                        <img 
                        key={skill.description}
                        className='skills-list-item'
                        src={skill.image}
                        alt={skill.description}
                        style={{ width: '60px', height: '60px' }}
                        />)
                    })}
                </div>
                <div className="description-container">
                    <h2 onClick={handleGeneralKenobi} onKeyDown={handleGeneralKenobi} style={{cursor: 'pointer'}} className="section-title">Hello there!</h2>
                    <div className="description">
                    Hey there, I'm Robert, a frontend developer based in Poland. I'm all about diving into the world of Angular and React frameworks, crafting sleek interfaces that are as beautiful as they are intuitive.
                    <br /><br />
                    When I'm not neck-deep in code, you'll find me out exploring the great outdoors, shooting hoops on the basketball court, honing my martial arts skills, or immersing myself in the latest video game adventures. Balancing work with play keeps me inspired and ready to tackle new challenges head-on.
                    <br />
                    <div className="connect">Let's chat about how I can inject some fresh ideas and creativity into your next project!</div>
                    </div>
                    <p className="find-me">
                        You can also find me there 
                        {links.map(link => {
                            return <Link to={link.href} target='_blank'>
                                <img src={link.image} alt={link.description} style={{width:'40px', height: '40px', margin: '15px'}} className={link.className} />
                            </Link>
                        })}
                    </p>
                </div>
                <div>
                    <div>             
                    {skills2.map(skill =>{
                        return (
                        <img 
                        key={skill.description}
                        className='skills-list-item'
                        src={skill.image}
                        alt={skill.description}
                        style={{ width: '60px', height: '60px' }}
                        />)
                    })}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default AboutSection;
