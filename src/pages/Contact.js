import React from 'react';
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import SocialNetwork from '../components/SocialNetwork'
import BottomButtons from '../components/BottomButtons'

/**
 * 
 * @returns pages de contact
 */
const Contact = () => {
    return (
        <main>
            <div className="contact">
            <Navigation/>
            <Logo></Logo>
            {/** */}
            <div className="contact-infos">

                <div className="address">
                    <div className="content">
                        <h4>Adresse</h4>
                        <p>12 rue du code</p>
                        <p>7705 acadie</p>
                    </div>
                </div>

                <div className="phone">
                    <div className="content">
                        <h4>Telephone</h4>
                        <CopyToClipboard text="5142243712" className="hover">
                            <p style={{cursor: "pointer"}} 
                            className="clipboard"
                            onClick={() => {
                                alert('Telephone copie !');
                            }}>
                                5142243712
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>

                <div className="email">
                    <div className="content">
                        <h4>Email</h4>
                        <CopyToClipboard text="usenimikesefu@gmail.com" 
                        className="hover">
                            <p style={{cursor: "pointer"}} 
                            className="clipboard"
                            onClick={() => {
                                alert('Email copie !');
                            }}>
                                usenimikesefu@gmail.com
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                
                <SocialNetwork></SocialNetwork>
            </div> 
            <BottomButtons left={"/vitrine-app/project-3"}></BottomButtons>  
        </div>
    </main>
        
    );
};

export default Contact;