import React from 'react';
import {Container} from "react-bootstrap";
import mealsharingImage from "../../images/mealsharing.jpg";
import githubIcon from "../../images/github.png";
import weatherAppImage from "../../images/weatherApp.jpg";
import githubSearch from "../../images/githubSearch.jpg";
import giphySearch from "../../images/giphySearch.jpg";
import seasonyApp from "../../images/seasonyApp.jpg";
import projectsIcon from "../../images/projectsIcon.png";
import externalLinkIcon from "../../images/externalLinkIcon.png";
import descriptionIcon from "../../images/descriptionIcon.png";
import portfolio2020Image from "../../images/portfolio2020.png";
import Style from "./projects.styles";

export default function Projects() {
  return (
    <Style>
    <Container>
      <h2><img className="projectIcon" src={projectsIcon} alt=""/>MY PROJECTS</h2>
      <div className="project-section">        
        <div className="project-content">
          <h5>Seasony Desktop Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={seasonyApp} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>Node JS</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Storybook</li>
                  <li>Express</li>
                  <li>Knex</li>
                  <li>Heroku</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>MySQL</li>
                  <li>Swagger</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/HackYourFuture-CPH/FP-class11">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a> 
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://fp-class11.herokuapp.com/">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Preview</span> 
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://fp-class11.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Description</span> 
              </a>
            </span>
          </div>
          </div>
          <div className="project-content">
          <h5>Meal Sharing Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={mealsharingImage} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>Node JS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>Heroku</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
               <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
                 <span className="classTooltip">Github</span>
               </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                  <span className="classTooltip">Preview</span>
                </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                  <span className="classTooltip">Description</span>
                </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Weather Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={weatherAppImage} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/weather-App/index.html">
                  <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                  <span className="classTooltip">Preview</span>
                </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                  <span className="classTooltip">Description</span>
                </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Search Github Users</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={githubSearch} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Preview</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Description</span>
              </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Giphy Search</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={giphySearch} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/giphy-App/index.html">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Preview</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Description</span>
              </a>
            </span>
          </div> 
        </div>
        <div className="project-content">
          <h5>Portfolio 2020</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={portfolio2020Image} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/portfolio2020">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a> 
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://amjadiftikhar.netlify.app/">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Preview</span> 
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Description</span> 
              </a>
            </span>
          </div>
          </div>
      </div>      
    </Container>
    </Style>    
  );
}
