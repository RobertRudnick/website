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


type Skill = { image: string; description: string; href: string;};

const quadSword = require('../../assets/gifs/general-grievous.webp');
const myImage = require('../../assets/images/myImage.jpg')
const skills: Skill[] = [
    {image: angular, description:"angular", href:"https://angular.io"},
    {image: bitBucket , description: "bitbucket",  href:"https://bitbucket.org"},
    {image: bootstrap, description: "bootstrap",  href:"https://getbootstrap.com/docs/4.1/getting-started/introduction/"},
    {image: css, description: "css",  href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
    {image: cypress, description: "cypress",  href:"https://cypress.io"},
    {image: docker, description: "docker",  href:"https://docker.comc"},
    {image: github, description: "github",  href:"https://github.com"},
    {image: html, description: "html",  href:"https://html.com/tags/"},
    {image: javascript, description: "javascript",  href:"https://www.javascript.com/"},
    {image: nodeJs, description: "nodeJs",  href:"https://nodejs.org/en"},
    {image: npm, description: "node package manager",  href:"https://www.npmjs.com"},
    {image: postman, description: "postman",  href:"https://www.postman.com"},
    {image: sass, description: "sass",  href:"https://sass-lang.com"},
    {image: react, description: "react",  href:"https://react.dev"},
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
            <div className='info-container'>
                <div className='skills-container'>             
                    {skills1.map(skill =>{
                        return (
                            <Link to={skill.href} target='_blank'>
                            <img 
                            key={skill.description}
                            className='skills-list-item'
                            src={skill.image}
                            alt={skill.description}
                            style={{ width: '60px', height: '60px' }}
                            />
                        </Link>)
                    })}
                </div>
                <div className="description-container">
                    <h2 onClick={handleGeneralKenobi} onKeyDown={handleGeneralKenobi} style={{cursor: 'pointer'}} className="section-title">Hello there!</h2>
                    <div className="description">
                    Hey there, I'm Robert, a frontend developer based in Poland. I'm all about diving into the world of Angular and React frameworks, crafting sleek interfaces that are as beautiful as they are intuitive.
                    <br /><br />
                    When I'm not neck-deep in code, you'll find me out exploring the great outdoors, shooting hoops on the basketball court, honing my martial arts skills, or immersing myself in the latest video game adventures. Balancing work with play keeps me inspired and ready to tackle new challenges head-on.
                    <br /><br />
                    Let's chat about how I can inject some fresh ideas and creativity into your next project!
                    <br />
                    <p className="find-me">
                        You can also find me there 
                        {links.map(link => {
                            return <Link to={link.href} target='_blank'>
                                <img src={link.image} alt={link.description} style={{width:'40px', height: '40px', margin: '15px'}} className={link.className} />
                            </Link>
                        })}
                    </p>
                    </div>
                </div>
                <div>
                    <div className='skills-container'>             
                    {skills2.map(skill =>{
                        return (
                    <Link to={skill.href} target='_blank'>
                        <img 
                        key={skill.description}
                        className='skills-list-item'
                        src={skill.image}
                        alt={skill.description}
                        style={{ width: '60px', height: '60px' }}
                        />
                    </Link>)
                    })}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default AboutSection;
