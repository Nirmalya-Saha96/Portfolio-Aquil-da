import React, { useEffect } from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import HttpIcon from '@material-ui/icons/Http';
import Particle from '../Components/Particle';
import { init } from 'ityped';
import { Wave1 } from '../data/examples.js';


function HomePage() {

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
      	init(myElement, { showCursor: false, strings: ['The Co-founder & CDO @Admisure', 'Public Relations & Outreach Programs Manager', 'Content Writer', 'Sales & Marketing Intern' ] });
    },[]);
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h4 className='text'> <Wave1 /> </h4>
                <h3>Hi, I'm <span id='myElement'></span></h3>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/mdaquil/" className="icon i-youtube">
                        <LinkedIcon />
                    </a>
                    <a href="https://twitter.com/Aquiluzzaman" className="icon i-github">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.facebook.com/mdaquiluzzaman/" className="icon i-youtube">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/akeel_zama/" className="icon i-github">
                        <InstagramIcon />
                    </a>
                  </div>
                <div className='icons'>
                    <a href="https://www.crunchbase.com/person/md-aquiluzzaman-ansari" className="icon i-youtube">
                        <HttpIcon />
                    </a>
                    <a href="https://angel.co/u/md-aquiluzzaman-ansari" className="icon i-github">
                        <HttpIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;




        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
