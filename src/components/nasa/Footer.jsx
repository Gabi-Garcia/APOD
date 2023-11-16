// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import NavLink from 'react-router-dom'
import './Footer.css'

 const Footer = () => {
  return (
    <> 
    
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Gabi-Garcia"  target="_blank" rel="noreferrer" >
            <div className="imgFooter">
              <img src="/github.png" alt="Github-img" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-garcia-ab029b210/" target="_blank" rel="noreferrer" >
            <div className="imgFooter">
              <img src="/linkedin.png" alt="Linkedin-img" />
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:gabriel.garcia.development@gmail.com">
            <div className="imgFooter">
              <img src="/email.png" alt="email-img" />
            </div>
          </a>
        </li>      
      </ul>
      <p>©️Creado por Gabi-Garcia</p>
    </footer>
    
    </>
  )
}

export default Footer
