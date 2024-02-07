import React from "react";
import {MDBIcon} from 'mdb-react-ui-kit'


const socialMedias =[
   {
    name: 'Github',
    url: 'https://github.com/clcoder2425',
    icon: faGithub,
    color: '#f09b'
   },
   {
    name: 'Tweeter',
    url: 'https://twitter.com/Carmen_SanDieg1',
    icon: faTweeter,
    color: '#f099'
   },
   {
    name: 'Linkedin',
    url: 'www.linkedin.com/in/carmen-luisa-jimenez-b78b3813',
    icon: faLinkedin,
    color: '#f08c'
   } 
]
function Footer(){
    return(
        
            <div style={{ fontSize: '2rem' }}>
              {socialMedias.map(media => (
                <div key={media.name}>
                  <MDBIcon
                    className='ms-1 '
                    fab
                    icon={media.icon}
                    style={{ background: media.color }}
                    fixed
                    iconType='brand'
                  />{' '}
                  {media.name}
                </div>
              ))}
            </div>
          );
        }

       
       
        
  

export default Footer;