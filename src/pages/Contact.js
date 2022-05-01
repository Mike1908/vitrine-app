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
            <div className='infos-cv'>

                <div>
                    <h3>Mike Useni Sefu</h3>
                    <p>
                        Je suis Programmeur web full stack, diplôme de l’université de Montréal en 2021. 
                    </p>
                </div><br />
                <div>
                    <h3>Languages</h3>
                    <p>
                        Java, Javascript, HTML, CSS, XML, Python, SQL, Php, C. 
                    </p>
                </div><br />
                
                <div>
                    <h3>Frameworks</h3>
                    <p>
                        React.js, React.Natif, Javafx, Bootstrap, SCSS, Firebase, Mongodb, SceneBuilder
                        , wordpress.
                    </p>
                </div>

            </div>
            <div className="contact-infos">

                <div className="address">
                    <div className="content">
                        <h4>Adresse</h4>
                        <CopyToClipboard text="1508-7705 boulevard de l'acadie, Montreal, QC H3N2W1" className="hover">
                            <p style={{cursor: "pointer"}} 
                            className="clipboard"
                            onClick={() => {
                                alert('Telephone copie !');
                            }}>
                                1508-7705 boulevard<br/> de l'acadie, Montreal
                            </p>
                        </CopyToClipboard>
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
            <BottomButtons left={"/vitrine-app/project-5"} pageName={"Contact"}></BottomButtons>  
        </div>
    </main>
        
    );
};

export default Contact;