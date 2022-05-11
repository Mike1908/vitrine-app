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
                <NavLink to="/vitrine-app/" exact className="hover" 
                    activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Portfolio

                    <ul className="nav-projects">
                        
                        <NavLink to="/vitrine-app/project-1" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Projet 1</li>
                        </NavLink>
                        <NavLink to="/vitrine-app/project-2" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Projet 2</li>
                        </NavLink>
                        <NavLink to="/vitrine-app/project-3" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Projet 3</li>
                        </NavLink>
                        <NavLink to="/vitrine-app/project-4" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Projet 4</li>
                        </NavLink>
                        <NavLink to="/vitrine-app/project-5" exact className ="hover"
                            activeClassName="nav-active">
                            <li>Projet 5</li>
                        </NavLink>
                    </ul>

                </li>

                <NavLink to="/vitrine-app/contact" exact className="hover" 
                    activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;