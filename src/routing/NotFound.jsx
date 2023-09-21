import React, { useEffect, useState } from 'react'
import "./style/not-found.css";
import img from "../assets/images/ghost-img.png";
import { Button } from '@mui/material';

const NotFound = ({history}) => {
    const [hovered, setHovered] = useState(false);
    const goBackHome = () => {
        history.push("/");
        
      };
  return (
    <main className="not-found">
            <section className="nf">
                <div className="nf__container">
                    <div className="nf__data">
                        <span className="nf__subtitle">Error 404</span>
                        <h1 className="nf__title">Hey Buddy</h1>
                        <p className="nf__description">
                            We can't seem to find the page <br/> you are looking for.
                        </p>
                        <a onClick={goBackHome} className="nf__button">
                            Go Home
                        </a>
                    </div>

                    <div className="nf__img">
                        <img src={img} alt="" />
                        <div className="nf__shadow"></div>
                    </div>
                </div>

                <footer className="nf__footer">
                    <span>(+212) 654 213 548</span>
                    <span>|</span>
                    <span>info@AiAutomationAgency.com</span>
                </footer>
            </section>
        </main>
  )
}

export default NotFound