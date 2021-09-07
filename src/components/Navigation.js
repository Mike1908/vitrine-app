import React from 'react';
import {NavLink} from 'react-router-dom'

/**
 * 
 * @returns la liste de navigation
 */
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" 
                    activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Portfolio

                    <ul className="nav-projects">
                        
                        <NavLink to="/project-1" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Project 1</li>
                        </NavLink>
                        <NavLink to="/project-2" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Project 2</li>
                        </NavLink>
                        <NavLink to="/project-3" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Project 3</li>
                        </NavLink>

                    </ul>

                </li>

                <NavLink to="/contact" exact className="hover" 
                    activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;