import React from 'react';
import { NavLink } from 'react-router-dom'

/**
 * 
 * @param {left,right} props de la page precedent
 * @returns  botton du scroll de bas de page
 */
const BottomButtons = (props) => {
    return (
        <div className = "scroll-bottom">
            <div className="sb-main" >

                {props.left && (
                    <NavLink to={props.left} className="left hover">
                        <span>&#10092;</span>
                    </NavLink>
                )}
                <p className="center ">{props.pageName}</p>
                {props.right && (
                    <NavLink to={props.right} className="right hover">
                        <span>&#10093;</span>
                    </NavLink>
                )}

            </div>
        </div>
    );
};

export default BottomButtons;